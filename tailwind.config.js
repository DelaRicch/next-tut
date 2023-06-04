/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#53C28B",
      },
      keyframes: {
        move: {
          from: { transform: "translateY(-10px)" },
          to: { transform: "translateY(10px) scale(1.03)" },
        },
      },
      animation: {
        move: "move 3s infinite alternate",
      },
    },
  },
  plugins: [],
};
