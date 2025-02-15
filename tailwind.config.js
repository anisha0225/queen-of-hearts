/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        
        'scroll-icons-hover': 'scrollIcons 30s linear infinite paused',
      },
      keyframes: {
        scrollIcons: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
      },
      colors: { 
        mycolor: "rgba(0,0,0,0.02)", 
    }, 
    },
  },
  plugins: [],
};
