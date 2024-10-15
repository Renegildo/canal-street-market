/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ogg: ["Ogg"]
      },
      colors: {
        cyan: "#5ea3ec",
        red: "#f64444",
        yellow: "#ffb400",
      },
    },
  },
  plugins: [],
}

