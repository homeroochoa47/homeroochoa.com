/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: 'class',
  theme: {
    objectPosition: {
      'right-5': 'center right 10rem',
      'top-4': 'center top 1rem',
    },
    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'black': '#000000',
      'dark': '#2B2221',
      'light': '#E2DAD4',
      'yellow': '#E0AF27',
    },
    extend: {
      dropShadow: {
        'hero-caption-1': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'in': "in .6s both",
        "in-reverse": "in-reverse .6s both",
      },
    },
    fontFamily: {
      one: ["var(--font-nunito)"],
      two: ["var(--font-hind)"],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
