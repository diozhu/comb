/**
 * Created by diozhu on 2017/2/9.
 */

import Vue from 'vue';
import CONFIG from '../config';
import logger from '../js/utils/logger';
import * as api from '../js/core/api';
import store from '../store';
import { toonCall } from '../js/core/core';
import _promise from '../js/utils/promise';

if (typeof Promise === 'undefined') {
    var Promise = _promise;
}

let MicroBbs = {
    currentItem: null,    // 当前的评论对象，用于从列表页面跳转到详情页的临时存储
    setCurrentItem (item) {
        if (item) this.currentItem = item;
    },
    getCurrentItem () {
        return this.currentItem;
    },
    clearCurrentItem () {
        this.currentItem = null;
    },

    retry_num: 0,   // 微服务重试次数（目前仅限于token类错误）
    retry_max: 3,   // 微服务最大重试次数

    getToken () {
        if (!api.vGetMicroBbsToken || typeof api.vGetMicroBbsToken !== 'function') {
            return Promise.reject('无效token，请在api中实现vGetMicroBbsToken方法');
        }
        let _self = this;
        if (this.retry_num < this.retry_max) {
            this.retry_num += 1;
            return api.vGetMicroBbsToken().then(function (res) {
                _self.retry_num = 0;
                return Promise.resolve(res);
            });
        } else {
            return Promise.reject('token尝试超过限制，请刷新页面重试');
        }
    },

    /**
     * 获取论坛列表
     *              -- Author By Dio Zhu. on 2017.4.10
     */
    getForumList () {
        logger.log('[BBS].getForumList：');

        let _self = this,
            uri = CONFIG.BBS_URL + '/forum/list',
            params = {
                appId: CONFIG.BBS_APPID
            };

        // 校验token
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.getForumList();
            });
        }

        params.appId = CONFIG.BBS_APPID;
        params.token = CONFIG.BBS_TOKEN;
        params.toonType = CONFIG.toonType || 100;

        return Vue.http.post(uri, params).then(function (res) {
            let result = res.data;
            logger.log('[BBS].getForumList.SUCCESS: ', result);

            if (result.meta && result.meta.code === 1001) { // token错误
                return _self.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.getForumList();
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result);
            } else { // 正常处理
                return Promise.resolve(result.data.dataList);
            }
        });
    },

    /**
     * 话题列表
     *              -- Author By Dio Zhu. on 2017.4.10
     */
    getTopicList ({forumId = 0, page = 1, pageNum = CONFIG.BBS_LIMIT}) {
        logger.log('[BBS].getTopicList：');

        let _self = this,
            uri = CONFIG.BBS_URL + '/topic/list',
            params = {
                appId: CONFIG.BBS_APPID,
                token: CONFIG.BBS_TOKEN,
                toonType: CONFIG.toonType || 100,
                loginUserId: store.getters.userInfo.id
            };

        // 校验token
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.getTopicList({forumId, page, pageNum});
            });
        }

        params.forumIds = forumId;
        params.page = page;
        params.pageLimit = pageNum;

        return Vue.http.post(uri, params).then(function (res) {
            let result = res.data;
            logger.log('[BBS].getTopicList.SUCCESS: ', result);

            if (result.meta && result.meta.code === 1001) { // token错误
                return _self.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.getTopicList({forumId, page, pageNum});
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result);
            } else { // 正常处理
                return Promise.resolve(result.data.dataList);
            }
        });
    },

    /**
     * 搜索话题
     *              -- Author By Dio Zhu. on 2017.4.10
     */
    getTopicSearch ({forumId = 0, keyword = '', page = 1, pageNum = CONFIG.BBS_LIMIT}) {
        logger.log('[BBS].getTopicSearch：');

        let _self = this,
            uri = CONFIG.BBS_URL + '/topic/search',
            params = {
                appId: CONFIG.BBS_APPID,
                token: CONFIG.BBS_TOKEN,
                toonType: CONFIG.toonType || 100,
                loginUserId: store.getters.userInfo.id
            };

        // 校验token
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.getTopicSearch({forumId, keyword, page, pageNum});
            });
        }

        params.forumIds = forumId;
        params.keyword = keyword;
        params.page = page;
        params.pageLimit = pageNum;

        return Vue.http.post(uri, params).then(function (res) {
            let result = res.data;
            logger.log('[BBS].getTopicSearch.SUCCESS: ', result);

            if (result.meta && result.meta.code === 1001) { // token错误
                return _self.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.getTopicSearch({forumId, keyword, page, pageNum});
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result);
            } else { // 正常处理
                return Promise.resolve(result.data.dataList);
            }
        });
    },

    /**
     * 话题详情
     *              -- Author By Dio Zhu. on 2017.4.10
     */
    getTopicDetail ({forumId = 0, topicId = 0}) {
        logger.log('[BBS].getTopicDetail：');

        let _self = this,
            uri = CONFIG.BBS_URL + '/topic/detail',
            params = {
                appId: CONFIG.BBS_APPID,
                token: CONFIG.BBS_TOKEN,
                toonType: CONFIG.toonType || 100,
                loginUserId: store.getters.userInfo.id
            };

        // 校验token
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.getTopicDetail({forumId, topicId});
            });
        }

        params.forumIds = parseInt(forumId) || 0;
        params.id = parseInt(topicId) || 0;

        return Vue.http.post(uri, params).then(function (res) {
            let result = res.data;
            logger.log('[BBS].getTopicDetail.SUCCESS: ', result);

            if (result.meta && result.meta.code === 1001) { // token错误
                return _self.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.getTopicDetail({forumId, topicId});
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result);
            } else { // 正常处理
                return Promise.resolve(result.data);
            }
        });
    },

    /**
     * 添加话题
     *              -- Author By Dio Zhu. on 2017.4.11
     */
    addTopic ({forumId = 0, title = '', content = '', pics = [], poi = {longitude: 116.123456, latitude: 39.654321}}) {
        logger.log('[BBS].addTopic：');
        logger.log('[BBS].addTopic：', pics);

        if (!forumId) return Promise.reject('请选择板块');
        if (!title) return Promise.reject('请输入标题');
        if (!content) return Promise.reject('请输内容');

        let _self = this,
            uri = CONFIG.BBS_URL + '/topic/add',
            params = {
                appId: CONFIG.BBS_APPID,
                token: CONFIG.BBS_TOKEN,
                toonType: CONFIG.toonType || 100
            };

        // 校验token
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.addTopic({forumId, title, content, pics});
            });
        }

        params.forumId = parseInt(forumId) || 0;
        params.title = title;
        params.content = content;
        params.userInfo = {
            userId: store.getters.userInfo.id,
            name: store.getters.userInfo.title,
            subtitle: store.getters.userInfo.subtitle,
            avatar: store.getters.userInfo.avatarId
        };
        // params.poi.longitude = poi.longitude ? poi.longitude : 116.123456;
        // params.poi.latitude = poi.latitude ? poi.latitude : 39.654321;
        params.poi = poi;
        // params.pics = pics;
        if (pics && pics.length > 0) {
            params.pics = [];
            pics.forEach((v) => {
                params.pics.push({
                    imageType: v.imageType,
                    size: v.size,
                    url: v.url,
                    width: v.width,
                    height: v.height
                });
            });
        }
        // params.pics = {
        //     imageType: pics.imageType,
        //     size: pics.size,
        //     url: pics.url,
        //     width: pics.width,
        //     height: pics.height
        // };

        return Vue.http.post(uri, params).then(function (res) {
            let result = res.data;
            logger.log('[BBS].addTopic.SUCCESS: ', result);

            if (result.meta && result.meta.code === 1001) { // token错误
                return _self.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.addTopic({forumId, title, content, pics});
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result.meta.message);
            } else { // 正常处理
                // 保存一个标识，返回list页的时候在不刷新list的情况下，处理新增的数据。 Author by Dio Zhu. on 2017.4.13
                _self.setCurrentItem({
                    OPT: 1, // 操作标识，返回列表时按此标识操作，1：添加，0：删除
                    id: result.topicId || 0,
                    forumId: params.forumId,
                    title: params.title,
                    abstract: params.content,
                    pics: params.pics,
                    userInfo: params.userInfo,
                    poi: params.poi,
                    addtm: new Date()
                });

                return Promise.resolve(result);
            }
        });
    },

    /**
     * 删除话题
     *              -- Author By Dio Zhu. on 2017.4.11
     */
    delTopic ({topicId = 0}) {
        logger.log('[BBS].delTopic：');
        // if (!topicId) return Promise.reject('删除参数错误');

        let _self = this,
            uri = CONFIG.BBS_URL + '/topic/delete',
            params = {
                appId: CONFIG.BBS_APPID,
                token: CONFIG.BBS_TOKEN,
                toonType: CONFIG.toonType || 100
            };

        // 校验token
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.delTopic({topicId});
            });
        }

        params.id = parseInt(topicId);
        params.userId = store.getters.userInfo.id;

        return Vue.http.post(uri, params).then(function (res) {
            let result = res.data;
            logger.log('[BBS].delTopic.SUCCESS: ', result);

            if (result.meta && result.meta.code === 1001) { // token错误
                return _self.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.delTopic({topicId});
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result.meta.message);
            } else { // 正常处理
                _self.setCurrentItem({
                    OPT: 0, // 操作标识，返回列表时按此标识操作，1：添加，0：删除
                    id: params.id
                });

                return Promise.resolve(result);
            }
        });
    },

    /**
     * 获取banner列表
     *              -- Author By Dio Zhu. on 2017.4.11
     */
    getBannerList ({forumId = 0}) {
        logger.log('[BBS].getBannerList：');

        let _self = this,
            uri = CONFIG.BBS_URL + '/forum/banner',
            params = {
                appId: CONFIG.BBS_APPID,
                token: CONFIG.BBS_TOKEN,
                toonType: CONFIG.toonType || 100
            };

        // 校验token
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.getBannerList({forumId});
            });
        }

        params.id = forumId;

        return Vue.http.post(uri, params).then(function (res) {
            let result = res.data;
            logger.log('[BBS].getBannerList.SUCCESS: ', result);

            if (result.meta && result.meta.code === 1001) { // token错误
                return _self.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.getBannerList({forumId});
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result);
            } else { // 正常处理
                return Promise.resolve(result.data.dataList);
            }
        });
    },

    // ==================== 评论点赞

    /**
     * 评论列表
     *              -- Author By Dio Zhu. on 2017.4.13
     */
    getComments ({topicId = 0, page = 1, pageNum = CONFIG.BBS_LIMIT} = {}) {
        let _self = this,
            url = CONFIG.BBS_URL + '/v1/comment/list',
            params = {
                appId: CONFIG.BBS_APPID,
                token: CONFIG.BBS_TOKEN,
                toonType: CONFIG.toonType || 100
            };

        // 校验token是否存在
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.getComments({topicId, page, pageNum});
            });
        }

        params.topicId = parseInt(topicId);
        params.loginUserId = store.getters.userInfo.id;
        params.page = page;
        params.pageLimit = pageNum;

        if (!params.appId) {
            return new Promise(function (resolve, reject) {
                reject('微服务配置信息错误，请确认config.js的配置(BBS_APPID)');
            });
        }

        return Vue.http.post(url, params).then(function (res) {
            let result = res.data;
            logger.log('[BBS].getComments.SUCCESS: ', result);

            if (result.meta && result.meta.code === 1001) { // token错误
                return this.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.getComments({topicId, page, pageNum});
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result);
            } else { // 正常处理
                return Promise.resolve(result.data.dataList);
            }
        });
    },
    /**
     * 点赞列表
     *              -- Author By Dio Zhu. on 2017.4.13
     */
    getPraise ({topicId = 0, commentId = 0, page = 1, pageNum = CONFIG.BBS_LIMIT} = {}) {
        let _self = this,
            url = CONFIG.BBS_URL + '/v1/like/list',
            params = {
                appId: CONFIG.BBS_APPID,
                token: CONFIG.BBS_TOKEN,
                toonType: CONFIG.toonType || 100
            };

        // 校验token是否存在
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.getPraise({topicId, commentId, page, pageNum});
            });
        }

        params.topicId = parseInt(topicId);
        params.cId = parseInt(commentId);
        params.page = page;
        params.pageLimit = pageNum;

        if (!params.appId) {
            return new Promise(function (resolve, reject) {
                reject('微服务配置信息错误，请确认config.js的配置(BBS_APPID)');
            });
        }

        return Vue.http.post(url, params).then(function (res) {
            let result = res.data;
            logger.log('[BBS].getPraise.SUCCESS: ', result);

            if (result.meta && result.meta.code === 1001) { // token错误
                return this.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.getPraise({topicId, commentId, page, pageNum});
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result);
            } else { // 正常处理
                return Promise.resolve(result.data.dataList);
            }
        });
    },

    /**
     * 添加评论。
     * @subjectId int 本地服务的，需要评论的记录ID
     * @userId int  本地用户ID
     * @content String 评论内容，微服务最多支持到5000，可在配置文件（config）中设定最大长度
     * @toUserId int    所回复的对象，默认0
     * @toId int    所回复的评论ID，默认0
     *              -- Author By Dio Zhu. on 2017.2.10
     */
    addComment ({topicId = 0, content = '', toId = 0, toUserId = 0} = {}) {
        let _self = this,
            url = CONFIG.BBS_URL + '/v1/comment/add',
            params = {
                appId: CONFIG.BBS_APPID,
                token: CONFIG.BBS_TOKEN,
                toonType: CONFIG.toonType || 100
            };

        // 校验token是否存在
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.addComment({topicId, content, toId, toUserId});
            });
        }

        params.topicId = parseInt(topicId);
        // params.loginUserId = store.getters.userInfo.id;
        params.userInfo = {
            userId: store.getters.userInfo.id,
            name: store.getters.userInfo.title,
            subtitle: store.getters.userInfo.subtitle,
            avatar: store.getters.userInfo.avatarId
        };
        params.content = content.replace(/(^\s*)|(\s*$)/g, ''); // trim掉两头空格。 Mod by Dio Zhu. on 2017.1.22
        params.toId = parseInt(toId);
        params.toUserId = parseInt(toUserId);

        if (!params.appId) {
            return new Promise(function (resolve, reject) {
                reject('微服务配置信息错误，请确认config.js的配置(BBS_APPID)');
            });
        }

        return Vue.http.post(url, params).then(function (res) {
            let result = res.data;
            logger.log('[BBS].addComment.SUCCESS: ', result);

            if (result.meta && result.meta.code === 1001) { // token错误
                return this.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.addComment({topicId, content, toId, toUserId});
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result);
            } else { // 正常处理
                _self.setCurrentItem({
                    OPT: 1 // 操作标识，返回列表时按此标识操作，1：添加，0：删除
                });
                return Promise.resolve(result);
            }
        });
    },

    /**
     * 删除评论
     *              -- Author By Dio Zhu. on 2017.4.13
     */
    delComment ({topicId = 0, commentId = 0}) {
        logger.log('[BBS].delComment：');
        // if (!topicId) return Promise.reject('删除参数错误');

        let _self = this,
            uri = CONFIG.BBS_URL + '/v1/comment/del',
            params = {
                appId: CONFIG.BBS_APPID,
                token: CONFIG.BBS_TOKEN,
                toonType: CONFIG.toonType || 100
            };

        // 校验token
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.delComment({topicId, commentId});
            });
        }

        params.topicId = parseInt(topicId);
        params.cId = parseInt(commentId);
        params.userId = store.getters.userInfo.id;

        return Vue.http.post(uri, params).then(function (res) {
            let result = res.data;
            logger.log('[BBS].delComment.SUCCESS: ', result);

            if (result.meta && result.meta.code === 1001) { // token错误
                return _self.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.delComment({topicId, commentId});
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result.meta.message);
            } else { // 正常处理
                _self.setCurrentItem({
                    OPT: 0 // 操作标识，返回列表时按此标识操作，1：添加，0：删除
                });
                return Promise.resolve(result);
            }
        });
    },

    /**
     * 点赞/踩
     *              -- Author by Dio Zhu. on 2017.4.12
     */
    addPraise ({topicId = 0, toId = 0} = {}) {
        let _self = this,
            uri = CONFIG.BBS_URL + '/v1/like/add',
            param = {
                appId: CONFIG.BBS_APPID,
                token: CONFIG.BBS_TOKEN,
                toonType: CONFIG.toonType || 100
            };

        // 校验token
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.addPraise({topicId, toId});
            });
        }

        param.topicId = parseInt(topicId);
        // param.userId = store.getters.userInfo.id;
        param.userInfo = {
            userId: store.getters.userInfo.id,
            name: store.getters.userInfo.title,
            subtitle: store.getters.userInfo.subtitle,
            avatar: store.getters.userInfo.avatarId
        };
        param.toId = parseInt(toId);

        // return post(uri, param, opts);
        return Vue.http.post(uri, param).then(function (res) {
            let result = res.data;
            if (result.meta && result.meta.code === 1001) { // token错误
                return _self.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.addPraise({topicId, toId});
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result);
            } else { // 正常处理
                return Promise.resolve(result.Res);
            }
        });
    },

    /**
     * 取消点赞/踩
     *              -- Author by Dio Zhu. on 2017.4.12
     */
    delPraise ({topicId = 0, commentId = 0} = {}) {
        let _self = this,
            uri = CONFIG.BBS_URL + '/v1/like/del',
            param = {
                appId: CONFIG.BBS_APPID,
                token: CONFIG.BBS_TOKEN,
                toonType: CONFIG.toonType || 100
            };

        // 校验token
        if (!CONFIG.BBS_TOKEN) {
            return this.getToken().then(function (res) {
                CONFIG.BBS_TOKEN = res;
                return _self.delPraise({topicId, commentId});
            });
        }

        param.topicId = parseInt(topicId);
        param.userId = store.getters.userInfo.id;
        param.cId = parseInt(commentId);

        // return post(uri, param, opts);
        return Vue.http.post(uri, param).then(function (res) {
            let result = res.data;
            if (result.meta && result.meta.code === 1001) { // token错误
                return _self.getToken().then(function (res) {
                    CONFIG.BBS_TOKEN = res;
                    return _self.delPraise({topicId, commentId});
                });
            } else if (result.meta && result.meta.code !== 0) { // 抛出异常
                return Promise.reject(result);
            } else { // 正常处理
                return Promise.resolve(result.Res);
            }
        });
    },

    /**
     * 登陆校验
     *              -- Author By Dio Zhu. on 2017.4.11
     */
    checkFeed () {
        // if (CONFIG.loginData.userInfo.feedId) return Promise.resolve();
        if (store.getters.userInfo.feedId) return Promise.resolve();
        toonCall({functionType: '1'}, 'card/chooseCard', (res) => {
            this.$logger.log('获取名片信息：：：：', res);
            this.feedId = res.feedId;
            if (res && res.feedId) {
                Vue.http.get('/user/feed?feedId=' + encodeURIComponent(res.feedId), (data) => {
                    if (data.code === 0) {
                        return Promise.resolve();
                    } else {
                        return Promise.reject('error');
                    }
                });
            }
        }, function () {
            return Promise.reject('未返回信息');
        });
    }
};

export default MicroBbs;
