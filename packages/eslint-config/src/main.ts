import { resolve } from 'node:path';

import { Linter } from 'eslint';
import { readJSONSync } from 'fs-extra';
import { type PackageJson } from 'pkg-types';
import semver from 'semver';

import jestRules from './overrides/jest';
import jsonOverride from './overrides/json';
import reactOverride from './overrides/react';
import tsOverride from './overrides/typescript';
import logicRules from './rules/logic';
import styleRules from './rules/styles';
import suggestionRules from './rules/suggestions';

let pkg: PackageJson;

const isXXXProject = (xxx: string) => {
    pkg = readJSONSync(resolve(process.cwd(), 'package.json'), {
        throws: false,
    });
    const deps = {
        ...(pkg.dependencies ?? {}),
        ...(pkg.devDependencies ?? {}),
        ...(pkg.peerDependencies ?? {}),
    };

    return Object.keys(deps).
        includes(xxx);
};

const isReactProject = isXXXProject('react');

// Default overrides.
const overrides: Linter.ConfigOverride[] = [
    tsOverride,
    jestRules,
    jsonOverride
];

const plugins: string[] = [
    'compat',
    'import',
    'jsdoc',
    'n',
    'simple-import-sort',
    'unicorn'
];

if (isReactProject) {
    const {
        dependencies = {},
        peerDependencies = {},
        devDependencies = {},
    } = pkg!;

    const deps = { ...dependencies, ...peerDependencies, ...devDependencies, };

    const reactVersion = deps['react'];

    if (reactVersion) {
        const gt17 = semver.gte(reactVersion, '17');
        if (gt17) {
            reactOverride.plugins!.push('plugin:react/jsx-runtime');
        }
    }

    overrides.push(reactOverride);
}

export default {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        worker: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    ignorePatterns: [
        // "__test__/**/*",
        // "*.{spec,test}.{t,j}sx?"
        // Ignore all .d.ts file
        '**/*.d.ts'
    ],
    extends: ['plugin:import/recommended'],
    overrides,
    plugins,
    rules: {
        ...logicRules.rules,
        ...styleRules.rules,
        ...suggestionRules.rules,
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
    },
} as Linter.Config;
