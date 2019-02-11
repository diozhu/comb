const routeList = [
    {name: 'home', path: '/', meta: {title: '首页', group: ''}, component: () => import(/* webpackChunkName: "group-search" */ './views/home')},
    {name: 'index', path: '/index', meta: {title: '首页', group: '', keepAlive: true}, component: () => import(/* webpackChunkName: "group-search" */ './views/index.vue')},

    // CSS组件
    {name: 'Layout', path: '/layout', meta: {title: '布局', group: 'CSS组件'}, component: () => import('./views/layout.vue')},
    {name: 'Sticky', path: '/sticky', meta: {title: '粘性布局', group: 'CSS组件'}, component: () => import('./views/sticky.vue')},
    {name: 'Spinner', path: '/spinner', meta: {title: '加载动画', group: 'CSS组件'}, component: () => import('./views/spinner.vue')},
    {name: 'Icon', path: '/icon', meta: {title: '图标', group: 'CSS组件'}, component: () => import('./views/icon.vue')},
    {name: 'Button', path: '/button', meta: {title: '按钮', group: 'CSS组件'}, component: () => import('./views/button.vue')},
    {name: 'Text', path: '/text', meta: {title: '文本', group: 'CSS组件'}, component: () => import('./views/index.vue')},
    {name: 'Album', path: '/album', meta: {title: '相册布局', group: 'CSS组件'}, component: () => import('./views/album.vue')},
    // { name: 'Album', path: '/404', component: () => import('./views/404.vue')},
    {name: 'Animat', path: '/animat', meta: {title: '动画', group: 'CSS组件'}, component: () => import('./views/animat.vue')},

    // 基础组件
    {name: 'Toast', path: '/toast', meta: {title: 'Toast', group: '基础组件'}, component: () => import('./views/toast.vue')},
    {name: 'MessageBox', path: '/message-box', meta: {title: '消息弹框', group: '基础组件'}, component: () => import('./views/message-box.vue')},
    {name: 'Picker', path: '/picker', meta: {title: '拨盘', group: '基础组件'}, component: () => import('./views/picker.vue')},
    {name: 'Popup', path: '/popup', meta: {title: '下滑弹出组件', group: '基础组件'}, component: () => import('./views/popup.vue')},
    {name: 'DatetimePicker', path: '/datetime-picker', meta: {title: '日期拨盘', group: '基础组件'}, component: () => import('./views/datetime-picker.vue')},
    // { name: 'Swipe', path: '/404' },
    {name: 'CharIndexes', path: '/char-indexes', meta: {title: '索引', group: '基础组件'}, component: () => import('./views/char-indexes.vue')},
    {name: 'TabBar', path: '/tab-bar', meta: {title: '标签', group: '基础组件'}, component: () => import('./views/tab-bar.vue')},
    {name: 'SwipeLabel', path: '/swipe-label', meta: {title: '左右可滑动标签', group: '基础组件'}, component: () => import('./views/swipe-label.vue')},
    {name: 'Media', path: '/media', meta: {title: '多媒体', group: '基础组件'}, component: () => import('./views/media.vue')},
    {name: 'Autocomplete', path: '/autocomplete', meta: {title: '已废弃', group: '基础组件'}, component: () => import('./views/autocomplete.vue')},
    {name: 'Calendar', path: '/calendar', meta: {title: '日历', group: '基础组件'}, component: () => import('./views/calendar.vue')},
    {name: 'Star', path: '/star', meta: {title: '评星', group: '基础组件'}, component: () => import('./views/star.vue')},
    {name: 'Swiper', path: '/swiper', meta: {title: '轮播', group: '基础组件'}, component: () => import('./views/swiper.vue')},
    {name: 'Timeline', path: '/timeline', meta: {title: '时间线', group: '基础组件'}, component: () => import('./views/timeline.vue')},
    {name: 'Image', path: '/image', meta: {title: 'Image', group: '基础组件', keepAlive: true}, component: () => import('./views/image.vue')},
    {name: 'Viewer', path: '/viewer', meta: {title: 'Viewer', group: '基础组件'}, component: () => import('comb-ui/src/vendors/v-viewer.vue')},

    // Form表单类组件
    {name: 'Api', path: '/api', meta: {title: '接口调用（axios）', group: 'Form表单类组件'}, component: () => import('./views/api.vue')},
    {name: 'Radio', path: '/form-radio', meta: {title: '单选', group: 'Form表单类组件'}, component: () => import('./views/form-radio.vue')},
    {name: 'CheckBox', path: '/form-checkbox', meta: {title: '多选', group: 'Form表单类组件'}, component: () => import('./views/form-checkbox.vue')},
    {name: 'Cell', path: '/cell', meta: {title: '列表单元', group: 'Form表单类组件'}, component: () => import('./views/cell.vue')},
    {name: 'CellSwipe', path: '/cell-swipe', meta: {title: '滑动单元', group: 'Form表单类组件'}, component: () => import('./views/cell-swipe.vue')},
    {name: 'Switch', path: '/form-switch', meta: {title: '开关', group: 'Form表单类组件'}, component: () => import('./views/form-switch.vue')},
    {name: 'Field', path: '/form-field', meta: {title: '输入框', group: 'Form表单类组件'}, component: () => import('./views/form-field.vue')},
    // { name: 'Badge', path: '/404', meta: {title: '通知', group: 'Form表单类组件'}, component: () => import('./views/404.vue')},
    // { name: 'UploadImages', path: '/404', meta: {title: '上传图片', group: 'Form表单类组件'}, component: () => import('./views/404.vue')},
    {name: 'Validator', path: '/form-validator', meta: {title: '表单校验', group: 'Form表单类组件'}, component: () => import('./views/form-validator.vue')},
    {name: 'Form', path: '/form', meta: {title: '表单', group: 'Form表单类组件'}, component: () => import('./views/form.vue')},

    // {name: 'Search', path: '/form-search', meta: {title: '查询', group: 'Form表单类组件'}, component: () => import('./views/form-search.vue')},
    // {name: 'SearchResult', path: '/form-search-result', meta: {title: '查询', group: 'Form表单类组件'}, component: () => import('./views/form-search-result.vue')},
    {name: 'Search', path: '/form-search', meta: {title: '查询', group: 'Form表单类组件'}, component: () => import(/* webpackChunkName: "group-search" */ './views/form-search.vue')},
    {name: 'SearchResult', path: '/form-search-result', meta: {title: '查询', group: 'Form表单类组件'}, component: () => import(/* webpackChunkName: "group-search" */ './views/form-search-result.vue')},

    // 复杂应用类
    {name: 'Feed', path: '/feed', meta: {title: '名片', group: '复杂应用类'}, component: () => import('./views/feed.vue')},
    {name: 'Scroll', path: '/scroll', meta: {title: '滚动条（vuex演示）', group: '复杂应用类', keepAlive: true}, component: () => import('./views/scroll.vue')},
    {name: 'scroll-two', path: '/scroll-two', meta: {title: '多滚动条（vuex演示）', group: '复杂应用类', keepAlive: true}, component: () => import('./views/scroll-two.vue')},
    {name: 'detail', path: '/detail', meta: {title: '详情页', group: '复杂应用类', keepAlive: true}, component: () => import('./views/detail.vue')},
    {name: 'Refresh', path: '/refresh', meta: {title: '下拉刷新', group: '复杂应用类', keepAlive: true}, component: () => import('./views/refresh.vue')},
    {name: 'refresh-two', path: '/refresh-two', meta: {title: '多个刷新', group: '复杂应用类', keepAlive: true}, component: () => import('./views/refresh-two.vue')},
    {name: 'map', path: '/map', meta: {title: '地图', group: '复杂应用类'}, component: () => import('./views/map.vue')},
    {name: 'map-markers', path: '/map-markers', meta: {title: '地图', group: '复杂应用类'}, component: () => import('./views/map-markers.vue')},
    {name: 'map-selector', path: '/map-selector', meta: {title: '地图', group: '复杂应用类'}, component: () => import('./views/map-selector.vue')},

    // 开发中...
    {name: 'InfiniteScroll', path: '/infinite-scroll', meta: {title: '无限滚动', group: '开发中...'}, component: () => import('./views/infinite-scroll.vue')},
    {name: 'HugeTable', path: '/huge-table', meta: {title: '大表格', group: '开发中...'}, component: () => import('./views/huge-table.vue')},

    {name: '404', path: '*', meta: {title: '404', group: ''}, component: () => import('./views/404.vue')}
];

export default routeList;
// export default routeList;
export const menus = routeList;
