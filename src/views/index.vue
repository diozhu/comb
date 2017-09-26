<template>
    <div class="page page-index">
        <p>布局</p>
        <div class="listview simple">
            <ul>
                <router-link :to="{ path: '/layout', query: { subjectId: 1 } }" tag="li">布局（栅格）</router-link>
                <router-link :to="{ path: '/colour', query: { subjectId: 2 } }" tag="li">色卡</router-link>
                <router-link :to="{ path: '/font', query: { subjectId: 3 } }" tag="li">字体</router-link>
                <router-link :to="{ path: '/icon', query: { subjectId: 4 } }" tag="li">icon</router-link>
                <router-link :to="{ path: '/button', query: { subjectId: 5 } }" tag="li">按钮</router-link>
                <router-link :to="{ path: '/list', query: { subjectId: 6 } }" tag="li">图文</router-link>
                <router-link :to="{ path: '/sticky', query: { subjectId: 7 } }" tag="li">粘性布局</router-link>
                <!--<router-link :to="{ path: '/album', query: { subjectId: 84 } }" tag="li">多图显示逻辑（仿动态）（album）</router-link>-->
            </ul>
        </div>

        <p>表单</p>
        <div class="listview simple">
            <ul>
                <router-link :to="{ path: '/cell', query: { subjectId: 21 } }" tag="li">列表单元（cell）</router-link>
                <router-link :to="{ path: '/cell-swipe', query: { subjectId: 22 } }" tag="li">滑动单元（cell-swipe）</router-link>
                <!--<router-link :to="{ path: '/form-input', query: { subjectId: 23 } }" tag="li">输入框（input）</router-link>-->
                <router-link :to="{ path: '/form-field', query: { subjectId: 24 } }" tag="li">输入框（field）</router-link>
                <router-link :to="{ path: '/form-radio', query: { subjectId: 25 } }" tag="li">单选（radio）</router-link>
                <router-link :to="{ path: '/form-switch', query: { subjectId: 26 } }" tag="li">开关（switch）</router-link>
                <router-link :to="{ path: '/form-checkbox', query: { subjectId: 27 } }" tag="li">多选（checkbox）</router-link>
                <router-link :to="{ path: '/picker', query: { subjectId: 28 } }" tag="li">选择器（picker）</router-link>
                <router-link :to="{ path: '/datetime-picker', query: { subjectId: 29 } }" tag="li">时间选择器（datetime-picker）</router-link>
                <router-link :to="{ path: '/form-search', query: { subjectId: 30 } }" tag="li">搜索（search）</router-link>
                <router-link :to="{ path: '/calendar-toon', query: { subjectId: 91 } }" tag="li">日历（calendar-toon）</router-link>
                <router-link :to="{ path: '/form-validator', query: { subjectId: 32 } }" tag="li">校验（validator）</router-link>
            </ul>
        </div>

        <p>组件</p>
        <div class="listview simple">
            <ul>
                <router-link :to="{ path: '/toast', query: { subjectId: 41 } }" tag="li">弹出框（toast）</router-link>
                <router-link :to="{ path: '/message-box', query: { subjectId: 42 } }" tag="li">弹出框（MessageBox）</router-link>
                <router-link :to="{ path: '/popup', query: { subjectId: 43 } }" tag="li">popup控件</router-link>
                <router-link :to="{ path: '/swipe-label', query: { subjectId: 44 } }" tag="li">滑动菜单（swipe-label）</router-link>
                <router-link :to="{ path: '/scroll', query: { subjectId: 45 } }" tag="li">滚动条（scroll）（vuex示例--关注）</router-link>
                <router-link :to="{ path: '/refresh', query: { subjectId: 46 } }" tag="li">下拉刷新（refresh + scroll）</router-link>
                <router-link :to="{ path: '/tab-bar', query: { subjectId: 47 } }" tag="li">选项卡（tabBar）</router-link>
                <router-link :to="{ path: '/sensorsdata-share', query: { subjectId: 49 } }" tag="li">埋点分享组件（v-sensorsdata 和 v-shares）</router-link>
            </ul>
        </div>

        <p>动画</p>
        <div class="listview simple">
            <ul>
                <router-link :to="{ path: '/spinner', query: { subjectId: 61 } }" tag="li">加载（spinner）</router-link>
            </ul>
        </div>


        <p>案例</p>
        <div class="listview simple">
            <ul>
                <router-link :to="{ path: '/feed', query: { subjectId: 81 } }" tag="li">名片样式（feed）</router-link>
                <router-link :to="{ path: '/comment', query: { subjectId: 82 } }" tag="li">微服务-评论点赞（comment）</router-link>
                <router-link :to="{ path: '/forum', query: { subjectId: 87 } }" tag="li">微服务-论坛（bbs）</router-link>
                <router-link :to="{ path: '/upload', query: { subjectId: 83 } }" tag="li">上传图片（upload-images）</router-link>
                <router-link :to="{ path: '/upload-cloud', query: { subjectId: 92 } }" tag="li">上传图片到思源云存储（upload-cloud-images）</router-link>
                <router-link :to="{ path: '/share', query: { subjectId: 84 } }" tag="li">分享（share）</router-link>
                <router-link :to="{ path: '/lazyload', query: { subjectId: 85 } }" tag="li">图片延时加载（lazyload）</router-link>
                <router-link :to="{ path: '/qr-code', query: { subjectId: 86 } }" tag="li">二维码(QRCode)</router-link>
                <router-link :to="{ path: '/map', query: { subjectId: 87 } }" tag="li">地图（map）</router-link>
                <router-link :to="{ path: '/org', query: { subjectId: 88 } }" tag="li">企通-组织选择器（org-selector）</router-link>
                <router-link :to="{ path: '/audio', query: { subjectId: 89 } }" tag="li">多媒体阅读器（audio）</router-link>
                <router-link :to="{ path: '/slider-show', query: { subjectId: 90 } }" tag="li">图片轮播（slide-show）</router-link>
                <router-link :to="{ path: '/slider-image', query: { subjectId: 90 } }" tag="li">图片预览（view-image）</router-link>
                <router-link :to="{ path: '/timeline', query: { subjectId: 90 } }" tag="li">时间轴（timeline）</router-link>
                <router-link :to="{ path: '/compiler-toon', query: { subjectId: 90 } }" tag="li">富文本编译器（compiler-toon）</router-link>
            </ul>
        </div>

        <p>开发中...</p>
        <div class="listview simple">
            <ul>
                <li>日历（区间）（待）</li>
                <router-link :to="{ path: '/infinite-scroll', query: { subjectId: 47 } }" tag="li">滚动条（infinite-scroll）（dom回收无尽滚动）</router-link>
                <router-link :to="{ path: '/scroll-infinite', query: { subjectId: 48 } }" tag="li">滚动条（scroll-infinite）（dom回收无尽滚动）</router-link>
                <router-link :to="{ path: '/iscroll', query: { subjectId: 48 } }" tag="li">iscroll（iscroll方式）</router-link>
                <router-link :to="{ path: '/tmp-css', query: { subjectId: 19 } }" tag="li">各种临时css样式</router-link>
                <router-link :to="{ path: '/autocomplete', query: { subjectId: 49 } }" tag="li">输入联想（autocomplete）</router-link>
                <router-link :to="{ path: '/scroll-io', query: { subjectId: 48 } }" tag="li">滚动条（intersectionObserver）</router-link>
                <router-link :to="{ path: '/swiper', query: { subjectId: 48 } }" tag="li">轮播（swiper）</router-link>
            </ul>
        </div>

        <p>issues:</p>
        <div class="listview simple">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'page-index',

        data () {
            return { };
        },

        mounted () {
            this.$logger.log('index.mounted... ');
        },

        activated () {
            this.$logger.log('index.activated... ');
        },

        deactivated () {
            this.$logger.log('index.deactivated... ');
        }
    };
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-index {

        p {
            height: pxTorem(48px);
            font-size: pxTorem(16px);
            line-height: pxTorem(48px);
            padding-left: $grid-gutter-width;
            background: #f2f2f4;
        }
    }
</style>
