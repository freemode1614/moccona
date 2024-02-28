import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { Linter } from 'eslint';

export const flatTypescript: Linter.FlatConfig = {
    files: ['**/*.ts'],
    languageOptions: {
        parser: tsParser,
        sourceType: 'module',
        ecmaVersion: 'latest',
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            ecmaFeatures: {
                experimentalObjectRestSpread: true,
            },
        },
    },
    plugins: {
        tsPlugin,
    },
};

export default {
    files: ['**/*.ts', '**/*.tsx'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {},
} as Linter.ConfigOverride;
