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

const isUsingPrettier = isXXXProject('prettier');

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
    try {
        const reactPkg = readJSONSync(
            resolve(process.cwd(), 'node_modules/react/package.json')
        ) as PackageJson;
        if (reactPkg) {
            const satisfied = semver.satisfies(reactPkg.version!, '>=17');
            if (satisfied) {
                reactOverride.plugins!.push('plugin:react/jsx-runtime');
            }
        }
    } catch (error) {
        //
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
    extends: ['plugin:import/recommended'].concat(
        isUsingPrettier ? ['plugin:prettier/recommended', 'prettier'] : []
    ),
    overrides,
    plugins,
    rules: {
        ...logicRules.rules,
        ...(isUsingPrettier ? {} : styleRules.rules),
        ...suggestionRules.rules,
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
    },
} as Linter.Config;
