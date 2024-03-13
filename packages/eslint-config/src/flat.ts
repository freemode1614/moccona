import { Linter } from 'eslint';
import { flatJestOverride } from './overrides/jest';

export default [
    flatJestOverride
] as Linter.FlatConfig[];
