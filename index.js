const rules = require('./cross-platform-rules');
const backendRules = require('./backend');

/** @type { import("@types/eslint").Linter.BaseConfig } */
module.exports = {
  env: {
    node: true,
  },
  plugins: ['import', 'node', 'simple-import-sort', 'unicorn'],
  extends: [
    'eslint:all',
    'plugin:unicorn/recommended',
    'plugin:node/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    ...rules.crossPlatformJSRules,
    'import/no-nodejs-modules': 'off',
    'import/unambiguous': 'off',
    'import/no-commonjs': 'off',
    'unicorn/numeric-separators-style': 'off',
  },
  overrides: [{ files: ['*.ts'], ...backendRules }],
};
