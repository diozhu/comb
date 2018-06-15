'use strict';
const path = require('path');
const webpack = require('webpack');
const utils = require('./utils');
const config = require('../config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // mod by Dio Zhu. on 2018.6.6
// const merge = require('webpack-merge');
// const baseWebpackConfig = require('./webpack.base.conf');
const vueLoaderConfig = require('./vue-loader.conf');
const {VueLoaderPlugin} = require('vue-loader');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin'); // mod by Dio Zhu. on 2018.6.6
// const env = require('../config/prod.env');

// module.exports = merge(baseWebpackConfig, { // dll。 Author by Dio Zhu. on 2017.6.11
module.exports = { // dll。 Author by Dio Zhu. on 2017.6.11
    // mode: 'production',
    entry: {
        vendors: [
            'vue/dist/vue.esm.js',
            'vue-router',
            'vuex',
            'vuex-router-sync',
            'axios',
            'vue-lazyload',
            'fastclick',
            'es6-promise',
            'intersection-observer',
            'photoswipe',
            'qs',
            'velocity-animate',
            'highlight.js',
            './src/vendor/_dll_install.js',
        ]
    },
    output: {
        path: path.join(__dirname, '../static'),
        filename: '[name].dll.js',
        library: '_dll_[name]' // 全局变量，其他模块以此引入
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
            'static$': path.resolve(__dirname, '../static'),
        }
    },
    module: {
        rules: [
            ...(utils.styleLoaders({sourceMap: config.build.productionSourceMap, extract: true, usePostCSS: true})),
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoaderConfig,
                include: [path.resolve(__dirname, '..', 'src')],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, '..', 'src')],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                },
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': env
        // }),
        // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),
        // enable scope hoisting
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.join(__dirname, '../static', 'manifest.dll.json'),
            context: path.resolve(__dirname, '../'), // 上下文，必须与DllReferencePlugin中的context一致！！！ Author by Dio Zhu. on 2018.6.12
        }),
        new ParallelUglifyPlugin({ // 替换uglifyjs-webpack-plugin. Mod by Dio Zhu. on 2018.6.11
            cacheDir: '.cache/',
            uglifyJS: {
                output: {
                    comments: false, // 不留注释
                    beautify: false // 不格式化
                },
                compress: {
                    warnings: false, // 删除没有用到的代码时不输出警告
                    drop_console: true,
                    collapse_vars: true,
                    reduce_vars: true
                }
            },
            // sourceMap: config.build.productionSourceMap,
            // parallel: true
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new MiniCssExtractPlugin({ // mod by Dio Zhu. on 2018.6.6
            filename: '[name].dll.css',
        }),
        new VueLoaderPlugin(), // add by Dio Zhu. on 2018.6.6
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
