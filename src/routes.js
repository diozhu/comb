const Home = resolve => require(['./views/home.vue'], resolve);
const Index = resolve => require(['./views/index.vue'], resolve);
const Api = resolve => require(['./views/api.vue'], resolve);
const Layout = resolve => require(['./views/layout.vue'], resolve);
const Sticky = resolve => require(['./views/sticky.vue'], resolve);
const Colour = resolve => require(['./views/colour.vue'], resolve);
const Font = resolve => require(['./views/font.vue'], resolve);
const Icon = resolve => require(['./views/icon.vue'], resolve);
const Button = resolve => require(['./views/button.vue'], resolve);
const FormSearch = resolve => require(['./views/form-search.vue'], resolve);
const FormSearchResult = resolve => require(['./views/form-search-result.vue'], resolve);
const TabBar = resolve => require(['./views/tab-bar.vue'], resolve);
const List = resolve => require(['./views/list.vue'], resolve);
const ViewImage = resolve => require(['./vendor/v-viewImage.vue'], resolve);
const Viewer = resolve => require(['./vendor/v-viewer.vue'], resolve);
const Swiper = resolve => require(['./views/swiper.vue'], resolve);
const Slider = resolve => require(['./vendor/v-slider.vue'], resolve);
const FormInput = resolve => require(['./views/form-input.vue'], resolve);
const FormLabel = resolve => require(['./views/form-label.vue'], resolve);
const FormRadio = resolve => require(['./views/form-radio.vue'], resolve);
const FormSwitch = resolve => require(['./views/form-switch.vue'], resolve);
const FormCheckbox = resolve => require(['./views/form-checkbox.vue'], resolve);
const FormField = resolve => require(['./views/form-field.vue'], resolve);
const FormValidator = resolve => require(['./views/form-validator.vue'], resolve);

const Animat = resolve => require(['./views/animat.vue'], resolve);
const AnimatSpinner = resolve => require(['./views/animat-spinner.vue'], resolve);
const Toast = resolve => require(['./views/toast.vue'], resolve);
const MessageBox = resolve => require(['./views/message-box.vue'], resolve);
const Picker = resolve => require(['./views/picker.vue'], resolve);
const Feed = resolve => require(['./views/feed.vue'], resolve);
// const Comment = resolve => require(['./views/comment.vue'], resolve);
// const CommentList = resolve => require(['./views/comment-list.vue'], resolve);
// const CommentListReply = resolve => require(['./views/comment-list-reply.vue'], resolve);
// const CommentInfo = resolve => require(['./views/comment-info.vue'], resolve);
// const CommentInfoReply = resolve => require(['./views/comment-info-reply.vue'], resolve);
// const CommentInfoReplies = resolve => require(['./views/comment-info-replies.vue'], resolve);
// const CommentCreate = resolve => require(['./views/comment-create.vue'], resolve);
// const CommentsDetail = resolve => require(['./views/comments-detail.vue'], resolve);
// const CommentComments = resolve => require(['./views/comment-comments.vue'], resolve);
// const CommentPraises = resolve => require(['./views/comment-praises.vue'], resolve);
const Popup = resolve => require(['./views/popup.vue'], resolve);
const DatetimePicker = resolve => require(['./views/datetime-picker.vue'], resolve);
const SwipeLabel = resolve => require(['./views/swipe-label.vue'], resolve);
const ScrollPicker = resolve => require(['./views/scroll-picker.vue'], resolve);
const Cell = resolve => require(['./views/cell.vue'], resolve);
const CellSwipe = resolve => require(['./views/cell-swipe.vue'], resolve);
const UploadCreate = resolve => require(['./views/upload-create.vue'], resolve);
// const UploadCreateCloud = resolve => require(['./views/upload-create-cloud.vue'], resolve);
const AlbumInfo = resolve => require(['./views/album-info.vue'], resolve);
// const Share = resolve => require(['./views/share.vue'], resolve);
const TmpCss = resolve => require(['./views/tmp-css.vue'], resolve);
const ScrollIO = resolve => require(['./views/scroll-io.vue'], resolve);
const Scroller = resolve => require(['./views/scroller.vue'], resolve);
const Scroll = resolve => require(['./views/scroll.vue'], resolve);
const ScrollTwo = resolve => require(['./views/scroll-two.vue'], resolve);
const InfiniteScroll = resolve => require(['./views/infinite-scroll.vue'], resolve);
const ScrollInfinite = resolve => require(['./views/scroll-infinite.vue'], resolve);
const IScroll = resolve => require(['./views/iscroll.vue'], resolve);

const SlideShow = resolve => require(['./views/slider-show.vue'], resolve);
const SliderImage = resolve => require(['./views/slider-image.vue'], resolve);
const Detail = resolve => require(['./views/detail.vue'], resolve);
const Lazyload = resolve => require(['./views/lazyload.vue'], resolve);
const PageNotFound = resolve => require(['./views/404.vue'], resolve);
const Error = resolve => require(['./views/error'], resolve);

/** 按组分块打包 */
const Refresh = r => require.ensure([], () => r(require('./views/refresh.vue')), 'group-refresh');
const RefreshTwo = r => require.ensure([], () => r(require('./views/refresh-two.vue')), 'group-refresh');

// const Forum = resolve => require(['./views/forum.vue'], resolve);
// const ForumTopics = resolve => require(['./views/forum-topics.vue'], resolve);
// const ForumSearch = resolve => require(['./views/forum-search.vue'], resolve);
// const ForumTopicsDetail = resolve => require(['./views/forum-topics-detail.vue'], resolve);
// const ForumRelease = resolve => require(['./views/forum-release.vue'], resolve);
// const ForumReply = resolve => require(['./views/forum-reply.vue'], resolve);

const Map = resolve => require(['./views/map.vue'], resolve);
const MapMarkers = resolve => require(['./views/map-markers.vue'], resolve);
const MapSelector = resolve => require(['./views/map-selector.vue'], resolve);

// const Org = resolve => require(['./views/org.vue'], resolve);
// const OrgSelector = resolve => require(['./views/org-selector.vue'], resolve);
// 音频/视频
const Audio = resolve => require(['./views/audio.vue'], resolve);

// mwap测试
const Timeline = resolve => require(['./views/timeline.vue'], resolve);
const Star = resolve => require(['./views/star.vue'], resolve);
const Calendar = resolve => require(['./views/calendar.vue'], resolve);
const CharIndexes = resolve => require(['./views/char-indexes.vue'], resolve);
const Form = resolve => require(['./views/form.vue'], resolve);
const Chart = resolve => require(['./views/chart.vue'], resolve);

// 编写路由集合
const routes = [
    {
        name: 'home', // 路由名，可选
        path: '/', // 路由路径，这里是根路径所以是'/'
        component: Home, // 模板
        meta: {title: '首页', requiresAuth: true}
    },
    { name: 'index', path: '/index', meta: {title: '组件列表', requiresAuth: true, keepAlive: true}, component: Index },
    { name: 'layout', path: '/layout', meta: {title: '布局', requiresAuth: true}, component: Layout },
    { name: 'colour', path: '/colour', meta: {title: '色卡', requiresAuth: true}, component: Colour },
    { name: 'font', path: '/font', meta: {title: '字体', requiresAuth: true}, component: Font },
    { name: 'icon', path: '/icon', meta: {title: 'icon', requiresAuth: true}, component: Icon },
    { name: 'button', path: '/button', meta: {title: '按钮', requiresAuth: true}, component: Button },

    { name: 'api', path: '/api', meta: {title: '按钮', requiresAuth: true}, component: Api },
    { name: 'list', path: '/list', meta: {title: 'list', requiresAuth: true, keepAlive: true}, component: List },
    { name: 'viewImage', path: '/viewImage', meta: {title: '预览', requiresAuth: true}, component: ViewImage },
    { name: 'picker', path: '/picker', meta: {title: '选择', requiresAuth: true}, component: Picker },
    { name: 'popup', path: '/popup', meta: {title: '弹出', requiresAuth: true}, component: Popup },
    { name: 'datetime-picker', path: '/datetime-picker', meta: {title: '日期选择器', requiresAuth: true}, component: DatetimePicker },
    { name: 'form-search', path: '/form-search', meta: {title: '搜索', requiresAuth: true}, component: FormSearch },
    { name: 'tab-bar', path: '/tab-bar', meta: {title: '选项卡', requiresAuth: true}, component: TabBar },
    { name: 'form-search-result', path: '/form-search-result', meta: {title: '搜索', requiresAuth: true}, component: FormSearchResult },
    { name: 'form-input', path: '/form-input', meta: {title: 'input', requiresAuth: true}, component: FormInput },
    { name: 'form-label', path: '/form-label', meta: {title: 'label', requiresAuth: true}, component: FormLabel },
    { name: 'form-radio', path: '/form-radio', meta: {title: '单选', requiresAuth: true}, component: FormRadio },
    { name: 'form-switch', path: '/form-switch', meta: {title: '开关', requiresAuth: true}, component: FormSwitch },
    { name: 'form-checkbox', path: '/form-checkbox', meta: {title: '多选', requiresAuth: true}, component: FormCheckbox },
    { name: 'form-field', path: '/form-field', meta: {title: 'field', requiresAuth: true}, component: FormField },
    { name: 'form-validator', path: '/form-validator', meta: {title: '输入校验', requiresAuth: true}, component: FormValidator },

    { name: 'animat', path: '/animat', meta: {title: '动画', requiresAuth: true}, component: Animat },
    { name: 'animat-spinner', path: '/animat-spinner', meta: {title: '动画', requiresAuth: true}, component: AnimatSpinner },

    { name: 'toast', path: '/toast', meta: {title: '提示', requiresAuth: true}, component: Toast },
    { name: 'message-box', path: '/message-box', meta: {title: '弹出框', requiresAuth: true}, component: MessageBox },
    { name: 'feed', path: '/feed', meta: {title: 'feed', requiresAuth: true}, component: Feed },
    { name: 'sticky', path: '/sticky', meta: {title: 'sticky', requiresAuth: true}, component: Sticky },
    // {
    //     path: '/comment',
    //     component: Comment,
    //     children: [
    //         { name: 'comment', path: '', meta: {title: '评论点赞', requiresAuth: true}, component: CommentList },
    //         { name: 'comment-info', path: ':id/', meta: {title: '详情', requiresAuth: true}, component: CommentInfo },
    //         { name: 'comment-create', path: ':id/create', meta: {title: '评论', requiresAuth: true}, component: CommentCreate }
    //     ]
    // },
    // { name: 'comment', path: '/comment', meta: {title: '评论点赞', requiresAuth: true, scrollToTop: true}, component: Comment },
    // { name: 'comment-list', path: '/comment-list', meta: {title: '话题列表', requiresAuth: true, keepAlive: true}, component: CommentList },
    // { name: 'comment-list-reply', path: '/comment-list-reply', meta: {title: '话题列表', requiresAuth: true, keepAlive: true}, component: CommentListReply },
    // { name: 'comment-info', path: '/comment/:id/', meta: {title: '详情', requiresAuth: true, keepAlive: true}, component: CommentInfo },
    // { name: 'comment-info-reply', path: '/comment-replay/:id/', meta: {title: '详情', requiresAuth: true, keepAlive: true}, component: CommentInfoReply },
    // { name: 'comment-info-replies', path: '/comment-replay/:id/list', meta: {title: '详情', requiresAuth: true}, component: CommentInfoReplies },
    // { name: 'comment-create', path: '/comment/:id/create', meta: {title: '评论', requiresAuth: true}, component: CommentCreate },
    // { name: 'comments-detail', path: '/comments/detail', meta: {title: '评论和赞', requiresAuth: true, keepAlive: true}, component: CommentsDetail },
    // { name: 'comments-create', path: '/comments/create', meta: {title: '评论', requiresAuth: true}, component: CommentCreate },
    // { name: 'comment-comments', path: '/comment-comments', meta: {title: '我的评论', requiresAuth: true, keepAlive: true}, component: CommentComments },
    // { name: 'comment-praises', path: '/comment-praises', meta: {title: '我的点赞', requiresAuth: true, keepAlive: true}, component: CommentPraises },

    // { name: 'forum', path: '/forum', meta: {title: '微服务-论坛', requiresAuth: true}, component: Forum },
    // { name: 'forum-topics', path: '/forum-topics/:forumId', meta: {title: '话题列表', requiresAuth: true, keepAlive: true}, component: ForumTopics },
    // { name: 'forum-search', path: '/forum-search/:forumId', meta: {title: '搜索话题', requiresAuth: true, keepAlive: true, disableLoading: true, scrollToTop: true}, component: ForumSearch },
    // { name: 'forum-topics-detail', path: '/forum-topics-detail/:forumId/:topicId', meta: {title: '话题详情', requiresAuth: true, keepAlive: true}, component: ForumTopicsDetail },
    // { name: 'forum-release', path: '/forum-release/:forumId', meta: {title: '发布话题', requiresAuth: true, keepAlive: true}, component: ForumRelease },
    // { name: 'forum-reply', path: '/forum-reply/:forumId/:topicId', meta: {title: '回复', requiresAuth: true}, component: ForumReply },

    { name: 'swipe-label', path: '/swipe-label', meta: {title: '滑动菜单', requiresAuth: true}, component: SwipeLabel },
    { name: 'cell', path: '/cell', meta: {title: '列表单元', requiresAuth: true}, component: Cell },
    { name: 'cell-swipe', path: '/cell-swipe', meta: {title: '滑动单元', requiresAuth: true}, component: CellSwipe },
    { name: 'scroller', path: '/scroller', meta: {title: '滚动方式', requiresAuth: true, keepAlive: true}, component: Scroller },
    { name: 'scroll', path: '/scroll', meta: {title: '滚动条', requiresAuth: true, keepAlive: true}, component: Scroll },
    { name: 'scroll-two', path: '/scroll-two', meta: {title: '双滚动条', requiresAuth: true, keepAlive: true}, component: ScrollTwo },
    { name: 'slider-show', path: '/slider-show', meta: {title: '滚动', requiresAuth: true, keepAlive: true}, component: SlideShow },
    { name: 'slider-image', path: '/slider-image', meta: {title: '预览', requiresAuth: true, keepAlive: true}, component: SliderImage },
    { name: 'detail', path: '/detail', meta: {title: '详情页', requiresAuth: true, keepAlive: true}, component: Detail },

    { name: 'infinite-scroll', path: '/infinite-scroll', meta: {title: '无限滚动', requiresAuth: true, keepAlive: true}, component: InfiniteScroll },
    { name: 'scroll-infinite', path: '/scroll-infinite', meta: {title: '无限滚动', requiresAuth: true, keepAlive: true}, component: ScrollInfinite },
    { name: 'iscroll', path: '/iscroll', meta: {title: 'iscroll', requiresAuth: true, keepAlive: true}, component: IScroll },
    { name: 'scroll-io', path: '/scroll-io', meta: {title: 'scroll-io', requiresAuth: true, keepAlive: true}, component: ScrollIO },
    // {
    //     path: '/upload',
    //     component: Upload,
    //     children: [
    //         { name: 'upload', path: '', meta: {title: '上传'}, component: UploadCreate },
    //         { name: 'upload-viewer', path: 'viewer', meta: {title: '预览'}, component: ViewImage }
    //     ]
    // },
    { name: 'upload', path: '/upload', meta: {title: '上传', requiresAuth: true, keepAlive: true}, component: UploadCreate },
    { name: 'lazyload', path: '/lazyload', meta: {title: '延时加载', requiresAuth: true, keepAlive: true}, component: Lazyload },

    // {
    //     path: '/album',
    //     component: Album,
    //     children: [
    //         { name: 'album', path: '', meta: {title: '图片显示'}, component: AlbumInfo },
    //         { name: 'album-viewer', path: 'viewer', meta: {title: '预览'}, component: ViewImage }
    //     ]
    // },
    { name: 'album', path: '/album', meta: {title: '图片显示', requiresAuth: true, scrollToTop: true}, component: AlbumInfo },
    // { name: 'share', path: '/share', meta: {title: '分享页', requiresAuth: true}, component: Share },
    { name: 'tmp-css', path: '/tmp-css', meta: {title: '临时样式', requiresAuth: true}, component: TmpCss },
    { name: 'scroll-picker', path: '/scroll-picker', meta: {title: '测试', requiresAuth: true}, component: ScrollPicker },

    { name: 'viewer', path: '/viewer', meta: {title: '预览', requiresAuth: true}, component: Viewer },
    { name: 'slider', path: '/slider', meta: {title: '预览', requiresAuth: true}, component: Slider },

    { name: 'refresh', path: '/refresh', meta: {title: '下拉刷新', requiresAuth: true, keepAlive: true}, component: Refresh },
    { name: 'refresh-two', path: '/refresh-two', meta: {title: '下拉刷新', requiresAuth: true, keepAlive: true}, component: RefreshTwo },

    { name: 'map', path: '/map', meta: {title: '地图', requiresAuth: true, keepAlive: true}, component: Map },
    { name: 'map-markers', path: '/map-markers', meta: {title: '地图', requiresAuth: true}, component: MapMarkers },
    { name: 'map-selector', path: '/map-selector', meta: {title: '地址选择', requiresAuth: true}, component: MapSelector },

    // { name: 'org', path: '/org', meta: {title: '企通组织结构选择器', requiresAuth: true, keepAlive: true}, component: Org },
    // { name: 'org-selector', path: '/org-selector', meta: {title: '企通组织结构选择器', requiresAuth: true}, component: OrgSelector },
    { name: 'audio', path: '/audio', meta: {title: '多媒体阅读器', requiresAuth: true, keepAlive: true}, component: Audio },

    // { name: 'mwap', path: '/mwap', meta: {title: 'mwap测试'}, component: Mwap },
    // { name: 'mwap-info', path: '/mwap-info', meta: {title: 'mwap测试二级页面'}, component: MwapInfo },
    { name: 'timeline', path: '/timeline', meta: {title: '时间轴'}, component: Timeline },

    { name: 'swiper', path: '/swiper', meta: {title: '滑动', requiresAuth: true}, component: Swiper },
    { name: 'error', path: '/error', meta: {title: '网页无法打开'}, component: Error },

    { name: 'star', path: '/star', meta: {title: '评星', requiresAuth: true, keepAlive: true}, component: Star },
    { name: 'calendar', path: '/calendar', meta: {title: '日历', requiresAuth: true, keepAlive: true}, component: Calendar },
    { name: 'char-indexes', path: '/char-indexes', meta: {title: '字符索引', requiresAuth: true, keepAlive: true}, component: CharIndexes },
    { name: 'form', path: '/form', meta: {title: '表单', requiresAuth: true}, component: Form },
    { name: 'chart', path: '/chart', meta: {title: '图标插件', requiresAuth: true}, component: Chart },
    { path: '*', meta: {title: '出错啦'}, component: PageNotFound }
];
// 导出路由集合
export default routes;
