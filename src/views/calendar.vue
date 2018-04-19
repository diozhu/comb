<template>
    <div class="page page-calendar">
        <!--<h2>v-calendar</h2>-->
        <!--<div class="attributes">-->
            <!--<h2>参数</h2>-->
            <!--<table>-->
                <!--<tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>-->
                <!--<tr><td>type</td><td>attributes</td><td>String</td><td>default, <br>primary, <br>danger, <br>info</td><td>default</td></tr>-->
                <!--<tr><td>type</td><td>datas</td><td>String</td><td>default, <br>primary, <br>danger, <br>info</td><td>default</td></tr>-->
                <!--<tr><td>type</td><td>selectedDt</td><td>String</td><td>default, <br>primary, <br>danger, <br>info</td><td>default</td></tr>-->
                <!--<tr><td>type</td><td>minDt</td><td>String</td><td>default, <br>primary, <br>danger, <br>info</td><td>default</td></tr>-->
                <!--<tr><td>type</td><td>maxDt</td><td>String</td><td>default, <br>primary, <br>danger, <br>info</td><td>default</td></tr>-->
                <!--<tr><td>type</td><td>enableMonthLabel</td><td>String</td><td>default, <br>primary, <br>danger, <br>info</td><td>default</td></tr>-->
                <!--<tr><td>type</td><td>firstDay</td><td>String</td><td>default, <br>primary, <br>danger, <br>info</td><td>default</td></tr>-->
            <!--</table>-->
        <!--</div>-->

        <!--<h2>示例</h2>-->
        <!--<p class="desc">基本日历</p>-->
        <v-calendar :attributes="calendarAttributes" :selectedDt="selectedDt" :minDt="minDt" :maxDt="maxDt">
            <!--图例说明-->
            <div slot="desc" class="desc">
                <div class="row dot"><i class="icon"></i><p>可预约课程</p></div>
                <div class="row check"><i class="icon icon-check"></i><p>已预约</p></div>
                <div class="row circle"><i class="icon icon-round"></i><p>当前选择</p></div>
            </div>
        </v-calendar>

        <v-calendar :datas="calendarDatas" :selectedDt="selectedDt" enableMonthLabel :firstDay="1" @chooseDate="handleChooseDate">
            <!--右上角操作区-->
            <!--<template slot="day-header" slot-scope="props">-->
                <!--<p>新建排课{{props.data.day}}</p>-->
            <!--</template>-->
            <!--日期内的数据list-->
            <template slot="day-content" slot-scope="props">
                <div class="day-item" v-if="props.data.datas && props.data.datas.length" v-for="item in props.data.datas">
                    <p>{{item.time}}</p>
                    <p>{{item.name}}</p>
                </div>
            </template>
            <!--点击某一天显示的详情-->
            <template slot="week-content" slot-scope="props">
                <div class="week-item" v-if="props.data && props.data.length" v-for="item in props.data">
                    <p>{{item.time}}</p>
                    <p><span class="tit">课程名称</span><span>{{item.name}}</span></p>
                    <p><span class="tit">教练姓名</span><span>{{item.name}}</span></p>
                    <p><span class="tit">上课场馆</span><span>{{item.name}}</span></p>
                    <p><span class="tit">场馆地址</span><span>{{item.name}}</span></p>
                </div>
            </template>
        </v-calendar>

    </div>
</template>
<script>
    import vRow from '../vendor/v-row.vue';
    import vCol from '../vendor/v-col.vue';
    import vButton from '../vendor/v-button';
    import vCalendar from '../vendor/v-calendar';

    export default {
        components: { vCalendar, vButton, vRow, vCol },
        data () {
            return {
                calendarAttributes: [],     // 日历内每天的样式
                calendarDatas: [],          // 日历内每天的数据
                today: null,
                selectedDt: null,
                minDt: null,
                maxDt: null
            };
        },
        created: function () {
            console.log('created');
        },
        mounted () {
            this.$logger.log('calendar.mounted... ');
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
                this.$logger.log('calendar.calendarInit... ');
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
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 3),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 4)
                        ]
                    },
                    { // 赛事
                        classes: 'tour',
                        dates: [
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 5),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 6)
                        ]
                    },
                    { // 点标记
                        classes: 'dot',
                        dates: [
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 7),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 8)
                        ]
                    },
                    { // 选中
                        classes: 'check',
                        dates: [
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 9),
                            new Date(this.todayComps.year, this.todayComps.month - 1, this.todayComps.day + 10)
                        ],
                        isIcon: true
                    }
                ];
                this.$set(this, 'calendarAttributes', attrs); // 基础日历样式标记
                let datas = [
                    {date: '2018-4-17', datas: [{name: '篮球基础课', time: '13:00'}, {name: '羽毛球基础课', time: '13:00'}]},
                    {date: '2018-4-20', datas: [{name: '足球基础课', time: '13:00'}, {name: '网球俱乐部', time: '13:00'}]}
                ];
                this.$set(this, 'calendarDatas', datas); // 月日历数据
            },
            handleChooseDate (val) {
                this.$logger.log('calendar.handleChooseDate: ', val);
                // this.selectedDt = val;
            }
        }
    };
</script>
<style lang="scss">
    @import "../scss/variables";
    @import "../scss/_mixins";

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

                        .day-item {
                            padding: pxTorem(2);
                            margin: 0 pxTorem(2) pxTorem(3);
                            background: #F8F9F8;
                            border-left: #FDD108 pxTorem(2) solid;
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

