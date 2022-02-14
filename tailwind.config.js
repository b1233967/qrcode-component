module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,scss,ts}"],
  theme: {
    extend: {
      screens: {
        "-lg": { max: "1329px" },
        "-md": { max: "1023px" },
        "-sm": { max: "767px" },
      },
    },
  },
  plugins: [],
};
