/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Bleu sombre pour les recruteurs
        secondary: '#16A34A', // Vert pour les candidats
        accent: '#F59E0B', // Orange pour attirer l'attention
        neutral: '#F3F4F6', // Couleur neutre pour les arrière-plans
      },
    },
  },
  plugins: [],
};

