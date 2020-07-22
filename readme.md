![publish package](https://github.com/mattietea/eslint-config/workflows/publish%20package/badge.svg?branch=master)
![npm](https://img.shields.io/npm/v/@mattietea/eslint-config)

# @mattietea/eslint-config

ESLint rules and configs

## Installation

```sh
yarn add @mattietea/eslint-config -D
```

## Config

```json
// Base config
{
  "extends": ["@mattietea/eslint-config"],
}

// React config
{
  "extends": ["@mattietea/eslint-config/react"],
}
```

## VSCode Config

Use the [VSCode ESLint](https://github.com/microsoft/vscode-eslint)

```json
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "json",
    "jsonc"
  ],

  // On save settings
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
  },
}
```

## Errors on Install

```bash
rm -rf node_modules yarn.lock && yarn 
```