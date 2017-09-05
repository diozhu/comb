module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'semi-spacing': ["error", {"before": false, "after": false}],
        'semi': ["error", "always"],
        'indent': ["error", 4],
        'space-before-function-paren': ["error", {
            "anonymous": "always",
            "named": "always",
            "asyncArrow": "ignore"
        }],
        // 'one-var': ["error", { var: "always", let: "always", const: "never" }]
        'one-var': ["off", { var: "always", let: "always", const: "always" }],
        'no-useless-escape': ["off"]
    }
};
