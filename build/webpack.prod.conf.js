'use strict';
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssTextPlugin = require('mini-css-extract-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');

const componts = {
    'index': './src/index.js',
    'spinner': './packages/v-spinner',
    'button': './packages/v-button.vue',
    'cell': './packages/v-cell.vue',
    'col': './packages/v-col.vue',
    'datetime-picker': './packages/v-datetime-picker.vue',
    'field': './packages/v-field.vue',
    'message-box': './packages/v-message-box.js',
    'picker': './packages/v-picker.vue',
    'picker-slot': './packages/v-picker-slot.vue',
    'popup': './packages/v-popup.vue',
    'row': './packages/v-row.vue',
    'toast': './packages/v-toast.js',
    'validator': './packages/v-validator.js',
};

const env = process.env.NODE_ENV === 'testing'
    ? require('../config/test.env')
    : require('../config/prod.env');

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    // entry: path.resolve(__dirname, '../src/main.js'),
    // entry: ['./src/index.js', './packages/v-toast.js'],
    // entry: { 'index': './src/index.js' },
    entry: componts,
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true,
            usePostCSS: false
        })
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    output: {
        path: config.build.assetsRoot,
        // filename: utils.assetsPath('js/[name].[chunkhash].js'),
        // chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
        publicPath: '/lib/',
        // filename: 'comb-ui.js',
        filename: '[name].js',
        library: 'comb',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'async',
    //         name: true,
    //         cacheGroups: {
    //             common: {
    //                 name: 'common',
    //                 chunks: 'initial',
    //                 minChunks: 2
    //             },
    //             vendor: {
    //                 name: 'vendor',
    //                 test: /[\\/]node_modules[\\/]/,
    //                 chunks: 'all'
    //             }
    //         }
    //     },
    //     // minimize: false
    // },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        // extract css into its own file
        new MiniCssTextPlugin({
            // filename: utils.assetsPath('css/[name].[contenthash].css')
            filename: utils.assetsPath('./[name].css')
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: config.build.productionSourceMap
                ? {safe: true, map: {inline: false}}
                : {safe: true}
        }),
        // // generate dist index.html with correct asset hash for caching.
        // // you can customize output by editing /index.html
        // // see https://github.com/ampedandwired/html-webpack-plugin
        // new HtmlWebpackPlugin({
        //     filename: process.env.NODE_ENV === 'testing'
        //         ? 'index.html'
        //         : config.build.index,
        //     // template: 'index.html',
        //     template: path.resolve(__dirname, '../example/index.html'),
        //     inject: true,
        //     minify: {
        //         removeComments: true,
        //         collapseWhitespace: true,
        //         removeAttributeQuotes: true
        //         // more options:
        //         // https://github.com/kangax/html-minifier#options-quick-reference
        //     },
        //     // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        //     chunksSortMode: 'dependency'
        // }),

        // keep module.id stable when vendor modules does not change
        // new webpack.HashedModuleIdsPlugin(),

        // // copy custom static assets
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, '../static'),
        //         to: config.build.assetsSubDirectory,
        //         ignore: ['.*']
        //     }
        // ])
    ],
    // 添加externals，vue、vuex、vue-router等使用cdn方式，在此排除后，需要在上面的HtmlWebpackPlugin.scripts中设置外链。 Author by Dio Zhu. on 2017.6.23
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'vuex': 'Vuex',
        'vue-resource': 'VueResource'
    }
});

if (config.build.productionGzip) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin');

    webpackConfig.plugins.push(
        new CompressionWebpackPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    );
}

if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
