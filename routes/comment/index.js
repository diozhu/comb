/**
 * Created by chaihao on 2016/12/28.
 */
var express = require('express');
var router = express.Router();


var token = require('./token');
/* GET home page. */
router.use('/token', token);


/**
 * 评论点赞微服务测试接口
 */
var comments = [
    {
        "AppId": 3,
        "Content": "擦擦擦",
        "CtId": 0,
        "Id": 54,
        "SubjectId": 1,
        "Tm": 1483076649,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "ddda啊啊啊",
        "CtId": 0,
        "Id": 53,
        "SubjectId": 1,
        "Tm": 1483076630,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "8c66344f1c0cd0d5c7be5a867f35fc02",
        "CtId": 0,
        "Id": 51,
        "SubjectId": 1,
        "Tm": 1483075272,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "content",
        "CtId": 0,
        "Id": 50,
        "SubjectId": 1,
        "Tm": 1483075267,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "asf",
        "CtId": 0,
        "Id": 43,
        "SubjectId": 1,
        "Tm": 1483063352,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "asdfa",
        "CtId": 0,
        "Id": 42,
        "SubjectId": 1,
        "Tm": 1483061817,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "asdf",
        "CtId": 0,
        "Id": 41,
        "SubjectId": 1,
        "Tm": 1483061798,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "asdfa",
        "CtId": 0,
        "Id": 40,
        "SubjectId": 1,
        "Tm": 1483061736,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "asdfasdf",
        "CtId": 0,
        "Id": 39,
        "SubjectId": 1,
        "Tm": 1483061681,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "asdfadsf",
        "CtId": 0,
        "Id": 38,
        "SubjectId": 1,
        "Tm": 1483061014,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "asfasdf",
        "CtId": 0,
        "Id": 37,
        "SubjectId": 1,
        "Tm": 1483060891,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "asdfasf",
        "CtId": 0,
        "Id": 36,
        "SubjectId": 1,
        "Tm": 1483060783,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "asd",
        "CtId": 0,
        "Id": 35,
        "SubjectId": 1,
        "Tm": 1483060764,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "哈哈哈哈哈哈",
        "CtId": 0,
        "Id": 34,
        "SubjectId": 1,
        "Tm": 1482983086,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "哈哈哈哈哈哈",
        "CtId": 0,
        "Id": 33,
        "SubjectId": 1,
        "Tm": 1482983085,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "哈哈哈哈哈哈",
        "CtId": 0,
        "Id": 32,
        "SubjectId": 1,
        "Tm": 1482983084,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "打发打发",
        "CtId": 0,
        "Id": 31,
        "SubjectId": 1,
        "Tm": 1482982332,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "content",
        "CtId": 0,
        "Id": 30,
        "SubjectId": 1,
        "Tm": 1482980828,
        "ToUserId": 0,
        "UserId": 1233
    },
    {
        "AppId": 3,
        "Content": "222222",
        "CtId": 0,
        "Id": 29,
        "SubjectId": 1,
        "Tm": 1482980657,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "阿斯顿发放11111111",
        "CtId": 0,
        "Id": 28,
        "SubjectId": 1,
        "Tm": 1482980474,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "阿斯顿发发生的发生",
        "CtId": 0,
        "Id": 27,
        "SubjectId": 1,
        "Tm": 1482980449,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "asdfasdfasdf",
        "CtId": 0,
        "Id": 26,
        "SubjectId": 1,
        "Tm": 1482980415,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "asdfadf",
        "CtId": 0,
        "Id": 25,
        "SubjectId": 1,
        "Tm": 1482980390,
        "ToUserId": 0,
        "UserId": 1
    },
    {
        "AppId": 3,
        "Content": "content",
        "CtId": 0,
        "Id": 23,
        "SubjectId": 1,
        "Tm": 1482976286,
        "ToUserId": 0,
        "UserId": 1233
    },
    {
        "AppId": 3,
        "Content": "content",
        "CtId": 0,
        "Id": 22,
        "SubjectId": 1,
        "Tm": 1482976281,
        "ToUserId": 0,
        "UserId": 1233
    }
];
router.get('/list', function (req, res, next) {
    console.log("list: ", req.query);
    var rtn = {
            "Code": 0,
            "Msg": "ok",
            "Res": []
        },
        limit,
        offset;

    offset = req.query.offset || 0;
    limit = req.query.limit || 10;

    rtn.Res = comments.slice( offset, limit );

    res.json(rtn);
});


module.exports = router;