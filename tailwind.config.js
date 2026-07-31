/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#14110F',
          light: '#1C1815',
          lighter: '#241F1A',
        },
        opus: {
          orange: '#FF5A1F',
          amber: '#FFB343',
          rust: '#C2410C',
        },
        cream: '#F5EFE6',
        muted: '#9C9187',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'opus-gradient': 'linear-gradient(135deg, #FF5A1F 0%, #FFB343 100%)',
        'opus-radial': 'radial-gradient(circle at 30% 20%, rgba(255,90,31,0.25), transparent 55%)',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(255,90,31,0.45)',
        card: '0 8px 30px -8px rgba(0,0,0,0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(var(--tilt, 0deg))' },
          '50%': { transform: 'translateY(-10px) rotate(var(--tilt, 0deg))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
