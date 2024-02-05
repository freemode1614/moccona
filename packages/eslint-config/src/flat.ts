import { Linter } from 'eslint';

import config from './main';

const { overrides, } = config;

export default [
    //
    ...overrides
] as Linter.FlatConfig[];
