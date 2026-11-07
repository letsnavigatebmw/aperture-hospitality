// Server-only: deck and recording URLs for the real estate library. Imported by /api/library
// and nowhere else, so the links never ship in the page bundle; visitors get them after the form.
const deck = (id: string) => `https://drive.google.com/file/d/${id}/view`

export const libraryLinks: Record<string, { deck?: string; video?: string }> = {
  'prospecting-reimagined': { deck: deck('1Ph0Pty9RzIIf_fCACKbv5UqbSk-lhtWp'), video: 'https://www.youtube.com/watch?v=0kkzBLjuFBI' },
  'creating-the-foundation': { deck: deck('18iVLGtTtlVNHL2h_y6LFf034oKXN6vqY'), video: 'https://youtu.be/VYsxlnOjg3Q' },
  'property-first-prospecting': { deck: deck('1nG0COslbdvT-Mt-CpzUK5To7bzNNv_gp'), video: 'https://youtu.be/TI36C_oQu94' },
  'from-data-to-dialogue': { deck: deck('1gQv0aij4uHty1hLVdo1Z3qc4F4o_hAca'), video: 'https://youtu.be/PL4rxXZL_xw' },
  'channel-selection': { deck: deck('1kMITmKxwG7jwcP_jeug-MVRTZ6I7Hdf8'), video: 'https://www.youtube.com/watch?v=ys6iuZVtQ7o' },
  'mechanics-of-messaging': { deck: deck('12XuCHYOCI2vM2P8nVdQjSPyM0SM_RpGa'), video: 'https://youtu.be/akIs60tNIuI' },
  'power-of-the-offer': { deck: deck('1MFlQAlTIntXER3oeyPGORAZAQh6Y7AcB'), video: 'https://youtu.be/pkx6ktW1-VU' },
  'offer-playbook': { deck: 'https://docs.google.com/presentation/d/1ZUv_BUHfTYQBlavPE8WySz8xnhiiv8G6AuPBJV4Ne28/view', video: 'https://www.youtube.com/watch?v=zcdOL029NeU' },
  'system-thinking': { deck: deck('1pRYXw5KU4CCkwGlU3TZYQ2lV_5fzNpVf'), video: 'https://youtu.be/Xy3Q5QAlnn4' },
  'q3-session-10': { video: 'https://youtu.be/hUmWe7JoaAA' },
  'tracking-and-optimizing': { video: 'https://www.youtube.com/watch?v=XnvOyvVF2Tc' },
  'cold-call-techniques': { video: 'https://www.youtube.com/watch?v=FY5cOBXeHBw' },
  'networking-sphere': { video: 'https://www.youtube.com/watch?v=5cTBtfEURH4' },
  'circle-prospecting': { deck: deck('1jSwOMAjHI8QiU6Buha74uhZPZdrT1BSy'), video: 'https://www.youtube.com/watch?v=6nK1MytSSKg' },
  'digital-lead-conversion': { video: 'https://www.youtube.com/watch?v=MEPxYzjwKuI' },
  'secret-characteristic': { video: 'https://www.youtube.com/watch?v=uyiLeKQpx3k' },
  'open-houses': { video: 'https://www.youtube.com/watch?v=xyJLI9g0I58' },
  'big-bad-wolf-mailer': { video: 'https://www.youtube.com/watch?v=15JclR_ALDU' },
}
