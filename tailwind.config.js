/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blueBackground: "#3f65e8",
        grayBackground: "f8fafc",
      },
    },
  },
  plugins: [],
};
