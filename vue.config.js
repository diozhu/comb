const path = require("path");
const merge = require('webpack-merge');
// const combLoader = require('comb-loader');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    // 是否在保存的时候使用 `eslint-loader` 进行检查
    lintOnSave: undefined,

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
        // console.log('------>>> ', config.module.rules);
        // config = combLoader.init(config, {});
        if (process.env.NODE_ENV === "production") { // 生产环境修改配置...
            // config.optimization.splitChunks.cacheGroups.default = { minSize: 0 }; // 查了mini-css-extract-plugin源码，默认30K（30*1024）以下的css不进行chunk，会报conflicting order警告。 mod by Dio Zhu. on 2018.9.3
            if (process.env.npm_lifecycle_event === "analyze") {
                config.plugins.push(
                    new BundleAnalyzerPlugin() // 打包体积优化
                );
            }
            // config.devtool = false;
        } else { // 开发环境修改配置...
            // // config.entry = path.resolve(__dirname, './example/main.js');
        }
    },

    chainWebpack: config => { // https://github.com/mozilla-neutrino/webpack-chain
        // config = combLoader.initChain(config, {
        //     // developmentSwitcher: { // 开发环境的文件转换: xxx.js => xxx.development.js
        //     //     js: [ 'api.js' ]
        //     // }
        // });
        // // console.log('chainWebpack: ', config);
        // webpack 原始配置的上层抽象，可以添加、修改loader、修改plugin选项
        // config.module.rule('vue').use('vue-loader').tap(options => { // 修改vue-loader选项
        //     return options;
        // });
        // config.module.rule('vue').include.add('node_modules/comb-ui').end();
        // config.module.rule('vue').pre().include.add(path.resolve(__dirname, "./src")).add(path.resolve(__dirname, "./node_modules/comb-ui")).end();
        // config.module.rule('scss').use('sass-loader').tap(options => merge(options, { includePaths: [path.resolve(__dirname, 'node_modules')] }));
        // config.module.rule('scss').oneOf('vue-modules').use('sass-loader').tap(options => merge(options, { includePaths: [path.resolve(__dirname, 'node_modules/comb-ui')] }));
        // config.module.rule('vue').use('vue-loader').loader('vue-loader').tap(options => merge(options, { includePaths: [path.resolve(__dirname, 'node_modules/comb-ui')] }));
        return config;
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
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
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
