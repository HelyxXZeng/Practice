/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-background-1': '#1C2636',
        'blue-background-2': '#232F43',
        'text-white-main': '#EFEFEF',
        'text-gray-main': '#DDDDDD',
        'text-blue-main': '#216CE3',
        'blue-hover': '#195cc8',
        'border-field':  '#455E87',
      }
    },
  },
  plugins: [],
}