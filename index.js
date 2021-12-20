const rules = require('./cross-platform-rules');
const nodeRules = require('./node');

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
    sourceType: 'module',
  },
  rules: Object.assign({}, rules.crossPlatformJSRules, {
    'import/no-nodejs-modules': 'off',
    'import/unambiguous': 'off',
    'import/no-commonjs': 'off',
    'unicorn/numeric-separators-style': 'off',
  }),
  overrides: [Object.assign({ files: ['*.ts'] }, nodeRules)],
};
