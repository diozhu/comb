'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = { // dll。 Author by Dio Zhu. on 2017.6.11
    entry: {
        vendor: [
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
        ]
    },
    output: {
        path: path.join(__dirname, '../static'),
        filename: '[name].dll.js',
        library: '_dll_[name]' // 全局变量，其他模块以此引入
    },
    plugins: [
        new webpack.DllPlugin({
            name: '_dll_[name]',
            path: path.join(__dirname, '../static', 'manifest.dll.json'),
            context: path.resolve(__dirname, '../'), // 上下文，必须与DllReferencePlugin中的context一致！！！ Author by Dio Zhu. on 2018.6.12
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // })
    ]
};
