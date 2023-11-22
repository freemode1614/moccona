"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = exports.plugins = exports.parserOptions = exports.overrides = exports.ignorePatterns = exports.env = void 0;
const main_1 = __importDefault(require("./main"));
const { env, ignorePatterns, overrides, parserOptions, plugins, rules, } = main_1.default;
exports.env = env;
exports.ignorePatterns = ignorePatterns;
exports.overrides = overrides;
exports.parserOptions = parserOptions;
exports.plugins = plugins;
exports.rules = rules;
