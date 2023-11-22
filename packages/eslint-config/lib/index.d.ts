declare const env: {
    [name: string]: boolean;
} | undefined, ignorePatterns: string | string[] | undefined, overrides: import("eslint").Linter.ConfigOverride<import("eslint").Linter.RulesRecord>[] | undefined, parserOptions: import("eslint").Linter.ParserOptions | undefined, plugins: string[] | undefined, rules: Partial<import("eslint").Linter.RulesRecord> | undefined;
export { env, ignorePatterns, overrides, parserOptions, plugins, rules };
