import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { NextRequest, NextResponse } from 'next/server'
import { COOKIE, valid } from '@/lib/library-auth'
import { library } from '@/lib/library'

// Streams a library deck to visitors who have unlocked the library. Decks live in
// /content/library (not /public), so there is no direct URL to them.
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const session = library.find((s) => s.id === id)
  if (!session) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  if (!valid(request.cookies.get(COOKIE)?.value)) {
    return NextResponse.redirect(new URL('/real-estate#unlock', request.url))
  }
  const file = await readFile(path.join(process.cwd(), 'content', 'library', `${id}.pdf`))
  return new NextResponse(new Uint8Array(file), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="Aperture - ${session.title.replace(/[^\w &:-]/g, '')}.pdf"`,
      'Cache-Control': 'private, no-store',
      'X-Robots-Tag': 'noindex',
    },
  })
}
