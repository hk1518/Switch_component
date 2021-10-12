module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.js","./public/**/*.html","./dist/**/*.{js,html}"]
  },
    important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: "black",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
  
};
