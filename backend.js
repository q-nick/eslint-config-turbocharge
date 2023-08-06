const rules = require('./cross-platform-rules');

const backendRules = {
  'node/no-missing-import': [
    'error',
    {
      tryExtensions: ['.ts', '.js', '.json', '.node'],
    },
  ],
  'import/no-nodejs-modules': 'off',
};

/** @type { import("@types/eslint").Linter.BaseConfig } */
module.exports = {
  env: {
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'node',
    'import',
    'simple-import-sort',
    'unicorn',
  ],
  extends: [
    'eslint:all',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/all',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  rules: { ...rules.crossPlatformJSTSRules, ...backendRules },
  settings: {
    'import/extensions': ['.ts', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.d.ts', '.js'],
      },
    },
  },
  overrides: [
    {
      files: ['*test*', '*spec*'],
      rules: {
        'node/no-unpublished-import': 'off',
      },
    },
  ],
};
