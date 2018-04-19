require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dist.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var path = require('path');
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.prod.conf')

var api = require('../routes/api'); // -- Author by Dio Zhu. on 2017.2.10
var bodyParser = require('body-parser'); // -- Author by Dio Zhu. on 2017.2.10
var history = require('connect-history-api-fallback'); // -- Author by Dio Zhu. on 2017.2.10

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dist.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
// app.get('/app/font', (req, res) => res.send('123'))
// app.get('/app/font', (req, res) => res.sendFile(path.join(__dirname, '../dist/app/font/index.html')))
// console.log('---> ', express.static(path.join(__dirname, '../dist/app/font/index.html')));
app.use('/app/font', express.static(path.join(__dirname, '../dist/app/font'))); // 修正虚路径静态文件目录. Add by Dio Zhu. on 2017.7.24



var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

app.use(bodyParser.json()); // -- Author by Dio Zhu. on 2017.2.10
app.use(bodyParser.urlencoded({extended: false})); // -- Author by Dio Zhu. on 2017.2.10
app.use(history()); // -- Author by Dio Zhu. on 2017.2.10

/**
 * 本地接口模拟
 *        -- Author by Dio Zhu. on 2017.1.4
 */
app.use('/api', function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + config.dev.port);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
app.use('/api', api);
// app.use(express.static(path.join(__dirname, '../dist/app'))); // 修正虚路径静态文件目录. Add by Dio Zhu. on 2017.7.24
// console.log('---> ', path.join(__dirname, '../dist/app/font/index.html'));

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

app.use('/mockdata/user.json', function (req, res) {
    res.set('Content-Type', 'application/json;charset=utf-8');
    res.status(200).send(fs.readFileSync(path.resolve(__dirname, '../routes/comment/user.json'), 'utf8'));
}); // -- Author by Dio Zhu. on 2017.2.10

var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
