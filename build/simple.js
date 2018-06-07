/**
 * Created by chaihao on 2017/5/11.
 */
var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var api = require('../routes/api');
var bodyParser = require('body-parser'); // -- Author by Dio Zhu. on 2017.2.10

var static_path = path.join(__dirname, "../dist");

var PROJECT_NAME = process.env["PROJECT_NAME"] || 'app';

app.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});

console.log("static_path %s %s", static_path, fs.existsSync(static_path));

app.use(express.static(static_path, {
    "index": "index.html",
    maxAge: 360000
}));

app.use(bodyParser.json()); // -- Author by Dio Zhu. on 2017.2.10
app.use(bodyParser.urlencoded({extended: false})); // -- Author by Dio Zhu. on 2017.2.10
// // serve pure static assets
// var staticPath = path.posix.join('./', 'static')
// app.use(staticPath, express.static('./static'))

app.use('/api', api);

app.use("/" + PROJECT_NAME, function (req, res) {
    res.sendFile(path.join(static_path, "/" + PROJECT_NAME + "/index.html"))
});

app.use(function (req, res) {
    res.redirect("/" + PROJECT_NAME);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
