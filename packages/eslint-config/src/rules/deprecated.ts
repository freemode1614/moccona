/**
 * Deprecated
 * @link {https://zh-hans.eslint.org/docs/latest/rules/": "off#, // deprecated}
 */

import { Linter } from "eslint";

export default {
    rules: {
        "callback-return": "off", // deprecated
        "global-require": "off", // deprecated
        "handle-callback-err": "off", // deprecated
        "id-blacklist": "off", // deprecated Replaced by id-denylist
        "indent-legacy": "off", // deprecated Replaced by indent
        "lines-around-directive": "off", // deprecated Replaced by padding-line-between-statements
        "newline-after-var": "off", // deprecated Replaced by padding-line-between-statements
        "newline-before-return": "off", // deprecated Replaced by padding-line-between-statements
        "no-buffer-constructor": "off", // deprecated
        "no-catch-shadow": "off", // deprecated Replaced by no-shadow
        "no-mixed-requires": "off", // deprecated
        "no-native-reassign": "off", // deprecated Replaced by no-global-assign
        "no-negated-in-lhs": "off", // deprecated Replaced by no-unsafe-negation
        "no-new-require": "off", // deprecated
        "no-path-concat": "off", // deprecated
        "no-process-env": "off", // deprecated
        "no-process-exit": "off", // deprecated
        "no-restricted-modules": "off", // deprecated
        "no-spaced-func": "off", // deprecated Replaced by func-call-spacing
        "no-sync": "off", // deprecated
        "prefer-reflect": "off", // deprecated
        "require-jsdoc": "off", // deprecated
        "valid-jsdoc": "off", // deprecated
    },
} as Linter.Config;
