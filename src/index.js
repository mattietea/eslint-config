module.exports = {
  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },

  extends: [
    "eslint:recommended",

    "plugin:@typescript-eslint/recommended",

    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/typescript',

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

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
  },

};
