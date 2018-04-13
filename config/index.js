// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');
var merge = require('webpack-merge');
var project_name = '"app"';

module.exports = {
    build: {
        env: merge(require('./prod.env'), {PROJECT_NAME: project_name}),
        index: path.resolve(__dirname, '../dist/app/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist/app'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        // assetsPublicPath: '/app/',
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: merge(require('./dev.env'), {PROJECT_NAME: project_name}),
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/wap': { // doing项目qa环境，用于测试axios的post和get。。。
                target: 'http://qa.doing.hy-sport.cn',
                changeOrigin: true,
                secure: false
            },
            '/activity_sales': { // doing项目qa环境，用于测试axios的post和get。。。
                target: 'http://qa.doing.hy-sport.cn',
                changeOrigin: true,
                secure: false
            },
            // '/bbs': {
            //     // target: process.env.REMOTE_API_BASE_URL,
            //     target: 'http://p100.ms-bbs.systoon.com',
            //     // target: 'http://172.31.44.46',
            //     changeOrigin: true,
            //     secure: false,
            //     // filter: function (pathname, req) {
            //     //     return pathname.match('^/app') && req.method === 'POST'
            //     // }
            // },
            // '/forum': {
            //     target: 'http://p100.ms-bbs.systoon.com',
            //     changeOrigin: true,
            //     secure: false
            // },
            // '/topic': {
            //     target: 'http://p100.ms-bbs.systoon.com',
            //     changeOrigin: true,
            //     secure: false
            // },
            // '/user': {
            //     target: 'http://p100.ms-bbs.systoon.com',
            //     changeOrigin: true,
            //     secure: false
            // },
            // '/v1': {
            //     target: 'http://p100.ms-bbs.systoon.com',
            //     changeOrigin: true,
            //     secure: false
            // }
            // '/test': {
            //     target: 'http://p100.ms-bbs.toon.mobi',
            //     changeOrigin: true,
            //     secure: false
            // }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    },
    dist: {
        env: require('./dev.env'),
        port: 8081,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
};
