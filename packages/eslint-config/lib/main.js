"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = require("node:path");
const fs_extra_1 = require("fs-extra");
const semver_1 = __importDefault(require("semver"));
const jest_1 = __importDefault(require("./overrides/jest"));
const json_1 = __importDefault(require("./overrides/json"));
const react_1 = __importDefault(require("./overrides/react"));
const typescript_1 = __importDefault(require("./overrides/typescript"));
const logic_1 = __importDefault(require("./rules/logic"));
const styles_1 = __importDefault(require("./rules/styles"));
const suggestions_1 = __importDefault(require("./rules/suggestions"));
const pkg = (0, fs_extra_1.readJSONSync)((0, node_path_1.resolve)(process.cwd(), 'package.json'), {
    throws: false,
});
if (!pkg) {
    throw new Error('No `package.json` found in local, make sure you using eslint in a valid nodejs package which include a `package.json` file.');
}
const isXXXProject = (xxx) => {
    const deps = {
        ...(pkg.dependencies ?? {}),
        ...(pkg.devDependencies ?? {}),
        ...(pkg.peerDependencies ?? {}),
    };
    return Object.keys(deps).
        includes(xxx);
};
const isReactProject = isXXXProject('react');
const isUsingPrettier = isXXXProject('prettier');
const isESModule = pkg.type === 'module';
// Default overrides.
let overrides = [typescript_1.default, jest_1.default, json_1.default];
const plugins = [
    'compat',
    'import',
    'jsdoc',
    'n',
    'simple-import-sort',
    'unicorn'
];
if (isReactProject) {
    try {
        const reactPkg = (0, fs_extra_1.readJSONSync)((0, node_path_1.resolve)(process.cwd(), 'node_modules/react/package.json'));
        if (reactPkg) {
            const satisfied = semver_1.default.satisfies(reactPkg.version, '>=17');
            if (satisfied) {
                react_1.default.extends.push('plugin:react/jsx-runtime');
            }
        }
    }
    catch (error) {
        //
    }
    overrides.push(react_1.default);
}
if (isUsingPrettier) {
    overrides = overrides.map((ov) => {
        return {
            ...ov,
            extends: [
                ...(ov.extends ?? []),
                'plugin:prettier/recommended',
                'prettier'
            ],
        };
    });
}
exports.default = {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        worker: true,
        node: true,
    },
    parserOptions: {
        // set to "script" (default) or "module" if your code is in ECMAScript modules.
        sourceType: isESModule ? 'module' : 'script',
        // set "latest" to use the most recently supported version.
        ecmaVersion: 'latest',
        ecmaFeatures: {
            // enable global strict mode (if ecmaVersion is 5 or greater)
            impliedStrict: true,
            experimentalObjectRestSpread: true,
        },
    },
    // Ignore .css and .d.ts files.
    ignorePatterns: ['**/*.css', '**/*.d.ts'],
    extends: ['plugin:import/recommended'],
    overrides,
    plugins,
    rules: {
        ...logic_1.default.rules,
        ...(isUsingPrettier ? {} : styles_1.default.rules),
        ...suggestions_1.default.rules,
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
    },
};
