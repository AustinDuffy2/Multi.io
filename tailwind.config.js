module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f4f4f4",
          400: "#c4c4c4",
          800: "#4f4f4f",
          900: "#191919",
        },
        blue_gray: { 400: "#8d8d8d", "300_33": "#91aebb33" },
        light_blue: { 500: "#00a3ff", "500_72": "#00a3ff72" },
        black: {
          900: "#000000",
          "900_3f": "#0000003f",
          "900_dd": "#000000dd",
          "900_99": "#00000099",
        },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs1: "0px 30px  30px 0px #91aebb33",
        bs: "0px 4px  4px 0px #0000003f",
        bs3: "0px 3.4px  3px 0px #0000003f",
        bs4: "0px 3.54px  3px 0px #0000003f",
        bs5: "0px 3.69px  3px 0px #0000003f",
        bs2: "0px 3.84px  3px 0px #0000003f",
      },
      fontFamily: { roboto: "Roboto", robotocondensed: "Roboto Condensed" },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
