/**
 * Possible Problems
 * @link {https://zh-hans.eslint.org/docs/latest/rules/#possible-problems}
 */

import { Linter } from "eslint";

export default {
    rules: {
        "array-callback-return": "off", // Enforce return statements in callbacks of array methods
        "constructor-super": "off", // "Require `super()` calls in constructors"
        "for-direction": "off", // "Enforce "for" loop update clause moving the counter in the right direction"
        "getter-return": "off", // "Enforce `return` statements in getters"
        "no-async-promise-executor": "off", // "Disallow using an async function as a Promise executor"
        "no-await-in-loop": "off", // "Disallow `await` inside of loops"
        "no-class-assign": "off", // "Disallow reassigning class members"
        "no-compare-neg-zero": "off", // "Disallow comparing against -0"
        "no-cond-assign": "off", // "Disallow assignment operators in conditional expressions"
        "no-const-assign": "off", // "Disallow reassigning `const` variables"
        "no-constant-binary-expression": "off", // "Disallow expressions where the operation doesn't affect the value"
        "no-constant-condition": "off", // "Disallow constant expressions in conditions"
        "no-constructor-return": "off", // "Disallow returning value from constructor"
        "no-control-regex": "off", // "Disallow control characters in regular expressions"
        "no-debugger": "off", // "Disallow the use of `debugger`"
        "no-dupe-args": "off", // "Disallow duplicate arguments in `function` definitions"
        "no-dupe-class-members": "off", // "Disallow duplicate class members"
        "no-dupe-else-if": "off", // "Disallow duplicate conditions in if-else-if chains"
        "no-dupe-keys": "off", // "Disallow duplicate keys in object literals"
        "no-duplicate-case": "off", // "Disallow duplicate case labels"
        "no-duplicate-imports": "off", // "Disallow duplicate module imports"
        "no-empty-character-class": "off", // "Disallow empty character classes in regular expressions"
        "no-empty-pattern": "off", // "Disallow empty destructuring patterns"
        "no-ex-assign": "off", // "Disallow reassigning exceptions in `catch` clauses"
        "no-fallthrough": "off", // "Disallow fallthrough of `case` statements"
        "no-func-assign": "off", // "Disallow reassigning `function` declarations"
        "no-import-assign": "off", // "Disallow assigning to imported bindings"
        "no-inner-declarations": "off", // "Disallow variable or `function` declarations in nested blocks"
        "no-invalid-regexp": "off", // "Disallow invalid regular expression strings in `RegExp` constructors"
        "no-irregular-whitespace": "off", // "Disallow irregular whitespace"
        "no-loss-of-precision": "off", // "Disallow literal numbers that lose precision"
        "no-misleading-character-class": "off", // "Disallow characters which are made with multiple code points in character class syntax"
        "no-new-native-nonconstructor": "off", // "Disallow `new` operators with global non-constructor functions"
        "no-new-symbol": "off", // "Disallow `new` operators with the `Symbol` object"
        "no-obj-calls": "off", // "Disallow calling global object properties as functions"
        "no-promise-executor-return": "off", // "Disallow returning values from Promise executor functions"
        "no-prototype-builtins": "off", // "Disallow calling some `Object.prototype` methods directly on objects"
        "no-self-assign": "off", // "Disallow assignments where both sides are exactly the same"
        "no-self-compare": "off", // "Disallow comparisons where both sides are exactly the same"
        "no-setter-return": "off", // "Disallow returning values from setters"
        "no-sparse-arrays": "off", // "Disallow sparse arrays"
        "no-template-curly-in-string": "off", // "Disallow template literal placeholder syntax in regular strings"
        "no-this-before-super": "off", // "Disallow `this`/`super` before calling `super()` in constructors"
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
        "require-atomic-updates": "off", // "Disallow assignments that can lead to race conditions due to usage of `await` or `yield`"
        "use-isnan": "off", // "Require calls to `isNaN()` when checking for `NaN`"
        "valid-typeof": "off", // "Enforce comparing `typeof` expressions against valid strings"
    },
} as Linter.Config;
