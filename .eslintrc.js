module.exports = {
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true
    },
    'extends': [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'react-hooks',
        '@typescript-eslint',
        'prettier'
    ],
    'rules': {
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 0,
        'react-native/no-inline-styles': 0
    }
};
