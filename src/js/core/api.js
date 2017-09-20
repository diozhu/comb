/**
 * api接口
 *              -- Author by Dio Zhu. on 2017.2.9
 *
 * 修改了以前的对象的方式，以前各方法作为对象属性，问题在打包（build）后，会把整个对象打进去。
 * 现改用es6的模块方式，前端引用方法：
 *      import * as api from '../api.js';
 *      api.signin();
 * 打包时webpack的tree-shaking会只处理被引用的方法；
 *              -- Author by Dio Zhu. on 2017.6.26
 *
 * 添加了axios的替换方案
 *              -- Author by Dio Zhu. on 2017.6.26
 */

import Vue from 'vue';
import VueResource from 'vue-resource';
import CONFIG from '../../config';
import logger from '../utils/logger';
import _promise from '../utils/promise';
import store from '../../store/';
// import { toonCall } from '../../js/core/core.js';

// 注册vue-resource
Vue.use(VueResource);
// Vue.http.options.emulateJSON = true; // post 提交时，以表单形式提交

// import axios from 'axios'; // 可替换vue-resource
// Vue.http = axios;

if (typeof Promise === 'undefined') {
    var Promise = _promise;
}

/**
 * 修改opts参数，java后台，接口有的需要用form表单形式，有的需要query形式。。。
 * 原理是采用vue.http.post的第三个参数，这里没有拆分函数形参，为了可以接受更多的参数，比如emulateJSON。。。
 * 利用opts.options接受所有类似emulateJSON的参数；
 * 利用opts.query接受options.params；
 * 其他参数可以参考官网API：https://github.com/pagekit/vue-resource/blob/develop/docs/http.md
 *              -- Author by Dio Zhu. on 2017.7.12
 */
let post = (uri, params, opts) => {
        // logger.log('in post: ', uri, params, opts);
        if (opts && opts.loading) {
            logger.log('api.post: START LOADING ... ');
            store.commit('OPEN_LOADING'); // 显示菊花
        }
        let options = opts && opts.options || {}; // options of vue-resource
        options.params = opts && opts.query || {}; // 传入的参数，转换到query方式，具体说明查看API
        // logger.log('POST START...');
        return Vue.http.post(uri, params).then(function (res) {
            // // logger.log('POST: ', uri, params);
            // // logger.log('RESULT: ', res);
            if (opts && opts.loading) {
                logger.log('api.post: CLOSE LOADING ... ');
                store.dispatch('CLOSE_LOADING'); // 隐藏菊花
            }
            // var result = res.json();
            var result = res.data;
            // logger.log('RESULT: ', res);
            if (result.code === 0 || result.meta.code === 0) {
                // logger.log('POST SUCCESS', uri, JSON.stringify(result.data));
                return Promise.resolve(result.data);
            } else {
                // logger.warn('POST ERROR-1', uri, JSON.stringify(result.msg));
                return Promise.reject(result.meta || result.msg || result.Msg || result.meta.message);
            }
        }, function (err) {
            // logger.error('POST ERROR-2', uri, err);
            if (opts && opts.loading) {
                logger.log('api.post: CLOSE LOADING ... ');
                store.dispatch('CLOSE_LOADING'); // 菊花
            }
            // 通过toon协议判断断网的处理
            // toonCall({functionType: 1}, 'mwap/network', function (res) {
            //     console.log('toon back: ', res, router);
            // });
            return Promise.reject(err);
        }).catch(function (err) {
            // logger.error('POST ERROR-3', err);
            if (opts && opts.loading) {
                logger.log('api.post: CLOSE LOADING ... ');
                store.dispatch('CLOSE_LOADING'); // 菊花
            }
            return Promise.reject(err);
        });
    }, get = function (uri, params, opts) {
        // logger.log('GET START...', uri, params, opts);
        if (opts && opts.loading) {
            logger.log('api.get: START LOADING ... ');
            store.commit('OPEN_LOADING'); // 显示菊花
        }
        return Vue.http.get(uri, params).then(function (res) {
            // logger.log('GET: ', uri, JSON.stringify(params));
            // logger.log('RESULT: ', JSON.stringify(res));
            if (opts && opts.loading) {
                logger.log('api.get: CLOSE LOADING ... ');
                store.dispatch('CLOSE_LOADING'); // 隐藏菊花
            }
            // let result = res.json();
            let result = res.data;
            if (result.code === 0 || result.code === '001' || (result.meta && result.meta.code === 0) || result.Code === 0) {
                // logger.log('GET SUCCESS', uri, JSON.stringify(result.data));
                return Promise.resolve(result.data);
            } else {
                // logger.warn('GET ERROR-1', uri, JSON.stringify(result.msg));
                return Promise.reject(result.meta || result.msg || result.Msg || result.meta.message);
            }
        }, function (err) {
            // logger.error('GET ERROR-2', uri, err.message);
            if (opts && opts.loading) {
                logger.log('api.get: CLOSE LOADING ... ');
                store.dispatch('CLOSE_LOADING'); // 隐藏加载框
            }
            return Promise.reject(err);
        }).catch(function (err) {
            logger.error(err);
            if (opts && opts.loading) {
                logger.log('api.get: CLOSE LOADING ... ');
                store.dispatch('CLOSE_LOADING'); // 隐藏加载框
            }
            return Promise.reject(err);
        });
    };
/**
 * section 方式：基本上nodejs使用的是这种方式
 *      第一页：offset: 0, limit: 10
 *      第二页：offset: 10, limit: 20
 * page 方式： 所有php的分页基本使用这种方式
 *      第一页：page: 1, pageNum: 10
 *      第二页：page: 2, pageNum: 10
 * limit 方式： 评论赞的微服务使用这种方式
 *      第一页：offset: 0, limit: 10
 *      第二页：offset:10, limit: 10
 * 添加了enabled参数，调整了组件加载机制，适应一个页面多个滚动条的情况；
 * 调整了为空判断、结束语判断等逻辑；
 *              -- Mod by Dio Zhu. on 2017.3.17
 * time 方式：秘语中上拉加载，用的是传最后跳的时间戳的方法
 *      第一页：oTime：-1，pageSize：10
 *      第二页：oTime: 第一次最后一条数据的时间（接口中有返回），pageSize：10
 *              -- xufeng on 2017.4.17
 */
let _fetcher = {
    getInstance (fn, typ) {
        let _obj = {
            offset: 0,                  // 当前页数(nodejs)
            limit: CONFIG.LIMIT,        // 每页显示记录数(nodejs)
            page: 1,                    // 当前页号
            time: -1,                   // 当前分页时间
            fetch () {
                logger.log('[api._fetcher.fetch]');
                if (typ === 'section') {
                    return this.getListBySection();
                } else if (typ === 'limit') {
                    return this.getListByLimit();
                } else if (typ === 'page') {
                    return this.getListByPage();
                } else if (typ === 'time') {
                    return this.getListByTime();
                } else {
                    return Promise.reject('error func type in api fetcher...');
                }
            },
            getListBySection () {
                logger.log('[api._fetcher.getListBySection]', this.offset, this.limit);
                if (typeof fn === 'function') {
                    return fn({
                        offset: this.offset,
                        limit: (this.offset + this.limit)
                    }).then(res => {
                        if (res && res.length) this.offset += res.length;
                        return Promise.resolve(res);
                    });
                }
            },
            getListByLimit () {
                logger.log('[api._fetcher.getListByLimit]', this.offset, this.limit);
                if (typeof fn === 'function') {
                    return fn({
                        offset: this.offset,
                        limit: this.limit
                    }).then(res => {
                        if (res && res.length) this.offset += res.length;
                        return Promise.resolve(res);
                    });
                }
            },
            getListByPage () {
                logger.log('[api._fetcher.getListByPage]', this.page, this.limit);
                if (typeof fn === 'function') {
                    return fn({
                        page: this.page,
                        limit: this.limit
                    }).then(res => {
                        if (res && res.length) this.page += 1;
                        return Promise.resolve(res);
                    });
                }
            },
            getListByTime () {
                logger.log('[api._fetcher.getListByTime]', this.time, this.limit);
                if (typeof fn === 'function') {
                    return fn({
                        time: this.time,
                        limit: this.limit
                    }).then(({res = [], last = -1} = {}) => {
                        if (res && res.length) this.time = last;
                        return Promise.resolve(res);
                    });
                }
            }
        };
        return _obj;
    }
};
export function getFetcher (fn, typ) {
    return _fetcher.getInstance(fn, typ);
};

/**
 * 登陆接口，此接口Comb项目使用的是富强的，提供了用户id获取的接口，不用在本地搞数据库，实际项目中请按照自己后台修改~
 *              -- Author by Dio Zhu. on 2017.3.20
 */
export function signin () {
    // let uri = 'http://p100.muser.systoon.com/user/getInfoByCode',
    //     params = {
    //         'appId': CONFIG.APPID,
    //         'code': CONFIG.CODE
    //     };

    // return post(uri, params, {loading: true}).then(function (data) {
    //     // return post(uri, params).then(function (data) {
    //     CONFIG.loginData.userInfo = data || { userId: 1 };
    //     logger.log('api.login.loginData: ', CONFIG.loginData);
    //     return Promise.resolve(data);
    // });

    // demo数据，上面接口没改https，改了后可打开。 mod by Dio Zhu. on 2017.8.3
    let data = { appId: '505', avatarId: 'http://scloud.toon.mobi/f/5QrmKlnSrl40wuPJEqRGTT-SfBBaKT+7uU7DL5fNJ14fG.jpg', feedId: 'c_1407459100687437', params: [], subtitle: '幸福666', title: '寂寞红酒', toonUid: '0', userId: '2711523797' };
    CONFIG.loginData.userInfo = data || { userId: 1 };
    logger.log('api.login.loginData: ', CONFIG.loginData);
    return Promise.resolve(data);
};

/**
 * 根据ids，获取一组用户数据，接口由富强提供，实际项目中，各后台自己完成。。。
 *              -- Author by Dio Zhu. on 2017.4.18
 */
export function getUsers (params, opts) {
    let uri = 'http://p100.muser.systoon.com/user/getUserList',
        param = params || {};
    param.appId = CONFIG.APPID;

    return post(uri, params, opts);
};

/**
 * 富强提供的临时接口，用于根据id列表获取主题列表
 */
export function _getSubjectByIds (params, opts) {
    // let uri = 'http://msbbs.toon.mobi',
    let uri = 'http://p100.ms-bbs.systoon.com/test/topiclist',
        // let uri = CONFIG.URL + '/test/topiclist',
        param = params || {};
    param.appId = CONFIG.APPID;

    return post(uri, params, opts);
};

/**
 * 峰军提供的feed信息接口
 * 地址：t200.appinstall.toon.mobi/plugin/feedinfo
 * 数据格式：{'id':'313','code':'/XbBYdC1N+wJaLLziEhh+QeVcJDBgZbeYRdSGUbAOz9s7H4R+JfRBbbo/8hI/RDdGDbdkSXiC5xq7f838ZFFh8fTKCg4X6RKdLsmoXUSdG6MkcZkMmjZExOaOYNkXVnuKpk0QzcacMOoSbgWCAhMqIweR/Wg7OHzzkszcZINY+YTH70y8g5uwEmZLlk3MCMyXgFGMtKW+LQ='}
 *
 */
export function login () {
    // logger.log('@@@login.code: ', CONFIG.code);
    let _self = this,
        params = null,
        uri = 'http://t200.appinstall.toon.mobi/plugin/feedinfo',
        code = CONFIG.CODE;

    if (!code) {
        return Promise.reject('code error!');
    }

    params = {
        'id': 505,
        'code': code
    };
    return post(uri, params).then(function (data) {
        CONFIG.loginData.userInfo = data || { userId: 1 };
        logger.log('api.login.loginData: ', CONFIG.loginData);

        // 通知后台保存用户信息
        _self._addUser({
            userId: data.userId,
            feedId: data.feedId,
            avatarId: data.avatarId,
            title: data.title,
            subtitle: data.subtitle,
            cardNo: data.cardNo,
            version: data.version
        });
        return Promise.resolve(data);
    });
};

/**
 * 通知本地服务，保存用户信息。。。这个方法在其他项目中不存在哈，因为用了上面那个峰军的接口，所以要把获取回来的用户信息放到本地。。。
 * 没有用数据库，后台直接写个json文件保存的。。。
 *              -- Author by Dio Zhu. on 2017.1.22
 */
export function _addUser (params, opts) {
    let uri = CONFIG.URL + '/api/addUser',
        param = params || {};
    return post(uri, param, opts);
};

/** 获取列表信息 */
export function getRandomList (params, opts) {
    let uri = CONFIG.URL + '/api/getRandomList',
        param = params || {};
    param.session = (CONFIG.loginData) ? CONFIG.loginData.session || '' : '';
    return post(uri, param, opts);
};

export function getInfiniteList (params, opts) {
    let uri = CONFIG.URL + '/api/getInfiniteList',
        param = params || {};
    param.session = (CONFIG.loginData) ? CONFIG.loginData.session || '' : '';
    return post(uri, param, opts);
};

/**
 * 获取图片列表信息
 */
export function getImgList (params, opts) {
    let uri = CONFIG.URL + '/api/getImgList', // 列表显示
        param = params || {};
    param.session = (CONFIG.loginData) ? CONFIG.loginData.session || '' : '';
    return post(uri, param, opts);
};

/**
 * 向当前app服务请求微服务的token
 * 注意: 这里是向当前APP的服务端请求token, 而不是微服务!
 *              -- Author by Dio Zhu. on 2016.12.25
 */
export function vGetMicroCommentToken (params, opts) {
    let uri = CONFIG.URL + '/api/comment/token',
        param = params || {};
    return get(uri, param, opts).then(function (res) {
        CONFIG.COMMENT_TOKEN = res.token;
        logger.log('REFRESH COMMENT TOKEN: ', CONFIG.COMMENT_TOKEN);
        return Promise.resolve(res.token);
    });
};

/**
 * 根据评论赞微服务的用户id，获取本地用户列表，补充用户信息（头像、名称、推广语等）
 *              -- Author by Dio Zhu. on 2017.1.3
 */
export function vGetUserList (params, opts) {
    let uri = 'http://p100.muser.systoon.com/user/getUserList',
        param = params || {};
    param.appId = CONFIG.APPID;
    return post(uri, param, opts);
};
/**
 * 向当前app服务请求微服务的token
 *              -- Author by Dio Zhu. on 2017.4.10
 */
export function vGetMicroBbsToken (params, opts) {
    let uri = CONFIG.BBS_URL + '/bbs/gettoken',
        param = params || {};
    param.appId = CONFIG.BBS_APPID;
    return post(uri, param, opts).then(function (res) {
        CONFIG.BBS_TOKEN = res.token;
        logger.log('REFRESH BBS TOKEN: ', CONFIG.BBS_TOKEN);
        return Promise.resolve(res.token);
    });
};
/**
 * 纯测试...
 */
export function getDelay (params, opts) {
    let uri = CONFIG.URL + '/api/getDelay',
        param = params || {};
    return post(uri, param, opts);
};
/**
 * 批量获取用户信息
 */
export function getUserList (params, opts) {
    let uri = 'http://t200app-daily.toon.mobi/user/getUserList',
        param = params || {};
    param.ticket = CONFIG.ticket;
    return post(uri, param, opts);
};
/**
 * 选择人员搜索接口
 */
export function searchUser (params, opts) {
    let uri = 'http://t200app-daily.toon.mobi/user/search',
        param = params || {};
    param.ticket = CONFIG.ticket;
    return post(uri, param, opts);
};
/**
 * 获取组织或人员树
 */
export function getOrgTree (params, opts) {
    let uri = 'http://t200app-daily.toon.mobi/user/getOrgTree',
        param = params || {};
    param.ticket = CONFIG.ticket;
    return post(uri, param, opts);
};
