/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./index.html"],
  theme: {
    screens: {
      sx: "320px",
      sm: "480px",
      md: "880px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      backgroundImage: {
        "hero-pattern": "url('./img/home_bg.jpg')",
      },
      fontFamily: {
        titles: "Righteous",
        "app-name": "Dancing Script",
      },
      colors: {
        crimson: "#dc143c",
        neon: "#0bfd13",
        "blue-gradient": "#000116",
        "blue-pure": "#0000FF",
        "green-grass": "#7CFC00",
        malachite: "#28D440",
      },
      dropShadow: {
        "mix-shadow": [
          "1px 1px 2px #dc143c",
          "0 0 1em #2424ff",
          "0 0 0.2em #2424ff",
        ],
        "white-shadow": "0 5px 20px #ffffff",
        "box-shadow": "rgba(0, 0, 0, 0.8)",
      },
      boxShadow: {
        "black-box-shadow": "0 4px 30px rgba(0, 0, 0, 0.1)",
      },
      zIndex: {
        888: "888",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    base: false,
  },
};
