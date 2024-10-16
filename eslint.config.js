/** @type {import('eslint').Linter.FlatConfig} */
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

const { rules: prettierRules } = eslintConfigPrettier;

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {
                console: 'writable',
                __dirname: 'readable',
                __filename: 'readable',
                process: 'readable',
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            prettier: eslintPluginPrettier,
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },

    {
        rules: {
            ...prettierRules,
        },
    },
];