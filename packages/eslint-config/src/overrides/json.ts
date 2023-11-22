/**
 * Rule for test case
 */

import { Linter } from "eslint";

export default {
    files: ["**/*.json"],
    rules: {
        "json/*": ["warn"],
        "json/duplicate-key": "error",
        "json/trailing-comma": "error"
    },
} as Linter.ConfigOverride;
