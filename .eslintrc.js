module.exports = {
    // 自定义规则，一般格式：”规则名称”:error级别系数。系数0为不提示(off)、1为警告(warn)、2为错误抛出(error)，可指定范围，如[1,4]

    // 可以包括Strict模式、也可以是code的方式提醒，如符号等。还可以是第三方的校验，如react。
    root: true,
    parser: 'babel-eslint', // EsLint默认使用esprima做脚本解析，当然你也切换他，比如切换成babel-eslint解析
    parserOptions: {
        sourceType: 'module' // 指定来源的类型，有两种”script”或”module”
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard', // 规则名称
    // required to lint *.vue files
    plugins: [
        'html'  // EsLint允许使用第三方插件
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
        'semi': ["error", "always"],// 规则名称
        'indent': ["error", 4, { "SwitchCase": 1 }],
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
