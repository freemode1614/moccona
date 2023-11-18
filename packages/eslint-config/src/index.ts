import { Linter } from "eslint";
import { readJSONSync } from "fs-extra";
import { type PackageJson } from "pkg-types";
import reactOverride from "./overrides/react";
import tsOverride from "./overrides/typescript";
import logicRules from "./rules/logic";
import styleRules from "./rules/styles";
import suggestionRules from "./rules/suggestions";
import testRules from "./rules/test";

const isXXXProject = (xxx: string) => {
  const pkg: PackageJson = readJSONSync("package.json", { throws: true });
  const deps = {
    ...(pkg.dependencies ?? {}),
    ...(pkg.devDependencies ?? {}),
    ...(pkg.peerDependencies ?? {}),
  };

  if (!deps) {
    return false;
  }

  return Object.keys(deps).includes(xxx);
};

const isReactProject = isXXXProject("react");
const isTSProject = isXXXProject("typescript");

const overrides: Linter.ConfigOverride[] = [];

const plugins: string[] = [
  "comments",
  "compat",
  "import/recommended",
  "jest",
  "jsdoc",
  "n",
  "unicorn",
];

if (isReactProject) {
  overrides.push(reactOverride);
  plugins.push("react");
  plugins.push("jsx-a11y");
}

if (isTSProject) {
  overrides.push(tsOverride);
}

const config: Linter.Config = {
  overrides,
  plugins,
  rules: {
    ...logicRules.rules,
    ...styleRules.rules,
    ...suggestionRules.rules,
    ...testRules.rules,
  },
};
