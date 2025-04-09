/** @type {import('eslint').Linter.FlatConfig} */
const config = [
    {
        languageOptions: {
            globals: {
                browser: true,
                node: true,
            },
            parserOptions: {
                ecmaVersion: 12,
                sourceType: 'module',
            },
        },
        rules: {
            'object-curly-spacing': 0,
            'new-cap': 0,
            'space-before-function-paren': 0,
            'linebreak-style': ['error', 'windows'],
            'indent': ['error', 4],
        },
    },
];

module.exports = config;