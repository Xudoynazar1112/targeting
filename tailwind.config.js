/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'ahad': "url('/src/assets/ahaaqayum2.jpg')",
        'aksesuar': "url('/src/assets/aksesuarlar2.jpg')",
        'anhor': "url('/src/assets/anhor2.jpg')",
        'dermatologiya': "url('/src/assets/dermatologiya.jpg')",
        'honey': "url('/src/assets/honey.jpg')",
        'imenam': "url('/src/assets/imanem.jpg')",
        'it': "url('/src/assets/itTime.jpg')",
        'kasmetolog': "url('/src/assets/kasmetolog.jpg')",
        'ozdvkm': "url('/src/assets/ozdvkm.jpg')",
        'stomotolog': "url('/src/assets/stolotolg3.jpg')",
        'telefon': "url('/src/assets/telefon.jpg')",
        'business': "url('/src/assets/uzBisnesCard.jpg')",
      }
    },
  },
  plugins: [],
}

