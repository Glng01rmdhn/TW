/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
    },
    // spacing:{
    //   1: "10 rem"
    // },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        abudzar: "bergerak 1s ease-in-out infinite",
      },
      keyframes: {
        bergerak: {
          "0%, 100%": { transform: "rotate(3deg)" },
          "50%": { transform: "rotate(-3deg)" },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      colors : {
        biru : "#0B60B0",
        pink : "#db2777",
        tugas : "#1a535c"
      },
      spacing: {
        '13': '3.25rem',
      },
      fontFamily: {
        inter: ['"inter"']
      },
      fontSize: {
        pondok : ["7rem"]
      },
      
    },
  },
  plugins: [],
}                   
