# @mattietea/eslint-config

![publish package](https://github.com/mattietea/eslint-config/workflows/publish%20package/badge.svg?branch=master)

ESLint config for TypeScript and React with Prettier.

## Installation

```sh
yarn add @mattietea/eslint-config -D
```

See [configuring npm for use with GitHub Packages]("https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages") for help installing

## Config

```javascript
// Base config
{
  "extends": "@mattietea/eslint-config"
}

// React config
{
  "extends": "@mattietea/eslint-config/react"
}
```
