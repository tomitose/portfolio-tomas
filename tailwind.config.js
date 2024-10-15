/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de incluir todos los archivos donde uses Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Agrega DaisyUI aquí
  ],
}
