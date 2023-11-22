"use strict";
/**
 * Rule for test case
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    files: ['**/*.json'],
    rules: {
        'json/*': ['warn'],
        'json/duplicate-key': 'error',
        'json/trailing-comma': 'error',
    },
};
