var express = require('express'),
    router = express.Router(),
    // https = require('https'),
    comment = require('./comment'),
    dat = [
        {'id': 1001, 'title': '这是一句测试的内容 01', 'dt': 1478655191000, 'userInfo': { 'id': "397833", 'title': '老朱',    'subtitle': '推广语', 'isfollow': 1, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', }},
        {'id': 1002, 'title': '这是一句测试的内容 02', 'dt': 1478655191000, 'userInfo': { 'id': 2, 'title': '李四',    'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', }},
        {'id': 1003, 'title': '这是一句测试的内容 03', 'dt': 1478655191000, 'userInfo': { 'id': 3, 'title': '王五',    'subtitle': '推广语', 'isfollow': 1, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', }},
        {'id': 1004, 'title': '这是一句测试的内容 04', 'dt': 1478655191000, 'userInfo': { 'id': 4, 'title': '赵六',    'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', }},
        {'id': 1005, 'title': '这是一句测试的内容 05', 'dt': 1478655191000, 'userInfo': { 'id': 5, 'title': '张三5',   'subtitle': '推广语', 'isfollow': 1, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', }},
        {'id': 1006, 'title': '这是一句测试的内容 06', 'dt': 1478655191000, 'userInfo': { 'id': 6, 'title': '张三6',   'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', }},
        {'id': 1007, 'title': '这是一句测试的内容 07', 'dt': 1478655191000, 'userInfo': { 'id': 7, 'title': '张三7',   'subtitle': '推广语', 'isfollow': 1, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', }},
        {'id': 1008, 'title': '这是一句测试的内容 08', 'dt': 1478655191000, 'userInfo': { 'id': 8, 'title': '张三8',   'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', }},
        {'id': 1009, 'title': '这是一句测试的内容 09', 'dt': 1478655191000, 'userInfo': { 'id': 9, 'title': '张三9',   'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', }},
        {'id': 1010, 'title': '这是一句测试的内容 10', 'dt': 1478655191000, 'userInfo': { 'id': 10, 'title': '张三10', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1011, 'title': '这是一句测试的内容 11', 'dt': 1478655191000, 'userInfo': { 'id': 11, 'title': '张三11', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1012, 'title': '这是一句测试的内容 12', 'dt': 1478655191000, 'userInfo': { 'id': 12, 'title': '张三12', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1013, 'title': '这是一句测试的内容 13', 'dt': 1478655191000, 'userInfo': { 'id': 13, 'title': '张三13', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1014, 'title': '这是一句测试的内容 14', 'dt': 1478655191000, 'userInfo': { 'id': 14, 'title': '张三14', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1015, 'title': '这是一句测试的内容 15', 'dt': 1478655191000, 'userInfo': { 'id': 15, 'title': '张三15', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1016, 'title': '这是一句测试的内容 16', 'dt': 1478655191000, 'userInfo': { 'id': 16, 'title': '张三16', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1017, 'title': '这是一句测试的内容 17', 'dt': 1478655191000, 'userInfo': { 'id': 17, 'title': '张三17', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1018, 'title': '这是一句测试的内容 18', 'dt': 1478655191000, 'userInfo': { 'id': 18, 'title': '张三18', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1019, 'title': '这是一句测试的内容 19', 'dt': 1478655191000, 'userInfo': { 'id': 19, 'title': '张三19', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1020, 'title': '这是一句测试的内容 20', 'dt': 1478655191000, 'userInfo': { 'id': 10, 'title': '张三10', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1021, 'title': '这是一句测试的内容 21', 'dt': 1478655191000, 'userInfo': { 'id': 11, 'title': '张三11', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1022, 'title': '这是一句测试的内容 22', 'dt': 1478655191000, 'userInfo': { 'id': 12, 'title': '张三12', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1023, 'title': '这是一句测试的内容 23', 'dt': 1478655191000, 'userInfo': { 'id': 13, 'title': '张三13', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1024, 'title': '这是一句测试的内容 24', 'dt': 1478655191000, 'userInfo': { 'id': 14, 'title': '张三14', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1025, 'title': '这是一句测试的内容 25', 'dt': 1478655191000, 'userInfo': { 'id': 15, 'title': '张三15', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1026, 'title': '这是一句测试的内容 26', 'dt': 1478655191000, 'userInfo': { 'id': 16, 'title': '张三16', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1027, 'title': '这是一句测试的内容 27', 'dt': 1478655191000, 'userInfo': { 'id': 17, 'title': '张三17', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1028, 'title': '这是一句测试的内容 28', 'dt': 1478655191000, 'userInfo': { 'id': 18, 'title': '张三18', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
        {'id': 1029, 'title': '这是一句测试的内容 29', 'dt': 1478655191000, 'userInfo': { 'id': 19, 'title': '张三19', 'subtitle': '推广语', 'isfollow': 0, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png', } },
    ],
    imgDat = [
        {
            'id': 6,
            'content': {
                'content': 'ip6拍的',
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'width': 3750,
                    'height': 2812.5
                },{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'width': 2448,
                    'height': 3264
                },{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'width': 2448,
                    'height': 3264
                }]
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'createTime': 1478655191000
        },
        {
            'id': 7,
            'content': {
                'content': '嘻哈ip6拍的',
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'width': 2448,
                    'height': 3264
                }]
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '嘻哈',
                'subtitle': '游戏人生',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'createTime': 1478655191000
        },
        {
            'id': 8,
            'content': {
                'content': '竖图',
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'width': 2448,
                    'height': 3264
                }]
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'createTime': 1478655191000
        },
        {
            'id': 9,
            'content': {
                'content': '横图',
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'width': 3264,
                    'height': 2448
                }]
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'createTime': 1478655191000
        },
        {
            'id': 10,
            'content': {
                'content': '文字长图',
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'width': 480,
                    'height': 11437
                }]
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'createTime': 1478655191000
        },
        {
            'id': 11,
            'content': {
                'content': '测试',
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'width': 500,
                    'height': 484
                }]
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'createTime': 1478655191000
        },
        {
            'id': 12,
            'rssId': '58227cd8e4b00a406acdcb68',
            'content': {
                'content': '喜欢',
                'imageUrl': ['http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'size': 640843,
                    'width': 1514,
                    'height': 640,
                    'type': 'png',
                    'store': 1
                }],
                'place': ''
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478655191000,
            'topTime': 1478655191000,
            'updateTime': 1478655191000,
            'status': 20,
            'entityId': '58227cd7043cafe87ff06a60',
            'rssInfo': {'rssId': '58227cd8e4b00a406acdcb68', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 13,
            'rssId': '5821ad67e4b0bb4dcfcd6ba7',
            'content': {
                'content': '超宽',
                'imageUrl': ['http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'size': 155568,
                    'width': 1080,
                    'height': 230,
                    'type': 'png',
                    'store': 1
                }],
                'place': ''
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478602086000,
            'topTime': 1478602086000,
            'updateTime': 1478602086000,
            'status': 20,
            'entityId': '5821ad66043cafe87ff06a4c',
            'rssInfo': {'rssId': '5821ad67e4b0bb4dcfcd6ba7', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 14,
            'rssId': '5821ad0be4b00a406acdca77',
            'content': {
                'content': '超高',
                'imageUrl': ['http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'size': 265081,
                    'width': 289,
                    'height': 1920,
                    'type': 'png',
                    'store': 1
                }],
                'place': ''
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478601994000,
            'topTime': 1478601994000,
            'updateTime': 1478601994000,
            'status': 20,
            'entityId': '5821ad0a043cafe87ff06a49',
            'rssInfo': {'rssId': '5821ad0be4b00a406acdca77', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 15,
            'rssId': '5821acede4b0bb4dcfcd6ba6',
            'content': {
                'content': '横图',
                'imageUrl': ['http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'size': 252396,
                    'width': 1288,
                    'height': 724,
                    'type': 'png',
                    'store': 1
                }],
                'place': ''
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478601964000,
            'topTime': 1478601964000,
            'updateTime': 1478601964000,
            'status': 20,
            'entityId': '5821acec043cafe87ff06a48',
            'rssInfo': {'rssId': '5821acede4b0bb4dcfcd6ba6', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 16,
            'rssId': '5821acbfe4b00a406acdca76',
            'content': {
                'content': '竖图',
                'imageUrl': ['http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'size': 154419,
                    'width': 362,
                    'height': 644,
                    'type': 'png',
                    'store': 1
                }],
                'place': ''
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478601918000,
            'topTime': 1478601918000,
            'updateTime': 1478601918000,
            'status': 20,
            'entityId': '5821acbe043cafe87ff06a47',
            'rssInfo': {'rssId': '5821acbfe4b00a406acdca76', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 17,
            'rssId': '5821ac90e4b0bb4dcfcd6ba5',
            'content': {
                'content': '方形',
                'imageUrl': ['http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'size': 91254,
                    'width': 540,
                    'height': 540,
                    'type': 'png',
                    'store': 1
                }],
                'place': ''
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478601871000,
            'topTime': 1478601871000,
            'updateTime': 1478601871000,
            'status': 20,
            'entityId': '5821ac8f043cafe87ff06a44',
            'rssInfo': {'rssId': '5821ac90e4b0bb4dcfcd6ba5', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 18,
            'rssId': '582138dbe4b00a406acdc86f',
            'content': {
                'content': '横突',
                'imageUrl': ['http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'size': 227937,
                    'width': 1288,
                    'height': 724,
                    'type': 'png',
                    'store': 1
                }],
                'place': ''
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478572250000,
            'topTime': 1478572250000,
            'updateTime': 1478572250000,
            'status': 20,
            'entityId': '582138da6c272a5e7cd89145',
            'rssInfo': {'rssId': '582138dbe4b00a406acdc86f', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 19,
            'rssId': '582042ebe4b0bb4dcfcd67ad',
            'content': {
                'content': '正方',
                'imageUrl': ['http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'size': 64836,
                    'width': 540,
                    'height': 540,
                    'type': 'png',
                    'store': 1
                }],
                'place': ''
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478509290000,
            'topTime': 1478509290000,
            'updateTime': 1478509290000,
            'status': 20,
            'entityId': '582042ea95c0f74b76fb1f76',
            'rssInfo': {'rssId': '582042ebe4b0bb4dcfcd67ad', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 20,
            'rssId': '582042d0e4b0bb4dcfcd67ac',
            'content': {
                'content': '超宽?矩形',
                'imageUrl': ['http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png',
                    'size': 1259873,
                    'width': 1080,
                    'height': 1080,
                    'type': 'png',
                    'store': 1
                }],
                'place': ''
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478509263000,
            'topTime': 1478509263000,
            'updateTime': 1478509263000,
            'status': 20,
            'entityId': '582042cf95c0f74b76fb1f75',
            'rssInfo': {'rssId': '582042d0e4b0bb4dcfcd67ac', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 21,
            'rssId': '58204284e4b00a406acdc673',
            'content': {
                'content': '超高',
                'imageUrl': ['http://apr.qiniu.mobi/Fm1cl-YzSidrvpcLAaYtYyw09Gho'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/Fm1cl-YzSidrvpcLAaYtYyw09Gho',
                    'size': 662352,
                    'width': 796,
                    'height': 1880,
                    'type': 'png',
                    'store': 1
                }],
                'place': ''
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478509187000,
            'topTime': 1478509187000,
            'updateTime': 1478509187000,
            'status': 20,
            'entityId': '5820428395c0f74b76fb1f74',
            'rssInfo': {'rssId': '58204284e4b00a406acdc673', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 22,
            'rssId': '58204267e4b0bb4dcfcd67ab',
            'content': {
                'content': '超宽',
                'imageUrl': ['http://apr.qiniu.mobi/FuBH-jp1XKqqK73ykLDeqbeZ5d1n'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/FuBH-jp1XKqqK73ykLDeqbeZ5d1n',
                    'size': 67642,
                    'width': 1080,
                    'height': 535,
                    'type': 'png',
                    'store': 1
                }],
                'place': ''
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478509158000,
            'topTime': 1478509158000,
            'updateTime': 1478509158000,
            'status': 20,
            'entityId': '5820426695c0f74b76fb1f71',
            'rssInfo': {'rssId': '58204267e4b0bb4dcfcd67ab', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 23,
            'rssId': '581c5c7ae4b00a406acdc21b',
            'content': {
                'content': '豪大大鸡排',
                'imageUrl': ['http://apr.qiniu.mobi/FuBH-jp1XKqqK73ykLDeqbeZ5d1n'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/FuBH-jp1XKqqK73ykLDeqbeZ5d1n',
                    'size': 67642,
                    'width': 1080,
                    'height': 535,
                    'type': 'png',
                    'store': 1
                }],
                'place': '',
                'tag': true
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478253689000,
            'topTime': 1478253689000,
            'updateTime': 1478253689000,
            'status': 20,
            'entityId': '581c5c79196381935eddce81',
            'rssInfo': {'rssId': '581c5c7ae4b00a406acdc21b', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 24,
            'rssId': '581c53a6e4b00a406acdc1e7',
            'content': {
                'content': '天黑黑vv哈',
                'imageUrl': ['http://apr.qiniu.mobi/FvsIarAaTGpF54TcKMaxqp3HPKSP'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/FvsIarAaTGpF54TcKMaxqp3HPKSP',
                    'size': 265081,
                    'width': 289,
                    'height': 1920,
                    'type': 'png',
                    'store': 1
                }],
                'place': '',
                'tag': true
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478251429000,
            'topTime': 1478251429000,
            'updateTime': 1478251429000,
            'status': 20,
            'entityId': '581c53a5f04bb2355e26c9a7',
            'rssInfo': {'rssId': '581c53a6e4b00a406acdc1e7', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 25,
            'rssId': '581c5350e4b0bb4dcfcd62dc',
            'content': {
                'content': '好想好想今下午',
                'imageUrl': ['http://apr.qiniu.mobi/Fm1cl-YzSidrvpcLAaYtYyw09Gho'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/Fm1cl-YzSidrvpcLAaYtYyw09Gho',
                    'size': 662352,
                    'width': 796,
                    'height': 1880,
                    'type': 'png',
                    'store': 1
                }],
                'place': '',
                'tag': true
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478251343000,
            'topTime': 1478251343000,
            'updateTime': 1478251343000,
            'status': 20,
            'entityId': '581c534ff04bb2355e26c9a6',
            'rssInfo': {'rssId': '581c5350e4b0bb4dcfcd62dc', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 26,
            'rssId': '581c52b6e4b0bb4dcfcd62d9',
            'content': {
                'content': '还是几点到家',
                'imageUrl': ['http://apr.qiniu.mobi/Fv_t1t4WsXKez0dIG1OyLHRZj8mn'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/Fv_t1t4WsXKez0dIG1OyLHRZj8mn',
                    'size': 1226643,
                    'width': 1448,
                    'height': 2576,
                    'type': 'png',
                    'store': 1
                }],
                'place': '',
                'tag': true
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478251189000,
            'topTime': 1478251189000,
            'updateTime': 1478251189000,
            'status': 20,
            'entityId': '581c52b5f04bb2355e26c9a5',
            'rssInfo': {'rssId': '581c52b6e4b0bb4dcfcd62d9', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 27,
            'rssId': '581c529ae4b0bb4dcfcd62d7',
            'content': {
                'content': '女大当嫁',
                'imageUrl': ['http://apr.qiniu.mobi/Fl4pLZuedg9nKbTevnThwUzEBhns'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/Fl4pLZuedg9nKbTevnThwUzEBhns',
                    'size': 86013,
                    'width': 540,
                    'height': 540,
                    'type': 'png',
                    'store': 1
                }],
                'place': '',
                'tag': true
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478251161000,
            'topTime': 1478251161000,
            'updateTime': 1478251161000,
            'status': 20,
            'entityId': '581c5299f04bb2355e26c9a4',
            'rssInfo': {'rssId': '581c529ae4b0bb4dcfcd62d7', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 28,
            'rssId': '581c5233e4b00a406acdc1dc',
            'content': {
                'content': '发挥好vf',
                'imageUrl': ['http://apr.qiniu.mobi/FkNlJUthRnmewlcQQiiA-yCaIN0Z'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/FkNlJUthRnmewlcQQiiA-yCaIN0Z',
                    'size': 1259873,
                    'width': 1080,
                    'height': 1080,
                    'type': 'png',
                    'store': 1
                }],
                'place': '',
                'tag': true
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478251058000,
            'topTime': 1478251058000,
            'updateTime': 1478251058000,
            'status': 20,
            'entityId': '581c5232f04bb2355e26c99f',
            'rssInfo': {'rssId': '581c5233e4b00a406acdc1dc', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 29,
            'rssId': '581ae4f9e4b00a406acdbed1',
            'content': {
                'content': '复活节',
                'imageUrl': ['http://apr.qiniu.mobi/FkBD477TSGJVw6vJcoxywn0ATqrN'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/FkBD477TSGJVw6vJcoxywn0ATqrN',
                    'size': 158391,
                    'width': 362,
                    'height': 644,
                    'type': 'png',
                    'store': 1
                }],
                'place': '',
                'tag': true
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478157560000,
            'topTime': 1478157560000,
            'updateTime': 1478157560000,
            'status': 20,
            'entityId': '581ae4f8a31215845418ea21',
            'rssInfo': {'rssId': '581ae4f9e4b00a406acdbed1', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 30,
            'rssId': '581ae3cde4b00a406acdbed0',
            'content': {
                'content': 'HK',
                'imageUrl': ['http://apr.qiniu.mobi/Fhf1gl5A2j5jndNGgHvMfQ7ICwUI'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/Fhf1gl5A2j5jndNGgHvMfQ7ICwUI',
                    'size': 354702,
                    'width': 1440,
                    'height': 2267,
                    'type': 'unknow',
                    'store': 1
                }],
                'place': '',
                'tag': true
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478157260000,
            'topTime': 1478157260000,
            'updateTime': 1478157260000,
            'status': 20,
            'entityId': '581ae3cca31215845418ea1a',
            'rssInfo': {'rssId': '581ae3cde4b00a406acdbed0', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 31,
            'rssId': '581ae2dbe4b00a406acdbece',
            'content': {
                'content': '吐血',
                'imageUrl': ['http://apr.qiniu.mobi/FlhVfPQLqu0qXhpbVkQAy68j4BzE'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/FlhVfPQLqu0qXhpbVkQAy68j4BzE',
                    'size': 625297,
                    'width': 1080,
                    'height': 1080,
                    'type': 'png',
                    'store': 1
                }],
                'place': '',
                'tag': true
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478157018000,
            'topTime': 1478157018000,
            'updateTime': 1478157018000,
            'status': 20,
            'entityId': '581ae2daa31215845418ea0b',
            'rssInfo': {'rssId': '581ae2dbe4b00a406acdbece', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 32,
            'rssId': '581ae253e4b00a406acdbecd',
            'content': {
                'content': '图腾',
                'imageUrl': ['http://apr.qiniu.mobi/FgHVj-T9Xj-RlG4M0dnIEqrhyQrP'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/FgHVj-T9Xj-RlG4M0dnIEqrhyQrP',
                    'size': 977455,
                    'width': 1080,
                    'height': 1080,
                    'type': 'png',
                    'store': 1
                }],
                'place': '',
                'tag': true
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478156882000,
            'topTime': 1478156882000,
            'updateTime': 1478156882000,
            'status': 20,
            'entityId': '581ae252a31215845418ea06',
            'rssInfo': {'rssId': '581ae253e4b00a406acdbecd', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 33,
            'rssId': '581ae196e4b0bb4dcfcd5fd5',
            'content': {
                'content': '凤凰',
                'imageUrl': ['http://apr.qiniu.mobi/FvrxDsXkIz7lzeVYcA2Nqw7cQEWf'],
                'size': [],
                'imgObjects': [{
                    'url': 'http://apr.qiniu.mobi/FvrxDsXkIz7lzeVYcA2Nqw7cQEWf',
                    'size': 166046,
                    'width': 1080,
                    'height': 1919,
                    'type': 'unknow',
                    'store': 1
                }],
                'place': '',
                'tag': true
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'topicId': '581aa1aa377a542553bb2e09',
            'comments': 0,
            'thumbUp': 0,
            'top': 0,
            'createTime': 1478156693000,
            'topTime': 1478156693000,
            'updateTime': 1478156693000,
            'status': 20,
            'entityId': '581ae195a31215845418e9ff',
            'rssInfo': {'rssId': '581ae196e4b0bb4dcfcd5fd5', 'likeCount': 0, 'likeStatus': 0, 'commentCount': 0}
        },
        {
            'id': 1,
            'content': {
                'content': '小图',
                'imgObjects': [{'url': '../images/100x100.jpg', 'width': 100, 'height': 100}]
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'createTime': 1478655191000
        },
        {
            'id': 2,
            'content': {
                'content': '小图',
                'imgObjects': [{'url': '../images/300x100.jpg', 'width': 300, 'height': 100}]
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'createTime': 1478655191000
        },
        {
            'id': 3,
            'content': {
                'content': '小图',
                'imgObjects': [{'url': '../images/2000x100.jpg', 'width': 2000, 'height': 100}]
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'createTime': 1478655191000
        },
        {
            'id': 4,
            'content': {
                'content': '小图',
                'imgObjects': [{'url': '../images/100x300.jpg', 'width': 100, 'height': 300}]
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'createTime': 1478655191000
        },
        {
            'id': 5,
            'content': {
                'content': '小图',
                'imgObjects': [{'url': '../images/100x2000.jpg', 'width': 100, 'height': 2000}]
            },
            'userInfo': {
                'openId': 'c_306511',
                'title': '小丸子',
                'subtitle': '柯基柯基柯基',
                'avatarId': 'http://scloud.mobi/f/0CSBBkZNxjsXNw-1EFUetiVld2LqQ2oFWadrbSNh-h0fG.jpg'
            },
            'createTime': 1478655191000
        },
    ],
    userDao = require('./comment/userDao');

/**
 * 评论点赞TOKEN获取
 *              -- Author bu Dio Zhu. on 2016.12.28
 */
router.use('/comment', comment);

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({'code': 0, 'msg': 'ok'});
});

router.post('/getRandomList', function (req, res, next) {
    console.log('getRandomList: ', req.body);
    var rtn = {
            'code': 0,
            'msg': 'ok',
            'data': []
        },
        limit,
        offset;

    offset = req.body.offset || 0;
    limit = req.body.limit || 10;

    rtn.data = dat.slice(offset, limit);

    res.json(rtn);
    res.end();
    // setTimeout(function () {
    //     res.json(rtn);
    // }, 500);// 模拟网络延时...
});

router.post('/getInfiniteList', function (req, res, next) {
    console.log('getInfiniteList: ', req.body);
    var rtn = {
            'code': 0,
            'msg': 'ok',
            'data': []
        },
        limit,
        offset;

    offset = req.body.offset || 0;
    limit = req.body.limit || 10;

    // rtn.data = dat.slice(offset, limit);
    for (var i = offset; i < limit; i++) {
        rtn.data.push({
            'id': i,
            'title': '这是一句测试的内容 ' + i,
            'dt': Date.now(),
            'userInfo': { 'id': "397833", 'title': '老朱',    'subtitle': '推广语', 'isfollow': 1, 'avatar': 'http://scloud.mobi/f/px7AsFiOs4o1y2QYiCLSEFtj2uLEp44OvJMtAkgCVV8fG_80_80_100_1.jpg', }
        });
    }

    res.json(rtn);
    // setTimeout(function () {
    //     res.json(rtn);
    // }, 500);// 模拟网络延时...
});

router.post('/getImgList', function (req, res, next) {
    console.log('getImgList: ', req.body);
    var rtn = {
            'meta': {'code': 0, 'message': '通讯成功'},
            'data': []
        },
        offset = req.body.offset || 0,
        limit = req.body.limit || 10;

    rtn.data = imgDat.slice(offset, limit);

    // // 方式一:
    // function sleep (milliSeconds) {
    //    var startTime = new Date().getTime();
    //    while (new Date().getTime() < startTime + milliSeconds);
    // }
    // sleep(500);// 模拟网络延时...
    // res.json(rtn);

    // 方式二:
    setTimeout(function () {
        res.json(rtn);
    }, 500);// 模拟网络延时...

    // res.json(rtn);
});

router.post('/addUser', function (req, res, next) {
    console.log('addUser: ', req.body);
    var rtn = {
        'code': 0,
        'msg': 'ok',
        'data': []
    };
    userDao.set(req.body);

    res.json(rtn);
});
router.post('/getUserList', function (req, res, next) {
    console.log('getUserList: ', req.body);
    var rtn = {
            'code': 0,
            'msg': 'ok',
            'data': []
        },
        ids = req.body.userIds || [],
        users = userDao.get(),
        userList = [];
    if (ids && ids.length > 0) {
        for (var i = 0, len = ids.length;i < len;i++) {
            users.forEach(function (u) {
                if (u.userId == ids[i]) userList.push(u);
            });
        }
    }

    rtn.data = userList;

    res.json(rtn);
});

/**
 * 模拟原生返回数据
 */
router.post('/getResult', function (req, res, next) {
    var rtns = {
        client_id: '10000',
        ver: '8.4',
        data: {
            imageArr: [
                {
                    size: '10977',
                    base64: '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',
                    imageType: 'jpeg',
                    width: '402',
                    imageKey: 'cac7253c-4fb9-4f55-9eba-979f595b840e',
                    height: '242'
                },
                {
                    size: '10977',
                    base64: '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',
                    imageType: 'jpeg',
                    width: '402',
                    imageKey: 'cac7253c-4fb9-4f55-9eba-979f595b840e',
                    height: '242'
                }
            ]
        },
        platform: 'iOS'
    };
    setTimeout(function () {
        res.json(rtns);
    }, 1000);// 模拟网络延时...
});

router.post('/getDelay', function (req, res, next) {
    console.log('getDelay: ', req.body);
    var rtn = {
            'code': 0,
            'msg': 'ok',
            'data': Date.now()
        },
        delay = req.body.delay || 100;

    setTimeout(function () {
        res.json(rtn);
    }, delay);// 模拟网络延时...
});

// /**
//  * 微信小程序能通过login方法获取code，此接口接收code，请求服务器换取open_id；
//  *              -- Author by Dio Zhu. on 2017.10.19
//  */
// router.get('/wxcode2session', function (req, res, next) {
//     res.json({'code': 0, 'msg': 'ok!!!'});
//     // var data = {
//     //     code: 'test@test.com'
//     // };

//     // // data = require('querystring').stringify(data);
//     // console.log(data);
//     // var opt = {
//     //     method: 'POST',
//     //     host: 'https://api.weixin.qq.com',
//     //     // port: 80,
//     //     path: '/sns/jscode2session',
//     //     headers: {
//     //         'Content-Type': 'application/x-www-form-urlencoded'
//     //     }
//     // };
//     // var req = https.request(opt, function (serverFeedback) {
//     //     // if (serverFeedback.statusCode == 200) {
//     //     //     var body = '';
//     //     //     serverFeedback.on('data', function (data) { body += data; })
//     //     //                   .on('end', function () { res.send(200, body); });
//     //     // } else {
//     //     //     res.send(500, 'error');
//     //     // }
//     //     res.json(serverFeedback);
//     // });
//     // req.write(data + '\n');
//     // req.end();
// });

module.exports = router;
