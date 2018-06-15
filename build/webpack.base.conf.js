'use strict';
const path = require('path');
const chalk = require('chalk');
const utils = require('./utils');
const config = require('../config');
const vueLoaderConfig = require('./vue-loader.conf');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // mod by Dio Zhu. on 2018.6.6
const HappyPack = require('happypack'); // add happypack. mod by Dio Zhu. on 2018.6.7
const os = require('os'); // add happypack. mod by Dio Zhu. on 2018.6.7
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length}); // add happypack. mod by Dio Zhu. on 2018.6.7
// const ProgressBarPlugin = require('progress-bar-webpack-plugin'); // 进度条（不好看）. mod by Dio Zhu. on 2018.6.8
const Dashboard = require('webpack-dashboard'); // 面板. mod by Dio Zhu. on 2018.6.12
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
    },
    include: [resolve('src'), resolve('test')],
    exclude: [resolve('node_modules')],
});

const cssLoader = new MiniCssExtractPlugin({ use: [ 'happypack/loader?id=happy-css' ] });
// inject happypack accelerate packing for vue-loader @17-08-18
Object.assign(vueLoaderConfig.loaders, { js: 'happypack/loader?id=happy-vue', css: cssLoader });
function createHappyPlugin (id, loaders) { // add happypack. mod by Dio Zhu. on 2018.6.7
    return new HappyPack({
        id: id,
        loaders: loaders,
        threadPool: happyThreadPool,
        // make happy more verbose with HAPPY_VERBOSE=1
        // verbose: process.env.HAPPY_VERBOSE === '1'
    });
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].[hash].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            'static$': resolve('static'),
            // 'assets': __dirname + 'src/assets'
            // 'jquery': path.resolve(__dirname, './static/js/vendor/jquery.slim.min'),
            // // '$': path.resolve(__dirname, './static/js/vendor/jquery.slim.min')
        }
    },
    module: {
        rules: [
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig,
                // include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
                include: [resolve('src')],
                // exclude: [resolve('node_modules')],
                // loader: 'happypack/loader?id=happy-vue', // 增加新的HappyPack构建loader
            },
            {
                test: /\.js$/,
                // loader: 'babel-loader',
                loader: 'happypack/loader?id=happy-babel-js', // 增加新的HappyPack构建loader
                // include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')],
                include: [resolve('src')],
                // exclude: [resolve('node_modules')],
            },
            // { // 把对 .css 文件的处理转交给 id 为 css 的 HappyPack 实例
            //     test: /.css$/,
            //     loader: 'happypack/loader?id=happy-babel-js', // 增加新的HappyPack构建loader
            //     include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            // },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    // 增加plugins。 Author by Dio Zhu. on 2017.4.7
    plugins: [
        // new webpack.DllReferencePlugin({ // dll（然并卵）. add by Dio Zhu. on 2018.6.11
        //     context: path.resolve(__dirname, '../'),
        //     manifest: require(path.join(__dirname, '..', 'static', 'manifest.dll.json')),
        // }),
        new DashboardPlugin(dashboard.setData),
        createHappyPlugin('happy-babel-js', ['babel-loader?cacheDirectory=true']), // happypack多子进程打包. mod by Dio Zhu. on 2018.6.7
        createHappyPlugin('happy-vue', ['babel-loader?cacheDirectory=true']),
        createHappyPlugin('happy-css', ['css-loader', 'vue-style-loader']),
        new HappyPack({
            loaders: [{
                path: 'vue-loader',
                query: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            }]
        }),
        // new ProgressBarPlugin({ // 进度条(不好看。。。). mod by Dio Zhu. on 2018.6.8
        //     format: 'build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
        //     clear: false,
        //     // width: 100
        // }),
        // new webpack.ProvidePlugin({ // 当webpack加载到某个js模块里，出现了未定义且名称符合（字符串完全匹配）配置中key的变量时，会自动require配置中value所指定的js模块
        //     $: "jquery",
        //     jQuery: "jquery",
        //     'window.jQuery': 'jquery',
        //     'window.$': 'jquery',
        // })
    ],
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};
