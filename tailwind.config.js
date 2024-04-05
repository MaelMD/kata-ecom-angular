
module.exports = {
  purge: ['./src/**/*.{html,ts,scss}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}
