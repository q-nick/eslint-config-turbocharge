const rules = require('./cross-platform-rules');

const nodeJSRules = {
  "node/no-unsupported-features/es-syntax": ["error", {
    "version": ">=14.0.0",
    "ignores": ["modules"]
  }],
  "node/no-missing-import": ["error", {
    "tryExtensions": [".ts", ".d.ts", ".json", ".node"]
  }],
  "node/no-unpublished-import": ["error", {
    "tryExtensions": [".ts", ".d.ts"]
  }],
  "@typescript-eslint/naming-convention": "off",
  "@typescript-eslint/no-magic-numbers": "off",

  "import/no-namespace": "off",
  "import/no-nodejs-modules": "off",
  "import/max-dependencies": ["error", {
    "max": 15,
    "ignoreTypeImports": false
  }],
  "import/unambiguous": "off",

  "max-statements": ["error", 15],
  "max-lines-per-function": ["error", 200],
  "no-implicit-coercion": "off",
  "array-element-newline": ["error", "consistent"],
  "require-unicode-regexp": "off",
}

module.exports ={
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
    "plugin:unicorn/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
  },
  rules: Object.assign(rules.crossPlatformRules, nodeJSRules),
  settings: {
    'import/extensions': [".ts", ".d.ts"],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': [".ts", ".d.ts"],
    },
    "import/resolver": {
      "node": {
        "extensions": [".ts", ".d.ts"]
       }
    }
  }
}
