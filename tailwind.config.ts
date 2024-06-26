import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellow: {
          "50": "#fffdea",
          "100": "#fffbc6",
          "200": "#fff687",
          "300": "#ffea49",
          "400": "#ffdb1e",
          "500": "#fbbc05",
          "600": "#de9101",
          "700": "#b86705",
          "800": "#954f0b",
          "900": "#7b410c",
          "950": "#472101",
        },
        green: {
          "50": "#f2fbf4",
          "100": "#e0f8e6",
          "200": "#c3efce",
          "300": "#93e2a8",
          "400": "#5dcb7a",
          "500": "#34a853",
          "600": "#289144",
          "700": "#237238",
          "800": "#205b30",
          "900": "#1c4b2a",
          "950": "#0a2914",
        },

        red: {
          "50": "#fef3f2",
          "100": "#fde5e3",
          "200": "#fdcfcb",
          "300": "#faada7",
          "400": "#f67d73",
          "500": "#ea4335",
          "600": "#d93729",
          "700": "#b62b1f",
          "800": "#97261d",
          "900": "#7d261f",
          "950": "#440f0b",
        },

        blue: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#c0dbfd",
          "300": "#94c5fc",
          "400": "#62a5f8",
          "500": "#4285f4",
          "600": "#2763e9",
          "700": "#1f4ed6",
          "800": "#2041ad",
          "900": "#1f3b89",
          "950": "#182553",
        },
      },
    },
    fontFamily: {
      product: ['"Product Sans"', "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
