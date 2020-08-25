module.exports = {
    env: {
        commonjs: true,
        es2020: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        'linebreak-style': ['off'],
        'object-curly-newline': ['off'],
        indent: ['error', 4],
        'no-else-return': ['error', { allowElseIf: true }],
        'no-console': ['off'],
        'no-return-assign': ['off'],
        'no-unused-vars': ['warn'],
        'max-len': ['warn', { code: 150 }],
    },
};
