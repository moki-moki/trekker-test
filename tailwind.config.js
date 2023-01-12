/** @type {import('tailwindcss').Config} */
module.exports = { content: ["./src/*.html", "./src/**/*.{html,js}"],
  theme: { extend: { fontFamily: { inter: "'Inter', sans-serif", spaceGrotesk: "'Space Grotesk', sans-serif" } },
    colors: { black: "#111111",
      cardBg: "#202025",
      gray: "#2d2e32",
      white: "#F1F2EE",
      green: "#00b272",
      darkGreen: "#009961",
      lightGray: "#ffffff70" } },
  plugins: [] };

