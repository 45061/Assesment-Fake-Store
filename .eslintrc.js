module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "arrow-body-style": "off",
    "react/prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/img-redundant-alt": "off",
    "default-param-last": "off",
  },
};
