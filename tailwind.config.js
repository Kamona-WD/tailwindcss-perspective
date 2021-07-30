module.exports = {
  mode: 'jit',
  purge: ['./examples/**/*.html'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('./dist/tailwindcss-perspective.cjs'),
    // require('@kamona/tailwindcss-perspective'),
  ],
}
