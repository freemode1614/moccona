/**
 * Rule for test case
 */

import { Linter } from 'eslint';

export default {
    files: ['**/*.json'],
    plugins: ['json'],
    extends: ['plugin:json/recommended'],
    excludedFiles: ['tsconfig.json', 'tsconfig.*.json'],
    rules: {
        // 'json/duplicate-key': 'error',
        // 'json/trailing-comma': 'error',
        // 'json/undefined': 'off',
        // 'json/enum-value-mismatch': 'off',
        // 'json/unexpected-end-of-comment': 'off',
        // 'json/unexpected-end-of-string': 'off',
        // 'json/unexpected-end-of-number': 'off',
        // 'json/invalid-unicode': 'off',
        // 'json/invalid-escape-character': 'off',
        // 'json/invalid-character': 'off',
        // 'json/property-expected': 'off',
        // 'json/comma-expected': 'off',
        // 'json/colon-expected': 'off',
        // 'json/value-expected': 'off',
        // 'json/comma-or-close-backet-expected': 'off',
        // 'json/comma-or-close-brace-expected': 'off',
        // 'json/comment-not-permitted': 'off',
        // 'json/schema-resolve-error': 'off',
        // 'json/unknown': 'off',
    },
} as Linter.ConfigOverride;
