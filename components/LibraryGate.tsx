'use client'

import { useEffect, useRef, useState } from 'react'
import { site } from '@/lib/site'
import { library, topics, type Session } from '@/lib/library'

type Links = Record<string, { deck: string }>

/**
 * Real estate library: every session is listed with its preview; the deck links come from
 * /api/library only after the visitor completes the form (one form unlocks everything).
 */
export default function LibraryGate() {
  const [links, setLinks] = useState<Links | null>(null)
  const [requested, setRequested] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'error' | 'invalid'>('idle')
  const formRef = useRef<HTMLFormElement>(null)
  const unlockRef = useRef<HTMLElement>(null)

  useEffect(() => {
    fetch('/api/library', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => d?.unlocked && setLinks(d.links))
      .catch(() => {})
  }, [])

  function ask(s?: Session) {
    setRequested(s ? s.title : '')
    unlockRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setTimeout(() => (formRef.current?.elements.namedItem('name') as HTMLInputElement | null)?.focus({ preventScroll: true }), 450)
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    let ok = true
    form.querySelectorAll<HTMLInputElement>('[required]').forEach((el) => {
      const bad = !el.value.trim() || (el.type === 'email' && !/^\S+@\S+\.\S+$/.test(el.value))
      el.setAttribute('aria-invalid', bad ? 'true' : 'false')
      if (bad) ok = false
    })
    if (!ok) return setState('invalid')
    setState('sending')
    try {
      const res = await fetch('/api/library', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form).entries()), session: requested, page: window.location.pathname }),
      })
      const d = await res.json()
      if (!res.ok || !d?.unlocked) throw new Error()
      setLinks(d.links)
      setState('idle')
    } catch {
      setState('error')
    }
  }

  return (
    <>
      <section className="section lib-unlock" id="unlock" ref={unlockRef} aria-labelledby="unlock-h">
        <div className="container lib-unlock__grid">
          <div>
            <span className="eyebrow">{links ? 'Library Unlocked' : 'Free Access'}</span>
            <h2 id="unlock-h" className="h2">
              {links ? (
                <>
                  Every Deck, <em>Open</em>
                </>
              ) : (
                <>
                  One Form. <em>Every</em> Session.
                </>
              )}
            </h2>
            <p className="lede sec-sub">
              {links
                ? 'Thank you. Every deck below is open, and it’ll stay open on this browser.'
                : `Tell us who you are and all ${library.length} decks open. No drip sequence, no sales calls you didn't ask for.`}
            </p>
          </div>
          {links ? (
            <div className="lib-unlock__done">
              <p className="label">What&rsquo;s next</p>
              <p>Running a brokerage, a team or a proptech company and want this built into how your agents work?</p>
              <a className="btn" href="/contact?engagement=diagnostic">
                Talk to Aperture
              </a>
            </div>
          ) : (
            <form ref={formRef} className="form lib-form" noValidate onSubmit={onSubmit}>
              {requested && (
                <p className="lib-form__req">
                  Unlocking <strong>{requested}</strong> and the rest of the library.
                </p>
              )}
              <div className="row">
                <div className="field">
                  <label htmlFor="l-name">Name</label>
                  <input id="l-name" name="name" autoComplete="name" required />
                </div>
                <div className="field">
                  <label htmlFor="l-email">Email</label>
                  <input id="l-email" name="email" type="email" autoComplete="email" required />
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label htmlFor="l-company">Brokerage or company</label>
                  <input id="l-company" name="company" autoComplete="organization" required />
                </div>
                <div className="field">
                  <label htmlFor="l-role">Role <span className="opt">optional</span></label>
                  <input id="l-role" name="role" autoComplete="organization-title" placeholder="Agent, team lead, broker, founder…" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="l-msg">
                  What are you working on? <span className="opt">optional</span>
                </label>
                <input id="l-msg" name="message" placeholder="e.g. building a prospecting system for a 20-agent team" />
              </div>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
              <div className="actions">
                <button className="btn" type="submit" disabled={state === 'sending'}>
                  {state === 'sending' ? 'Unlocking…' : 'Unlock the Library'}
                </button>
                <p className={`status${state === 'error' || state === 'invalid' ? ' is-error' : ''}`} role="status" aria-live="polite">
                  {state === 'invalid' && 'Please fill in the highlighted fields.'}
                  {state === 'error' && (
                    <>
                      That didn&rsquo;t go through. Email <a href={`mailto:${site.email}`}>{site.email}</a> and I&rsquo;ll send the links.
                    </>
                  )}
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="section lib" id="library" aria-labelledby="lib-h">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">The Library</span>
            <h2 id="lib-h" className="h2">
              {library.length} Sessions, <em>Organized</em> by Topic
            </h2>
          </div>
          <nav className="lib-topics" aria-label="Topics">
            {topics.map((t) => (
              <a key={t.id} href={`#t-${t.id}`}>
                {t.title} <span className="num">{library.filter((s) => s.topic === t.id).length}</span>
              </a>
            ))}
          </nav>
          {topics.map((t) => {
            const items = library.filter((s) => s.topic === t.id)
            if (!items.length) return null
            return (
              <div className="lib-topic" id={`t-${t.id}`} key={t.id}>
                <div className="lib-topic__head">
                  <h3 className="h3">{t.title}</h3>
                  <p>{t.blurb}</p>
                </div>
                <ul className="lib-list">
                  {items.map((s) => {
                    const l = links?.[s.id]
                    return (
                      <li className="lib-card" key={s.id}>
                        <div className="lib-card__meta">
                          <span className="label">{s.date}</span>
                          <span className="label">{s.speaker}</span>
                          <span className="label lib-card__fmt">Deck · {s.pages} pages</span>
                        </div>
                        <h4 className="lib-card__t">{s.title}</h4>
                        <p className="lib-card__p">{s.preview}</p>
                        {s.points.length > 0 && (
                          <ul className="lib-card__pts">
                            {s.points.map((p) => (
                              <li key={p}>{p}</li>
                            ))}
                          </ul>
                        )}
                        <div className="lib-card__cta">
                          {l ? (
                            <a className="link" href={l.deck} target="_blank" rel="noopener">
                              View the Deck
                            </a>
                          ) : (
                            <button type="button" className="lib-lock" onClick={() => ask(s)}>
                              <svg viewBox="0 0 16 16" aria-hidden="true">
                                <rect x="3" y="7" width="10" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="1.3" />
                                <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" strokeWidth="1.3" />
                              </svg>
                              Unlock the deck
                            </button>
                          )}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
