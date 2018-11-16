<template>
    <div class="page page-timeline">
        <h2>时间轴参考样例</h2>
        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>value</td><td>当前状态值，需与flows中的value相对应</td><td>String || Number</td><td>-</td><td>-</td></tr>
            </table>
        </div>

        <h2>水平方向</h2>
        <ul>
            <li>
                <v-timeline v-model="detail.state" :flows="status" horizontal showLine></v-timeline>
            </li>
        </ul>
        <h2>垂直方向</h2>
        <ul>
            <li>
                <v-timeline v-model="detail.state" :flows="detail.flows">
                    <template slot="item" slot-scope="props">
                        <v-feed
                            :feedId = "props.data.feedId"
                            :imgUrl = "props.data.imgUrl"
                            :title = "props.data.title"
                            :subtitle = "props.data.subtitle"
                            :classes = "'small'"
                        ></v-feed>
                    </template>
                </v-timeline>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import vTimeline from 'comb-ui/src/vendors/v-timeline.vue';
    import vFeed from 'comb-ui/src/vendors/v-feed';

    export default {
        components: { vTimeline, vFeed },

        data () {
            return {
                status: [
                    {value: 1, label: '等待接单'},
                    {value: 2, label: '处理中'},
                    {value: 3, label: '已处理'},
                    {value: 4, label: '已完成'},
                    {value: 5, label: '已评价'}
                ],
                detail: {}
            };
        },

        mounted () {
            console.log('timeline.mounted... ');
            this.init();
        },

        methods: {
            init () {
                // demo
                this.$set(this.detail, 'address', '森林湖2号楼B单元0102');
                this.$set(this.detail, 'createDt', '2016-01-29 10:42');
                this.$set(this.detail, 'title', '停电了');
                this.$set(this.detail, 'content', '十分钟前电闸跳了，不能正常推上，不知道什么原因，请派工程师上门。');
                this.$set(this.detail, 'imgList', [{ src: '', url: '', width: 3264, height: 2448 }, { src: '', url: '', width: 2448, height: 3264 }, { src: '', url: '', width: 2448, height: 3264 }, { src: '', url: '', width: 2448, height: 3264 }]);
                this.$set(this.detail, 'state', 2);
                this.$set(this.detail, 'flows', [
                    {
                        value: 1,
                        feedId: 'c_1407459100687437',
                        imgUrl: '',
                        title: '老朱',
                        subtitle: '人在江湖飘~'
                    },
                    {
                        value: 2,
                        feedId: 'c_1407459100687437',
                        imgUrl: '',
                        title: '张三',
                        subtitle: '人在江湖飘~'
                    },
                    {
                        value: 3,
                        feedId: 'c_1407459100687437',
                        imgUrl: '',
                        title: '李四',
                        subtitle: '人在江湖飘~'
                    },
                    {
                        value: 4,
                        feedId: 'c_1407459100687437',
                        imgUrl: '',
                        title: '王五',
                        subtitle: '人在江湖飘~'
                    },
                    {
                        value: 5,
                        feedId: 'c_1407459100687437',
                        imgUrl: '',
                        title: '赵六',
                        subtitle: '人在江湖飘~'
                    },
                    {
                        value: 6,
                        feedId: 'c_1407459100687437',
                        imgUrl: '',
                        title: '二狗子',
                        subtitle: '人在江湖飘~'
                    }
                ]);
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-timeline {

    }
</style>
