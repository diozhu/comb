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
            { name: 'autocomplete', path: '/autocomplete', meta: {title: '已废弃', requiresAuth: false, keepAlive: false} },
            { name: 'calendar', path: '/calendar', meta: {title: '日历', requiresAuth: false, keepAlive: false} },
            { name: 'star', path: '/star', meta: {title: '评星', requiresAuth: false, keepAlive: false} },
            { name: 'Viewer', path: '/404' },
            { name: 'Timeline', path: '/404' },
            { name: 'Star', path: '/404' },
            { name: 'Calendar', path: '/404' },
            { name: 'Image', path: '/404' },
        ]
    },
    {
        title: 'Form表单类组件',
        list: [
            { name: 'api', path: '/api' },
            { name: 'Form', path: '/404' },
            { name: 'Cell', path: '/cell', meta: {title: 'Cell', requiresAuth: false, keepAlive: false} },
            { name: 'CellSwipe', path: '/cell-swipe', meta: {title: '滑动Cell', requiresAuth: false, keepAlive: false} },
            { name: 'CellSwipe', path: '/404' },
            { name: 'Switch', path: '/404' },
            { name: 'CheckBox', path: '/404' },
            { name: 'Radio', path: '/404' },
            { name: 'Field', path: '/404' },
            { name: 'Badge', path: '/404' },
            { name: 'Search', path: '/404' },
            { name: 'UploadImages', path: '/404' },
            { name: 'Validator', path: '/404' },
        ]
    },
    {
        title: '复杂应用类',
        list: [
            { name: 'Scroll', path: '/scroll', meta: {title: '滚动条（vuex演示）', requiresAuth: false, keepAlive: true} },
            { name: 'scroll-two', path: '/scroll-two', meta: {title: '多滚动条（vuex演示）', requiresAuth: false, keepAlive: true} },
            { name: 'detail', path: '/detail', meta: {title: '详情页', requiresAuth: false, keepAlive: true} },
            { name: 'Refresh', path: '/404', meta: {title: '下拉刷新', requiresAuth: false, keepAlive: true} },
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
