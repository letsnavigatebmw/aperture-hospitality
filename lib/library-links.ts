// Server-only: deck links for the real estate library. Imported by /api/library and nowhere else.
// Every deck is served by /api/library/deck/[id], which checks the access cookie, so a forwarded
// link only works for someone who has filled out the form.
import { library } from './library'

export const libraryLinks: Record<string, { deck: string }> = Object.fromEntries(
  library.map((s) => [s.id, { deck: `/api/library/deck/${s.id}` }]),
)
