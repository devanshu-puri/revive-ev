/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2ECC71",
        charcoal: "#1F1F1F",
        lightgray: "#F4F4F4",
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

