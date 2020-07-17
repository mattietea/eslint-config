module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  extends: [
    "./index.js",

    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",

    "prettier/react",
  ],

  settings: {
    react: {
      version: "version",
    },
  },

  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-unescaped-entities': 0,

    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
  }

};
