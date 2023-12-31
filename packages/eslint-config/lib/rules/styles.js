"use strict";
/**
 * Layout & Formatting
 * @link {https://zh-hans.eslint.org/docs/latest/rules/#layout--formatting}
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    rules: {
        'array-bracket-newline': ['warn', 'consistent'],
        'array-bracket-spacing': ['warn', 'never'],
        'array-element-newline': ['warn', 'consistent'],
        'arrow-parens': [
            'warn',
            'as-needed',
            {
                requireForBlockBody: true,
            }
        ],
        'arrow-spacing': ['warn', { before: true, after: true, }],
        'block-spacing': ['warn', 'always'],
        'brace-style': ['warn', '1tbs'],
        'comma-dangle': [
            'error',
            {
                arrays: 'never',
                objects: 'always',
                imports: 'never',
                exports: 'never',
                functions: 'never',
            }
        ],
        'comma-spacing': ['warn', { before: false, after: true, }],
        'comma-style': ['warn', 'last'],
        'computed-property-spacing': ['warn', 'never'],
        'dot-location': ['warn', 'object'],
        'eol-last': 'off',
        'func-call-spacing': ['warn', 'never'],
        'function-call-argument-newline': ['warn', 'consistent'],
        'function-paren-newline': ['warn', 'consistent'],
        'generator-star-spacing': ['warn'],
        'implicit-arrow-linebreak': ['warn', 'beside'],
        indent: ['warn', 4],
        'jsx-quotes': ['off'],
        'key-spacing': ['warn', { beforeColon: false, afterColon: true, }],
        'keyword-spacing': ['off'],
        'line-comment-position': ['off', 'above'],
        'linebreak-style': ['off'],
        'lines-around-comment': [
            'off',
            {
                beforeBlockComment: false,
                beforeLineComment: true,
            }
        ],
        'lines-between-class-members': ['off'],
        'max-len': ['off'],
        'max-statements-per-line': ['off'],
        'multiline-ternary': ['off'],
        'new-parens': ['off'],
        'newline-per-chained-call': [
            'warn',
            {
                ignoreChainWithDepth: 1,
            }
        ],
        'no-extra-parens': ['off'],
        'no-mixed-spaces-and-tabs': ['off'],
        'no-multi-spaces': ['off'],
        'no-multiple-empty-lines': ['off'],
        'no-tabs': ['off'],
        'no-trailing-spaces': ['off'],
        'no-whitespace-before-property': ['off'],
        'nonblock-statement-body-position': ['warn'],
        'object-curly-newline': ['off'],
        'object-curly-spacing': ['off'],
        'object-property-newline': ['off'],
        'operator-linebreak': ['off'],
        'padded-blocks': ['off'],
        'padding-line-between-statements': ['off'],
        quotes: ['warn', 'single'],
        'rest-spread-spacing': ['off'],
        semi: ['off'],
        'semi-spacing': ['off'],
        'semi-style': ['off'],
        'space-before-blocks': ['warn'],
        'space-before-function-paren': [
            'off',
            {
                anonymous: 'always',
                named: 'always',
                asyncArrow: 'always',
            }
        ],
        'space-in-parens': ['off'],
        'space-infix-ops': ['off'],
        'space-unary-ops': ['off'],
        'switch-colon-spacing': ['off'],
        'template-curly-spacing': ['off'],
        'template-tag-spacing': ['off'],
        'unicode-bom': ['off'],
        'wrap-iife': ['warn'],
        'wrap-regex': ['warn'],
        'yield-star-spacing': ['off'], // Require or disallow spacing around the `*` in `yield*` expressions
    },
};
