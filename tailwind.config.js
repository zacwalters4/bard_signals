/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-background': 'linear-gradient(135deg, rgba(79,35,241,1) 0%, rgba(79,35,241,1) 25%, rgba(255,255,255,1) 50%, rgba(138,109,242,1) 75%, rgba(138,109,242,1) 100%)',
        'gradient-background-2': 'linear-gradient(135deg, rgba(79,35,241,1) 0%, rgba(138,109,242,1) 100%)',
        'gradient-background-3': 'radial-gradient(circle, rgba(138,109,242,1) 0%, rgba(79,35,241,1) 100%)'
      },
    },
  },
  plugins: [],
}