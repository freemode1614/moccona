/**
 * Layout & Formatting
 * @link {https://zh-hans.eslint.org/docs/latest/rules/#layout--formatting}
 */

import { Linter } from 'eslint';

export default {
    rules: {
        'array-bracket-newline': ['warn', 'consistent'], // Enforce linebreaks after opening and before closing array brackets
        'array-bracket-spacing': ['warn', 'never'], // Enforce consistent spacing inside array brackets
        'array-element-newline': ['warn', 'consistent'], // Enforce line breaks after each array element
        'arrow-parens': ['warn', 'as-needed', {
            requireForBlockBody: true,
        }], // Require parentheses around arrow function arguments
        'arrow-spacing': ['warn', { 'before': true, 'after': true, }], // Enforce consistent spacing before and after the arrow in arrow functions
        'block-spacing': ['warn', 'always'], // Disallow or enforce spaces inside of blocks after opening block and before closing block
        'brace-style': ['warn', '1tbs'], // Enforce consistent brace style for blocks
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'always',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never',
        }], // Require or disallow trailing commas
        'comma-spacing': ['warn', { before: false, after: true, }], // Enforce consistent spacing before and after commas
        'comma-style': ['warn', 'last'], // Enforce consistent comma style
        'computed-property-spacing': ['warn', 'never'], // Enforce consistent spacing inside computed property brackets
        'dot-location': ['warn', 'object'], // Enforce consistent newlines before and after dots
        'eol-last': 'off', // Require or disallow newline at the end of files
        'func-call-spacing': ['warn', 'never'], // Require or disallow spacing between function identifiers and their invocations
        'function-call-argument-newline': ['warn', 'consistent'], // Enforce line breaks between arguments of a function call
        'function-paren-newline': ['warn', 'never'], // Enforce consistent line breaks inside function parentheses
        'generator-star-spacing': ['warn'], // Enforce consistent spacing around `*` operators in generator functions
        'implicit-arrow-linebreak': ['warn', 'beside'], // Enforce the location of arrow function bodies
        indent: ['warn', 4], // Enforce consistent indentation
        'jsx-quotes': ['off'], // Enforce the consistent use of either double or single quotes in JSX attributes
        'key-spacing': ['warn', { beforeColon: false, afterColon: true, }], // Enforce consistent spacing between keys and values in object literal properties
        'keyword-spacing': ['off'], // Enforce consistent spacing before and after keywords
        'line-comment-position': ['off', 'above'], // Enforce position of line comments
        'linebreak-style': ['off'], // Enforce consistent linebreak style
        'lines-around-comment': ['off', {
            beforeBlockComment: false,
            beforeLineComment: true,
        }], // Require empty lines around comments
        'lines-between-class-members': ['off'], // Require or disallow an empty line between class members
        'max-len': ['off'], // Enforce a maximum line length
        'max-statements-per-line': ['off'], // Enforce a maximum number of statements allowed per line
        'multiline-ternary': ['off'], // Enforce newlines between operands of ternary expressions
        'new-parens': ['off'], // Enforce or disallow parentheses when invoking a constructor with no arguments
        'newline-per-chained-call': ['warn', {
            ignoreChainWithDepth: 1,
        }], // Require a newline after each call in a method chain
        'no-extra-parens': ['off'], // Disallow unnecessary parentheses
        'no-mixed-spaces-and-tabs': ['off'], // Disallow mixed spaces and tabs for indentation
        'no-multi-spaces': ['off'], // Disallow multiple spaces
        'no-multiple-empty-lines': ['off'], // Disallow multiple empty lines
        'no-tabs': ['off'], // Disallow all tabs
        'no-trailing-spaces': ['off'], // Disallow trailing whitespace at the end of lines
        'no-whitespace-before-property': ['off'], // Disallow whitespace before properties
        'nonblock-statement-body-position': ['warn'], // Enforce the location of single-line statements
        'object-curly-newline': ['off'], // Enforce consistent line breaks after opening and before closing braces
        'object-curly-spacing': ['off'], // Enforce consistent spacing inside braces
        'object-property-newline': ['off'], // Enforce placing object properties on separate lines
        'operator-linebreak': ['off'], // Enforce consistent linebreak style for operators
        'padded-blocks': ['off'], // Require or disallow padding within blocks
        'padding-line-between-statements': ['off'], // Require or disallow padding lines between statements
        quotes: ['warn', 'single'], // Enforce the consistent use of either backticks, double, or single quotes
        'rest-spread-spacing': ['off'], // Enforce spacing between rest and spread operators and their expressions
        semi: ['off'], // Require or disallow semicolons instead of ASI
        'semi-spacing': ['off'], // Enforce consistent spacing before and after semicolons
        'semi-style': ['off'], // Enforce location of semicolons
        'space-before-blocks': ['warn'], // Enforce consistent spacing before blocks
        'space-before-function-paren': ['off', {
            'anonymous': 'always',
            'named': 'always',
            'asyncArrow': 'always',
        }], // Enforce consistent spacing before `function` definition opening parenthesis
        'space-in-parens': ['off'], // Enforce consistent spacing inside parentheses
        'space-infix-ops': ['off'], // Require spacing around infix operators
        'space-unary-ops': ['off'], // Enforce consistent spacing before or after unary operators
        'switch-colon-spacing': ['off'], // Enforce spacing around colons of switch statements
        'template-curly-spacing': ['off'], // Require or disallow spacing around embedded expressions of template strings
        'template-tag-spacing': ['off'], // Require or disallow spacing between template tags and their literals
        'unicode-bom': ['off'], // Require or disallow Unicode byte order mark (BOM)
        'wrap-iife': ['warn'], // Require parentheses around immediate `function` invocations
        'wrap-regex': ['warn'], // Require parenthesis around regex literals
        'yield-star-spacing': ['off'], // Require or disallow spacing around the `*` in `yield*` expressions
    },
} as Linter.Config;
