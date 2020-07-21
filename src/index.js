module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['json-format', 'sort-keys-fix'],
  rules: {
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
      },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', next: 'return', prev: '*' },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      { caseSensitive: true, natural: false },
    ],
  },
  settings: {
    'json/json-with-comments-files': [],
  },
};
