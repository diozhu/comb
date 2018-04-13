import Vue from 'vue';
import Vuex from 'vuex';

// 导入status模块（全局应用状态的模块）
import status from './modules/status';
// 导入关注状态管理
import follow from './modules/follow';
// 微服务-评论赞对象管理
import comment from './modules/comment';
// 微服务-论坛的评论赞对象管理
import forum from './modules/forum';

if (process.env.NODE_ENV !== 'production') Vue.use(Vuex); // 打包后会启用cdn方式，这里不需重复注册~ mod by Dio Zhu. on 2018.4.12

// env里去获取当前的环境是否需要开启严格模式
// 在发布环境开启严格模式会造成性能上不必要的损失
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: { // 导入模块
        status,
        follow,
        comment,
        forum
    },
    // 是否开启严格模式
    strict: debug
});
