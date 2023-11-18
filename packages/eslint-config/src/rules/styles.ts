/**
 * Layout & Formatting
 * @link {https://zh-hans.eslint.org/docs/latest/rules/#layout--formatting}
 */

import { Linter } from "eslint";

export default {
    rules: {
        "array-bracket-newline": "off", // Enforce linebreaks after opening and before closing array brackets
        "array-bracket-spacing": "off", // Enforce consistent spacing inside array brackets
        "array-element-newline": "off", // Enforce line breaks after each array element
        "arrow-parens": "off", // Require parentheses around arrow function arguments
        "arrow-spacing": "off", // Enforce consistent spacing before and after the arrow in arrow functions
        "block-spacing": "off", // Disallow or enforce spaces inside of blocks after opening block and before closing block
        "brace-style": "off", // Enforce consistent brace style for blocks
        "comma-dangle": "off", // Require or disallow trailing commas
        "comma-spacing": "off", // Enforce consistent spacing before and after commas
        "comma-style": "off", // Enforce consistent comma style
        "computed-property-spacing": "off", // Enforce consistent spacing inside computed property brackets
        "dot-location": "off", // Enforce consistent newlines before and after dots
        "eol-last": "off", // Require or disallow newline at the end of files
        "func-call-spacing": "off", // Require or disallow spacing between function identifiers and their invocations
        "function-call-argument-newline": "off", // Enforce line breaks between arguments of a function call
        "function-paren-newline": "off", // Enforce consistent line breaks inside function parentheses
        "generator-star-spacing": "off", // Enforce consistent spacing around `*` operators in generator functions
        "implicit-arrow-linebreak": "off", // Enforce the location of arrow function bodies
        indent: "off", // Enforce consistent indentation
        "jsx-quotes": "off", // Enforce the consistent use of either double or single quotes in JSX attributes
        "key-spacing": "off", // Enforce consistent spacing between keys and values in object literal properties
        "keyword-spacing": "off", // Enforce consistent spacing before and after keywords
        "line-comment-position": "off", // Enforce position of line comments
        "linebreak-style": "off", // Enforce consistent linebreak style
        "lines-around-comment": "off", // Require empty lines around comments
        "lines-between-class-members": "off", // Require or disallow an empty line between class members
        "max-len": "off", // Enforce a maximum line length
        "max-statements-per-line": "off", // Enforce a maximum number of statements allowed per line
        "multiline-ternary": "off", // Enforce newlines between operands of ternary expressions
        "new-parens": "off", // Enforce or disallow parentheses when invoking a constructor with no arguments
        "newline-per-chained-call": "off", // Require a newline after each call in a method chain
        "no-extra-parens": "off", // Disallow unnecessary parentheses
        "no-mixed-spaces-and-tabs": "off", // Disallow mixed spaces and tabs for indentation
        "no-multi-spaces": "off", // Disallow multiple spaces
        "no-multiple-empty-lines": "off", // Disallow multiple empty lines
        "no-tabs": "off", // Disallow all tabs
        "no-trailing-spaces": "off", // Disallow trailing whitespace at the end of lines
        "no-whitespace-before-property": "off", // Disallow whitespace before properties
        "nonblock-statement-body-position": "off", // Enforce the location of single-line statements
        "object-curly-newline": "off", // Enforce consistent line breaks after opening and before closing braces
        "object-curly-spacing": "off", // Enforce consistent spacing inside braces
        "object-property-newline": "off", // Enforce placing object properties on separate lines
        "operator-linebreak": "off", // Enforce consistent linebreak style for operators
        "padded-blocks": "off", // Require or disallow padding within blocks
        "padding-line-between-statements": "off", // Require or disallow padding lines between statements
        quotes: "off", // Enforce the consistent use of either backticks, double, or single quotes
        "rest-spread-spacing": "off", // Enforce spacing between rest and spread operators and their expressions
        semi: "off", // Require or disallow semicolons instead of ASI
        "semi-spacing": "off", // Enforce consistent spacing before and after semicolons
        "semi-style": "off", // Enforce location of semicolons
        "space-before-blocks": "off", // Enforce consistent spacing before blocks
        "space-before-function-paren": "off", // Enforce consistent spacing before `function` definition opening parenthesis
        "space-in-parens": "off", // Enforce consistent spacing inside parentheses
        "space-infix-ops": "off", // Require spacing around infix operators
        "space-unary-ops": "off", // Enforce consistent spacing before or after unary operators
        "switch-colon-spacing": "off", // Enforce spacing around colons of switch statements
        "template-curly-spacing": "off", // Require or disallow spacing around embedded expressions of template strings
        "template-tag-spacing": "off", // Require or disallow spacing between template tags and their literals
        "unicode-bom": "off", // Require or disallow Unicode byte order mark (BOM)
        "wrap-iife": "off", // Require parentheses around immediate `function` invocations
        "wrap-regex": "off", // Require parenthesis around regex literals
        "yield-star-spacing": "off", // Require or disallow spacing around the `*` in `yield*` expressions
    },
} as Linter.Config;
