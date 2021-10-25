module.exports = {
  configs: {
    'ultimate-react-config' : {
      env: ["browser"],
      plugins: [
        'ultimate-eslint-typescript-config'
      ],
      rules: {
        "padded-blocks": ["error", "never"],
        "one-var": ["error", "never"],
        "id-length": "off",
        "quotes": "off",
        "@typescript-eslint/quotes": ["error", "single"],
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "indent": "off",
        "@typescript-eslint/indent": ["error", 2],
        "max-len": ["error", 100],
        "function-call-argument-newline": ["error", "consistent"],
        "no-void": ["error", { "allowAsStatement": true }]
      }
    }
  }
}
