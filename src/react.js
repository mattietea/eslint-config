module.exports = {
  extends: [
    './index.js',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:mdx/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-hooks'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-boolean-value': ['warn', 'always'],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx', '.md', '.mdx'] },
    ],
    'react/jsx-handler-names': 'error',
    'react/jsx-max-depth': [
      'warn',
      {
        max: 5,
      },
    ],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-sort-default-props': [
      'warn',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: false,
        shorthandFirst: true,
      },
    ],
    'react/no-array-index-key': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-state': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'warn',
  },
  settings: {
    react: {
      version: 'version',
    },
  },
};
