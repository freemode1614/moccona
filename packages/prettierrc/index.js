export default {
    /**
     * Use curious ternaries, with the question mark after the condition.
     */
    experimentalTernaries: false,
    /**
     * Specify the line length that the printer will wrap on.
     */
    printWidth: 120,
    /**
     * Specify the number of spaces per indentation-level.
     */
    tabWidth: 2,
    /**
     * Indent lines with tabs instead of spaces.
     */
    useTabs: false,
    /**
     * Print semicolons at the ends of statements.
     */
    semi: true,
    /**
     * Use single quotes instead of double quotes.
     */
    singleQuote: false,
    /**
     * Use single quotes instead of double quotes in JSX.
     */
    jsxSingleQuote: false,
    /**
     * Change when properties in objects are quoted.
     * Valid options:
     *  - "as-needed" - Only add quotes around object properties where required.
     *  - "consistent" - If at least one property in an object requires quotes, quote all properties.
     *  - "preserve" - Respect the input use of quotes in object properties.
     */
    quoteProps: 'as-needed',
    /**
     * Print trailing commas wherever possible in multi-line comma-separated syntactic structures. (A single-line array, for example, never gets trailing commas.)
     */
    trailingComma: 'all',
    /**
     * Print spaces between brackets in object literals.
     */
    bracketSpacing: true,
    /**
     * Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
     */
    bracketSameLine: false,
    /**
     * @deprecated
     */
    jsxBracketSameLine: false,
    /**
     * Include parentheses around a sole arrow function parameter.
     */
    arrowParens: 'always',
    /**
     * Format only a segment of a file.

These two options can be used to format code starting and ending at a given character offset (inclusive and exclusive, respectively).
     */
    rangeStart: 0,
    rangeEnd: Infinity,
    /**
     * Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file. This is very useful when gradually transitioning large, unformatted codebases to Prettier.
     */
    requirePragma: false,
    insertPragma: false,
    htmlWhitespaceSensitivity: 'css',
    vueIndentScriptAndStyle: false,
    endOfLine: 'auto',
    embeddedLanguageFormatting: 'off',
    singleAttributePerLine: false,
};
