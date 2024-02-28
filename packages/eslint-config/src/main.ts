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

const pkg: PackageJson = readJSONSync(resolve(process.cwd(), 'package.json'), {
    throws: false,
});

if (!pkg) {
    throw new Error(
        'No `package.json` found in local, make sure you using eslint in a valid nodejs package which include a `package.json` file.'
    );
}

const isXXXProject = (dep: string) => {
    const deps = {
        ...(pkg.dependencies ?? {}),
        ...(pkg.devDependencies ?? {}),
        ...(pkg.peerDependencies ?? {}),
    };

    return Object.keys(deps).
        includes(dep);
};

const isReactProject = isXXXProject('react');

const isUsingPrettier = isXXXProject('prettier');

const isESModule = pkg.type === 'module';

// Default overrides.
let overrides: Linter.ConfigOverride[] = [tsOverride, jestRules, jsonOverride];

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
                (reactOverride.extends as Array<string>)!.push(
                    'plugin:react/jsx-runtime'
                );
            }
        }
    } catch (error) {
        //
    }

    overrides.push(reactOverride);
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
