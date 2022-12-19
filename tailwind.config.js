/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.vue',
    './slices/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '',
        primaryVariant: '',
        secondary: '',
        secondaryVariant: '',
        background: '',
        backgroundVariant: '',
        error: '',
      },
      container: {
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1384px',
        },
        padding: {
          DEFAULT: '1rem',
          '2xl': '64px',
        },
      },
    },
  },
  plugins: [],
  safelist: [
    //{pattern: /./, },// uncomment this before deploying
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^text-/,
    },
    {
      pattern: /^font-/,
    },
    {
      pattern: /^max-w-/,
    },
    {
      pattern: /^drop-shadow-/,
    },
    {
      pattern: /^rounded-/,
    },
  ],
};
