'use strict';
const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';
const sourceMapEnabled = isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap;

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: isProduction
    }),
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
    transformToRequire: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    },
    // postcss: [
    //     require('autoprefixer')({
    //         browsers: ['iOS >= 7', 'Android >= 4.1']
    //     })
    // ]
    // postcss: [require('autoprefixer')({browsers: ['chrome >= 28', 'last 5 Firefox versions', 'Safari >= 6', 'ios >= 7', 'ie > 8']})]
    // postcss: [require('autoprefixer')({ browsers: ['iOS >= 7', "Chrome >= 28"] })]
};
