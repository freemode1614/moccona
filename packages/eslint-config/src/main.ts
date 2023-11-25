import { resolve } from 'node:path';

import { Linter } from 'eslint';
import { readJSONSync } from 'fs-extra';
import { type PackageJson } from 'pkg-types';

import jestRules from './overrides/jest';
import jsonOverride from './overrides/json';
import reactOverride from './overrides/react';
import tsOverride from './overrides/typescript';
import logicRules from './rules/logic';
import styleRules from './rules/styles';
import suggestionRules from './rules/suggestions';

const isXXXProject = (xxx: string) => {
    const pkg: PackageJson = readJSONSync(resolve(process.cwd(), 'package.json'), { throws: true, });
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
    'comments',
    'compat',
    'import',
    'jest',
    'jsdoc',
    'n',
    'unicorn',
    'simple-import-sort'
];

if (isReactProject) {
    overrides.push(reactOverride);
}

export default {
    overrides,
    plugins,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
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
    extends: [
        'plugin:import/recommended'
    ],
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
