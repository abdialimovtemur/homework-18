/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #E84D70 0%, #A337F6 50%, #28A7ED 100%)',
      },

      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%', 
          md: '768px',
          lg: '1024px', 
          xl: '1280px', 
        },
      }
    },
  },
  plugins: [],
}



