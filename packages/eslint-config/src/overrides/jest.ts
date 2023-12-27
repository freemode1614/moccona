/**
 * Rule for test case
 */

import { Linter } from 'eslint';

export default {
    env: {
        'jest/globals': true,
    },
    plugins: ['jest'],
    extends: ['plugin:jest/recommended'],
    files: ['**/*.{spec,test}.{j,t}sx?'],
    rules: {},
} as Linter.ConfigOverride;
