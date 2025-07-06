/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur:{
          md:'8px',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
      },
      colors: {
        'glass': 'rgba(31, 31, 31, 0.6)', // charcoal gray with transparency
      },
      colors: {
        primary: "#2ECC71",
        charcoal: "#1F1F1F",
        lightgray: "#F4F4F4",
        secondary: "#97e6b8",
      },
      fontFamily: {
        sans: ['"SF Pro Display"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

