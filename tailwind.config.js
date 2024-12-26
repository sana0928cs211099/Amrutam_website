/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite', // Adjust the duration as needed
        'text': 'text 4s ease infinite', // Default animation
        'anim': 'anim 10s linear infinite',
        'slide-in': 'slideIn 4s linear infinite', // Custom animation
        'slideOut': 'slideOut 6s ease-in-out forwards infinite', // Custom animation
        'flipY': 'flipY 8s ease-in-out infinite',
        'flipX': 'flipX 0.6s ease-in-out',
        'flipZ': 'flipZ 0.6s ease-in-out',
        'flipScale': 'flipScale 0.6s ease-in-out',
        'flipColor': 'flipColor 3s ease-in-out infinite',
        'moveLeft': 'moveLeft 0.5s ease-in-out',
        'scroll': 'scroll 10s linear infinite',
        'zoomIn': 'zoomIn 4s ease-in-out forwards infinite',
        'tada': 'tada 9s ease-in-out infinite',
        'jiggle': 'jiggle 0.5s ease-in-out infinite',
        'drop-in': 'drop-in 3s ease-in-out',
        'fly-in': 'fly-in 3s ease-in-out infinite',
        'drop': 'drop 1s ease-in-out', // Basic drop animation
      },
      keyframes: {
        text: {
          '0%': { marginLeft: '60%' },
          '100%': { marginLeft: '0%' },
        },
        anim: {
          '0%': { /* Define your starting styles here */ },
          '100%': { /* Define your ending styles here */ },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' }, // Start off-screen to the right
          '100%': { transform: 'translateX(0%)' }, // End at the original position
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        flipY: {
          '0%': { transform: 'perspective(600px) rotateY(0deg)' },
          '50%': { transform: 'perspective(600px) rotateY(180deg)' },
          '100%': { transform: 'perspective(600px) rotateY(360deg)' },
        },
        flipX: {
          '0%': { transform: 'perspective(600px) rotateX(0deg)' },
          '50%': { transform: 'perspective(600px) rotateX(180deg)' },
          '100%': { transform: 'perspective(600px) rotateX(360deg)' },
        },
        flipZ: {
          '0%': { transform: 'rotateZ(0deg)' },
          '50%': { transform: 'rotateZ(180deg)' },
          '100%': { transform: 'rotateZ(360deg)' },
        },
        flipScale: {
          '0%': { transform: 'perspective(600px) rotateY(0deg) scale(1)' },
          '50%': { transform: 'perspective(600px) rotateY(180deg) scale(1.1)' },
          '100%': { transform: 'perspective(600px) rotateY(360deg) scale(1)' },
        },
        flipColor: {
          '0%': { transform: 'perspective(600px) rotateY(0deg)', backgroundColor: '#3b82f6' },
          '50%': { transform: 'perspective(600px) rotateY(180deg)', backgroundColor: '#f43f5e' },
          '100%': { transform: 'perspective(600px) rotateY(360deg)', backgroundColor: '#3b82f6' },
        },
        moveLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.1) rotate(3deg)' },
          '20%': { transform: 'scale(1) rotate(-3deg)' },
          '30%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1) rotate(-3deg)' },
          '60%': { transform: 'scale(1)' },
          '70%': { transform: 'scale(1.1) rotate(3deg)' },
          '80%': { transform: 'scale(1)' },
          '90%': { transform: 'scale(1.1) rotate(-3deg)' },
          '100%': { transform: 'scale(1)' },
        },
        jiggle: {
          '0%': { transform: 'translate(0)' },
          '25%': { transform: 'translate(-5px, 0)' },
          '50%': { transform: 'translate(5px, 0)' },
          '75%': { transform: 'translate(-5px, 0)' },
          '100%': { transform: 'translate(0)' },
        },
        'drop-in': {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fly-in': {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        drop: {
          '0%': { opacity: 0, transform: 'translateY(-100%)' },
          '50%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(100%)' },
        },
      },
      
    },
  },
  plugins: [],
}