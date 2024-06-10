/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tealBlue: "#008080",
        lightBlue: "#bae6fd", // Sky 200
        lightGray: "#f0f9ff", // Sky 50
      },
    },
  },
  plugins: [],
};
