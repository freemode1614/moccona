/**
 * Rule for test case
 */

import { ESLint, Linter, } from 'eslint';
import jest from 'eslint-plugin-jest';

export const flatJestOverride: Linter.FlatConfig = {
    files: ['**/*.{spec,test}.{j,t}sx?'],
    plugins: { jest, },
    rules: {
        ...((jest as ESLint.Plugin).configs!.recommended! as ESLint.ConfigData).rules! as Linter.RulesRecord
    },
};

export const flatJestConfig: Linter.FlatConfig = {
    files: ['__tests__/**/*.(ts|js)'],
    linterOptions: {
        noInlineConfig: true,
        reportUnusedDisableDirectives: true,
    },
};

export default {
    env: {
        'jest/globals': true,
    },
    plugins: ['jest'],
    parser: '@typescript-eslint/parser',
    extends: ['plugin:jest/recommended'],
    files: ['**/*.{spec,test}.{j,t}sx'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true, experimentalObjectRestSpread: true,
        },
    },
    settings: {
        react: { version: 'detect', },
    },
    rules: {},
} as Linter.ConfigOverride;
