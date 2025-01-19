/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        playwrite: ["Playwrite CO Guides", "cursive"],
        robotoSlab: ["Roboto Slab", "serif"],
        default: ["sans-serif"],
      },
    },
  },
  plugins: [],
};
