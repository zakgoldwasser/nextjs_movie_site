module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx,ts,tsx}','./components/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      screens:{
        "3xl":"2000px",
      },
      animation:{
        tilt:'tilt 10s infinite linear',
        blob:'blob 10s infinite linear',
      },
      keyframes: {
        tilt:{"0%,50, 100%": {
          transform: "rotate(0deg)",
        },
      "25%":{
        transform: "rotate(1.5deg)",
        },
        "75%":{
          transform: "rotate(-1.5deg)",
          },
        },
        blob: {
          "0%,100%":{
            transform: "translate(0px,0px) scale(1)",
          },
          "33%":{
            transform: "translate(30px,-50px) scale(1.1)",
          },
          "66%":{
            transform: "translate(-20px,20px) scale(0.9)",
          },
        }
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
