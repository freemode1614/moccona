/**
 * Suggestions
 * @link {https://zh-hans.eslint.org/docs/latest/rules/#suggestions}
 */

import { Linter } from "eslint";

export default {
    rules: {
        "accessor-pairs": "off", // Enforce getter and setter pairs in objects and classes
        "arrow-body-style": "off", // Require braces around arrow function bodies
        "block-scoped-var": "off", // Enforce the use of variables within the scope they are defined
        camelcase: "off", // Enforce camelcase naming convention
        "capitalized-comments": "off", // Enforce or disallow capitalization of the first letter of a comment
        "class-methods-use-this": "off", // Enforce that class methods utilize `this`
        "complexity": "off", // Enforce a maximum cyclomatic complexity allowed in a program
        "consistent-return": "off", // Require `return` statements to either always or never specify values
        "consistent-this": "off", // Enforce consistent naming when capturing the current execution context
        "curly": "off", // Enforce consistent brace style for all control statements
        "default-case": "off", // Require `default` cases in `switch` statements
        "default-case-last": "off", // Enforce default clauses in switch statements to be last
        "default-param-last": "off", // Enforce default parameters to be last
        "dot-notation": "off", // Enforce dot notation whenever possible
        "eqeqeq": "off", // Require the use of `===` and `!==`
        "func-name-matching": "off", // Require function names to match the name of the variable or property to which they are assigned
        "func-names": "off", // Require or disallow named `function` expressions
        "func-style": "off", // Enforce the consistent use of either `function` declarations or expressions
        "grouped-accessor-pairs": "off", // Require grouped accessor pairs in object literals and classes
        "guard-for-in": "off", // Require `for-in` loops to include an `if` statement
        "id-denylist": "off", // Disallow specified identifiers
        "id-length": "off", // Enforce minimum and maximum identifier lengths
        "id-match": "off", // Require identifiers to match a specified regular expression
        "init-declarations": "off", // Require or disallow initialization in variable declarations
        "logical-assignment-operators": "off", // Require or disallow logical assignment logical operator shorthand
        "max-classes-per-file": "off", // Enforce a maximum number of classes per file
        "max-depth": "off", // Enforce a maximum depth that blocks can be nested
        "max-lines": "off", // Enforce a maximum number of lines per file
        "max-lines-per-function": "off", // Enforce a maximum number of lines of code in a function
        "max-nested-callbacks": "off", // Enforce a maximum depth that callbacks can be nested
        "max-params": "off", // Enforce a maximum number of parameters in function definitions
        "max-statements": "off", // Enforce a maximum number of statements allowed in function blocks
        "multiline-comment-style": "off", // Enforce a particular style for multiline comments
        "new-cap": "off", // Require constructor names to begin with a capital letter
        "no-alert": "off", // Disallow the use of `alert`, `confirm`, and `prompt`
        "no-array-constructor": "off", // Disallow `Array` constructors
        "no-bitwise": "off", // Disallow bitwise operators
        "no-caller": "off", // Disallow the use of `arguments.caller` or `arguments.callee`
        "no-case-declarations": "off", // Disallow lexical declarations in case clauses
        "no-confusing-arrow": "off", // Disallow arrow functions where they could be confused with comparisons
        "no-console": "off", // Disallow the use of `console`
        "no-continue": "off", // Disallow `continue` statements
        "no-delete-var": "off", // Disallow deleting variables
        "no-div-regex": "off", // Disallow division operators explicitly at the beginning of regular expressions
        "no-else-return": "off", // Disallow `else` blocks after `return` statements in `if` statements
        "no-empty": "off", // Disallow empty block statements
        "no-empty-function": "off", // Disallow empty functions
        "no-empty-static-block": "off", // Disallow empty static blocks
        "no-eq-null": "off", // Disallow `null` comparisons without type-checking operators
        "no-eval": "off", // Disallow the use of `eval()`
        "no-extend-native": "off", // Disallow extending native types
        "no-extra-bind": "off", // Disallow unnecessary calls to `.bind()`
        "no-extra-boolean-cast": "off", // Disallow unnecessary boolean casts
        "no-extra-label": "off", // Disallow unnecessary labels
        "no-extra-semi": "off", // Disallow unnecessary semicolons
        "no-floating-decimal": "off", // Disallow leading or trailing decimal points in numeric literals
        "no-global-assign": "off", // Disallow assignments to native objects or read-only global variables
        "no-implicit-coercion": "off", // Disallow shorthand type conversions
        "no-implicit-globals": "off", // Disallow declarations in the global scope
        "no-implied-eval": "off", // Disallow the use of `eval()`-like methods
        "no-inline-comments": "off", // Disallow inline comments after code
        "no-invalid-this": "off", // Disallow use of `this` in contexts where the value of `this` is `undefined`
        "no-iterator": "off", // Disallow the use of the `__iterator__` property
        "no-label-var": "off", // Disallow labels that share a name with a variable
        "no-labels": "off", // Disallow labeled statements
        "no-lone-blocks": "off", // Disallow unnecessary nested blocks
        "no-lonely-if": "off", // Disallow `if` statements as the only statement in `else` blocks
        "no-loop-func": "off", // Disallow function declarations that contain unsafe references inside loop statements
        "no-magic-numbers": "off", // Disallow magic numbers
        "no-mixed-operators": "off", // Disallow mixed binary operators
        "no-multi-assign": "off", // Disallow use of chained assignment expressions
        "no-multi-str": "off", // Disallow multiline strings
        "no-negated-condition": "off", // Disallow negated conditions
        "no-nested-ternary": "off", // Disallow nested ternary expressions
        "no-new": "off", // Disallow `new` operators outside of assignments or comparisons
        "no-new-func": "off", // Disallow `new` operators with the `Function` object
        "no-new-object": "off", // Disallow `Object` constructors
        "no-new-wrappers": "off", // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
        "no-nonoctal-decimal-escape": "off", // Disallow `\8` and `\9` escape sequences in string literals
        "no-octal": "off", // Disallow octal literals
        "no-octal-escape": "off", // Disallow octal escape sequences in string literals
        "no-param-reassign": "off", // Disallow reassigning `function` parameters
        "no-plusplus": "off", // Disallow the unary operators `++` and `--`
        "no-proto": "off", // Disallow the use of the `__proto__` property
        "no-redeclare": "off", // Disallow variable redeclaration
        "no-regex-spaces": "off", // Disallow multiple spaces in regular expressions
        "no-restricted-exports": "off", // Disallow specified names in exports
        "no-restricted-globals": "off", // Disallow specified global variables
        "no-restricted-imports": "off", // Disallow specified modules when loaded by `import`
        "no-restricted-properties": "off", // Disallow certain properties on certain objects
        "no-restricted-syntax": "off", // Disallow specified syntax
        "no-return-assign": "off", // Disallow assignment operators in `return` statements
        "no-return-await": "off", // Disallow unnecessary `return await`
        "no-script-url": "off", // Disallow `javascript:` urls
        "no-sequences": "off", // Disallow comma operators
        "no-shadow": "off", // Disallow variable declarations from shadowing variables declared in the outer scope
        "no-shadow-restricted-names": "off", // Disallow identifiers from shadowing restricted names
        "no-ternary": "off", // Disallow ternary operators
        "no-throw-literal": "off", // Disallow throwing literals as exceptions
        "no-undef-init": "off", // Disallow initializing variables to `undefined`
        "no-undefined": "off", // Disallow the use of `undefined` as an identifier
        "no-underscore-dangle": "off", // Disallow dangling underscores in identifiers
        "no-unneeded-ternary": "off", // Disallow ternary operators when simpler alternatives exist
        "no-unused-expressions": "off", // Disallow unused expressions
        "no-unused-labels": "off", // Disallow unused labels
        "no-useless-call": "off", // Disallow unnecessary calls to `.call()` and `.apply()`
        "no-useless-catch": "off", // Disallow unnecessary `catch` clauses
        "no-useless-computed-key": "off", // Disallow unnecessary computed property keys in objects and classes
        "no-useless-concat": "off", // Disallow unnecessary concatenation of literals or template literals
        "no-useless-constructor": "off", // Disallow unnecessary constructors
        "no-useless-escape": "off", // Disallow unnecessary escape characters
        "no-useless-rename": "off", // Disallow renaming import, export, and destructured assignments to the same name
        "no-useless-return": "off", // Disallow redundant return statements
        "no-var": "off", // Require `let` or `const` instead of `var`
        "no-void": "off", // Disallow `void` operators
        "no-warning-comments": "off", // Disallow specified warning terms in comments
        "no-with": "off", // Disallow `with` statements
        "object-shorthand": "off", // Require or disallow method and property shorthand syntax for object literals
        "one-var": "off", // Enforce variables to be declared either together or separately in functions
        "one-var-declaration-per-line": "off", // Require or disallow newlines around variable declarations
        "operator-assignment": "off", // Require or disallow assignment operator shorthand where possible
        "prefer-arrow-callback": "off", // Require using arrow functions for callbacks
        "prefer-const": "off", // Require `const` declarations for variables that are never reassigned after declared
        "prefer-destructuring": "off", // Require destructuring from arrays and/or objects
        "prefer-exponentiation-operator": "off", // Disallow the use of `Math.pow` in favor of the `**` operator
        "prefer-named-capture-group": "off", // Enforce using named capture group in regular expression
        "prefer-numeric-literals": "off", // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
        "prefer-object-has-own": "off", // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
        "prefer-object-spread": "off", // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead
        "prefer-promise-reject-errors": "off", // Require using Error objects as Promise rejection reasons
        "prefer-regex-literals": "off", // Disallow use of the `RegExp` constructor in favor of regular expression literals
        "prefer-rest-params": "off", // Require rest parameters instead of `arguments`
        "prefer-spread": "off", // Require spread operators instead of `.apply()`
        "prefer-template": "off", // Require template literals instead of string concatenation
        "quote-props": "off", // Require quotes around object literal property names
        "radix": "off", // Enforce the consistent use of the radix argument when using `parseInt()`
        "require-await": "off", // Disallow async functions which have no `await` expression
        "require-unicode-regexp": "off", // Enforce the use of `u` flag on RegExp
        "require-yield": "off", // Require generator functions to contain `yield`
        "sort-imports": "off", // Enforce sorted import declarations within modules
        "sort-keys": "off", // Require object keys to be sorted
        "sort-vars": "off", // Require variables within the same declaration block to be sorted
        "spaced-comment": "off", // Enforce consistent spacing after the `//` or `/*` in a comment
        strict: "off", // Require or disallow strict mode directives
        "symbol-description": "off", // Require symbol descriptions
        "vars-on-top": "off", // Require `var` declarations be placed at the top of their containing scope
        yoda: "off", // Require or disallow "Yoda" conditions
    },
} as Linter.Config;
