import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes.js';
import store from './store';
import CONFIG from './config';

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'hash', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
    mode: 'history', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
    // mode: 'abstract', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
    // linkActiveClass: 'u-link--Active', // 这是链接激活时的class
    // base: '/comb/', // 这个是设置根目录路径，默认'/'
    base: '/' + process.env.VUE_APP_PROJECT_NAME, // 这个是设置根目录路径，默认'/'
    // base: '/', // 根目录路径，配合./config/index.js中的设置，目的在build后，能顺利部署到服务端，与后台文件不冲突。。。Author by Dio Zhu. on 2017.3.28
    routes // 挂载路由集合
});

router.beforeEach((to, from, next) => {
    console.info('[router.js] router.beforeEach: ------ BEFORE ------ ', ' from: ', from, ', to: ', to, ', direct: ', router.direct(to, from), router.direct());
    if (store.state && !to.matched.some(v => v.meta.disableLoading) && router.direct(to, from) >= 0) { // 路由跳转，显示菊花~ Author by Dio Zhu. on 2017.2.17, 回退时不显示菊花。。。mod by Dio Zhu. on 2017.8.25
        store.commit('OPEN_LOADING');
    }

    /**
     * 离开前记录当前页面滚动条位置
     *              -- Author by Dio Zhu. on 2017.3.25
     * 方式一：由于滚动元素不固定，每次需要在$router.scrollTarget中保存滚动dom（如果没有，会默认.page），在此获取滚动位置，保存到vuex，路由跳转后再恢复。。。
     * 此方式需要每次去保存滚动dom，涉及回退以及动画+keep-alive之后，逻辑会异常复杂。
     * 方式二：通过v-scroll-position指令完成，原理是通过监听滚动事件，付给自定义属性Attribute：scroll-position，不牵扯保存dom和信息的问题，更直观些。。。
     * 比上面那个方便点儿，只需要在每个需要保留位置的元素上添加指令即可；
     */

    try {
        if (store.state) { // 获取"有效"滚动条容器的滚动位置
            /** 保存位置信息，用于判断路由的前进后退 */
            let key = from.query.timestamp,
                obj = Object.create(null);
            router.direction = router.direct(to, from); // 路由跳转时记录目标页面的打开方式：进入(1)、回退(-1)还是刷新(0). mod by Dio Zhu. on 2018.7.31
            store.commit('SET_POSITION', {key: key, val: obj});
            console.log('===>>> router.beforeEach.SET_POSITION: ', key);
        }
    } catch (e) {
        console.error('router.beforeEach: ', e);
    }

    next();
});

router.afterEach((to, from) => {
    console.info('[router.js] router.afterEach: ------ AFTER ------ ', ' from: ', from, ', to: ', to, ', direct: ', router.direct(to, from), router.direct());
    /** set title */
    if (to.meta && to.meta.title) {
        router.setTitle(to.meta.title);
    } else {
        router.setTitle(process.env.VUE_APP_TITLE || '');
    }

    /**
     * 埋点
     *              -- Author by Dio Zhu. on 2017.6.1
     */

    try { // 路由跳转，隐藏菊花~ Author by Dio Zhu. on 2017.2.17
        // console.log('===>>> router.afterEach ===>>> ', router.app.$store);
        if (store && store.state) {
            store.dispatch('CLOSE_LOADING');
            store.dispatch('CLOSE_LOADING');
        }
    } catch (e) {
        console.error('router.afterEach: ', e);
    }
});

router.setTitle = function (title) {
    document.title = title;
    try {
        setTitle(title); //eslint-disable-line
    } catch (e) { }
};

router.direct = (to, from) => {
    if (from && to) {
        // 方式二、根据from和to里的时间戳大小判断前后顺序
        // console.log('router.direct: ------> ', from, to);
        // 如果刷新：path==='/' 或者首页：path相等
        if (from.path === '/' && !from.name) return 0; // 首页或刷新
        // 来源无时间戳，进入
        if (from.query && !from.query.timestamp) return 1;
        // to无时间戳，返回
        if (to.query && !to.query.timestamp) return -1;
        // 根据时间戳大小判断进入或是返回
        if (from.query && to.query && to.query.timestamp < from.query.timestamp) return -1;
        else return 1;
    }
    // 方式一、根据store存储的时间戳判断是否来过，有问题：在后续页面刷新后，再返回时，store会找不到时间戳，被判断为新页面。。。
    if (store.getters.position.hasOwnProperty(router.currentRoute.query.timestamp)) {
        return 0; // 回退
    }
    return 1; // 进入
};

/**
 * 复写vue的push和replace，在query中添加时间戳，以此保存各页面的滚动条位置信息，用于回退时的滚动条复位，需与keep-alive配合使用。
 *              -- Author by Hao Chai. on 2016.12.20, copy from the project of 'answer'
 * 原打算不使用这种方式，直接使用scrollBehavior复位
 * 但是页面keep-alive后，scrollBehavior由于transition或渲染原因使得滚动条无法准确复位。。。
 *              -- Mod by Dio Zhu. on 2017.3.15
 */
let p = router.push,
    r = router.replace;
router.push = function (params) {
    let tag = Date.now();
    if (params.query) {
        params.query.timestamp = tag;
    } else {
        params.query = {timestamp: tag};
    }
    p.call(router, params);
};
router.replace = function (params) {
    let tag = Date.now();
    if (params.query) {
        params.query.timestamp = tag;
    } else {
        params.query = {timestamp: tag};
    }
    r.call(router, params);
};

export default router;
