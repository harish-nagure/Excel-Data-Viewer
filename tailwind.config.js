module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4caf50",
        secondary: "#3e4b5b",
        background: "#f4f4f4",
      },
      boxShadow: {
        custom: "0 4px 8px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        inter: ['Inter'],
      },
    },
  },
  plugins: [],
};
