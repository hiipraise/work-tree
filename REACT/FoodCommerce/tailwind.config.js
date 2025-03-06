/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      brandred: "#e74040",
      brandyellow: "#ffc938",
      emerald: "#23856d",
      brandblue: "#23a6f0",
      slate: "#252B42",
      grey: "#737373",
      brandedblue: "#23A6F0",
      white: "#ffffff",
      itemgray: "#BDBDBD",
      itemgreen: "#23856D",
      neutral: "#fafafa",
      red: "#E74040",
      orange: "#E77C40",
      lightgray: "#ECECEC",
    },
  },
  plugins: [],
};
