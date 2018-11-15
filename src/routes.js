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
        title: 'CSS Components',
        list: [
            { name: 'Layout', path: '/layout' },
            { name: 'Spinner', path: '/spinner' },
            { name: 'Icon', path: '/icon' },
            { name: 'Button', path: '/button' },
            { name: 'Text', path: '/text' },
            { name: 'Album', path: '/album' },
            // { name: 'Album', path: '/404' },
            { name: 'Animat', path: '/animat' },
        ]
    },
    {
        title: 'Base Components',
        list: [
            { name: 'Toast', path: '/toast' },
            { name: 'MessageBox', path: '/message-box' },
            { name: 'Picker', path: '/picker' },
            { name: 'Popup', path: '/popup' },
            { name: 'DatetimePicker', path: '/datetime-picker' },
            // { name: 'Swipe', path: '/404' },
            { name: 'SwipeLabel', path: '/swipe-label' },
            { name: 'CharIndexes', path: '/char-indexes' },
            { name: 'TabBar', path: '/tab-bar' },
            { name: 'Media', path: '/media' },
            { name: 'autocomplete', path: '/autocomplete' },
            { name: 'star', path: '/star' },
            { name: 'Scroll', path: '/404' },
            { name: 'Refresh', path: '/404' },
            { name: 'Viewer', path: '/404' },
            { name: 'Timeline', path: '/404' },
            { name: 'Star', path: '/404' },
            { name: 'Calendar', path: '/404' },
            { name: 'Image', path: '/404' },
        ]
    },
    {
        title: 'Form Components',
        list: [
            { name: 'api', path: '/api' },
            { name: 'Form', path: '/404' },
            { name: 'Cell', path: '/404' },
            { name: 'CellSwipe', path: '/404' },
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
        let routes = [ { name: 'index', path: '/index', component: getComponent('/index') } ];
        list.map(item =>
            item.list.map(page =>
                routes.push({
                    name: page.name,
                    path: page.path,
                    // component: Vue.extend(require(`./views${page.path}`).default),
                    component: getComponent(page.path),
                    meta: {
                        title: page.title || page.name,
                        description: page.description || ''
                    }
                })
            )
        );
        return routes;
    };

let routes = initRoute(routeList);
export default routes;
export const menus = routeList;
