var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// var HtmlCriticalPlugin = require("./html.critical.webpack.plugin"); // critical css. add by Dio Zhu. on 2017.7.27

var env = config.build.env

var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            extract: true
        })
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/en/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css')
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin(),
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
            scripts: '<script src="https://cdn.bootcss.com/vue/2.5.2/vue.min.js"></script><script src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script><script src="https://cdn.bootcss.com/vue-router/2.8.1/vue-router.min.js"></script><script src="https://cdn.bootcss.com/vuex/2.5.0/vuex.min.js"></script>'
        }),
        // split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // extract webpack runtime and module manifest to its own file in order to
        // prevent vendor hash from being updated whenever app bundle is updated
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
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
    ],
    // 添加externals，vue、vuex、vue-router等使用cdn方式，在此排除后，需要在上面的HtmlWebpackPlugin.scripts中设置外链。 Author by Dio Zhu. on 2017.6.23
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'axios': 'axios',
        'vuex': 'Vuex',
        'vue-resource': 'VueResource'
    }
})

if (config.build.productionGzip) {
    var CompressionWebpackPlugin = require('compression-webpack-plugin')

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
    )
}

if (config.build.bundleAnalyzerReport) {
    var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
