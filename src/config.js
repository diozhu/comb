
let getQueryStringByName = function (name) {
    let result = document.location.search.match(new RegExp('[\?\&]' + name + '=([^\&]+)', 'i'));
    if (result == null || result.length < 1) return '';
    return result[1];
};

let config = {
    DEBUG: true,
    TITLE: '蜂巢',
    APPID: 505,
    model: (/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())) ? 'ios' : 'android',
    // 测试code，上线后注释掉！
    CODE: getQueryStringByName('code') || 'LHWHc72jYmJ2ZrecMiYBJrH1GOfxirLahZ5FiGXwvJPNm5qBEAo2vh1EEzahgLnfMJrQYEVwKkamiCCKuSoPyu+UZSZy7drBa4snOuqyy1S7I2sn+s8zbhuHSCq37Hn4H4M/hGJmRQqVL/SLXW8vTJxuiWRYjSSIlwcOaWAvK2L2l1R13AV54xUXb71ByV0vNVntMmmZAdw=',
    ticket: getQueryStringByName('ticket') || '49b5af49c3c1608c3a372af5cfe5c580', // 获取用户信息需要
    URL: '',    // 本地服务的api地址
    SIGNIN_URL: '',    // 登陆、微信OAuth地址
    MATCH_URL: '',    // 赛事API地址
    LIMIT: 10,  // 列表时，每次请求的记录数

    history: {},    // 保存页面滚动条的位置信息

    loginData: { // 用户登录信息，在api.login方法中赋值
        userInfo: { userId: 0 }
    },

    // toonType: 100,

    // COMMENT_UTL: 'http://172.28.50.173:8080',    // 微服务-评论点赞: 微服务地址
    // COMMENT_APPID: 5,  // 微服务-评论点赞: appid, 当前应用在微服务注册的id标识
    // COMMENT_TOKEN: '',  // 微服务-评论点赞: token, 由当前app的服务端生成, 是每个接口的必填项, 如失效, 请向服务端重新获取
    // COMMENT_LIMIT: 20,  // 列表时，每次请求的记录数
    // COMMENT_MAX: 50,    // 微服务-评论点赞最大评论字数，服务端最大5000，这里为了测试设定成了50

    // BBS_URL: 'http://msbbs.toon.mobi',    // 微服务-论坛: token接口url，本项目使用的代理，配置在/config/index.js中
    // BBS_APPID: 1,   // 微服务-论坛: appid, 当前应用在微服务注册的id标识
    // BBS_TOKEN: '',  // 微服务-论坛: token, 由当前app的服务端生成, 是每个接口的必填项, 如失效, 请向服务端重新获取
    // BBS_LIMIT: 20,  // 列表时，每次请求的记录数
    // BBS_MAX: 50,     // 微服务-论坛: 最大评论字数，服务端最大5000，这里为了测试设定成了50

    // ORG_URL: 'http://t100kaoqinapp.zhengtoon.com',    // 企通地址
    // ORG_TOKEN: '',  // 企通token

    BMAP_URL: '',     // 百度地图接口
    BMAP_AK: 'fxgnhRQk7PhTxbS65PQl85QQTIYjuZro',     // 百度地图接口ak
    AMAP_KEY: '5249ccefcdf2da0475ac21cb30105601',    // 高德key
    AMAP_VERSION: '1.4.1' // 高德API版本
};

if (process.env.NODE_ENV === 'production') { // 如果是线上环境，修改对应的参数. mod by Dio Zhu. on 2017.6.22
    // config.URL = '';
    let url = window.location.href;
    if (/^https?:\/\/pre\.doing\.hy-sport\.cn\//ig.test(url)) { // 预发环境
        // config.URL = 'http://pre.doing.hy-sport.cn';
        config.URL = 'http://api-dongyin.hy-sport.cn';
        config.MATCH_URL = 'http://47.95.47.51:8081';
    } else if (/^https?:\/\/dongyin\.hy-sport\.cn\//ig.test(url)) { // 上线环境，公网解析
        config.URL = 'http://api-dongyin.hy-sport.cn';
        config.MATCH_URL = 'http://47.95.43.139:9081';
    } else { // 开发环境
        config.URL = 'http://qa.doing.hy-sport.cn';
        config.MATCH_URL = 'http://47.95.47.51:8081';
    }
    config.SIGNIN_URL = 'http://qa.education.hy-sport.cn'; // 开发环境
    config.BMAP_URL = 'http://api.map.baidu.com';
}

export default config;
