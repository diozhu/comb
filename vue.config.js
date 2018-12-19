const path = require("path");

module.exports = {
    // 是否在保存的时候使用 `eslint-loader` 进行检查
    lintOnSave: 'error',
    // lintOnSave: process.env.NODE_ENV !== "production",

    baseUrl: process.env.NODE_ENV === "production" ? "/" + process.env.VUE_APP_PROJECT_NAME : "/",
    outputDir: process.env.NODE_ENV === 'production' ? path.resolve(__dirname, './dist/' + process.env.VUE_APP_PROJECT_NAME) : undefined,
    assetsDir: "static",
    runtimeCompiler: undefined,
    productionSourceMap: false,
    // parallel: undefined,
    // transpileDependencies: ['comb-ui'],

    // css: {
    //     // extract: true, // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    //     // sourceMap: false,
    //     // loaderOptions: {},
    //     // modules: false // 为所有的 CSS 及其预处理文件开启 CSS Modules
    // },

    configureWebpack: config => { // 该对象将会被 webpack-merge 合并入最终的 webpack 配置
        // if (process.env.NODE_ENV === "production") { // 生产环境修改配置...
        // } else { // 开发环境修改配置...
        // }
    },

    chainWebpack: config => { // https://github.com/mozilla-neutrino/webpack-chain
    },

    pluginOptions: {
        developmentSwitcher: { // 开发环境的文件转换: xxx.js => xxx.development.js
            js: [ 'api.js' ]
        }
    },

    pwa: {
        name: "动因体育",
        themeColor: "#FFFFFF",
        msTileColor: "#FFFFFF"
    },

    devServer: {
        port: 8181,
        disableHostCheck: true,
        // index: path.resolve(__dirname, './example/index.html'),
        // contentBase: path.resolve(__dirname, './example'),
        // publicPath: path.resolve(__dirname, './example'),
        open: false,
        // historyApiFallback: true,
        // noInfo: true,
        // overlay: true,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            "/virtual/order": {
                // target: 'http://server-doing.hy-sport.cn',
                target: "http://qa.doing.hy-sport.cn", // qa环境
                // target: 'https://wxapi.dongyin.net',   // 线上环境（20181105）
                // target: 'http://api-dongyin.hy-sport.cn',   // 线上环境
                pathRewrite: { "^/virtual": "/" }, // 去掉前端虚路径
                changeOrigin: true,
                secure: false
            }
        }
    }
};
