import pluginJs from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

import tseslint from "typescript-eslint";
/** @type {import('eslint').Linter.Config[]} */

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx,css,scss}"],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": "error",
      indent: ["error", 2],
      semi: "error",
      "prefer-const": "error",
      "react/react-in-jsx-scope": "off",
    },
  },
];
