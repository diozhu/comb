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
            { name: 'Spinner', path: '/404' },
            { name: 'Icon', path: '/404' },
            { name: 'Button', path: '/404' },
            { name: 'Text', path: '/404' },
            // { name: 'Album', path: '/404' },
            { name: 'Animat', path: '/404' },
        ]
    },
    {
        title: 'Base Components',
        list: [
            { name: 'Toast', path: '/404' },
            { name: 'MessageBox', path: '/404' },
            { name: 'Picker', path: '/404' },
            { name: 'Popup', path: '/404' },
            { name: 'DatetimePicker', path: '/404' },
            { name: 'Swipe', path: '/404' },
            { name: 'CharIndexes', path: '/404' },
            { name: 'Tab', path: '/404' },
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
        let routes = [ { name: 'index', path: '/', component: getComponent('/index') } ];
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
