"use strict";
/**
 * Rule for test case
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    env: {
        'jest/globals': true,
    },
    plugins: ['jest'],
    extends: ['plugin:jest/recommended'],
    files: ['**/*.{spec,test}.{j,t}sx?'],
    rules: {},
};
