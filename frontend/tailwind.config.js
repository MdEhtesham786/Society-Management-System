/** @type {import('tailwindcss').Config} */
import twElementsPlugin from "tw-elements/plugin.cjs";
import tailwindCssForms from "@tailwindcss/forms";
import flowbitePlugin from "flowbite/plugin";
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [twElementsPlugin, tailwindCssForms(), flowbitePlugin],
  darkMode: "class",
};
