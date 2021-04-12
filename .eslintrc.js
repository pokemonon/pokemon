module.exports = {
    'env': {
        'node': true,
        'browser': true,
    },
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
        'eslint-plugin-tsdoc'
    ],
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'rules': {
        // style
        // 'indent': ['error', 4],
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],

        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/ban-types': 0
    }
};
