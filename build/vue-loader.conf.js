var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,
        extract: isProduction
    }),
    // postcss: [
    //     require('autoprefixer')({
    //         browsers: ['chrome >= 28', 'last 5 Firefox versions', 'Safari >= 6', 'ios >= 8']
    //     })
    // ]
    postcss: [
        require('autoprefixer')({
            browsers: ['iOS >= 7', 'Android >= 4.1']
        })
    ]
    // postcss: [require('autoprefixer')({browsers: ['chrome >= 28', 'last 5 Firefox versions', 'Safari >= 6', 'ios >= 7', 'ie > 8']})]
    // postcss: [require('autoprefixer')({ browsers: ['iOS >= 7', "Chrome >= 28"] })]
};
