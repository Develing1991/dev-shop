module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
    // 'react/jsx-first-prop-new-line': [2, 'multiline'],
    // 'react/jsx-max-props-per-line': [
    //   2,
    //   { maximum: 1, when: 'multiline' },
    // ],
    // 'react/jsx-indent-props': [2, 2],
    // 'react/jsx-closing-bracket-location': [
    //   2,
    //   'tag-aligned',
    // ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/dot-notation": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-misused-promises": "off",
  },
};
