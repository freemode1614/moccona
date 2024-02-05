"use strict";
/**
 * Rule for test case
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatJestCOverride = void 0;
const eslint_plugin_jest_1 = __importDefault(require("eslint-plugin-jest"));
exports.flatJestCOverride = {
    files: ['**/*.{spec,test}.{j,t}sx?'],
    plugins: { jest: eslint_plugin_jest_1.default, },
    rules: {},
};
exports.default = {
    env: {
        'jest/globals': true,
    },
    plugins: ['jest'],
    extends: ['plugin:jest/recommended'],
    files: ['**/*.{spec,test}.{j,t}sx?'],
    rules: {},
};
