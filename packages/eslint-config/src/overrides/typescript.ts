import { Linter } from "eslint";

export default {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {},
} as Linter.ConfigOverride;
