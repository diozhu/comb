import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import routes from './routes';
import CONFIG from './config';
import logger from './js/utils/logger';
// import { getComputedStyle } from './js/utils/dom';

// 告诉vue要使用router
Vue.use(VueRouter);

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
/**
 * scrollBehavior: 仅运行在html5的history模式上，
 * 原方法仅根据window.pageYOffset，然后使用window.scrollTo(x, y);进行还原，so决定了滚动容器必须为window，
 * 而项目中如果滚动条内容包含浮动元素，ios上会造成定不住的问题，所以重构了布局及滚动条组件。
 * 这里重构了原方法，根据router中的滚动容器进行位置还原
 * 如果用了滚动条，指定了滚动容器，则根据保存的位置信息使滚动容器进行还原；
 * 如未使用滚动条组件，默认去找page容器，在app中，page容器必须设定overflow: auto!!!
 *              -- Author by Dio Zhu. on 2017.4.24
 */
const scrollBehavior = (to, from, savedPosition) => { //eslint-disable-line
    // logger.log(`===>>> scrollBehavior ===>>> from: ${from.name} ==> to: ${to.name}, router.scrollTarget.className: ${router.scrollTarget.className}`);

    // setTimeout(() => { // 使用v-scroll-postion记录、还原滚动位置，此方式不用了。Author by Dio Zhu. on 2017.5.19
    //     if (store.getters.position.hasOwnProperty(router.currentRoute.query.timestamp)) {
    //         let target = router.scrollTarget;
    //         if (!target || target.nodeType !== 1) {
    //             target = document.getElementsByClassName('v-refresh__container')[0];
    //             logger.log(`===>>> scrollBehavior ===>>>  obj1:`, target);
    //         }
    //         if (!target || target.nodeType !== 1) {
    //             target = document.getElementsByClassName('page')[0];
    //             logger.log(`===>>> scrollBehavior ===>>>  obj2:`, target);
    //         }
    //         logger.log(`===>>> scrollBehavior ===>>> from: ${from.name} ==> to: ${to.name}, router.scrollTarget: ${router.scrollTarget}, store.position: ${store.getters.position[router.currentRoute.query.timestamp].y}, target:`, target);
    //         target.scrollTop = store.getters.position[router.currentRoute.query.timestamp].y;
    //     }
    // }, 0);

    /* if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        // router.savedPosition = savedPosition;
        return savedPosition;
    } else {
        const position = {};
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash;
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0;
            position.y = 0;
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        // position.y = 1;
        // router.savedPosition = position;
        return position;

        // return { x: 0, y: 0 };
    } */

    /* if (savedPosition && !to.matched.some(m => m.meta.scrollTop) && savedPosition.y !== 0) {
        setTimeout(() => {
            logger.log('===>>> scrollBehavior ===>>> saved: ', savedPosition);
            window.scrollTo(savedPosition.x, savedPosition.y);
        }, 0);
    } else {
        if (to.hash) {
            let el = document.querySelector(to.hash);
            if (el) {
                setTimeout(() => {
                    let elRect = el.getBoundingClientRect(),
                        docRect = document.documentElement.getBoundingClientRect();
                    logger.log('===>>> scrollBehavior ===>>> hash: ', elRect.top - docRect.top);
                    window.scrollTo(0, elRect.top - docRect.top);
                }, 0);
            }
        }
        if (to.matched.some(m => m.meta.scrollTop)) {
            setTimeout(() => {
                logger.log('===>>> scrollBehavior ===>>> top: ', 0, 0);
                window.scrollTo(0, 0);
            }, 0);
        }
    } */
    return false;
    // return { x: 0, y: 0 };
};

/* eslint-disable no-new */
// 实例化router对象
const router = new VueRouter({
    // mode: 'hash', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
    mode: 'history', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
    // linkActiveClass: 'u-link--Active', // 这是链接激活时的class
    // base: '/app/', // 这个是设置根目录路径，默认'/'
    base: '/app/', // 根目录路径，配合./config/index.js中的设置，目的在build后，能顺利部署到服务端，与后台文件不冲突。。。Author by Dio Zhu. on 2017.3.28
    // scrollBehavior, // 还原滚动条位置 // 使用v-scroll-postion记录、还原滚动位置，此方式不用了。Author by Dio Zhu. on 2017.5.19
    routes // 挂载路由集合
});

router.beforeEach((to, from, next) => {
    logger.log(`===>>> router.beforeEach ===>>> from: ${from.name} ==> to: ${to.name}`);
    // logger.log(`===>>> router.beforeEach ===>>> from: ${from.name} ==> to: ${to.name}`, from, to);
    // if (store.state && !to.matched.some(v => v.meta.disableLoading)) { // 路由跳转，显示菊花~ Author by Dio Zhu. on 2017.2.17
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
            // logger.log('===>>> router.beforeEach ===>>> scroll: ', router.scrollTarget ? router.scrollTarget : 'null');
            // let target = router.scrollTarget,
            //     key = from.query.timestamp,
            //     obj = Object.create(null);
            // // if (target && target.hasOwnProperty('nodeType') && target.nodeType === 1) {
            // if (target && target.nodeType === 1) {
            //     // do nothing ...
            // } else {
            //     target = document.getElementsByClassName('v-refresh__container')[0];
            // }
            // if (!target || target.nodeType !== 1) {
            //     target = document.getElementsByClassName('page')[0];
            // }
            // if (target && key) {
            //     logger.log('===>>> router.beforeEach ===>>> scroll: ', target, key, target.scrollTop);
            //     obj = { id: target.id || '', x: 0, y: target.scrollTop, nodeName: target === window ? 'window' : target.nodeName, className: target.className };
            //     store.commit('SET_POSITION', {key: key, val: obj});
            //     router.scrollTarget = null;
            // }

            /** 保存位置信息，用于判断路由的前进后退 */
            let key = from.query.timestamp,
                obj = Object.create(null);
            store.commit('SET_POSITION', {key: key, val: obj});
            logger.log('===>>> router.beforeEach.SET_POSITION: ', key);
        }
    } catch (e) {
        console.error('router.beforeEach: ', e);
    }

    /**
     * 用户登陆vuex方式
     * 实际项目中，与上面的config方式二选一
     *              -- Author by Dio Zhu. on 2017.3.20
     */
    if (to.matched.some(record => record.meta.requiresAuth) && !store.getters.userInfo.id) {
        store.dispatch('signIn').then(res => {
            next();
        }).catch(e => {
            logger.error('===>>> router.beforeEach.signIn.error: ', e);
            next();
        });
    } else {
        next();
    }
});

router.setTitle = function (title) {
    document.title = title;
    try {
        setTitle(title); //eslint-disable-line
    } catch (e) { }
};

router.afterEach(route => {
    logger.log('===>>> router.afterEach ===>>> ', router);

    /** set title */
    if (route.meta && route.meta.title) {
        router.setTitle(route.meta.title);
    } else {
        router.setTitle(CONFIG.TITLE);
    }

    /**
     * 埋点--神策，需在index.html中引入'vendor/sensorsdata.js'
     *              -- Author by Xiaowei Shen. on 2017.6.1
     */
/*
    let trackInApp = (fn) => {
        if (navigator.userAgent.indexOf('toon') >= 0 && navigator.userAgent.indexOf('Toon') >= 0) {
            sa.getAppStatus(function(app_info){//eslint-disable-line
                // 设置 ID
                sa.identify(app_info.distinct_id);//eslint-disable-line
                // 跟踪事件
                fn();
            });
            logger.log('Comb.trackInApp', 'app内埋点');
        } else {
            fn();
            logger.log('Comb.trackInApp', '非app内埋点');
        }
    };
    trackInApp(function () {
        sa.quick('autoTrack', {//eslint-disable-line
            toon_type: '102',
            share_type: 'Comb',
            share_source: 'Comb',
            obj_id: '001'
        });
        sa.track('ViewHomePage', {//eslint-disable-line
            toon_type: '102',
            share_type: 'Comb',
            share_source: 'Comb',
            obj_id: '001'
        });
    });
*/
    try { // 路由跳转，隐藏菊花~ Author by Dio Zhu. on 2017.2.17
        // logger.log('===>>> router.afterEach ===>>> ', router.app.$store);
        if (store && store.state) {
            store.dispatch('CLOSE_LOADING');
            store.dispatch('CLOSE_LOADING');
        }
    } catch (e) {
        console.error('router.afterEach: ', e);
    }
});

/**
 * 根据时间戳判断当前路由是进入还是回退~
 *              -- Author by Dio Zhu. on 2017.4.18
 * 以前根据store中是否存在时间戳判断前进还是后退，当在下级页面刷新后，再返回，store中无数据，会判断为进入；
 * 现改为根据from、to的时间戳大小判断前进还是后退，返回：0->首页、刷新，1->前进，-1->后退
 *              -- Author by Dio Zhu. on 2017.8.24
 */
// router.direct = () => {
//     if (store.getters.position.hasOwnProperty(router.currentRoute.query.timestamp)) {
//         return 0; // 回退
//     }
//     return 1; // 进入
// };
router.direct = (to, from) => {
    if (from && to) {
        // 方式二、根据from和to里的时间戳大小判断前后顺序
        // logger.log('router.direct: ------> ', from, to);
        // 如果刷新：path==='/' 或者首页：path相等
        if (from.path === '/' && !from.name) return 0; // 刷新
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
// /**
//  * 当前激活的滚动容器，用户记录滚动位置及位置还原~
//  *              -- Author by Dio Zhu. on 2017.4.20
//  */
// router.scrollTarget = Object.create({});

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
    // console.log('@@@@@@@@@@', window.history);
    let tag = Date.now();
    // let tag = window.history.state.key;
    if (params.query) {
        params.query.timestamp = tag;
    } else {
        params.query = {timestamp: tag};
    }
    p.call(router, params);
};
router.replace = function (params) {
    let tag = Date.now();
    // let tag = window.history.state.key;
    if (params.query) {
        params.query.timestamp = tag;
    } else {
        params.query = {timestamp: tag};
    }
    r.call(router, params);
};

// 导出router对象
export default router;
