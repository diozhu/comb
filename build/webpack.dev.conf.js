'use strict';
const fs = require('fs');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const portfinder = require('portfinder');
const {VueLoaderPlugin} = require('vue-loader'); // add by Dio Zhu. on 2018.6.6

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);

// // add hot-reload related code to entry chunks
// Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//     baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })

const devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    module: {
        rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap, usePostCSS: true})
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool,

    // these devServer options should be customized in /config/index.js
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                {from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html')},
            ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay
            ? {warnings: false, errors: true}
            : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll,
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        // new HtmlWebpackPlugin({ // dll（然并卵）. add by Dio Zhu. on 2018.6.11
        //     filename: config.build.index,
        //     template: 'index.html',
        //     // template: path.resolve(__dirname, '../src', 'index.html'),
        //     // chunks: ['index', 'common'],
        //     hash: true, // 防止缓存
        //     inject: true,
        //     minify: { // more options: https://github.com/kangax/html-minifier#options-quick-reference
        //         removeComments: true,
        //         collapseWhitespace: true,
        //         removeAttributeQuotes: true // 压缩 去掉引号
        //     },
        //     chunksSortMode: 'dependency',
        //     // vendors: `<script>${fs.readFileSync(path.join(__dirname, '../static/vendors.dll.js'), 'utf-8')}</script>`, // 与dll配置文件中output.fileName对齐
        //     // vendors: `<script src="${path.resolve(__dirname, '../static/vendors.dll.js')}"></script>`, // 与dll配置文件中output.fileName对齐
        //     vendorCss: `<link rel='stylesheet' href='/static/vendors.dll.css'></link>`, // 与dll配置文件中output.fileName对齐
        //     vendorJs: `<script src='/static/vendors.dll.js'></script>`, // 与dll配置文件中output.fileName对齐
        // }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: config.dev.assetsSubDirectory,
            ignore: ['.*']
        }]),
        // new webpack.DllReferencePlugin({ // dll. add by Dio Zhu. on 2018.6.11
        //     context: path.resolve(__dirname, '../'),
        //     manifest: require(path.join(__dirname, '..', 'static', 'manifest.dll.json')),
        // }),
        new VueLoaderPlugin() // add by Dio Zhu. on 2018.6.6
    ],
    // externals: {
    //     // 'vue': 'Vue',
    //     // 'vue-router': 'VueRouter',
    //     'axios': 'axios',
    //     'vuex': 'Vuex'
    // },
    output: {
        pathinfo: true      // dev环境下，console中可显示对应的文件位置，而不是打包后的app.js，仅可用于dev环境！   -- Author by Dio Zhu. on 2017.4.20
    },
    // optimization: { // dll. add by Dio Zhu. on 2018.6.11
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 chunks: 'initial',
    //                 name: 'common',
    //                 minChunks: 2,
    //                 maxInitialRequests: 5,
    //                 minSize: 0
    //             }
    //         }
    //     }
    // }
});

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port;
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err);
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port;
            // add port to devServer config
            devWebpackConfig.devServer.port = port;

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: config.dev.notifyOnErrors
                    ? utils.createNotifierCallback()
                    : undefined
            }));

            resolve(devWebpackConfig);
        }
    });
});
