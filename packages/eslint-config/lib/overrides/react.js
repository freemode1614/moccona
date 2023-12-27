"use strict";
/**
 * React
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    files: ['**/*.tsx', '**/*.jsx'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true, experimentalObjectRestSpread: true, },
    },
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'react-refresh'],
    settings: { react: { version: 'detect', }, },
    rules: {
    // // react
    // 'react/boolean-prop-naming': 'off',
    // 'react/button-has-type': 'off',
    // 'react/default-props-match-prop-types': 'off',
    // 'react/destructuring-assignment': 'off',
    // 'react/display-name': 'off',
    // 'react/forbid-component-props': 'off',
    // 'react/forbid-dom-props': 'off',
    // 'react/forbid-elements': 'off',
    // 'react/forbid-foreign-prop-types': 'off',
    // 'react/forbid-prop-types': 'off',
    // 'react/function-component-definition': [
    //     'warn',
    //     {
    //         namedComponents: 'function-declaration',
    //         unnamedComponents: 'arrow-function',
    //     }
    // ],
    // 'react/hook-use-state': 'warn',
    // 'react/jsx-boolean-value': 'off',
    // 'react/jsx-closing-bracket-location': [
    //     'warn',
    //     {
    //         nonEmpty: 'tag-aligned',
    //         selfClosing: 'tag-aligned',
    //     }
    // ],
    // 'react/jsx-closing-tag-location': 'warn',
    // 'react/jsx-curly-brace-presence': [
    //     'error',
    //     {
    //         props: 'always',
    //         children: 'always',
    //         propElementValues: 'always',
    //     }
    // ],
    // 'react/jsx-curly-newline': [
    //     'error',
    //     {
    //         multiline: 'consistent',
    //         singleline: 'consistent',
    //     }
    // ],
    // 'react/jsx-curly-spacing': [
    //     'error',
    //     {
    //         when: 'never',
    //         attributes: {
    //             allowMultiline: false,
    //         },
    //         children: false,
    //         objectLiterals: 'always',
    //     }
    // ],
    // 'react/jsx-equals-spacing': ['error', 'never'],
    // 'react/jsx-filename-extension': [
    //     'error',
    //     {
    //         extensions: ['.tsx', '.jsx'],
    //     }
    // ],
    // 'react/jsx-first-prop-new-line': ['warn', 'always'],
    // 'react/jsx-fragments': 'off',
    // 'react/jsx-handler-names': [
    //     'warn',
    //     {
    //         eventHandlerPrefix: 'handle',
    //         eventHandlerPropPrefix: 'on',
    //         checkLocalVariables: false,
    //         checkInlineFunction: false,
    //     }
    // ],
    // 'react/jsx-indent-props': 'warn',
    // 'react/jsx-indent': 'warn',
    // 'react/jsx-key': [
    //     'error',
    //     {
    //         warnOnDuplicates: true,
    //         checkFragmentShorthand: true,
    //         checkKeyMustBeforeSpread: true,
    //     }
    // ],
    // 'react/jsx-max-depth': ['warn', { max: 6, }],
    // 'react/jsx-newline': [
    //     'warn',
    //     {
    //         prevent: true,
    //     }
    // ],
    // 'react/jsx-no-constructed-context-values': 'error',
    // 'react/jsx-no-leaked-render': 'error',
    // // 如果想强制开启多语言，可以开启该选项
    // 'react/jsx-no-literals': 'off',
    // 'react/jsx-no-target-blank': ['error', {}],
    // 'react/jsx-no-useless-fragment': 'error',
    // // "react/jsx-one-expression-per-line": ["error, { allow: "none" }],
    // 'react/jsx-pascal-case': [
    //     'error',
    //     {
    //         allowLeadingUnderscore: false,
    //     }
    // ],
    // 'react/jsx-props-no-multi-spaces': 'warn',
    // 'react/jsx-sort-props': 'warn',
    // 'react/jsx-tag-spacing': [
    //     'warn',
    //     {
    //         closingSlash: 'never',
    //         beforeSelfClosing: 'always',
    //         afterOpening: 'never',
    //         beforeClosing: 'allow',
    //     }
    // ],
    // 'react/jsx-wrap-multilines': [
    //     'warn',
    //     {
    //         declaration: 'parens-new-line',
    //         assignment: 'parens-new-line',
    //         return: 'parens-new-line',
    //         arrow: 'parens-new-line',
    //         condition: 'parens-new-line',
    //         logical: 'parens-new-line',
    //         prop: 'parens-new-line',
    //     }
    // ],
    // 'react/no-array-index-key': 'warn',
    // 'react/no-arrow-function-lifecycle': 'off',
    // 'react/no-danger': 'error',
    // 'react/no-multi-comp': [
    //     'warn',
    //     {
    //         ignoreStateless: true,
    //     }
    // ],
    // 'react/no-object-type-as-default-prop': 'off',
    // 'react/no-unstable-nested-components': [
    //     'error',
    //     {
    //         allowAsProps: false,
    //     }
    // ],
    // 'react/react-in-jsx-scope': 'off',
    // 'react/self-closing-comp': 'warn',
    // // react hooks
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
    },
};
