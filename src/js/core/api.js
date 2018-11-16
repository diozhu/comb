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
 * 添加了Axios的替换方案
 *              -- Author by Dio Zhu. on 2017.6.26
 */
import CONFIG from '../../config';
import logger from '../utils/logger';
import _promise from '../utils/promise';
import store from '../../store/';
import * as utils from '../utils/utils.js';
import router from '../../router';
import qs from 'qs';
import Vue from 'vue';
import Axios from 'axios';
import originJsonp from 'jsonp';

// 图片上传走的原生AJAX请求，需要添加虚路径 刘俊俊 2018.10.10
export const path = process.env.NODE_ENV === 'development' ? '/virtual' : '';

if (process.env.NODE_ENV === 'development') Axios.defaults.baseURL = '/virtual'; // 添加虚路径，避免开发时api与proxy冲突。 Author by Dio Zhu. on 2018.10.9
Vue.$http = Vue.prototype.$http = Axios;

if (typeof Promise === 'undefined') {
    var Promise = _promise;
}

// console.error(process.env);
// const CONFIG = {
//     url: process.env.VUE_APP_URL
// };
CONFIG.URL = process.env.VUE_APP_URL;

// 线上地址
// CONFIG.URL = 'http://api-dongyin.hy-sport.cn/';

// q1地址
// CONFIG.URL = 'http://q1-s-doing.hy-sport.cn';
// CONFIG.URL = 'http://qh.test.doing.hy-sport.cn';

/*
 * 封装Axios
 * @param string url 请求的URL地址
 * @param Object params post发送的数据/get的参数
 * @param Object opts 请求的设置项
 *      loading:设置是否现实loading菊花
 *      method：设置get|post提交，默认是get
 *      emulateJSON：设置是否转为表单提交模式
 * @return Promise 返回Promise对象
 *          Author By 刘俊俊 2018.9.12
 * */
let request = (url, params = {}, opts = {}) => {
    // 1. 加载菊花
    if (opts && opts.loading) store.commit('OPEN_LOADING'); // 显示菊花

    // 2. 组装请求的param
    let opt = opts || {},
        param = {
            url: url,
            method: opts.method || 'get',
            headers: {
                // 用户认证token
                'access-token': CONFIG.token || utils.getSessionStorage().get('token')
            },
            params: {}
        };

    // 服务器端的指定标识，用于区分多公众号及各个下单平台的标识，默认标识：20（代表H5）。 Author by Dio Zhu. on 2017.12.22
    param.params['access_source'] = utils.getSessionStorage().get('access_source') || 20;

    // 开启表单模式，转换对象、数组为string
    if (opt.emulateJSON) {
        param.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        for (let k in params) if (params.hasOwnProperty(k) && (Object.prototype.toString.call(params[k]) === '[object Object]')) params[k] = JSON.stringify(params[k]);
        // 转换数据格式
        param.transformRequest = [function (data) { return qs.stringify(data); }];
    }

    // 3. post请求
    if (param.method.toLowerCase() === 'post') {
        // post传递数据
        param.data = params;
    } else {
        // get请求
        param.params = Object.assign(param.params, params);

        param.paramsSerializer = function (data) {
            return qs.stringify(data);
        }; // 序列化query参数
    }

    // 4. 发起请求
    // logger.log(`${url}请求的参数：`, param);
    return Vue.$http.request(param).then(res => {
        // logger.log(`${url}返回的结果：`, res.data);
        // 请求成功，取消loading菊花
        if (opts && opts.loading) store.dispatch('CLOSE_LOADING'); // 隐藏菊花

        if (res && res.data && res.data.errcode === 0) {
            // 成功返回，并返回正确结果
            return Promise.resolve(res.data.data);
        } else if ([10003, 10004, 10005, 10006, 10011].indexOf(res.data.errcode) >= 0) {
            // 成功返回，但是token失效，重新拉取token，只拉3次，防止死循环
            let retryNum = utils.getSessionStorage().get('retryNum') || 0;
            utils.getSessionStorage().set('token', ''); // 清token
            utils.getSessionStorage().set('beforeLoginUrl', encodeURIComponent(router.currentRoute.fullPath)); // 保存用户进入的url
            if (retryNum < 3) {
                retryNum++;
                utils.getSessionStorage().set('retryNum', retryNum);
                router.push({ name: 'author' }); // 跳登陆
            }
            return Promise.reject(res);
        } else {
            return Promise.reject(res);
        }
    }).catch(e => {
        // 请求成功，取消loading菊花
        if (opts && opts.loading) store.dispatch('CLOSE_LOADING'); // 隐藏菊花
        return Promise.reject(e);
    });
};

/*
 * 封装jsonp
 * @param string url 请求的URL地址
 * @param Object params 请求的参数
 * @param Object opts 请求的设置项
 *  param: 设置回调函数名称
 *  timeout: 设置超时时间
 *  prefix：设置前缀名
 *
 * @return Promise 返回Promise对象
 *          Author By 刘俊俊 2018.9.12
 * */
let jsonp = (url, params, opts = {}) => {
    return new Promise((resolve, reject) => {
        let param = qs.stringify(params);
        let uri = url + '?' + param;

        originJsonp(uri, opts, (err, data) => {
            // console.log('jsonp返回结果:', err, data);
            if (err) {
                reject(err);
            } else {
                resolve(data.content.address_detail.city);
            }
        });
    });
};
/**
 * 百度地图接口，根据当前IP获取城市信息
 *              -- Author by Dio Zhu. on 2017.11.9
 */
export const getCityByIp = (params = {ak: CONFIG.BMAP_AK}, opts) => jsonp(process.env.VUE_APP_BMAP_URL + '/location/ip', params, opts);

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

// 获取用户真实token -- Author by Dio sunleqing. on 2018-01-15
export const getUserToken = (params, opts) => request(CONFIG.URL + '/wap/user/get_real_token', params, opts);

// 测试
export const getDelay = (params, opts) => {
    let rtn = Date.now(),
        delay = params.delay || 200;
    return new Promise((resolve, reject) => { setTimeout(() => { resolve(rtn); }, delay); });
};
/** 【测试】获取列表信息 */
// export const getRandomList = (params, opts) => request(CONFIG.URL + '/api/getRandomList', params, { ...opts, method: 'post' });
export const getRandomList = (params, opts) => {
    console.log('!!!!!!!!!!!!!!', params);
    let obj = {'id': 1001, 'title': '这是一句测试的内容', 'dt': 1478655191000, 'userInfo': { 'id': 397833, 'title': '老朱', 'subtitle': '推广语', 'isfollow': 1, 'avatar': 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png' }},
        rtn = [],
        delay = params.delay || 200;
    for (let i = params.offset || 0, len = params.limit || 10;i < len;i++) {
        let o = Object.assign({}, obj, { id: obj.id + i, title: obj.title + i, subtitle: obj.subtitle + i });
        rtn.push(o);
    }
    return new Promise((resolve, reject) => { setTimeout(() => { resolve(rtn); }, delay); });
};
/** 【测试】POST~-- Author by Dio sunelqing. on 2018.4.9 */
export const postTest = (params, opts) => request(CONFIG.URL + '/wap/user/add_address', params, { ...opts, method: 'post', emulateJSON: true });
/** 【测试】POST~-- Author by Dio sunelqing. on 2018.4.9 */
export const postTest2 = (params, opts) => request(CONFIG.URL + '/activity_sales/add_activity_sales', params, { ...opts, method: 'post', emulateJSON: true });
/** 【测试】GET -- Author by Dio sunelqing. on 2018.4.9 */
export const getTest = (params, opts) => request(CONFIG.URL + '/wap/city/get_city_list', params, opts);
/** 【测试】根据手机号获取token，仅用于测试 -- Author by Dio Zhu. on 2018.4.13 */
export const bindPhone = (params, opts) => request(CONFIG.URL + '/wap/user/bind_phone', params, opts);

/** 【公共】获取省、市、区列表 -- Author by Dio Zhu. on 2018.5.10 */
export const getProvinceList = (params, opts) => request(CONFIG.URL + '/wap/city/get_province_list', params, opts);
export const getCityLists = (params, opts) => request(CONFIG.URL + '/wap/city/get_city_list_by_province_id', params, opts);
export const getCountyList = (params, opts) => request(CONFIG.URL + '/wap/city/get_county_list_by_city_id', params, opts);

