/**
 * Rule for test case
 */

import { ESLint, Linter } from 'eslint';
import jest from 'eslint-plugin-jest';

export const flatJestCOverride: Linter.FlatConfig = {
    files: ['**/*.{spec,test}.{j,t}sx?'],
    plugins: { jest, },
    rules: {
        ...(((jest as ESLint.Plugin).configs as ESLint.ConfigData).rules ?? {}),
    },
};

export default {
    env: {
        'jest/globals': true,
    },
    plugins: ['jest'],
    extends: ['plugin:jest/recommended'],
    files: ['**/*.{spec,test}.{j,t}sx?'],
    rules: {},
} as Linter.ConfigOverride;
