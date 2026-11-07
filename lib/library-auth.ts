import { createHmac, timingSafeEqual } from 'node:crypto'

// Signed access cookie for the real estate library.
export const COOKIE = 'ah_library'
export const MAX_AGE = 60 * 60 * 24 * 180 // 180 days
const secret = () => process.env.LIBRARY_SECRET || process.env.INQUIRY_WEBHOOK_SECRET || 'dev-only-secret'
const sign = (v: string) => createHmac('sha256', secret()).update(v).digest('base64url')

export function issue(email: string) {
  const payload = Buffer.from(`${email}|${Date.now()}`).toString('base64url')
  return `${payload}.${sign(payload)}`
}

export function valid(token?: string) {
  if (!token) return false
  const i = token.lastIndexOf('.')
  if (i < 1) return false
  const a = Buffer.from(sign(token.slice(0, i)))
  const b = Buffer.from(token.slice(i + 1))
  return a.length === b.length && timingSafeEqual(a, b)
}
