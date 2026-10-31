'use client'

import { useEffect, useRef, useState } from 'react'
import { engagements, site } from '@/lib/site'

const options = [...engagements.map((e) => e.title), 'Not sure yet']

/** Simplified contact form: six fields, posts to /api/contact (Resend). */
export default function IntakeForm({ preselect }: { preselect?: string }) {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error' | 'invalid'>('idle')

  useEffect(() => {
    // /contact?engagement=diagnostic|fractional|sprint preselects the dropdown
    const key = preselect ?? new URLSearchParams(window.location.search).get('engagement')
    const match = engagements.find((e) => e.id === key)
    const sel = formRef.current?.elements.namedItem('engagement') as HTMLSelectElement | null
    if (match && sel) sel.value = match.title
  }, [preselect])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    let ok = true
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('[required]').forEach((el) => {
      const bad = !el.value.trim() || (el.type === 'email' && !/^\S+@\S+\.\S+$/.test(el.value))
      el.setAttribute('aria-invalid', bad ? 'true' : 'false')
      if (bad) ok = false
    })
    if (!ok) return setState('invalid')

    const data = Object.fromEntries(new FormData(form).entries())
    if (data._gotcha) return setState('sent')
    setState('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      form.reset()
      setState('sent')
    } catch {
      setState('error')
    }
  }

  return (
    <form ref={formRef} className="form" noValidate onSubmit={onSubmit}>
      <div className="row">
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input id="f-name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input id="f-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="row">
        <div className="field">
          <label htmlFor="f-company">Company</label>
          <input id="f-company" name="company" autoComplete="organization" required />
        </div>
        <div className="field">
          <label htmlFor="f-role">Role <span className="opt">optional</span></label>
          <input id="f-role" name="role" autoComplete="organization-title" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-engagement">Engagement of interest</label>
        <select id="f-engagement" name="engagement" required defaultValue="">
          <option value="">Choose one</option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-msg">Where is growth stuck?</label>
        <textarea id="f-msg" name="message" rows={5} required />
      </div>
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <div className="actions">
        <button className="btn" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p className={`status${state === 'error' || state === 'invalid' ? ' is-error' : ''}`} role="status" aria-live="polite">
          {state === 'sent' && 'Thank you. I’ll reply within one business day.'}
          {state === 'invalid' && 'Please fill in the highlighted fields.'}
          {state === 'error' && (
            <>
              That didn’t go through. Email me at <a href={`mailto:${site.email}`}>{site.email}</a>.
            </>
          )}
        </p>
      </div>
    </form>
  )
}
