"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = exports.parserOptions = exports.env = exports.plugins = exports.overrides = void 0;
const main_1 = __importDefault(require("./main"));
console.debug(main_1.default);
const { overrides, plugins, env, parserOptions, rules } = main_1.default;
exports.overrides = overrides;
exports.plugins = plugins;
exports.env = env;
exports.parserOptions = parserOptions;
exports.rules = rules;
