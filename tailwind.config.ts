import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#004D61',
        secondary: '#FF5031',
        tertiary: '#DEE9EA',
        quarternary: '#F8F8F8',
        black: '#444444',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      fontSize: {
        sm: ['0.812rem', { lineHeight: '0.975rem' }],
        '2xl': ['1.562rem', { lineHeight: '1.875rem' }],
      },
      screens: {
        sm: '360',
        md: '720',
      },
    },
  },
  plugins: [],
} satisfies Config
