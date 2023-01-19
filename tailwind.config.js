/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#1A3724",
        "light-green": "#166527",
        "dark-green": "#596363",
        "extra-dark-green": "#2B3030",
        "extra-light-green": "#1BB580",
        "2x-light-green": "#D7FFF1",
        orange: "#F5B963",
        cyan: "#EAEAEA",
        "cyan-dark": "#565656",
        yellow: "#F4BD4F"


      }
    },
  },
  plugins: [],
}
