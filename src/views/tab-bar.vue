<template>
    <div class="v-tabBar page page-cell">
        <h2>选项卡参考样例</h2>

        <p class="desc">选项卡功能，包括常规内容切换，导航上下位置可选，数据即时更新。</p>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>fixed</td><td>固定在页面底部</td><td>Boolean</td><td>-</td><td>false</td></tr>
                <tr><td>customTpl</td><td>是否有自定义模板</td><td>Boolean</td><td>-</td><td>false</td></tr>
                <tr><td>slots</td><td colspan="4">根据id</td></tr>
            </table>
        </div>

        <h2>示例</h2>

        <v-tab-bar v-bind:tabs='tabs' @change = "changeFn">
            <!--<p slot="con" v-for="(item, index) in tabs.tabCons" :key="index" v-if='tabs.selectNum==index'>-->
                <!--{{item}}-->
            <!--</p>-->
            <p slot="customTpl" v-if='tabs.selectNum==0'>{{template}}</p>
            <p slot="customTpl" v-if='tabs.selectNum==1'>{{template1}}</p>
            <p slot="customTpl" v-if='tabs.selectNum==2'>{{template2}}</p>
            <p slot="customTpl" v-if='tabs.selectNum==0' ref='testTpl'></p>

        </v-tab-bar>
        <div class="selected-val"><span>{{selectNav}}</span>已选中:</div>
        <!-- <div class="selected-val"><span>{{selectNav1()}}</span>已选中:</div> -->
    </div>
</template>
<script>
    /**
     * <p slot="con">自定义分发内容
     * <p slot="customTpl">自定义分发模板
     * es6模板样例this.template = `${this.selected}我是标签模板第一项.`;
     * @param {boolean} [fixed=true] - 导航固底显示
     * @param {number} [selectNum=0] - 首次进入默认选中的标签
     * @example
     * <v-tabbar v-bind:tabs='tabs'>
     * </v-tabbar>
     *
     * @example（自定义）
     * <v-tabbar v-bind:tabs='tabs'>
     *     <p slot="con" v-for="item in tabs.tabCons">{{item}}</p>
     *     <p slot="customTpl" v-if='tabs.selectNum==0'>{{template}}</p>
     * </v-tabbar>
     */
    // import vTabbar from 'comb-ui/src/vendors/v-tab-bar.vue';
    import { vTabBar } from 'comb-ui';
    export default {
        components: { vTabBar },

        data () {
            return {
                tabs: {
                    fixed: false,
                    customTpl: true,
                    selectNum: 0,
                    tabCons: ['我初始化的000月度内容', '我初始化的111月度内容', '我初始化的222季度内容'], // 可改为ES6模板
                    tabNavs: ['年度', '月度', '季度']
                },
                selected: '年度',
                template: ''
            };
        },
        mounted () {
            console.log('tab-bar.mounted...');
            this.template = `<h1>${this.selected}我是标签模板第一项.</h1>`;
            this.template1 = `${this.selected}我是标签模板第二项.`;
            this.template2 = `${this.selected}我是标签模板第三项.`;
            this.$refs.testTpl.innerHTML = `<h1>${this.selected}我是标签模板第一项.</h1>`;
        },
        created () {
        },
        computed: {
            selectNav: function () {
                return this.selected.split('度')[0];
            }
        },
        methods: {
            changeFn: function (item, index) {
                this.selected = item; // 得到值的后续操作
            },
            selectNav1: function () {
                return this.selected.split('度')[0];
            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";
    .p-float-comments{display:none}
    .v-tabBar{
        width: 100%;
        line-height: pxTorem(30px);
        font-size: pxTorem(16px);
        background: #f2f2f4;
        p{
            font-size: pxTorem(16px)
        }
    }
    .selected-val{
        margin: pxTorem(10px) 0;
        line-height: pxTorem(30px);
        padding: pxTorem(10px);
        font-weight: bold;
        color: #007AFF;
        font-size: pxTorem(16px);
        background:#fff;
        span{
            float:right;
            font-size: pxTorem(16px);
        }
    }
</style>
