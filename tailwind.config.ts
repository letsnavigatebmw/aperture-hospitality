import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1C1A17',
        parchment: '#F0EDE6',
        'parchment-dark': '#E8E4DB',
        brass: '#B8924A',
        'brass-dim': '#8A6C35',
        muted: '#6B6760',
        rule: '#D4CFC6',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.01em',
        tight: '0.04em',
        normal: '0.12em',
        wide: '0.14em',
        wider: '0.15em',
        widest: '0.18em',
        widest2: '0.22em',
      },
    },
  },
  plugins: [],
}
export default config
