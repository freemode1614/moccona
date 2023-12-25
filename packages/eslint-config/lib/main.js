"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = require("node:path");
const fs_extra_1 = require("fs-extra");
const jest_1 = __importDefault(require("./overrides/jest"));
const json_1 = __importDefault(require("./overrides/json"));
const react_1 = __importDefault(require("./overrides/react"));
const typescript_1 = __importDefault(require("./overrides/typescript"));
const logic_1 = __importDefault(require("./rules/logic"));
const styles_1 = __importDefault(require("./rules/styles"));
const suggestions_1 = __importDefault(require("./rules/suggestions"));
const isXXXProject = (xxx) => {
    const pkg = (0, fs_extra_1.readJSONSync)((0, node_path_1.resolve)(process.cwd(), 'package.json'), { throws: true, });
    const deps = {
        ...(pkg.dependencies ?? {}),
        ...(pkg.devDependencies ?? {}),
        ...(pkg.peerDependencies ?? {}),
    };
    return Object.keys(deps).
        includes(xxx);
};
const isReactProject = isXXXProject('react');
// Default overrides.
const overrides = [
    typescript_1.default,
    jest_1.default,
    json_1.default
];
const plugins = [
    'compat',
    'import',
    'jest',
    'jsdoc',
    'n',
    'simple-import-sort',
    'unicorn'
];
if (isReactProject) {
    overrides.push(react_1.default);
}
exports.default = {
    overrides,
    plugins,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    ignorePatterns: [
        // "__test__/**/*",
        // "*.{spec,test}.{t,j}sx?"
        // Ignore all .d.ts file
        '**/*.d.ts'
    ],
    extends: ['plugin:import/recommended'],
    rules: {
        ...logic_1.default.rules,
        ...styles_1.default.rules,
        ...suggestions_1.default.rules,
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
    },
};
