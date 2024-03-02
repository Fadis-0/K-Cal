/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./screens/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}"
      ],
  theme: {
    extend: {
      colors: {
        'main-green': '#2cb67d',
        'main-violet': '#7f5af0',
        'main-dark': '#16161a',
        'second-dark': '#242629',
      }
    },
  },
  plugins: [],
}

