import { type Linter } from 'eslint';
declare const env: {
    [name: string]: boolean;
} | undefined, ignorePatterns: string | string[] | undefined, overrides: Linter.ConfigOverride<Linter.RulesRecord>[] | undefined, parserOptions: Linter.ParserOptions | undefined, plugins: string[] | undefined, rules: Partial<Linter.RulesRecord> | undefined;
export { env, //
ignorePatterns, overrides, parserOptions, plugins, rules };
