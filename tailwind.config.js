/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        blue: 'var(--blue)',
        'blue-deep': 'var(--blue-deep)',
        'blue-tint': 'var(--blue-tint)',
        clay: 'var(--clay)',
        'clay-tint': 'var(--clay-tint)',
        care: 'var(--care)',
        'care-tint': 'var(--care-tint)',
        road: 'var(--road)',
        line: 'var(--line)',
      },
      fontFamily: {
        display: ['"Onest Variable"', 'Onest', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        shell: '1180px',
      },
      letterSpacing: {
        eyebrow: '0.18em',
      },
      borderRadius: {
        card: '18px',
      },
      boxShadow: {
        card: '0 1px 0 0 var(--line), 0 18px 40px -28px rgba(21,22,26,0.45)',
        lift: '0 1px 0 0 rgba(47,107,255,0.35), 0 26px 60px -30px rgba(30,63,168,0.55)',
      },
      transitionTimingFunction: {
        soft: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
