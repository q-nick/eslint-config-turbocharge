const rules = require('./cross-platform-rules');

const reactRules = {
  "react/jsx-indent": ["error", 2, { checkAttributes: true, indentLogicalExpressions: true }],
  'react/jsx-indent-props': ["error", 2],
  "react/prop-types": "off",
  "react/require-default-props": "off",
  "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
  "react/function-component-definition": ["error", {
    "namedComponents": "arrow-function",
    "unnamedComponents": "arrow-function",
  }],
  "react/jsx-max-depth": ["Error", { "max": 8 }],
  "react/jsx-no-literals": "off",

  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "error",

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

  "unicorn/prevent-abbreviations": [
    "error",
    {
      "ignore": [
        "Props",
        "props",
        "Ref",
        "ref"
      ]
    }
  ]
}

module.exports ={
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
    "plugin:jsx-a11y/recommended",
    "plugin:unicorn/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  rules: Object.assign(rules.crossPlatformRules, reactRules),
  settings: {
    'import/extensions': [".ts", ".d.ts", '.tsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': [".ts", ".d.ts", '.tsx'],
    },
    'import/resolver': {
      'node': {
        'extensions': [".ts", ".d.ts", '.tsx'],
      },
    },
  }
}
