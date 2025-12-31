module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0b2545',
        slate: {
          100: '#f1f5f9',
          300: '#94a3b8',
          700: '#334155'
        },
        accent: '#1f6feb',
        mustard: '#c9a24a'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      }
    }
  },
  plugins: []
};
