/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
         primary : {
            light: "#E3803D",
            DEFAULT: "#E3803D",
            dark: "#E3803D"
         },
         secondary: {
          DEFAULT: "#DBD9D9"
         }
      }
    },
  },
  plugins: [],
}

