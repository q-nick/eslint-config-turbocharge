const { rules: eslintPluginImportRules } = require('eslint-plugin-import');
// eslint-disable-next-line node/no-missing-require
const {
  configs: eslintPluginTypescriptConfigs,
} = require('@typescript-eslint/eslint-plugin');

// this will enable all rules
const importRulesAllOn = Object.fromEntries(
  Object.keys(eslintPluginImportRules).map((ruleName) => [
    `import/${ruleName}`,
    'error',
  ]),
);

const importRules = {
  ...importRulesAllOn,
  // now we have to disable some of them
  'import/named': 'off',
  'import/default': 'off',
  'import/prefer-default-export': 'off',
  'import/no-internal-modules': 'off',
  'import/no-relative-parent-imports': 'off',
  'import/no-relative-packages': 'off',
  'import/no-named-export': 'off',
  'import/no-import-module-exports': 'off',
  'import/group-exports': 'off',
  'import/exports-last': 'off',
  'import/dynamic-import-chunkname': 'off',

  'import/max-dependencies': [
    'error',
    {
      max: 15,
      ignoreTypeImports: true,
    },
  ],
  // disable
  'import/order': 'off',
  'sort-imports': 'off',
  // enable this rules for all import sorting problems
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
};

const crossPlatformTSRules = {
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': [
    'warn',
    {
      ignoreEnums: true,
      ignoreNumericLiteralTypes: true,
      ignoreReadonlyClassProperties: true,
    },
  ],
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/no-type-alias': ['error', { allowAliases: 'in-unions' }],
  // we dont need that - TS will cover this
  'node/no-unsupported-features/es-syntax': 'off',
  ...eslintPluginTypescriptConfigs['disable-type-checked'].rules,
};

const crossPlatformJSRules = {
  'arrow-body-style': 'off',
  'one-var': ['error', 'never'],
  'id-length': 'off',
  'no-void': ['error', { allowAsStatement: true }],
  'no-undefined': 'off',
  'no-ternary': 'off',
  'vars-on-top': 'off',
  'no-implicit-coercion': 'off',
  'require-unicode-regexp': 'off',
  'sort-keys': 'off',
  'no-negated-condition': 'off',
  'no-undef-init': 'off',

  // enable warnings for some rules
  'no-magic-numbers': 'warn',
  'prefer-named-capture-group': 'warn',

  // max statements, imports, lines per function, length, params
  'max-statements': ['error', 15],
  'max-lines-per-function': ['error', 200],
  'import/max-dependencies': [
    'error',
    {
      max: 15,
      ignoreTypeImports: false,
    },
  ],
  'max-params': ['error', 5],

  // comments
  'capitalized-comments': 'off',
  'no-warning-comments': 'off',
  'multiline-comment-style': ['error', 'separate-lines'],

  // unicorn
  'unicorn/filename-case': [
    'error',
    {
      cases: {
        kebabCase: true,
        pascalCase: true,
      },
    },
  ],
  'unicorn/no-null': 'off',
  'unicorn/prefer-module': 'off',
  'unicorn/prefer-node-protocol': 'off',
  'unicorn/no-useless-undefined': 'off',
  'func-names': 'off',
  ...importRules,
};

const crossPlatformJSTSRules = {
  ...crossPlatformJSRules,
  ...crossPlatformTSRules,
};

module.exports = {
  crossPlatformTSRules,
  crossPlatformJSRules,
  crossPlatformJSTSRules,
};
