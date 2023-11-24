"use strict";
/**
 * Rule for test case
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    env: {
        'jest/globals': true,
    },
    extends: ['plugin:jest/recommended'],
    files: ['**/*.{spec,test}.{j,t}sx?'],
    plugins: [
        'jest'
    ],
    rules: {},
};
