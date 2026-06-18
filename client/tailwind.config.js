export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#f97316",
        green: "#10b981", // sky blue (change as you like)
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
