import { Linter } from "eslint";
import { resolve } from "node:path";
import { readJSONSync } from "fs-extra";
import { type PackageJson } from "pkg-types";
import reactOverride from "./overrides/react";
import tsOverride from "./overrides/typescript";
import logicRules from "./rules/logic";
import styleRules from "./rules/styles";
import suggestionRules from "./rules/suggestions";
import jestRules from "./overrides/jest";

const isXXXProject = (xxx: string) => {
  const pkg: PackageJson = readJSONSync(resolve(process.cwd(), 'package.json'), { throws: true });
  const deps = {
    ...(pkg.dependencies ?? {}),
    ...(pkg.devDependencies ?? {}),
    ...(pkg.peerDependencies ?? {}),
  };

  return Object.keys(deps).includes(xxx);
};

const isReactProject = isXXXProject("react");
const isTSProject = isXXXProject("typescript");

console.log(
  'isTSProject', ' --> ', isTSProject
);

// Default overrides.
const overrides: Linter.ConfigOverride[] = [
  tsOverride,
  jestRules
];

const plugins: string[] = [
  "comments",
  "compat",
  "import",
  "jest",
  "jsdoc",
  "n",
  "unicorn",
];

if (isReactProject) {
  overrides.push(reactOverride);
}

export default {
  overrides,
  plugins,
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    }
  },
  rules: {
    ...logicRules.rules,
    ...styleRules.rules,
    ...suggestionRules.rules,
  },
} as Linter.Config;