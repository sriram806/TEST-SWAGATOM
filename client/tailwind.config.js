// Change this:
const { join } = require("path");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // ❌ This is causing the issue
  ],
};

// To this:
import { join } from "path";
import forms from "@tailwindcss/forms"; // ✅ Use ES module import

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [forms], // ✅ Fix the issue
};
