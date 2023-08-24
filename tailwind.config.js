/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens: {
      lg: { max: "1100px" },
      md: { max: "980px" },
      sm: { max: "768px" },
      xs:{max: "590px"},
    },
    container: {
      padding: "20px",
      center: true,
    },

    extend: {
      colors: {
        titleColor: "#a6a6a6",
        hoverColor: "#0b8dff3b",
        footerColor: "#2c2c2c",
        buttonColor: "#f79413",
        artBord: "rgba(0,0,0,.125)",
      },
    },
  },
  plugins: [],
};
