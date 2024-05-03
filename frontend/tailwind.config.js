/** @type {import('tailwindcss').Config} */
import twElementsPlugin from "tw-elements/plugin.cjs";
import tailwindCssForms from "@tailwindcss/forms";
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [twElementsPlugin, tailwindCssForms()],
  darkMode: "class",
};
