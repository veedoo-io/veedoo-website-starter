/** @type {import('tailwindcss').Config} */
module.exports = {
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
  safelist: [
    {
      pattern: /./, // uncomment this before deploying
    },
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
};
