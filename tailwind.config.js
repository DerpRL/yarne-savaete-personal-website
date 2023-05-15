/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        reveal: {
          '0%': { transform: 'translate(0,100%)', opacity: 0 },
          '100%': { transform: 'translate(0,0)', opacity: 1 },
        },
        revealDelay: {
          '0%': { transform: 'translate(0,100%)', opacity: 0 },
          '25%': { transform: 'translate(0,100%)', opacity: 0 },
          '100%': { transform: 'translate(0,0)', opacity: 1 },
        },
      },
      animation: {
        'text-reveal': 'reveal 1s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        'text-reveal-1': 'revealDelay 1.15s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        'text-reveal-2': 'revealDelay 1.3s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        'text-reveal-3': 'revealDelay 1.45s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        'text-reveal-4': 'revealDelay 1.6s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        'text-reveal-5': 'revealDelay 1.75s cubic-bezier(0.77, 0, 0.175, 1) 0s',
        'text-reveal-6': 'revealDelay 1.9s cubic-bezier(0.77, 0, 0.175, 1) 0s',
      },
      colors: {
        'dark-background': '#34353A',
        'orange-accent': '#dfa72e',
        'purple-accent': '#7254dc'
      }
    }
  },
  plugins: [],
}
