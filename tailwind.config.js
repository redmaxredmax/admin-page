/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B5CE2",
        focus:"#6C6DE5",
        button_bg:"#F7F7FF",
        home_bg:"#EEEEF5",
        text_gray:"#B5B5C3",
        green_btn:"#1BC58D",
        input_gray:"#F6F6FB",
        active_btn:"#5B5CE2",
      },
      fontFamily: {
        font1: ["Mulish"],

      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1440px",
        },
      },
    },
  },
  plugins: [],
}