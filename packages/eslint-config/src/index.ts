import { type Linter } from 'eslint';

import config from './main';

const {
    env, //
    ignorePatterns,
    overrides,
    parserOptions,
    plugins,
    rules,
} = config as Linter.Config;

export {
    env, //
    ignorePatterns,
    overrides,
    parserOptions,
    plugins,
    rules
};
