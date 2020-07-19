module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-uses-react': 1,
    "react/prop-types": "off",
    'react/jsx-uses-vars': 1,
    "no-console": "off",
    'no-constant-condition': 2,
    'no-irregular-whitespace': 2,
    'no-multi-spaces': 2,
    'no-lonely-if': 0,
    'no-plusplus': 0,
    "block-spacing": ["error", "always"],
    'no-mixed-spaces-and-tabs': 2,
    'jsx-quotes': [2, "prefer-double"],
    "quotes": ["error", "double"],
    "comma-spacing" : ["error", { "before": false, "after": true }],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing" : ["error", "always"],
    "indent": ["error", 4 ],
    "linebreak-style": ["error", "unix"],
    "semi-style": ["error", "last"],
    "semi": ["error", "always"],
    "semi-spacing": "error",
    "react/display-name": "off"
    //"react/jsx-one-expression-per-line": ["error", {"allow": "literal"} ]
  }
}
