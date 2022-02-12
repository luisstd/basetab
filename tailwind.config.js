module.exports = {
  purge: {
    content: ["./src/**/*.html"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Clash Display", "sans-serif"],
        body: ["Overpass Mono", "monospace"],
      },
      colors: {
        "hsl-blue": ["hsl(243, 80%, 62%)"],
      },
    },
  },
  variants: {},
  plugins: [],
};
