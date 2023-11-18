declare const overrides: import("eslint").Linter.ConfigOverride<import("eslint").Linter.RulesRecord>[] | undefined, plugins: string[] | undefined, env: {
    [name: string]: boolean;
} | undefined, parserOptions: import("eslint").Linter.ParserOptions | undefined, rules: Partial<import("eslint").Linter.RulesRecord> | undefined;
export { overrides, plugins, env, parserOptions, rules };
