/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-background': 'linear-gradient(50deg, rgba(79,35,241,1) 0%,  rgba(138,109,242,1) 100%)',
        'gradient-background-2': 'linear-gradient(135deg, rgba(138,109,242,1) 0%, rgba(79,35,241,1) 100%)',
        'gradient-background-3': 'linear-gradient(135deg, rgba(138,109,242,.2) 0%, rgba(79,35,241,.2) 100%)',
        'text-gradient': 'linear-gradient(rgba(255, 255, 255, 0.87) 22.5%, rgb(255, 255, 255) 100%)',
        'border-gradient': 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(179,179,179,1) 50%, rgba(0,0,0,1) 100%)',
        'border-gradient-vert': 'linear-gradient(0deg, rgba(0,0,0,1) 20%, rgba(179,179,179,1) 50%, rgba(0,0,0,1) 80%)'
      },
      boxShadow: {
        'landing-page-box-shadow': '0px 0px 1000px 50px rgba(79,35,241,.2)',
      },
      dropShadow: {
        'logo-drop-shadow': '0px 0px 1000px rgba(138,109,242,.5)'
      },
      textShadow: {
        'bard-text-shadow': '-1px -1px 0 #4f23f1, 1px -1px 0 #4f23f1, -1px 1px 0 #4f23f1, 1px 1px 0 #4f23f1'
      },
      keyframes: {
        pulseOut: {
          '0%': { transform: 'scale(1, 1)' },
          '25%': { opacity: '0.2'},
          '50%': { transform: 'scale(1.5)', opacity: '0'},
          '100%': { transform: 'scale(1.5)', opacity: '0'}
        },
        rotateGrad: {
          '0%': { background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '4%': { background: 'linear-gradient(14.4deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '8%': { background: 'linear-gradient(28.8deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '12%': { background: 'linear-gradient(43.2deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '16%': { background: 'linear-gradient(57.6deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '20%': { background: 'linear-gradient(72deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '24%': { background: 'linear-gradient(86.4deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '28%': { background: 'linear-gradient(100.8deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '32%': { background: 'linear-gradient(115.2deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '36%': { background: 'linear-gradient(129.6deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '40%': { background: 'linear-gradient(144deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '44%': { background: 'linear-gradient(158.4deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '48%': { background: 'linear-gradient(172.8deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '52%': { background: 'linear-gradient(187.2deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '56%': { background: 'linear-gradient(201.6deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '60%': { background: 'linear-gradient(216deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '64%': { background: 'linear-gradient(230.4deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '68%': { background: 'linear-gradient(244.8deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '72%': { background: 'linear-gradient(259.2deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '76%': { background: 'linear-gradient(273.6deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '80%': { background: 'linear-gradient(288deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '84%': { background: 'linear-gradient(302.4deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '88%': { background: 'linear-gradient(316.8deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '92%': { background: 'linear-gradient(331.2deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '96%': { background: 'linear-gradient(345.6deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
          '100%': { background: 'linear-gradient(360deg, rgba(0,0,0,1) 0%,  rgba(138,109,242,1) 100%)'},
        },
        transitionProperty: {
          'height': 'height'
      },
      },
      animation: {
        'pulse-out': 'pulseOut 4s ease infinite',
        'rotate-grad': 'rotateGrad 1.5s ease infinite'
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}