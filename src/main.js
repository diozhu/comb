import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';
import VueLazyload from 'vue-lazyload';
import './registerServiceWorker';
import './js/utils/highlightjs.js'; // 代码高亮
import * as dom from './js/utils/dom.js';
import * as filters from './filters';
import './js/utils/logger.js';
import { Toast } from 'comb-ui';

// 注册 fastclick
// FastClick.attach(document.body);
document.addEventListener('DOMContentLoaded', function() {
    if (window.FastClick) window.FastClick.attach(document.body);
}, false);

Vue.config.productionTip = false;

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// 注册过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

// 注册蜂巢组件
Vue.$toast = Vue.prototype.$toast = Toast;

// 延时加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    // // set observer to true
    // observer: true,
    // // optional
    // observerOptions: {
    //     rootMargin: '0px',
    //     threshold: 0.1
    // },
    error: 'data:image/png;base64,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',
    // error: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAByCAIAAADoE2VEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjA3MTI1NkU0RkVCMTFFNjkyOUVFQUE4MzM1MzQ3OTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjA3MTI1NkY0RkVCMTFFNjkyOUVFQUE4MzM1MzQ3OTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMDcxMjU2QzRGRUIxMUU2OTI5RUVBQTgzMzUzNDc5MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMDcxMjU2RDRGRUIxMUU2OTI5RUVBQTgzMzUzNDc5MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkJ5Fv8AAArXSURBVHja7F1Zd+LY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',
    // loading: '/static/images/loading.jpg',
    // loading: process.env.BASE_URL + 'static/images/loading.jpg',
    // loading: require('../static/images/loading.jpg'),
    // loading: 'assets/loading.jpg',
    attempt: 3,
    // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
    listenEvents: [ 'scroll', 'mousewheel' ],
    filter: { // 动态设定loading状态的缩略图. mod by Dio Zhu. on 2018.8.15
        progressive (listener, options) {
            let thumb = listener.src;
            let ossidx = thumb.lastIndexOf('?x-oss-process');
            if (ossidx > 0) thumb = thumb.substring(0, ossidx);
            let ypidx = thumb.lastIndexOf('!/');
            if (ypidx > 0) thumb = thumb.substring(0, ypidx);
            // let isPng = /\.png/.test(thumb);
            // if (/s01.dongyin.net|aliyuncs.com/.test(thumb)) thumb += '?x-oss-process=image/format,webp/resize,w_101' + (isPng ? '' : '/blur,r_1,s_1'); // oss 缩略图
            // else if (/upaiyun.com/.test(thumb)) thumb += '!/format/webp/fw/101' + (isPng ? '' : '/gaussblur/1x1'); // 又拍云 缩略图
            if (/oss.dongyin.net|s01.dongyin.net|aliyuncs.com/.test(thumb)) thumb += '?x-oss-process=image/resize,w_21'; // oss 缩略图
            else if (/upaiyun.com/.test(thumb)) thumb += '!/format/fw/21'; // 又拍云 缩略图
            else thumb = listener.src;
            // console.warn('[plugins.vue-lazyload] filter.progressive: ', thumb, listener.src);
            listener.loading = thumb;
            if (!listener.startTime) listener.startTime = Date.now();
        }
    },
    adapter: {
        loaded (listener, options) { // load完成后根据加载时间判断是否从缓存加载，'cached'的class决定动画时间长短。 add by Dio Zhu. on 2019.1.4
            if (!listener.endTime) listener.endTime = Date.now();
            let dif = parseInt(listener.endTime - listener.startTime);
            // console.warn('[vue-lazyload] loading time: ', dif, ' ==> ', listener.src);
            if (dif <= 50 && !dom.hasClass(listener.el, 'cached')) dom.addClass(listener.el, 'cached');
            // console.log('[plugins.vue-lazyload] adapter.loaded: el -> ', dom.hasClass(el, 'loading'));
            if (dom.hasClass(listener.el, 'loading')) dom.removeClass(listener.el, 'loading');
            dom.addClass(listener.el, 'loaded');
        }
    }
});

if (window._hmt) window._hmt.push(['_setAutoPageview', false]); // 关闭百度统计自动pv记录，在router.afterEach中去掉参数（主要是timestamp）手动传。add by Dio Zhu. on 2018.12.7

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
