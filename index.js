const { rules: eslintPluginImportRules } = require('eslint-plugin-import');

const importRules = {
  // this will enable all rules
  ...Object.keys(eslintPluginImportRules)
    .reduce((prevValue, ruleName) => ({ ...prevValue, ['import/' + ruleName]: 'error' }), {}),

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

const reactRules = {
  "react/jsx-indent": ["error", 2, { checkAttributes: true, indentLogicalExpressions: true }],
  'react/jsx-indent-props': ["error", 2],
  "react/prop-types": "off", // TODO?
  "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
  "react/function-component-definition": ["error", {
    "namedComponents": "arrow-function",
    "unnamedComponents": "arrow-function",
  }],
  "react/jsx-max-depth": ["Error", { "max": 8 }],
  "react/jsx-no-literals": "off",

  "@typescript-eslint/naming-convention": [
    "error",
    {
      "selector": "default",
      "format": ["camelCase"]
    },
    {
      "selector": "variable",
      "format": ["camelCase", "PascalCase", "UPPER_CASE"]
    },
    {
      "selector": "parameter",
      "format": ["camelCase"],
      "leadingUnderscore": "allow"
    },
    {
      "selector": "memberLike",
      "modifiers": ["private"],
      "format": ["camelCase"],
      "leadingUnderscore": "require"
    },
    {
      "selector": "typeLike",
      "format": ["PascalCase"]
    }
  ],
  "@typescript-eslint/ban-types": [
    "error",
    {
      "types": {
        "JSX.Element": "use ReactNode or React.FC instead",
      }
    }
  ],
  "max-lines-per-function": "off",
  "max-statements": ["error", 15],
  "react/prop-types": "off",
  "react/require-default-props": "off",

  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "error",
}

const crossPlatformRules = {
  "padded-blocks": ["error", "never"],
  "one-var": ["error", "never"],
  "id-length": "off",

  "quotes": "off",
  "@typescript-eslint/quotes": ["error", "single"],

  "object-curly-spacing": "off",
  "@typescript-eslint/object-curly-spacing": ["error", "always"],

  "indent": "off",
  "@typescript-eslint/indent": ["error", 2, { "ignoredNodes": ["JSXElement *", "JSXElement"] }],

  "max-len": ["error", 120],
  "function-call-argument-newline": ["error", "consistent"],
  "no-void": ["error", { "allowAsStatement": true }],
  "no-undefined": "off",
  "no-ternary": "off",

  "comma-dangle": "off",
  "@typescript-eslint/comma-dangle": ["error", "always-multiline"],

  "no-extra-parens": ["error", "all", { ignoreJSX: "multi-line", "enforceForArrowConditionals": false }],
  "@typescript-eslint/no-extra-parens": "off",

  "@typescript-eslint/prefer-readonly-parameter-types": "off",

  "array-element-newline": ["error", { "multiline": true, "minItems": 5 }],
  "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
  "function-paren-newline": ["error", "multiline"],
  "sort-keys": "off",
  "quote-props": ["error", "as-needed"],
  "@typescript-eslint/no-type-alias": ["error", { "allowAliases": "in-unions" }],

  "multiline-comment-style": "off",
  "capitalized-comments": "off",
  'no-warning-comments': 'off',

  'vars-on-top': 'off',

  ...importRules,
}

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

module.exports = {
  configs: {
    react: {
      env: {
        "browser": true,
      },
      plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "testing-library",
        "jsx-a11y",
        "import",
        "simple-import-sort",
      ],
      extends: [
        "eslint:all",
        "plugin:@typescript-eslint/all",
        "plugin:react/all",
        "plugin:react/jsx-runtime",
        "plugin:testing-library/react",
        "plugin:jsx-a11y/recommended"
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true
        }
      },
      rules: {
        ...tsHeavyRulesOff,
        ...crossPlatformRules,
        ...reactRules,
      },
      settings: {
        'import/extensions': ['.ts', '.tsx'],
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          'node': {
            'extensions': ['.ts', '.tsx'],
          },
        },
      }
    },
    nodejs: {
      env: {
        "node": true,
      },
      plugins: [
        "@typescript-eslint",
        "node",
        "import",
        "simple-import-sort",
      ],
      extends: [
        "eslint:all",
        "plugin:node/recommended",
        "plugin:@typescript-eslint/all",
      ],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "sourceType": "module",
      },
      rules: {
        ...tsHeavyRulesOff,
        ...crossPlatformRules,
      },
      settings: {
        'import/extensions': ['.ts'],
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
          'node': {
            'extensions': ['.ts'],
          },
        },
      }
    }
  }
}
