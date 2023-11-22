/**
 * Possible Problems
 * @link {https://zh-hans.eslint.org/docs/latest/rules/#possible-problems}
 */

import { Linter } from "eslint";

export default {
    rules: {
        "array-callback-return": "off", // Enforce return statements in callbacks of array methods
        "constructor-super": "error", // "Require `super()` calls in constructors"
        "for-direction": "off", // "Enforce "for" loop update clause moving the counter in the right direction"
        "getter-return": "error", // "Enforce `return` statements in getters"
        "no-async-promise-executor": "off", // "Disallow using an async function as a Promise executor"
        "no-await-in-loop": "error", // "Disallow `await` inside of loops"
        "no-class-assign": "off", // "Disallow reassigning class members"
        "no-compare-neg-zero": "warn", // "Disallow comparing against -0"
        "no-cond-assign": "error", // "Disallow assignment operators in conditional expressions"
        "no-const-assign": "error", // "Disallow reassigning `const` variables"
        "no-constant-binary-expression": "warn", // "Disallow expressions where the operation doesn't affect the value"
        "no-constant-condition": "warn", // "Disallow constant expressions in conditions"
        "no-constructor-return": "warn", // "Disallow returning value from constructor"
        "no-control-regex": "off", // "Disallow control characters in regular expressions"
        "no-debugger": "error", // "Disallow the use of `debugger`"
        "no-dupe-args": "error", // "Disallow duplicate arguments in `function` definitions"
        "no-dupe-class-members": "error", // "Disallow duplicate class members"
        "no-dupe-else-if": "error", // "Disallow duplicate conditions in if-else-if chains"
        "no-dupe-keys": "error", // "Disallow duplicate keys in object literals"
        "no-duplicate-case": "error", // "Disallow duplicate case labels"
        "no-duplicate-imports": "error", // "Disallow duplicate module imports"
        "no-empty-character-class": "error", // "Disallow empty character classes in regular expressions"
        "no-empty-pattern": "error", // "Disallow empty destructuring patterns"
        "no-ex-assign": "error", // "Disallow reassigning exceptions in `catch` clauses"
        "no-fallthrough": "error", // "Disallow fallthrough of `case` statements"
        "no-func-assign": "warn", // "Disallow reassigning `function` declarations"
        "no-import-assign": "error", // "Disallow assigning to imported bindings"
        "no-inner-declarations": "off", // "Disallow variable or `function` declarations in nested blocks"
        "no-invalid-regexp": "error", // "Disallow invalid regular expression strings in `RegExp` constructors"
        "no-irregular-whitespace": "off", // "Disallow irregular whitespace"
        "no-loss-of-precision": "error", // "Disallow literal numbers that lose precision"
        "no-misleading-character-class": "off", // "Disallow characters which are made with multiple code points in character class syntax"
        "no-new-native-nonconstructor": "error", // "Disallow `new` operators with global non-constructor functions"
        "no-new-symbol": "error", // "Disallow `new` operators with the `Symbol` object"
        "no-obj-calls": "error", // "Disallow calling global object properties as functions"
        "no-promise-executor-return": "warn", // "Disallow returning values from Promise executor functions"
        "no-prototype-builtins": "warn", // "Disallow calling some `Object.prototype` methods directly on objects"
        "no-self-assign": "error", // "Disallow assignments where both sides are exactly the same"
        "no-self-compare": "error", // "Disallow comparisons where both sides are exactly the same"
        "no-setter-return": "error", // "Disallow returning values from setters"
        "no-sparse-arrays": "off", // "Disallow sparse arrays"
        "no-template-curly-in-string": "error", // "Disallow template literal placeholder syntax in regular strings"
        "no-this-before-super": "error", // "Disallow `this`/`super` before calling `super()` in constructors"
        "no-undef": "off", // "Disallow the use of undeclared variables unless mentioned in `/*global */` comments"
        "no-unexpected-multiline": "off", // "Disallow confusing multiline expressions"
        "no-unmodified-loop-condition": "off", // "Disallow unmodified loop conditions"
        "no-unreachable": "off", // "Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements"
        "no-unreachable-loop": "off", // "Disallow loops with a body that allows only one iteration"
        "no-unsafe-finally": "off", // "Disallow control flow statements in `finally` blocks"
        "no-unsafe-negation": "off", // "Disallow negating the left operand of relational operators"
        "no-unsafe-optional-chaining": "off", // "Disallow use of optional chaining in contexts where the `undefined` value is not allowed"
        "no-unused-private-class-members": "off", // "Disallow unused private class members"
        "no-unused-vars": "error", // "Disallow unused variables"
        "no-use-before-define": "off", // "Disallow the use of variables before they are defined"
        "no-useless-backreference": "off", // "Disallow useless backreferences in regular expressions"
        "require-atomic-updates": "warn", // "Disallow assignments that can lead to race conditions due to usage of `await` or `yield`"
        "use-isnan": "error", // "Require calls to `isNaN()` when checking for `NaN`"
        "valid-typeof": "error", // "Enforce comparing `typeof` expressions against valid strings"
    },
} as Linter.Config;
