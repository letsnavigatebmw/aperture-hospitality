'use client'

import { useEffect, useRef, useState } from 'react'
import { site } from '@/lib/site'

// Each option asks its own question, so the message field matches the path the visitor chose.
const options = [
  { id: 'cmo', label: 'Fractional CMO (marketing)', q: 'What does marketing need to deliver over the next 12 months?', ph: 'Where the brand and demand stand today, the team you have and what isn’t working.' },
  { id: 'cco', label: 'Fractional CCO (sales)', q: 'What does sales need to deliver over the next 12 months?', ph: 'Your targets, channels and team today, and where deals are stalling.' },
  { id: 'diagnostic', label: 'Commercial Diagnostic', q: 'Where has growth stalled?', ph: 'What changed, when it started and what you’ve tried so far.' },
  { id: 'brand', label: 'Brand & Marketing Diagnostic', q: 'Where is the brand not connecting with consumers?', ph: 'Who you’re trying to reach, what you’re hearing from them and what you’ve tried.' },
  { id: 'sprint', label: 'Revenue Sprint', q: 'What’s the one outcome you need, and by when?', ph: 'A pricing reset, a launch, a partnership program or a turnaround plan.' },
  { id: 'unsure', label: 'Not sure yet', q: 'Tell us where things stand.', ph: 'Your business, what you’re trying to achieve and what’s getting in the way.' },
] as const
const fallback = { q: 'What would you like help with?', ph: 'A few lines on your business and what you’re trying to achieve.' }
const alias: Record<string, string> = { fractional: 'cmo' }

/** Simplified contact form: six fields, posts to /api/contact (Resend). */
export default function IntakeForm({ preselect }: { preselect?: string }) {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error' | 'invalid'>('idle')
  const [choice, setChoice] = useState('')
  const current = options.find((o) => o.label === choice) ?? fallback

  useEffect(() => {
    // /contact?engagement=cmo|cco|diagnostic|brand|sprint|unsure preselects the dropdown
    const raw = preselect ?? new URLSearchParams(window.location.search).get('engagement') ?? ''
    const match = options.find((o) => o.id === (alias[raw] ?? raw))
    if (match) setChoice(match.label)
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

    const data: Record<string, FormDataEntryValue> = {
      ...Object.fromEntries(new FormData(form).entries()),
      question: current.q,
      page: window.location.pathname,
    }
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
      setChoice('')
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
        <select id="f-engagement" name="engagement" required value={choice} onChange={(e) => setChoice(e.target.value)}>
          <option value="">Choose one</option>
          {options.map((o) => (
            <option key={o.id}>{o.label}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-msg">{current.q}</label>
        <textarea id="f-msg" name="message" rows={5} placeholder={current.ph} required />
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
