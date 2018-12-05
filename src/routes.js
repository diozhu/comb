const routeList = [
    {name: 'home', path: '/', meta: {title: '首页', group: ''}, component: resolve => require(['./views/home'], resolve)},
    {name: 'index', path: '/index', meta: {title: '首页', group: ''}, component: resolve => require(['./views/index'], resolve)},
    {name: '404', path: '*', meta: {title: '404', group: ''}, component: resolve => require(['./views/404'], resolve)},

    // CSS组件
    {name: 'Layout', path: '/layout', meta: {title: '布局', group: 'CSS组件'}, component: resolve => require(['./views/layout'], resolve)},
    {name: 'Sticky', path: '/sticky', meta: {title: '粘性布局', group: 'CSS组件'}, component: resolve => require(['./views/sticky'], resolve)},
    {name: 'Spinner', path: '/spinner', meta: {title: '加载动画', group: 'CSS组件'}, component: resolve => require(['./views/spinner'], resolve)},
    {name: 'Icon', path: '/icon', meta: {title: '图标', group: 'CSS组件'}, component: resolve => require(['./views/icon'], resolve)},
    {name: 'Button', path: '/button', meta: {title: '按钮', group: 'CSS组件'}, component: resolve => require(['./views/button'], resolve)},
    {name: 'Text', path: '/text', meta: {title: '文本', group: 'CSS组件'}, component: resolve => require(['./views/index'], resolve)},
    {name: 'Album', path: '/album', meta: {title: '相册布局', group: 'CSS组件'}, component: resolve => require(['./views/album'], resolve)},
    // { name: 'Album', path: '/404', component: resolve => require(['./views/404'], resolve)},
    {name: 'Animat', path: '/animat', meta: {title: '动画', group: 'CSS组件'}, component: resolve => require(['./views/animat'], resolve)},

    // 基础组件
    {name: 'Toast', path: '/toast', meta: {title: 'Toast', group: '基础组件'}, component: resolve => require(['./views/toast'], resolve)},
    {name: 'MessageBox', path: '/message-box', meta: {title: '消息弹框', group: '基础组件'}, component: resolve => require(['./views/message-box'], resolve)},
    {name: 'Picker', path: '/picker', meta: {title: '拨盘', group: '基础组件'}, component: resolve => require(['./views/picker'], resolve)},
    {name: 'Popup', path: '/popup', meta: {title: '下滑弹出组件', group: '基础组件'}, component: resolve => require(['./views/popup'], resolve)},
    {name: 'DatetimePicker', path: '/datetime-picker', meta: {title: '日期拨盘', group: '基础组件'}, component: resolve => require(['./views/datetime-picker'], resolve)},
    // { name: 'Swipe', path: '/404' },
    {name: 'CharIndexes', path: '/char-indexes', meta: {title: '索引', group: '基础组件'}, component: resolve => require(['./views/char-indexes'], resolve)},
    {name: 'TabBar', path: '/tab-bar', meta: {title: '标签', group: '基础组件'}, component: resolve => require(['./views/tab-bar'], resolve)},
    {name: 'SwipeLabel', path: '/swipe-label', meta: {title: '左右可滑动标签', group: '基础组件'}, component: resolve => require(['./views/swipe-label'], resolve)},
    {name: 'Media', path: '/media', meta: {title: '多媒体', group: '基础组件'}, component: resolve => require(['./views/media'], resolve)},
    {name: 'Autocomplete', path: '/autocomplete', meta: {title: '已废弃', group: '基础组件'}, component: resolve => require(['./views/autocomplete'], resolve)},
    {name: 'Calendar', path: '/calendar', meta: {title: '日历', group: '基础组件'}, component: resolve => require(['./views/calendar'], resolve)},
    {name: 'Star', path: '/star', meta: {title: '评星', group: '基础组件'}, component: resolve => require(['./views/star'], resolve)},
    {name: 'Swiper', path: '/swiper', meta: {title: '轮播', group: '基础组件'}, component: resolve => require(['./views/swiper'], resolve)},
    {name: 'Timeline', path: '/timeline', meta: {title: '时间线', group: '基础组件'}, component: resolve => require(['./views/timeline'], resolve)},
    {name: 'Viewer', path: '/404', meta: {title: 'Viewer', group: '基础组件'}, component: resolve => require(['./views/404'], resolve)},
    {name: 'Image', path: '/404', meta: {title: 'Image', group: '基础组件'}, component: resolve => require(['./views/404'], resolve)},

    // Form表单类组件
    {name: 'Api', path: '/api', meta: {title: '接口调用（axios）', group: 'Form表单类组件'}, component: resolve => require(['./views/api'], resolve)},
    {name: 'Radio', path: '/form-radio', meta: {title: '单选', group: 'Form表单类组件'}, component: resolve => require(['./views/form-radio'], resolve)},
    {name: 'CheckBox', path: '/form-checkbox', meta: {title: '多选', group: 'Form表单类组件'}, component: resolve => require(['./views/form-checkbox'], resolve)},
    {name: 'Cell', path: '/cell', meta: {title: '列表单元', group: 'Form表单类组件'}, component: resolve => require(['./views/cell'], resolve)},
    {name: 'CellSwipe', path: '/cell-swipe', meta: {title: '滑动单元', group: 'Form表单类组件'}, component: resolve => require(['./views/cell-swipe'], resolve)},
    {name: 'Switch', path: '/form-switch', meta: {title: '开关', group: 'Form表单类组件'}, component: resolve => require(['./views/form-switch'], resolve)},
    {name: 'Field', path: '/form-field', meta: {title: '输入框', group: 'Form表单类组件'}, component: resolve => require(['./views/form-field'], resolve)},
    // { name: 'Badge', path: '/404', meta: {title: '通知', group: 'Form表单类组件'}, component: resolve => require(['./views/404'], resolve)},
    {name: 'Search', path: '/form-search', meta: {title: '查询', group: 'Form表单类组件'}, component: resolve => require(['./views/form-search'], resolve)},
    // { name: 'UploadImages', path: '/404', meta: {title: '上传图片', group: 'Form表单类组件'}, component: resolve => require(['./views/404'], resolve)},
    {name: 'Validator', path: '/form-validator', meta: {title: '表单校验', group: 'Form表单类组件'}, component: resolve => require(['./views/form-validator'], resolve)},
    {name: 'Form', path: '/form', meta: {title: '表单', group: 'Form表单类组件'}, component: resolve => require(['./views/form'], resolve)},

    // 复杂应用类
    {name: 'Feed', path: '/feed', meta: {title: '名片', group: '复杂应用类'}, component: resolve => require(['./views/feed'], resolve)},
    {name: 'Scroll', path: '/scroll', meta: {title: '滚动条（vuex演示）', group: '复杂应用类', keepAlive: true}, component: resolve => require(['./views/scroll'], resolve)},
    {name: 'scroll-two', path: '/scroll-two', meta: {title: '多滚动条（vuex演示）', group: '复杂应用类', keepAlive: true}, component: resolve => require(['./views/scroll-two'], resolve)},
    {name: 'detail', path: '/detail', meta: {title: '详情页', group: '复杂应用类', keepAlive: true}, component: resolve => require(['./views/detail'], resolve)},
    {name: 'Refresh', path: '/refresh', meta: {title: '下拉刷新', group: '复杂应用类', keepAlive: true}, component: resolve => require(['./views/refresh'], resolve)},
    {name: 'refresh-two', path: '/refresh-two', meta: {title: '多个刷新', group: '复杂应用类', keepAlive: true}, component: resolve => require(['./views/refresh-two'], resolve)},
    {name: 'map', path: '/map', meta: {title: '地图', group: '复杂应用类'}, component: resolve => require(['./views/map'], resolve)},
    {name: 'map-markers', path: '/map-markers', meta: {title: '地图', group: '复杂应用类'}, component: resolve => require(['./views/map-markers'], resolve)},
    {name: 'map-selector', path: '/map-selector', meta: {title: '地图', group: '复杂应用类'}, component: resolve => require(['./views/map-selector'], resolve)},

    // 开发中...
    {name: 'InfiniteScroll', path: '/infinite-scroll', meta: {title: '无限滚动', group: '开发中...'}, component: resolve => require(['./views/infinite-scroll'], resolve)},
    {name: 'HugeTable', path: '/huge-table', meta: {title: '大表格', group: '开发中...'}, component: resolve => require(['./views/huge-table'], resolve)},
];

export default routeList;
// export default routeList;
export const menus = routeList;
