<template>
    <div class="page-calendar__frm">
        <div class="page page-calendar">
            <h2>v-calendar</h2>
            <div class="attributes">
                <h2>参数</h2>
                <table>
                    <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                    <tr><td>attributes</td><td>日期标签的样式数组</td><td>Array</td><td>-</td><td>-</td></tr>
                    <tr><td>datas</td><td>日期内要展示的数据数组</td><td>Array</td><td>-</td><td>-</td></tr>
                    <tr><td>selectedDt</td><td>当前选中的日期</td><td>Date</td><td>-</td><td>-</td></tr>
                    <tr><td>minDt</td><td>组件最小可选日期</td><td>Date</td><td>-</td><td>-</td></tr>
                    <tr><td>maxDt</td><td>组件最大可选日期</td><td>Date</td><td>-</td><td>-</td></tr>
                    <tr><td>enableMonthLabel</td><td>把具体月份数字换成'上个月'、'下个月'</td><td>Boolean</td><td>-</td><td>false</td></tr>
                    <tr><td>firstDay</td><td>日历以星期几开头展示</td><td>Number</td><td>1 ~ 7</td><td>7</td></tr>
                </table>
            </div>

            <h2>示例</h2>
            <p class="desc">基本日历，所有针对标签的样式放在attributes数组中描述，并可设定月份起止日期</p>
            <br />
            <pre v-highlightjs @touchend.stop><code class="html">
            &lt; v-calendar v-model="selectedDtStr" :attributes="calendarAttributes" :selectedDt="selectedDt" :minDt="minDt" :maxDt="maxDt">
                <div slot="desc" class="desc">
                    <div class="row dot"><i class="icon"></i><p>可预约课程</p></div>
                    <div class="row check"><i class="icon icon-check"></i><p>已预约</p></div>
                    <div class="row circle"><i class="icon icon-round"></i><p>当前选择</p></div>
                </div>
            &lt;/ v-calendar&gt;
            </code></pre>
            <v-calendar v-model="selectedDtStr" :attributes="calendarAttributes" :selectedDt="selectedDt" :minDt="minDt" :maxDt="maxDt">
                <!--图例说明-->
                <div slot="desc" class="desc">
                    <div class="row dot"><i class="icon"></i><p>可预约课程</p></div>
                    <div class="row check"><i class="icon icon-check"></i><p>已预约</p></div>
                    <div class="row circle"><i class="icon icon-round"></i><p>当前选择</p></div>
                </div>
            </v-calendar>
            <p class="desc">当前选择日期： {{selectedDtStr}}</p>

            <h2>示例</h2>
            <p class="desc">日期带数据，日期内的数据放在datas中，并可设定以"星期一"开头展示</p>
            <pre v-highlightjs @touchend.stop><code class="html">
            &lt; v-calendar v-model="selectedDtStr" :datas="calendarDatas" :selectedDt="selectedDt" enableMonthLabel :firstDay="1" @chooseDate="handleChooseDate" @selectedDtChanged="selectedDtChanged">
                &lt;日期内数据插槽 slot="day-content" slot-scope="props"&gt;
                &lt;点击某一天的内容插槽 slot="week-content" slot-scope="props"&gt;
            &lt;/ v-calendar&gt;
            </code></pre>
            <br />
            <v-calendar v-model="selectedDtStr2"
                        :datas="calendarDatas"
                        :selectedDt="selectedDt2"
                        enableMonthLabel
                        :firstDay="1"
                        :minDt="minDt"
                        :maxDt="maxDt"
                        @chooseDate="handleChooseDate"
                        @selectedDtChanged="selectedDtChanged"
            >
                <!--右上角操作区-->
                <!--<template slot="day-header" slot-scope="props">-->
                <!--<p>新建排课{{props.data.day}}</p>-->
                <!--</template>-->
                <!--日期内的数据list-->
                <template slot="day-content" slot-scope="props" v-if="props.data.datas && props.data.datas.length">
                    <div class="day-item" v-for="(item, index) in props.data.datas" :key="index">
                        <p>{{item.time}}</p>
                        <!--<p>{{item.name}}</p>-->
                        <v-text :limit="2" :value="item.name"></v-text>
                    </div>
                </template>
                <!--点击某一天显示的详情-->
                <template slot="week-content" slot-scope="props" v-if="props.data && props.data.length">
                    <div class="week-item" v-for="(item, index) in props.data" :key="index">
                        <p>{{item.time}}</p>
                        <p><span class="tit">课程名称</span><span>{{item.name}}</span></p>
                        <p><span class="tit">教练姓名</span><span>{{item.name}}</span></p>
                        <p><span class="tit">上课场馆</span><span>{{item.name}}</span></p>
                        <p><span class="tit">场馆地址</span><span>{{item.name}}</span></p>
                    </div>
                </template>
            </v-calendar>
            <p class="desc">当前选择日期： {{selectedDtStr2}}</p>
            <br/>

            <h2>示例</h2>
            <p class="desc">套上v-popup弹出选择</p>
            <pre v-highlightjs @touchend.stop><code class="html">
            <ul class="listview listview-form">
                <li>
                    &lt; v-cell title="选择日期" :value="selectedDtFormated" is-link @click.native="popupVisible = true">&lt; /v-cell&gt;
                </li>
            </ul>
            </code></pre>
            <ul class="listview listview-form">
                <li>
                    <v-cell title="选择日期" :value="selectedDtFormated" is-link @click.native="popupVisible = true"></v-cell>
                </li>
            </ul>

            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        <div class="popup-con">
            <v-popup v-model="popupVisible" class="v-popup" toolbar :closeEnable="closeEnable" @handleConfirm="handleConfirm">
                <!--<span class="v-popup-action v-popup-cancel" @click="popupVisible4 = false">取消</span>-->
                <!--<span class="v-popup-action v-popup-confirm" @click="confirm">确定</span>-->
                <v-calendar v-model="selectedDtStr3" :selectedDt="selectedDt3" :minDt="minDt" :maxDt="maxDt">
                </v-calendar>
            </v-popup>
        </div>
    </div>
</template>
<script>
    // import vRow from 'comb-ui/src/vendors/v-row.vue';
    // import vCol from 'comb-ui/src/vendors/v-col.vue';
    // import vCell from 'comb-ui/src/vendors/v-cell.vue';
    // import vButton from 'comb-ui/src/vendors/v-button';
    // import vCalendar from 'comb-ui/src/vendors/v-calendar.vue';
    // import vText from 'comb-ui/src/vendors/v-text';
    // import vPopup from 'comb-ui/src/vendors/v-popup';
    import { vRow, vCol, vCell, vButton, vCalendar, vText, vPopup } from 'comb-ui';
    import * as api from '../js/core/api.js';
    import * as utils from '../js/utils/utils.js';

    export default {
        components: { vCalendar, vText, vButton, vRow, vCol, vCell, vPopup },
        data () {
            return {
                calendarAttributes: [],     // 日历内每天的样式
                calendarDatas: [],          // 日历内每天的数据
                today: null,
                selectedDt: null,
                selectedDtStr: '',          // 日历组件选择的日期，yyyy-MM-dd：天，yyyy-MM：月，默认返回当前月
                minDt: null,
                maxDt: null,
                selectedDt2: null,
                selectedDtStr2: '',
                selectedDt3: null,
                selectedDtStr3: '',
                selectedDtFormated: '',
                closeEnable: true,
                popupVisible: false
            };
        },
        created: function () {
            console.log('created');
        },
        watch: {
            selectedDt (val) {
                console.log('calendar.watch.selectedDt: ', val);
            },
            selectedDtStr (val) { // 监听组件日期变化
                console.log('calendar.watch.selectedDtStr: ', val);
                this.getList(); // 日期变化，重新获取数据
            },
            selectedDt2 (val) {
                console.log('calendar.watch.selectedDt2: ', val);
            },
            selectedDtStr2 (val) { // 监听组件日期变化
                console.log('calendar.watch.selectedDtStr2: ', val);
            },
            selectedDt3 (val) {
                console.log('calendar.watch.selectedDt3: ', val);
            },
            selectedDtStr3 (val) { // 监听组件日期变化，判断是否可关闭popup组件
                console.log('calendar.watch.selectedDtStr3: ', val);
                if (val.length && val.length > 8) this.closeEnable = true;
                else this.closeEnable = false;
            }
        },
        mounted () {
            console.log('calendar.mounted... ');
            this.init(); // 初始化
        },
        methods: {
            init () { // 初始化
                this.today = new Date();
                this.minDt = new Date(this.today.getFullYear(), this.today.getMonth() - 1, this.today.getDate());
                this.maxDt = new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate());

                this.calendarInit(); // 初始化日历数据~
            },
            calendarInit () { // 初始化日历数据~
                console.log('calendar.calendarInit... ');
                this.todayComps = { year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() };

                // base demo
                let attrs = [ //eslint-disable-line
                    { // 代表当日可约课程: status = 1
                        classes: 'circle',
                        dates: [
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day - 1),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 2)
                        ]
                    },
                    { // 代表当日已约课程: status = 2
                        classes: 'round',
                        dates: [
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 2),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 3),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 4)
                        ]
                    },
                    { // 赛事
                        classes: 'tour',
                        dates: [
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 4),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 5),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 6)
                        ]
                    },
                    { // 选中
                        classes: 'check',
                        dates: [
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 6),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 7),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 8)
                        ],
                        isIcon: true
                    },
                    { // 点标记
                        classes: 'dot',
                        dates: [
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day - 1),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 1),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 2),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 3),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 4),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 5),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 6),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 7),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 8),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 9),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 10)
                        ]
                    }
                ];
                let datas = [
                    {date: '2018-4-1', datas: [{name: '篮球基础课', time: '13:00'}]},
                    {date: '2018-4-17', datas: [{name: '篮球基础课', time: '13:00'}, {name: '羽毛球基础课', time: '13:00'}]},
                    {date: '2018-4-20', datas: [{name: '篮球基础课', time: '13:00'}, {name: '羽毛球基础课', time: '13:00'}]},
                    {date: '2018-4-30', datas: [{name: '足球基础课', time: '13:00'}]}
                ];
                setTimeout(() => {
                    this.$set(this, 'calendarAttributes', attrs); // 基础日历样式标记
                    this.$set(this, 'calendarDatas', datas); // 月日历数据
                }, 500);
            },
            handleChooseDate (val) {
                console.log('calendar.handleChooseDate: ', val);
                // this.selectedDt2 = val;
            },
            selectedDtChanged (val) {
                console.log('calendar.selectedDtChanged: ', val);
                // this.selectedDt2 = val;
            },
            getList () { // 监听日期变化，重新获取列表数据
                console.log('calendar.getList.start: ');
                api.getDelay({delay: 1000}).then(res => { // 每次成功后删除一组数据，看组件内数据变化是否刷新哈
                    console.log('calendar.getList.response: ', res);
                    // this.$set(this, 'calendarAttributes', [ //eslint-disable-line
                    //     { // 代表当日可约课程: status = 1
                    //         classes: 'circle',
                    //         dates: [
                    //             new Date(res + 24 * 3600 * 1000)
                    //         ]
                    //     }
                    // ]);
                });
            },
            handleConfirm (val) { // 监听
                console.log('calendar.handleConfirm: ', val);
                if (val) { // 正常关闭：赋值
                    this.selectedDtFormated = utils.formatTime(this.selectedDtStr3, 'yyyy年MM月dd日');
                } else {
                    this.$toast('请选择日期~');
                }
            }
        }
    };
</script>
<style lang="scss">
    @import "../scss/variables";
    @import "../scss/_mixins";

    .page-calendar__frm {
        height: 100%;
        overflow: hidden;
    }

    .page-calendar{
        // padding: 0 ($grid-gutter-width / 2);

        .v-calendar { // 说明样式

            .day-wrapper {

                .day-layer {

                    &.cur {
                        .day {
                        }
                    }

                    .day-content { // 日期中内容数据的样式
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        .day-item {
                            width: pxTorem(48);
                            height: pxTorem(46);
                            padding: pxTorem(2);
                            margin: 0 pxTorem(2) pxTorem(3);
                            background: #F8F9F8;
                            border-left: #FDD108 pxTorem(2) solid;

                            .v-text {
                                font-size: pxTorem(12);
                            }
                            /*p {*/
                            /*text-align: left;*/
                            /*overflow: hidden;*/
                            /*text-overflow: ellipsis;*/
                            /*-webkit-line-clamp: 2;*/
                            /*}*/
                        }
                    }
                }
            }

            .week-content {

                .week-item {
                    padding: pxTorem(10) pxTorem(20) pxTorem(10);

                    p {
                        line-height: 1.2;
                    }
                }
            }
            .desc {
                padding: 0 pxTorem(20);
                font-size: pxTorem(10);
                display: flex;
                justify-content: space-between;

                .row {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: flex-start;

                    p {
                        flex: 1 1 auto;
                        padding: 0 0 0 pxTorem(6);
                    }
                }

                .icon {
                    width: pxTorem(10);
                    height: pxTorem(10);
                    flex: 0 0 auto;
                    font-size: pxTorem(10);
                    line-height: 1;
                }

                .dot .icon {
                    background: #7ED321;
                    border-radius: 50%;
                    color: #7ED321;
                }
                .check .icon {
                    background: #FDD108;
                    border-radius: 50%;
                    color: #FFF;
                }
                .circle .icon {
                    background: #FFF;
                    border-radius: 50%;
                    color: #FDD108;
                }
            }
        }

    }

</style>

