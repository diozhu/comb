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
// import VueResource from 'vue-resource';
import CONFIG from '../../config';
import logger from '../utils/logger';
import _promise from '../utils/promise';
import store from '../../store/';
import * as utils from '../utils/utils.js'; //eslint-disable-line
import qs from 'qs'; //eslint-disable-line

// // 注册vue-resource
// Vue.use(VueResource);
// Vue.http.options.emulateJSON = true; // post 提交时，以表单形式提交

import axios from 'axios'; // 可替换vue-resource
Vue.http = axios;
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

if (typeof Promise === 'undefined') {
    var Promise = _promise;
}

/** 封装request方法 -- Author by Dio Zhu. on 2018.4.14 */
let request = (url, params, opts) => { //eslint-disable-line
    logger.log('---------------- REQUEST START ----------------');
    logger.log('---> api.request: ', url, params, opts);
    if (opts && opts.loading) store.commit('OPEN_LOADING'); // 显示菊花
//     let accessSource = utils.getSessionStorage().get('access_source') || 20;  // 服务器端的指定标识，用于区分多公众号及各个下单平台的标识，默认标识：20（代表H5）。 Author by Dio Zhu. on 2017.12.22        if (opt.query) { // 处理query对象到url
    let opt = opts || {},
        param = {
            url: url,
            method: opt.method || 'get',
            headers: {
                'access-token': CONFIG.token || utils.getSessionStorage().get('token')
            }
        };
    if (opt.emulateJSON) { // 开启表单模式，转换对象、数组为string
        param.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        for (let k in params) if (params.hasOwnProperty(k) && (Object.prototype.toString.call(params[k]) === '[object Object]' || Object.prototype.toString.call(params[k]) === '[object Array]')) params[k] = JSON.stringify(params[k]);
    }
    if (param.method.toLowerCase() === 'post') { // post，把参数添加到data
        // param.params = {'access_source': accessSource};
        param.data = params;
        param.transformRequest = [function (data, headers) { return qs.stringify(data); }]; // data转换
    } else { // get，参数添加到query。。。
        // param.params = {...params, 'access_source': accessSource};
        param.params = params;
    }
    param.paramsSerializer = function (params) { return qs.stringify(params); }; // 序列化query参数
    logger.log('---> api.request: ', param);
    return Vue.http.request(param).then(res => {
        if (opts && opts.loading) store.commit('CLOSE_LOADING'); // 隐藏菊花
        // logger.log('api.request.RESPONSE ===>>> ', res);
        let rtn = res && res.data;
        logger.log('api.request.RESPONSE ===>>> ', rtn, rtn.errcode);
        if (rtn && rtn.errcode === 0) { // 接口成功返回~
            // logger.log('api.request.RESPONSE.SUCCESS ===>>> ', rtn.data);
            return rtn.data;
        } else if (rtn.errcode === 10003 || rtn.errcode === 10004 || rtn.errcode === 10005 || rtn.errcode === 10006 || rtn.errcode === 10011) {
            // TODO: 接口回报token失效，可在此进行重登录处理
            logger.warn('api.request.RESPONSE.TOKEN_INVALID ===>>> ', rtn);
            return Promise.reject(rtn);
        } else { // 接口返回其他错误~
            logger.error('api.request.RESPONSE.ERROR ===>>> ', res.data);
            return Promise.reject(res.data);
        }
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
            init () { // 下拉刷新时重新赋值
                this.offset = 0;
                this.limit = CONFIG.LIMIT;
                this.page = 1;
                this.time = -1;
            },
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
                        logger.log('[api._fetcher.getListBySection.success]', res);
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
    // demo数据
    let data = { appId: '111', avatarId: '', feedId: '', params: [], subtitle: '幸福666', title: '寂寞红酒', userId: '111' };
    CONFIG.loginData.userInfo = data || { userId: 1 };
    logger.log('api.login.loginData: ', CONFIG.loginData);
    return Promise.resolve(data);
};
/** 【测试】获取列表信息 */
export const getRandomList = (params, opts) => request(CONFIG.URL + '/api/getRandomList', params, { ...opts, method: 'post' });
export const getInfiniteList = (params, opts) => request(CONFIG.URL + '/api/getInfiniteList', params, { ...opts, method: 'post' });
/** 【测试】获取图片列表信息 */
export const getImgList = (params, opts) => request(CONFIG.URL + '/api/getImgList', params, { ...opts, method: 'post' });
/** 【测试】延迟的post */
export const getDelay = (params, opts) => request(CONFIG.URL + '/api/getDelay', params, opts);
/** 【测试】POST~-- Author by Dio sunelqing. on 2018.4.9 */
export const postTest = (params, opts) => request(CONFIG.URL + '/wap/user/add_address', params, { ...opts, method: 'post', emulateJSON: true });
/** 【测试】POST~-- Author by Dio sunelqing. on 2018.4.9 */
export const postTest2 = (params, opts) => request(CONFIG.URL + '/activity_sales/add_activity_sales', params, { ...opts, method: 'post', emulateJSON: true });
/** 【测试】GET -- Author by Dio sunelqing. on 2018.4.9 */
export const getTest = (params, opts) => request(CONFIG.URL + '/wap/city/get_city_list', params, opts);
/** 【测试】根据手机号获取token，仅用于测试 -- Author by Dio Zhu. on 2018.4.13 */
export const bindPhone = (params, opts) => request(CONFIG.URL + '/wap/user/bind_phone', params, opts);
