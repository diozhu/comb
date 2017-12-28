<template>
  <div class="calendar border no-animate">
    <div class="month-swich">
      <ul>
        <li class="arrow pre"  v-tap="{method: pre, params: ''}"><a>&nbsp;<</a></li>
        <li class="title">
          <span>{{title}}</span>
        </li>
        <li class="arrow next"  v-tap="{method: next, params: ''}"><a>&nbsp;></a></li>
      </ul>
    </div>
    <ul class="weekdays"  @touchstart="startFn" @touchend="endFn">
      <li><i>日</i></li>
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li><i>六</i></li>
    </ul>
    <ul class="days week"  @touchstart="startFn" @touchend="endFn">
      <li @click="onDateClick(day)" v-for="day in weekDays">
      <span :class="day.actived?'actived':isToday(day.moment)?'today':day.existed?'hasdate':''">{{ day.moment.format('D') }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import '../js/utils/tap';
var moment = require('moment');
export default {
    props: {
        func: {
            type: Function,
            default: ''
        }
    },
    data () {
        return {
            title: '',
            selectedDate: '',
            weekDays: [],
            monday: moment().startOf('week').add(0, 'days'),
            dragState: {
                startLeft: -1
            },
            activedDate: ''
        };
    },

    mounted () {
        this.initCalendar();
    },

    methods: {
        initCalendar () {
            this.weekDays = [];
            this.selectedDate = this.monday.format('YYYYMMDD');
            if (!this.activedDate) { // 未选中状态默认今天
                this.activedDate = moment().format('YYYYMMDD');
            }
            for (var i = 0;i < 7;i++) {
                if (this.isToday(this.monday)) {
                    this.selectedDate = this.monday.format('YYYYMMDD');
                }
                this.weekDays.push({
                    actived: false,
                    existed: false,
                    moment: moment(this.monday)
                });
                this.monday.add(1, 'days');
            }
            this.title = moment(this.selectedDate, 'YYYYMMDD').format('YYYY年M月') + ' 第' + this.getMonthWeek(this.selectedDate) + '周';
            this.onDateClick({ moment: moment(this.activedDate, 'YYYYMMDD') });
        },
        startFn (event) {
            let t = event.changedTouches[0] || event.touches[0] || event.targetTouches[0];
            this.dragState.startLeft = t.pageX;
        },
        endFn (event) {
            let t = event.changedTouches[0] || event.touches[0] || event.targetTouches[0];
            if ((t.pageX - this.dragState.startLeft) > 10) {
                // console.log('b===========>', this.weekDays[0].moment.format('YYYYMMDD'));
                // console.log('c=================>', moment().startOf('week').add(0, 'days').format('YYYYMMDD'));
                this.pre();
            }
            if ((t.pageX - this.dragState.startLeft) < -10) {
                this.next();
            }
        },
        /**
         * 上一周
         */
        pre () {
            this.monday.add(-14, 'days');
            this.initCalendar();
        },
        /**
         * 下一周
         */
        next () {
            this.initCalendar();
        },
        /**
         * 获取当前是第几周
         * @param day
         * @returns {number}
         */
        getMonthWeek (day) {
            /*
            a = d = 当前日期
            b = 6 - w = 当前周的还有几天过完（不算今天）
            a + b 的和在除以7 就是当天是当前月份的第几周
            */
            let date = moment(day, 'YYYYMMDD').toDate(),
                w = date.getDay(),
                d = date.getDate();
            return Math.ceil(
                (d + 6 - w) / 7
            );
        },
        /**
         * 是否为今天
         */
        isToday (_moment) {
            return moment().isSame(_moment, 'day');
        },
        onDateClick (date) {
            this.activedDate = date.moment.format('YYYYMMDD');
            this.selectedDate = date.moment.format('YYYYMMDD');
            this.weekDays.forEach(function (item) {
                item.actived = item.moment.isSame(date.moment, 'day');
            });
            this.func();
            console.log('=========>', this.weekDays);
        }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";
  .calendar {
    background: #fff;
    box-sizing: border-box;
    position: fixed;
    width:100%;
    top:0;
    z-index: 1;
  }
  .border {
    border-bottom: 1px solid;
    border-color: #dddee3;
  }
  .ios .border{
    border-bottom-width: 1px;
  }
  .month-swich {
    width: 100%;
    padding: 0.45rem 015px;
    box-sizing:border-box;
  }

  .month-swich ul {
    height:pxTorem(40px);
    line-height: pxTorem(40px);
    width:100%;
    display:flex;
    display: -webkit-flex;
    align-items: center;
  }
  .month-swich ul li{
    font-size: pxTorem(15px);
    color: #007aff;
  }
  .month-swich ul li.title {
    flex:1;
    -webkit-flex:1;
    text-align:center;
    span {
      color: #000;
      font-size: pxTorem(18px);
    }
  }
  .month-swich ul li.arrow{
    width: pxTorem(53px)
  }
  .month-swich ul li.arrow a {
    display: block;
    width: 100%;
    height: 100%;
    background-size: pxTorem(8px) pxTorem(15px);
    background-repeat: no-repeat;
    background-position: center;
  }
  .month-swich ul li.arrow a:active{
    opacity: 0.3;
  }
  .month-swich ul li.arrow.pre a{
    /*background-image: url('img/pre.png')*/
  }
  .month-swich ul li.arrow.next a{
    /*background-image: url('img/next.png')*/
  }
.weekdays {
    padding-bottom: pxTorem(10px);
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    li {
      /*display: inline-block;*/
      width: 14.28%;
      text-align: center;
      font-size:pxTorem(15px);
      color: #000000;
      justify-content: space-around;
      i{
        color:#777E8C;
        font-size:pxTorem(15px);
      }
    }
  }

  .days {
    padding: 0;
    margin: 0;
    display: flex;
    display:-webkit-flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom:pxTorem(10px);
  }
  .days li {
    list-style-type: none;
    list-style: none;
    display: inline-block;
    width: 14.2%;
    text-align: center;
    font-size: pxTorem(15px);
  }

  .days li .today {
    width: pxTorem(44px);
    height: pxTorem(44px);
    line-height: pxTorem(44px);
    text-align: center;
    border-radius: 50%;
    color: #007aff;
  }

  .days li>span {
    width: pxTorem(44px);
    height: pxTorem(44px);
    line-height: pxTorem(44px);
    font-size: pxTorem(15px);
    text-align: center;
    border-radius: 50%;
    color: #000;
    display: inline-block;
    position: relative;
  }

  .days li .other-month {
    color: gainsboro;
  }

  .days li span.actived,
  .days li span.hasdate.actived{
    background: #3395FF;
    color: #fff;
  }
  .days li span:active{
    background: #3395FF;
    color: #fff;
  }
  .days li span.hasdate.actived:after {
    background-color: #fff;
  }
  .days li span.hasdate:after {
    content:'';
    width:pxTorem(4px);
    height:pxTorem(4px);
    border-radius:50%;
    position: absolute;
    bottom: pxTorem(5px);
    left: pxTorem(20px);
    background-color: #007aff;
  }
  .week {
    top: pxTorem(85px);
    right:0;
    left:0;
  }
</style>
