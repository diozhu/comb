import Vue from 'vue';
import VueResource from 'vue-resource';
import store from './store';
import router from './router';
import { sync } from 'vuex-router-sync';
// import VueTouch from 'vue-touch';
import Comb from './vendor/index';
import * as filters from './filters';
import VueLazyload from 'vue-lazyload';
import '../static/js/vendor/fastclick'; // get fastclick
import 'intersection-observer'; // polyfill: intersectionObserver
import 'es6-promise/auto'; // polyfill: es6-promise
import app from './app.vue';

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router);

// 注册 fastclick
document.addEventListener('DOMContentLoaded', function () {
    if (window.FastClick) window.FastClick.attach(document.body);
}, false);

// 注册vue-resource
Vue.use(VueResource);
// Vue.http.options.emulateJSON = true; // post 提交时，以表单形式提交

// 注册蜂巢（Comb）组件
Vue.use(Comb);

// // 注册vue-touch
// Vue.use(VueTouch, {name: 'v-touch'});

// // 注册转场动画
// import vTransition from './vendor/v-transition.js';
// Vue.use(vTransition, router, {
//     backAnim: 'fadeOutRight', // fadeOutRight, slideOutRight
//     forwardAnim: 'fadeInRight' // fadeInRight, slideInRight
// });

// 注册过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

// 延时加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('./assets/image-empty.png'),
    // error: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAAByCAIAAADoE2VEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjA3MTI1NkU0RkVCMTFFNjkyOUVFQUE4MzM1MzQ3OTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjA3MTI1NkY0RkVCMTFFNjkyOUVFQUE4MzM1MzQ3OTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMDcxMjU2QzRGRUIxMUU2OTI5RUVBQTgzMzUzNDc5MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMDcxMjU2RDRGRUIxMUU2OTI5RUVBQTgzMzUzNDc5MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkJ5Fv8AAArXSURBVHja7F1Zd+LY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',
    // loading: '/static/images/loading.jpg',
    loading: require('../static/images/loading.jpg'),
    // loading: 'assets/loading.jpg',
    attempt: 1
});

new Vue({
    router,
    store,
    render: h => h(app)
    // ...app
}).$mount('#app');
