/**
 * Rule for test case
 */

import { Linter } from 'eslint';

export default {
    env: {
        'jest/globals': true,
    },
    extends: ['plugin:jest/recommended'],
    files: ['**/*.{spec,test}.{j,t}sx?'],
    plugins: [
        'jest'
    ],
    rules: {},
} as Linter.ConfigOverride;
