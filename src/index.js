module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },

  extends: [
    "eslint:recommended",

    "plugin:@typescript-eslint/recommended",

    "plugin:prettier/recommended",

    "prettier",
    "prettier/@typescript-eslint",
  ],

  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        singleQuote: true,
        tabWidth: 2,
        useTabs: false
      },
    ],
  },

};
