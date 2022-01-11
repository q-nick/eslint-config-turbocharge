const rules = require('./cross-platform-rules');

const nodeRules = {
  // 'node/no-unpublished-import': [
  //   'error',
  //   {
  //     tryExtensions: ['.ts'],
  //   },
  // ],
  'node/no-missing-import': [
    'error',
    {
      tryExtensions: ['.ts', '.js', '.json', '.node'],
    },
  ],
  // typescript
  // '@typescript-eslint/naming-convention': 'off',
  // '@typescript-eslint/no-magic-numbers': 'off',
  // import
  'import/no-nodejs-modules': 'off',
  // 'import/unambiguous': 'off',
};

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
  rules: Object.assign({}, rules.crossPlatformRules, nodeRules),
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
