'use strict';
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin') // mod by Dio Zhu. on 2018.6.6
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // mod by Dio Zhu. on 2018.6.6
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin'); // mod by Dio Zhu. on 2018.6.6

const {VueLoaderPlugin} = require('vue-loader');
// var HtmlCriticalPlugin = require("./html.critical.webpack.plugin"); // critical css. add by Dio Zhu. on 2017.7.27
// const PrerenderSPAPlugin = require('prerender-spa-plugin'); // 暂时不用了，如果用也是用nuxt.js... Author by Dio Zhu. on 2018.6.6
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

const env = require('../config/prod.env');

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    module: {
        // rules: utils.styleLoaders({ sourceMap: config.build.productionSourceMap, extract: true, usePostCSS: true })
        rules: [
            ...(utils.styleLoaders({sourceMap: config.build.productionSourceMap, extract: true, usePostCSS: true})),
            // { // add happypack. mod by Dio Zhu. on 2018.6.7
            //     test: /\.js$/,
            //     loader: 'happypack/loader?id=happy-babel-js', // 增加新的HappyPack构建loader
            //     include: [path.resolve('src')],
            //     exclude: /node_modules/
            // }
        ]
    },
    devtool: config.build.productionSourceMap ? config.build.devtool : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    // optimization: { // 升级webpack4.0后添加 mod by Dio Zhu. on 2018.6.6
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendor',
    //                 chunks: 'all'
    //             },
    //             manifest: {
    //                 name: 'manifest',
    //                 minChunks: Infinity
    //             },
    //         }
    //     },
    // },
    optimization: { // 升级webpack4.0后添加 mod by Dio Zhu. on 2018.6.6
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            chunks: 'all', // chunks: "initial"，"async"和"all"分别是：初始块，按需块或所有块；
            minSize: 30000, // （默认值：30000）块的最小大小
            minChunks: 1, // （默认值：1）分割前共享模块的最小块数
            maxAsyncRequests: 5, // （缺省值5）按需加载时的最大并行请求数
            maxInitialRequests: 3, // （默认值3）入口点上的最大并行请求数
            name: true, // cacheGroups is an object where keys are the cache group names.
            cacheGroups: {
                // components: {
                //     test: /[\\/]components[\\/]/,
                //     name: 'components',
                //     chunks: 'all',
                //     priority: -10 // 默认组的优先级为负数，以允许任何自定义缓存组具有更高的优先级（默认值为0）
                // },
                // utils: {
                //     test: /[\\/]js[\\/]/,
                //     name: 'utils',
                //     chunks: 'all',
                //     priority: -10 // 默认组的优先级为负数，以允许任何自定义缓存组具有更高的优先级（默认值为0）
                // },
                // vendor: {
                //     test: /[\\/]vendor[\\/]/,
                //     name: 'vendor',
                //     chunks: 'all',
                //     priority: -10 // 默认组的优先级为负数，以允许任何自定义缓存组具有更高的优先级（默认值为0）
                // },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: -10 // 默认组的优先级为负数，以允许任何自定义缓存组具有更高的优先级（默认值为0）
                },
                default: {
                    minChunks: 2,
                    priority: -20, // 默认组的优先级为负数，以允许任何自定义缓存组具有更高的优先级（默认值为0）
                    reuseExistingChunk: true
                },
            }
        },
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        // new UglifyJsPlugin({
        //     uglifyOptions: {
        //         output: {
        //             beautify: false, // 不格式化
        //             comments: false // 不留注释
        //         },
        //         compress: {
        //             warnings: false // 删除没有用到的代码时不输出警告
        //         }
        //     },
        //     sourceMap: config.build.productionSourceMap,
        //     parallel: true
        // }),
        /**
         * @desc: A faster uglifyjs plugin.(用来替代 Webpack `uglifyjs-webpack-plugin`)
         * @reference: https://github.com/gdborton/webpack-parallel-uglify-plugin
        */
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
        // // extract css into its own file
        // new ExtractTextPlugin({ // mod by Dio Zhu. on 2018.6.6
        //   filename: utils.assetsPath('css/[name].[contenthash].css'),
        //   // Setting the following option to `false` will not extract CSS from codesplit chunks.
        //   // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
        //   // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
        //   // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
        //   allChunks: true,
        // }),
        new MiniCssExtractPlugin({ // mod by Dio Zhu. on 2018.6.6
            filename: utils.assetsPath('css/[name].[contenthash].css'),
            allChunks: true
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin({
            cssProcessorOptions: config.build.productionSourceMap
                ? {safe: true, map: {inline: false}}
                : {safe: true}
        }),
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency',
            // 静态文件采用cdn方式，直接写在index.html会影响本地开发时的调试。 Author by Dio Zhu. on 2017.6.27
            // scripts: '<script src="https://cdn.bootcss.com/vue/2.2.2/vue.min.js"></script><script src="https://cdn.bootcss.com/vue-resource/1.2.0/vue-resource.min.js"></script><script src="https://cdn.bootcss.com/vue-router/2.3.0/vue-router.min.js"></script><script src="https://cdn.bootcss.com/vuex/2.2.1/vuex.min.js"></script>'
            // scripts: '<script src="https://cdn.bootcss.com/vue/2.4.2/vue.min.js"></script><script src="https://cdn.bootcss.com/vue-resource/1.3.4/vue-resource.min.js"></script><script src="https://cdn.bootcss.com/vue-router/2.7.0/vue-router.min.js"></script><script src="https://cdn.bootcss.com/vuex/2.3.1/vuex.min.js"></script>'
            scripts: '<script src="//cdn.bootcss.com/vue/2.5.16/vue.min.js"></script><script src="//cdn.bootcss.com/axios/0.18.0/axios.min.js"></script><script src="//cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js"></script><script src="//cdn.bootcss.com/vuex/3.0.1/vuex.min.js"></script>'
        }),
        // keep module.id stable when vendor modules does not change
        new webpack.HashedModuleIdsPlugin(),
        // enable scope hoisting
        new webpack.optimize.ModuleConcatenationPlugin(),
        // // split vendor js into its own file
        // new webpack.optimize.CommonsChunkPlugin({ // 升级webpack4.0后修改配置方式 mod by Dio Zhu. on 2018.6.6
        //   name: 'vendor',
        //   minChunks (module) {
        //     // any required modules inside node_modules are extracted to vendor
        //     return (
        //       module.resource &&
        //       /\.js$/.test(module.resource) &&
        //       module.resource.indexOf(
        //         path.join(__dirname, '../node_modules')
        //       ) === 0
        //     )
        //   }
        // }),
        // // extract webpack runtime and module manifest to its own file in order to
        // // prevent vendor hash from being updated whenever app bundle is updated
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: 'manifest',
        //   minChunks: Infinity
        // }),
        // // This instance extracts shared chunks from code splitted chunks and bundles them
        // // in a separate chunk, similar to the vendor chunk
        // // see: https://webpack.js.org/plugins/commons-chunk-plugin/#extra-async-commons-chunk
        // new webpack.optimize.CommonsChunkPlugin({
        //   name: 'app',
        //   async: 'vendor-async',
        //   children: true,
        //   minChunks: 3
        // }),

        // copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: config.build.assetsSubDirectory,
                ignore: ['.*']
            }
        ]),
        // copy .htaccess to dist folder. Author by Dio Zhu. on 2017.7.19
        new CopyWebpackPlugin([
            {
                from: './.htaccess',
                to: config.build.assetsRoot
            }
        ]),

        new VueLoaderPlugin(), // add by Dio Zhu. on 2018.6.6
        // new PrerenderSPAPlugin({ // 暂时不用了，如果用也是用nuxt.js... Author by Dio Zhu. on 2018.6.6
        //     // Required - The path to the webpack-outputted app to prerender.
        //     staticDir: path.join(__dirname, '../dist/app'),
        //     // Required - Routes to render.
        //     routes: ['/font'],
        // }),
        // new HtmlCriticalPlugin({
        //     base: path.resolve(__dirname, '../dist/app/'),
        //     src: 'index.html',
        //     dest: 'index.html',
        //     inline: true,
        //     minify: true,
        //     // extract: true, // 打开会拆分css，但拆分后不压缩了。。。
        //     width: 375,
        //     height: 565,
        //     penthouse: {
        //         blockJSRequests: false,
        //     }
        // })
        // new webpack.optimize.MinChunkSizePlugin({minChunkSize: 50000}), // 合并低于50K的小文件. mod by Dio Zhu. on 2018.6.7
        // new PurifyCSSPlugin({ // css tree shaking, vue项目无法使用。。。 add by Dio Zhu. on 2018.6.8
        //     paths: glob.sync(path.join(__dirname, '../dist/*/*.html'))
        // }),
    ],
    // 添加externals，vue、vuex、vue-router等使用cdn方式，在此排除后，需要在上面的HtmlWebpackPlugin.scripts中设置外链。 Author by Dio Zhu. on 2017.6.23
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'vuex': 'Vuex',
        'vue-resource': 'VueResource'
    },
    performance: {
        // hints: false
        hints: 'warning',
        maxEntrypointSize: 500000, // The default value is 250000 (bytes).
        maxAssetSize: 500000 // The default value is 250000 (bytes).
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
