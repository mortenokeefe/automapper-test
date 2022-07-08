module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/typescript"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  rules: {
    "no-unused-vars": "off",
    "vue/no-unused-components": "off",
    "vue/no-unused-vars": "off",
  },
};
