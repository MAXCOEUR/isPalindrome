import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.node
    },
    plugins: {
      js,
    },
    rules: {
    },
  },
]);
