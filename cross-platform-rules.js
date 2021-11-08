const { rules: eslintPluginImportRules } = require('eslint-plugin-import');

// this will enable all rules
const importRulesAllOn = Object.keys(eslintPluginImportRules)
.reduce((prevValue, ruleName) => ({ ...prevValue, ['import/' + ruleName]: 'error' }), {});

const importRules = Object.assign(
  {},
  importRulesAllOn,
  {
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
    "import/exports-last": 'off',

    // disable
    'import/order': 'off',
    "sort-imports": 'off',
    // enable this rules for all import sorting problems
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  }
);

const tsHeavyRulesOff = {
  "@typescript-eslint/unbound-method": "off",
  "@typescript-eslint/no-unsafe-assignment": "off",
  "@typescript-eslint/no-unsafe-argument": "off",
  "@typescript-eslint/promise-function-async": "off",
  "@typescript-eslint/no-confusing-void-expression": "off",
  "@typescript-eslint/no-unsafe-return": "off",
  "@typescript-eslint/await-thenable": "off",
  "@typescript-eslint/consistent-type-exports": "off",
  "@typescript-eslint/dot-notation": "off",
  "@typescript-eslint/no-base-to-string": "off",
  "@typescript-eslint/no-floating-promises": "off",
  "@typescript-eslint/no-implied-eval": "off",
  "@typescript-eslint/no-meaningless-void-operator": "off",
  "@typescript-eslint/no-misused-promises": "off",
  "@typescript-eslint/no-throw-literal": "off",
  "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
  "@typescript-eslint/no-unnecessary-condition": "off",
  "@typescript-eslint/no-unnecessary-qualifier": "off",
  "@typescript-eslint/no-unnecessary-type-arguments": "off",
  "@typescript-eslint/no-unnecessary-type-assertion": "off",
  "@typescript-eslint/no-unsafe-call": "off",
  "@typescript-eslint/no-unsafe-member-access": "off",
  "@typescript-eslint/non-nullable-type-assertion-style": "off",
  "@typescript-eslint/prefer-includes": "off",
  "@typescript-eslint/prefer-nullish-coalescing": "off",
  "@typescript-eslint/prefer-readonly": "off",
  "@typescript-eslint/prefer-reduce-type-parameter": "off",
  "@typescript-eslint/prefer-regexp-exec": "off",
  "@typescript-eslint/prefer-return-this-type": "off",
  "@typescript-eslint/prefer-string-starts-ends-with": "off",
  "@typescript-eslint/require-array-sort-compare": "off",
  "@typescript-eslint/require-await": "off",
  "@typescript-eslint/restrict-plus-operands": "off",
  "@typescript-eslint/restrict-template-expressions": "off",
  "@typescript-eslint/return-await": "off",
  "@typescript-eslint/strict-boolean-expressions": "off",
  "@typescript-eslint/switch-exhaustiveness-check": "off",
  "@typescript-eslint/switch-exhaustiveness-check": "off",
}

const crossPlatformRules = Object.assign(
  {},
  {
    "arrow-body-style": "off",
    "padded-blocks": ["error", "never"],
    "one-var": ["error", "never"],
    "id-length": "off",
    "function-call-argument-newline": ["error", "consistent"],
    "no-void": ["error", { "allowAsStatement": true }],
    "no-undefined": "off",
    "no-ternary": "off",
    'vars-on-top': 'off',
    "no-implicit-coercion": "off",
    "require-unicode-regexp": "off",
    "sort-keys": "off",

    // max statements, imports, lines per function, length, params
    "max-statements": ["error", 15],
    "max-lines-per-function": ["error", 200],
    "import/max-dependencies": ["error", {
      "max": 15,
      "ignoreTypeImports": false
    }],
    "max-len": ["error", 120],
    "max-params": ["error", 5],

    // quotes
    "quote-props": ["error", "as-needed"],
    "quotes": "off",
    "@typescript-eslint/quotes": ["error", "single"],

    // object curly spacing
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],

     // indent
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2, { "ignoredNodes": ["JSXElement *", "JSXElement"] }],

    // comma ,
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", "always-multiline"],

    // parens
    "no-extra-parens": ["error", "all", { ignoreJSX: "multi-line", "enforceForArrowConditionals": false }],
    "@typescript-eslint/no-extra-parens": "off",

    // typescript other
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    "@typescript-eslint/no-type-alias": ["error", { "allowAliases": "in-unions" }],

    // new line: array, objects
    "array-element-newline": ["error", "consistent"],
    "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    "function-paren-newline": ["error", "multiline"],

    // comments
    "multiline-comment-style": "off",
    "capitalized-comments": "off",
    'no-warning-comments': 'off',

    // unicorn
    "unicorn/filename-case": [
      "error",
      {
        "cases": {
          "kebabCase": true,
          "pascalCase": true
        }
      }
    ],
    "unicorn/no-null": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-node-protocol": 0,
  },
  importRules,
  tsHeavyRulesOff
);

module.exports = {
  crossPlatformRules,
}
