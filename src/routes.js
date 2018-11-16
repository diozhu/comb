// const PageNotFound = resolve => require(['./views/404.vue'], resolve); //eslint-disable-line
// const Index = resolve => require(['./views/index.vue'], resolve);
//
// const routes = [
//     { name: 'index', path: '/', component: Index, meta: {title: '首页', keepAlive: true} },
//     { path: '*', meta: {title: '出错啦'}, component: PageNotFound },
// ];

import Vue from 'vue';
const routeList = [
    {
        title: 'CSS组件',
        list: [
            { name: 'Layout', path: '/layout', meta: {title: '布局', requiresAuth: false, keepAlive: false} },
            { name: 'Sticky', path: '/sticky', meta: {title: '粘性布局', requiresAuth: false, keepAlive: false} },
            { name: 'Spinner', path: '/spinner', meta: {title: '加载动画', requiresAuth: false, keepAlive: false} },
            { name: 'Icon', path: '/icon', meta: {title: '图标', requiresAuth: false, keepAlive: false} },
            { name: 'Button', path: '/button', meta: {title: '按钮', requiresAuth: false, keepAlive: false} },
            { name: 'Text', path: '/text', meta: {title: '文本', requiresAuth: false, keepAlive: false} },
            { name: 'Album', path: '/album', meta: {title: '相册布局', requiresAuth: false, keepAlive: false} },
            // { name: 'Album', path: '/404' },
            { name: 'Animat', path: '/animat', meta: {title: '动画', requiresAuth: false, keepAlive: false} },
        ]
    },
    {
        title: '基础组件',
        list: [
            { name: 'Toast', path: '/toast', meta: {title: 'Toast', requiresAuth: false, keepAlive: false} },
            { name: 'MessageBox', path: '/message-box', meta: {title: '消息弹框', requiresAuth: false, keepAlive: false} },
            { name: 'Picker', path: '/picker', meta: {title: '拨盘', requiresAuth: false, keepAlive: false} },
            { name: 'Popup', path: '/popup', meta: {title: '下滑弹出组件', requiresAuth: false, keepAlive: false} },
            { name: 'DatetimePicker', path: '/datetime-picker', meta: {title: '日期拨盘', requiresAuth: false, keepAlive: false} },
            // { name: 'Swipe', path: '/404' },
            { name: 'CharIndexes', path: '/char-indexes', meta: {title: '索引', requiresAuth: false, keepAlive: false} },
            { name: 'TabBar', path: '/tab-bar', meta: {title: '标签', requiresAuth: false, keepAlive: false} },
            { name: 'SwipeLabel', path: '/swipe-label', meta: {title: '左右可滑动标签', requiresAuth: false, keepAlive: false} },
            { name: 'Media', path: '/media', meta: {title: '多媒体', requiresAuth: false, keepAlive: false} },
            { name: 'Autocomplete', path: '/autocomplete', meta: {title: '已废弃', requiresAuth: false, keepAlive: false} },
            { name: 'Calendar', path: '/calendar', meta: {title: '日历', requiresAuth: false, keepAlive: false} },
            { name: 'Star', path: '/star', meta: {title: '评星', requiresAuth: false, keepAlive: false} },
            { name: 'Swiper', path: '/swiper', meta: {title: '轮播', requiresAuth: false, keepAlive: false} },
            { name: 'Timeline', path: '/timeline', meta: {title: '时间线', requiresAuth: false, keepAlive: false} },
            { name: 'Viewer', path: '/404' },
            { name: 'Image', path: '/404' },
        ]
    },
    {
        title: 'Form表单类组件',
        list: [
            { name: 'Api', path: '/api', meta: {title: '接口调用（axios）', requiresAuth: false, keepAlive: false} },
            { name: 'Radio', path: '/form-radio', meta: {title: '单选', requiresAuth: false, keepAlive: false} },
            { name: 'CheckBox', path: '/form-checkbox', meta: {title: '多选', requiresAuth: false, keepAlive: false} },
            { name: 'Cell', path: '/cell', meta: {title: '列表单元', requiresAuth: false, keepAlive: false} },
            { name: 'CellSwipe', path: '/cell-swipe', meta: {title: '滑动单元', requiresAuth: false, keepAlive: false} },
            { name: 'Switch', path: '/form-switch', meta: {title: '开关', requiresAuth: false, keepAlive: false} },
            { name: 'Field', path: '/form-field', meta: {title: '输入框', requiresAuth: false, keepAlive: false} },
            // { name: 'Badge', path: '/404', meta: {title: '通知', requiresAuth: false, keepAlive: false} },
            { name: 'Search', path: '/form-search', meta: {title: '查询', requiresAuth: false, keepAlive: false} },
            // { name: 'UploadImages', path: '/404', meta: {title: '上传图片', requiresAuth: false, keepAlive: false} },
            { name: 'Validator', path: '/form-validator', meta: {title: '表单校验', requiresAuth: false, keepAlive: false} },
            { name: 'Form', path: '/form', meta: {title: '表单', requiresAuth: false, keepAlive: false} },
        ]
    },
    {
        title: '复杂应用类',
        list: [
            { name: 'Feed', path: '/feed', meta: {title: '名片', requiresAuth: false, keepAlive: false} },
            { name: 'Scroll', path: '/scroll', meta: {title: '滚动条（vuex演示）', requiresAuth: false, keepAlive: true} },
            { name: 'scroll-two', path: '/scroll-two', meta: {title: '多滚动条（vuex演示）', requiresAuth: false, keepAlive: true} },
            { name: 'detail', path: '/detail', meta: {title: '详情页', requiresAuth: false, keepAlive: true} },
            { name: 'Refresh', path: '/refresh', meta: {title: '下拉刷新', requiresAuth: false, keepAlive: true} },
            { name: 'refresh-two', path: '/refresh-two', meta: {title: '多个刷新', requiresAuth: false, keepAlive: true} },
            { name: 'map', path: '/map', meta: {title: '地图', requiresAuth: false, keepAlive: false} },
            { name: 'map-markers', path: '/map-markers', meta: {title: '地图', requiresAuth: false, keepAlive: false} },
            { name: 'map-selector', path: '/map-selector', meta: {title: '地图', requiresAuth: false, keepAlive: false} },
        ]
    },
    {
        title: '开发中...',
        list: [
            { name: 'InfiniteScroll', path: '/infinite-scroll', meta: {title: '无限滚动', requiresAuth: false, keepAlive: false} },
        ]
    }
];

const getComponent = (n) => {
        // let p = n === 'index' ? './views/index.vue' : `./views${n}`;
        // return Vue.extend(require(p).default);
        // if (n === 'index') return resolve => require(['./views/index.vue'], resolve);
        return resolve => require([`./views${n}`], resolve);
    }, initRoute = (list) => {
        // let routes = [];
        // let routes = [ { name: 'index', path: '/', component: Vue.extend(require('./views/index.vue').default) } ];
        let routes = [ { name: 'index', path: '/index', component: getComponent('/index'), meta: {title: '组件列表', requiresAuth: false, keepAlive: true} } ];
        list.map(item =>
            item.list.map(page =>
                routes.push({
                    name: page.name,
                    path: page.path,
                    // component: Vue.extend(require(`./views${page.path}`).default),
                    component: getComponent(page.path),
                    meta: page.meta
                })
            )
        );
        return routes;
    };

let routes = initRoute(routeList);
export default routes;
export const menus = routeList;
