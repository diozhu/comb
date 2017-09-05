/**
 * Created by chaihao on 2016/12/28.
 */
var config = require('./config');
var md5 = require('./md5');

var express = require('express');
var router = express.Router();

function numberToStr(val){
    if(val < 10){
        return '0' + val;
    }
    return '' + val;
}

function getTokenTimeStr() {
    var d = new Date();
    var yy = d.getFullYear();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
    var hh = d.getHours();
    return yy + numberToStr(mm) + numberToStr(dd) + numberToStr(hh);
}

router.get('/', function (req, res, next) {
    var time = getTokenTimeStr(),
        ua = req.get('User-Agent');
    console.log('time', time);
    console.log('ua', ua);
    return res.send({
        meta: {
            code: 0
        },
        data: {
            token: md5(config.secret + ua + time + config.secret),
            time: time,
            ua: ua
        }
    });
});

module.exports = router;
