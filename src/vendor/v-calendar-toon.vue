<template>
    <div class="datepicker">
        <template>
            <h2>日历参考样例</h2>

            <div class="attributes">
                <h2>v-calendar-toon参数</h2>
                <table>
                    <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                    <tr><td>value</td><td>当前日期</td><td>String</td><td>-</td><td>当天</td></tr>
                    <tr><td>clear-button</td><td>关闭按钮</td><td>Boolean</td><td>-</td><td>false</td></tr>
                    <tr><td>placeholder</td><td>placeholder</td><td>String</td><td>-</td><td>-</td></tr>
                    <tr><td>pane</td><td>窗格数</td><td>Number</td><td>-</td><td>1</td></tr>
                    <tr><td>formatDate</td><td>日期显示格式</td><td>String</td><td>-</td><td>yyy-MM-dd</td></tr>
                    <!--<tr><td>disabled-days-of-week</td><td>关闭按钮</td><td>Boolean</td><td>-</td><td>false</td></tr>-->
                </table>
            </div>

            <h2>示例</h2>
        </template>


        <!----------------------input板块---------------------->
        <template v-if="hasInput">
            <div class="inputBox">
                <p class="form-control datepicker-input" :class="{'with-reset-button': clearButton}" type="text" :placeholder="placeholder"
                       :style="{width:width}"
                       @click="inputClick">{{inputValue}}</p>
                <button v-if="clearButton && value" type="button" class="close" @click="inputValue = ''">
                    <span>&times;</span>
                </button>
            </div>
        </template>
        <!----------------------使用v-popup组件，默认日历组件从底部弹出，可选项有top，right，bottom，left---------------------->
        <v-popup v-model="visible" position="bottom" class="v-datetime">
        <!--:style="paneStyle"-->
            <div class="datepicker-popup"
                 @mouseover="handleMouseOver"
                 @mouseout="handleMouseOver"
                 v-show="displayDayView">
                <!----------------------没有用到的盒子---------------------->
                <div class="datepicker-ctrl">
                    <!--<i class="icon icon-arrow-r datepicker-preBtn glyphicon-chevron-left" aria-hidden="true" @click="preNextMonthClick(0)"></i>-->
                    <!--<i class="icon icon-arrow-r datepicker-nextBtn glyphicon-chevron-right" aria-hidden="true" @click="preNextMonthClick(1)"></i>-->

                    <!--<span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextMonthClick(0)"></span>-->
                    <!--<span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextMonthClick(1)"></span>-->
                </div>
                <!--日历模块-->
                <template v-for="(p, pan) in pane" >
                    <div class="datepicker-inner" :class="{'datepicker-inners':rangeStatus > 1}">
                        <div class="datepicker-body" @touchstart.stop="touchStart" @touchmove.stop="touchMoving" @touchend.stop="touchEnd">
                            <!--<p @click="switchMonthView">{{stringifyDayHeader(currDate, pan)}}</p>选择年份-->
                            <!----------------------当前年份月份---------------------->
                            <div class="datepicker-body-div">
                                <!--<div @click="switchDecadeView">{{stringifyDayHeaderYear(currDate, pan)}}</div>-->
                                <div>
                                    <i class="icon icon-arrow-r datepicker-preBtn glyphicon-chevron-left" aria-hidden="true" @click="preNextMonthClick(0)"></i>
                                    <!--<span>{{stringifyDayHeaderMonth(currDate, pan)}}</span>-->
                                    <span @click="switchMonthView">{{stringifyDayHeader(currDate, pan)}}</span>
                                    <i class="icon icon-arrow-r datepicker-nextBtn glyphicon-chevron-right" aria-hidden="true" @click="preNextMonthClick(1)"></i>
                                </div>
                            </div>
                            <!----------------------星期模块---------------------->
                            <div class="datepicker-weekRange">
                                <span v-for="w in text.daysOfWeek" class="weekRangeSpan">{{w}}</span>
                            </div>
                            <!----------------------日期模块---------------------->
                            <div class="datepicker-dateRange" id="datepicker-dateRange">
                                <span v-for="(d,ind) in dateRange[pan]" class="day-cell" :class="getItemClasses(d,ind)" :data-date="stringify(d.date)" @click="daySelect(d.date, $event)" :style="dDSpanStyle">
                                    <div>
                                        <template v-if="d.sclass !== 'datepicker-item-gray'">
                                            {{getSpecailDay(d.date) || d.text}}
                                        </template>
                                        <template v-else>
                                            {{d.text}}
                                        </template>
                                        <div v-if="d.sclass !== 'datepicker-item-gray'">
                                            <slot :name="stringify(d.date)"></slot>
                                        </div>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

            <!--:style="paneStyle"-->
            <!----------------------月份选择模块---------------------->
            <div class="datepicker-popup" v-show="displayMonthView">
                <!----------------------未使用模块---------------------->
                <div class="datepicker-ctrl">
                    <!--<i class="icon icon-arrow-r datepicker-preBtn glyphicon-chevron-left" aria-hidden="true" @click="preNextMonthClick(0)"></i>-->
                    <!--<i class="icon icon-arrow-r datepicker-nextBtn glyphicon-chevron-right" aria-hidden="true" @click="preNextMonthClick(1)"></i>-->

                <!--<span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextYearClick(0)"></span>-->
                <!--<span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextYearClick(1)"></span>-->
                </div>
                <!----------------------渲染月份列表---------------------->
                <template v-for="(p, pan) in pane" >
                    <div class="datepicker-inner" :class="{'datepicker-inners':rangeStatus > 1}">
                        <div class="datepicker-body">
                            <!--<p @click="switchDecadeView">{{stringifyYearHeader(currDate, pan)}}</p>-->
                            <p @click="switchDecadeView">{{stringifyYearHeader(currDate, 0)}}</p>
                            <div class="datepicker-monthRange">
                                <template v-for="(m, $index) in text.months">
                                    <span :class="{'datepicker-dateRange-item-active':
                                    (text.months[parse(value).getMonth()]  === m) &&
                                    currDate.getFullYear() + pan === parse(value).getFullYear()}"
                                    @click="monthSelect(stringifyYearHeader(currDate, pan), $index)"
                                    >{{m.substr(0,3)}}</span>
                                </template>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

            <!--:style="paneStyle"-->
            <!----------------------年份选择模块---------------------->
            <div class="datepicker-popup" v-show="displayYearView">
                <!----------------------未使用模块---------------------->
                <div class="datepicker-ctrl">
                    <!--<i class="icon icon-arrow-r datepicker-preBtn glyphicon-chevron-left" aria-hidden="true" @click="preNextMonthClick(0)"></i>-->
                    <!--<i class="icon icon-arrow-r datepicker-nextBtn glyphicon-chevron-right" aria-hidden="true" @click="preNextMonthClick(1)"></i>-->

                    <!--<span class="datepicker-preBtn glyphicon glyphicon-chevron-left" aria-hidden="true" @click="preNextDecadeClick(0)"></span>-->
                    <!--<span class="datepicker-nextBtn glyphicon glyphicon-chevron-right" aria-hidden="true" @click="preNextDecadeClick(1)"></span>-->
                </div>
                <!----------------------渲染年份列表模块---------------------->
                <template v-for="(p, pan) in pane" >
                    <div class="datepicker-inner" :class="{'datepicker-inners':rangeStatus > 1}">
                        <div class="datepicker-body">
                            <p>{{stringifyDecadeHeader(currDate, pan)}}</p>
                            <div class="datepicker-monthRange decadeRange">
                                <template v-for="decade in decadeRange[pan]">
                                    <span :class="{'datepicker-dateRange-item-active':
                                    parse(inputValue).getFullYear() === decade.text}"
                                    @click.stop="yearSelect(decade.text)"
                                    >{{decade.text}}</span>
                                </template>
                            </div>
                        </div>
                    </div>
                </template>
        </div>
        </v-popup>
    </div>
</template>

<script>
import * as utils from '../js/utils/utils';
import vPopup from '../vendor/v-popup';
export default {
    components: { vPopup },
    name: 'v-calendar-toon',
    props: {
        value: {
            type: String
        },
        format: {
            default: 'MM/dd/yyyy'
        },
        disabledDaysOfWeek: {
            type: Array,
            default () {
                return [];
            }
        },
        width: {
            type: String,
            default: '100%'
//            default: '200px'
        },
        clearButton: {
            type: Boolean,
            default: false
        },
        lang: {
            type: String,
            default: navigator.language
        },
        placeholder: {
            type: String
        },
        hasInput: {
            type: Boolean,
            default: true
        },
        pane: {
            type: Number,
            default: 1
        },
        borderWidth: {
            type: Number,
            default: 2
        },
        onDayClick: {
            type: Function,
            default () {}
        },
        changePane: {
            type: Function,
            default () {}
        },
        specialDays: {
            type: Object,
            default () {
                return {};
            }
        },
        rangeBus: {
            type: Function,
            default () {
            // return new Vue()
            }
        },
        rangeStatus: {
            type: Number,
            default: 0
        },
        formatDate: {
            type: String,
            default: 'yyyy-MM-dd'
        }
    },
    mounted () {
        this._blur = (e) => {
            if (!this.$el.contains(e.target) && this.hasInput) this.close();
        };
        this.$emit('child-created', this);
        // this.inputValue = this.value
        // this.dateFormat = this.format
        this.currDate = this.parse(this.inputValue) || this.parse(new Date());
        const year = this.currDate.getFullYear();
        const month = this.currDate.getMonth();
        this.changePane(year, month, this.pane);
        if (!this.hasInput) {
            this.displayDayView = true;
            this.updateDDSpanStyle();
            this.updatePaneStyle();
        }
        if (this.rangeStatus) {
            this.eventbus = this.rangeBus();
            if (typeof this.eventbus === 'object' && !this.eventbus.$on) {
                console.warn('Calendar rangeBus doesn\'t exist');
                this.rangeStatus = 0;
            }
        }
        if (this.rangeStatus === 2) {
            this._updateRangeStart = (date) => {
                this.rangeStart = date;
                this.currDate = date;
                this.inputValue = this.stringify(this.currDate);
            };
            this.eventbus.$on('calendar-rangestart', this._updateRangeStart);
        }
        document.addEventListener('click', this._blur);
    },
    beforeDestroy () {
        document.removeEventListener('click', this._blur);
        if (this.rangeStatus === 2) {
            this.eventbus.$off('calendar-rangestart', this._updateRangeStart);
        }
    },
    data () {
        return {
            visible: false,          // 是否显示日历组件
            inputValue: this.value,  // 当前选择的日期
            dateFormat: this.format, // 日期显示格式
            currDate: new Date(),    // 当前日期
            dateRange: [],
            decadeRange: [],
            dDSpanStyle: {           // 日期样式
                width: null
            },
//            paneStyle: {
//                width: ''
//            },
            displayDayView: false,   // 是否显示日期模块
            displayMonthView: false, // 是否显示月份模块
            displayYearView: false,  // 是否显示年份模块
            rangeStart: false,
            rangeEnd: false,
            startX: null,
            endX: null
        };
    },
    watch: {
        currDate () {
            this.getDateRange();
        }
    },
    computed: {
        text () {
            return this.translations(this.lang);
        }
    },
    methods: {
        touchStart (e) {
            let touches = e.changedTouches[0];
            this.startX = touches.clientX;
//            this.startX = this.lastX = touches.clientX;
            this.$logger.log('Comb.v-calendar-toon.vue touchStart', this.startX);
        },
        touchMoving (e) {
            this.$logger.log('Comb.v-calendar-toon.vue touchMoving');
        },
        touchEnd (e) {
            let touches = e.changedTouches[0];
            this.endX = touches.clientX;
            if (Math.abs(this.endX - this.startX) < 60) {
                return false;
            } else if (this.endX - this.startX < 0) {
                this.preNextMonthClick(1);
            } else if (this.endX - this.startX > 0) {
                this.preNextMonthClick(0);
            }
            this.$logger.log('Comb.v-calendar-toon.vue touchEnd', this.endX, this.endX - this.startX);
        },
        handleMouseOver (event) {
            let target = event.target;
            // this.rangeEnd = false
            if (!this.rangeStart) {
                return true;
            }
            if (event.type === 'mouseout') {
                return true;
            }
            while (this.$el.contains(target) && !~target.className.indexOf('day-cell')) {
                target = target.parentNode;
            }
            if (~target.className.indexOf('day-cell') && !~target.className.indexOf('datepicker-item-gray')) {
                const rangeEnd = target.getAttribute('data-date');
                if (this.rangeStart < this.parse(rangeEnd)) {
                    this.rangeEnd = this.parse(rangeEnd);
                }
            }
        },
        getItemClasses (d, ind) {
            const clazz = [];
            let index = ind + 1;
            let weekendS = (index - 1) % 7 === 0 || index % 7 === 0 ? 'weekend-style' : '';
            clazz.push(d.sclass);
            clazz.push(weekendS); // 日期为周六，周日添加样式
            if (this.rangeStart && this.rangeEnd && d.sclass !== 'datepicker-item-gray') {
                if (d.date > this.rangeStart && d.date < this.rangeEnd) {
                    clazz.push('daytoday-range');
                }
                /* eslint-disable eqeqeq */
                if (this.stringify(d.date) == this.stringify(this.rangeStart)) {
                    clazz.push('daytoday-start');
                }
                /* eslint-disable eqeqeq */
                if (this.stringify(d.date) == this.stringify(this.rangeEnd)) {
                    clazz.push('daytoday-end');
                }
            }
            return clazz.join(' ');
        },
        translations (lang) {
            lang = lang || 'en';
            let text = {
//                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                limit: 'Limit reached ({{limit}} items max).',
                loading: 'Loading...',
                minLength: 'Min. Length',
//                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                notSelected: 'Nothing Selected',
                required: 'Required',
                search: 'Search'
            };
            return window.VueCalendarLang ? window.VueCalendarLang(lang) : text;
        },
        close () {
            this.displayDayView = this.displayMonthView = this.displayYearView = false;
        },
        inputClick () {
            this.visible = true;
            this.currDate = this.parse(this.inputValue) || this.parse(new Date());
            if (this.displayMonthView || this.displayYearView) {
                this.displayDayView = false;
                this.$logger.log('v-calendar.vue inputClick.displayDayView', this.displayDayView);
            } else {
//                this.displayDayView = !this.displayDayView;
                this.displayDayView = this.visible;
                this.$logger.log('v-calendar.vue inputClick.displayDayView2', this.displayDayView);
            }
            this.updatePaneStyle();
            this.updateDDSpanStyle();
        },
        updatePaneStyle () {
            if (!(this.displayMonthView || this.displayYearView)) {
                this.$nextTick(function () {
                    let offsetLeft = this.$el.offsetLeft;
                    let offsetWidth = this.$el.querySelector('.datepicker-inner').offsetWidth;
                    let popWidth = this.pane * offsetWidth + this.borderWidth;// add border
//                    this.paneStyle.width = popWidth + 'px';
                    if (this.hasInput) {
                        if (popWidth + offsetLeft > document.documentElement.clientWidth) {
//                            this.paneStyle.right = '0px';
                        }
                    } else {
//                        this.paneStyle.position = 'initial';
                    }
                    this.$forceUpdate();
                });
            }
        },
        updateDDSpanStyle () {
            this.$nextTick(() => {
//                let boxW = document.getElementById('datepicker-dateRange').offsetWidth;
//                let boxW = document.getElementsByClassName('datepicker-dateRange').offsetWidth;
//                let boxW = this.$el.querySelector('.weekRangeSpan').offsetWidth;
                let boxW = this.$el.querySelector('.datepicker-dateRange').offsetWidth / 7;
                this.dDSpanStyle.width = boxW + 'px!important';
                this.$logger.log('########################updateDDSpanStyle.boxW', boxW, this.dDSpanStyle.width);
            });
        },
        preNextDecadeClick (flag) {
            const year = this.currDate.getFullYear();
            const months = this.currDate.getMonth();
            const date = this.currDate.getDate();
            if (flag === 0) {
                this.currDate = new Date(year - 10, months, date);
            } else {
                this.currDate = new Date(year + 10, months, date);
            }
        },
        preNextMonthClick (flag) {
            const year = this.currDate.getFullYear();
            const month = this.currDate.getMonth();
            const date = this.currDate.getDate();
            if (flag === 0) {
                const preMonth = this.getYearMonth(year, month - 1);
                this.currDate = new Date(preMonth.year, preMonth.month, date);
                this.changePane(preMonth.year, preMonth.month, this.pane);
            } else {
                const nextMonth = this.getYearMonth(year, month + 1);
                this.currDate = new Date(nextMonth.year, nextMonth.month, date);
                this.changePane(nextMonth.year, nextMonth.month, this.pane);
            }
        },
        preNextYearClick (flag) {
            const year = this.currDate.getFullYear();
            const months = this.currDate.getMonth();
            const date = this.currDate.getDate();
            if (flag === 0) {
                this.currDate = new Date(year - 1, months, date);
            } else {
                this.currDate = new Date(year + 1, months, date);
            }
        },
        yearSelect (year) {
            this.displayYearView = false;
            this.displayMonthView = true;
            this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
        },
        daySelect (date, event) {
            let el = event.target;
            let dateHm = new Date(date).getTime();
            this.$logger.log('Comb.v-calendar-toon.vue daySelect', dateHm);
            if (el.classList[0] === 'datepicker-item-disable') {
                return false;
            } else {
                if (this.hasInput) {
                    this.currDate = date;
//                    this.inputValue = this.stringify(this.currDate);
                    this.inputValue = utils.formatTime(dateHm, this.formatDate);
                    this.displayDayView = false;
                    this.visible = false;
                    if (this.rangeStatus === 1) {
                        this.eventbus.$emit('calendar-rangestart', this.currDate);
                    }
                } else {
                    this.onDayClick(date, this.stringify(date));
                }
            }
        },
        switchMonthView () {
            this.displayDayView = false;
            this.displayMonthView = true;
        },
        switchDecadeView () {
            this.displayMonthView = false;
            this.displayYearView = true;
        },
        monthSelect (year, index) {
            this.displayMonthView = false;
            this.displayDayView = true;
            this.currDate = new Date(year, index, this.currDate.getDate());
            this.changePane(year, index, this.pane);
        },
        getYearMonth (year, month) {
            if (month > 11) {
                year++;
                month = 0;
            } else if (month < 0) {
                year--;
                month = 11;
            }
            return {year: year, month: month};
        },
        getSpecailDay (v) {
            return this.specialDays[this.stringify(v)];
        },
        stringifyDecadeHeader (date, pan) {
            const yearStr = date.getFullYear().toString();
//            const firstYearOfDecade = parseInt(yearStr.substring(0, yearStr.length - 1) + 0, 10) + (pan * 10);
            const firstYearOfDecade = parseInt(yearStr, 10);
//            const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
            const lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
            this.$logger.log('Comb.v-calendar-toon.vue stringifyDecadeHeader', yearStr);
            return firstYearOfDecade + '-' + lastYearOfDecade;
        },
        siblingsMonth (v, n) {
//            this.$logger.log('v-calendar-toon siblingsMonth', new Date(v.getFullYear(), v.getMonth() * 1 + n));
            return new Date(v.getFullYear(), v.getMonth() * 1 + n);
        },
        stringifyDayHeader (date, month = 0) {
            const d = this.siblingsMonth(date, month);
//            this.$logger.log('v-calendar-toon stringifyDayHeader', date, month);
//            this.$logger.log('v-calendar-toon stringifyDayHeader', this.text);
            return d.getFullYear() + '年 ' + this.text.months[d.getMonth()];
//            return this.text.months[d.getMonth()] + ' ' + d.getFullYear();
        },
        stringifyDayHeaderYear (date, month = 0) {
            let showYear = this.siblingsMonth(date, month);
            return showYear.getFullYear();
        },
        stringifyDayHeaderMonth (date, month = 0) {
            let showMonth = this.siblingsMonth(date, month);
            return this.text.months[showMonth.getMonth()];
        },
        parseMonth (date) {
            return this.text.months[date.getMonth()];
        },
        stringifyYearHeader (date, year = 0) {
            this.$logger.log('Comb.v-calendar-toon.vue stringifyYearHeader', date.getFullYear(), year);
            return date.getFullYear() + year;
        },
        stringify (date, format = this.dateFormat) {
            if (!date) date = this.parse();
            if (!date) return '';
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const monthName = this.parseMonth(date);
            return format
            .replace(/yyyy/g, year)
            .replace(/MMMM/g, monthName)
            .replace(/MMM/g, monthName.substring(0, 3))
            .replace(/MM/g, ('0' + month).slice(-2))
            .replace(/dd/g, ('0' + day).slice(-2))
            .replace(/yy/g, year)
            .replace(/M(?!a)/g, month)
            .replace(/d/g, day);
        },
        parse (str = this.inputValue) {
            let date;
            if (str.length === 10 && (this.dateFormat === 'dd-MM-yyyy' || this.dateFormat === 'dd/MM/yyyy')) {
                date = new Date(str.substring(6, 10), str.substring(3, 5) - 1, str.substring(0, 2));
            } else {
                date = new Date(str);
                date.setHours(0, 0, 0);
            }
            return isNaN(date.getFullYear()) ? new Date() : date;
        },
        getDayCount (year, month) {
            const dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (month === 1) {
                if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
                    return 29;
                }
            }
            return dict[month];
        },
        getDateRange () {
            this.dateRange = [];
            this.decadeRange = [];
            for (let p = 0;p < this.pane;p++) {
                let currMonth = this.siblingsMonth(this.currDate, p);
                let time = {
                    year: currMonth.getFullYear(),
                    month: currMonth.getMonth()
                };
                let yearStr = time.year.toString();
                this.decadeRange[p] = [];
                let firstYearOfDecade = parseInt(yearStr.substring(0, yearStr.length - 1) + 0, 10);
//                let firstYearOfDecade = (yearStr.substring(0, yearStr.length - 1) + 0) - 1;
                this.$logger.log('Comb v-calendar-toon.vue firstYearOfDecade', firstYearOfDecade);
                for (let i = 0;i < 12;i++) {
//                    this.decadeRange[p].push({
//                        text: firstYearOfDecade + i + p * 10
//                    });

                    this.decadeRange[p].push({
                        text: firstYearOfDecade + i
                    });
                }
                this.dateRange[p] = [];
                const currMonthFirstDay = new Date(time.year, time.month, 1);
                let firstDayWeek = currMonthFirstDay.getDay() + 1;
                if (firstDayWeek === 0) {
                    firstDayWeek = 7;
                }
                const dayCount = this.getDayCount(time.year, time.month);
                if (firstDayWeek > 1) {
                    const preMonth = this.getYearMonth(time.year, time.month - 1);
                    const prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
                    for (let i = 1;i < firstDayWeek;i++) {
                        const dayText = prevMonthDayCount - firstDayWeek + i + 1;
                        this.dateRange[p].push({
                            text: dayText,
                            date: new Date(preMonth.year, preMonth.month, dayText),
                            sclass: 'datepicker-item-gray'
                        });
                    }
                }
                for (let i = 1;i <= dayCount;i++) {
                    const date = new Date(time.year, time.month, i);
                    const week = date.getDay();
                    let sclass = '';
                    this.disabledDaysOfWeek.forEach((el) => {
                        if (week === parseInt(el, 10)) sclass = 'datepicker-item-disable';
                    });
                    if (i === this.currDate.getDate()) {
                        if (this.inputValue) {
                            const valueDate = this.parse(this.inputValue);
                            if (valueDate) {
                                if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
                                    sclass = 'datepicker-dateRange-item-active';
                                }
                            }
                        }
                    }
                    this.dateRange[p].push({
                        text: i,
                        date: date,
                        sclass: sclass
                    });
                }
                if (this.dateRange[p].length < 42) {
                    const nextMonthNeed = 42 - this.dateRange[p].length;
                    const nextMonth = this.getYearMonth(time.year, time.month + 1);
                    for (let i = 1;i <= nextMonthNeed;i++) {
                        this.dateRange[p].push({
                            text: i,
                            date: new Date(nextMonth.year, nextMonth.month, i),
                            sclass: 'datepicker-item-gray'
                        });
                    }
                }
            }
            this.text.months.forEach((k, v) => {
//                let my1 = (this.text.months[this.parse(this.value).getMonth()] === v);
//                let my2 = this.currDate.getFullYear() + this.pan === this.parse(this.value).getFullYear();
                let myT = (this.text.months[this.parse(this.value).getMonth()] === k) &&
                this.currDate.getFullYear() + this.pan === this.parse(this.value).getFullYear();
                this.$logger.log('Comb.v-calendar-toon.vue!!!!!!!!!!!!!!!!', k, v, this.text.months[this.parse(this.value).getMonth()], this.currDate.getFullYear() + 0, this.parse(this.value).getFullYear(), myT);
            });
//            (text.months[parse(value).getMonth()]  === m) &&
//            currDate.getFullYear() + pan === parse(value).getFullYear();
            this.$logger.log('Comb v-calendar-toon.vue getDateRang', this.decadeRange);
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";
@mixin clearfix() {
  &:before,
  &:after {
    content: " "; // 1
    display: table; // 2
  }
  &:after {
    clear: both;
  }
}
.datepicker{
    width:100%;
    height: 100%;
    position: relative;
    display: inline-block;
}
.inputBox{
    width: 100%;
    position: relative;
}
p.datepicker-input.with-reset-button {
    /*padding-right: pxTorem(25px);*/
    height:pxTorem(56px);
    line-height:pxTorem(56px);
    border: 1px solid #DDDEE3;
}
.inputBox p{
    height:pxTorem(56px);
    line-height:pxTorem(56px);
    border: 1px solid #DDDEE3;
}
.inputBox > button.close {
    position: absolute;
    top: 0;
    right: 0;
    outline: none;
    z-index: 2;
    display: block;
    width: pxTorem(34px);
    height: pxTorem(56px);
    line-height: pxTorem(56px);
    /*height: pxTorem(34px);*/
    /*line-height: pxTorem(34px);*/
    text-align: center;
}
.datepicker > button.close:focus {
  opacity: .2;
}
.datepicker-popup{
    width:100%;/*新加*/
    position: absolute;
    bottom: 0;
    border: 1px solid #ccc;
    border-radius: pxTorem(5px) pxTorem(5px) 0 0;
    background: #fff;
    margin-top: pxTorem(2px);
    z-index: 1000;
    box-shadow: 0 pxTorem(6px) pxTorem(12px) rgba(0,0,0,0.175);
    @include clearfix;
}
.datepicker-inner{
    /*width: pxTorem(218px);*/
    width:100%;
    float: left;
}
.datepicker-inners{
    /*width: pxTorem(218px);*/
    width:50%;
    float: left;
    padding-right: 0px;
}
.datepicker-body{
  padding: pxTorem(10px) pxTorem(10px);
  text-align: center;
}
.datepicker-ctrl p,
.datepicker-ctrl span{
  display: inline-block;
    /*display: block;*/
    /*width: pxTorem(28px);*/
    line-height: pxTorem(28px);
    height: pxTorem(28px);
    /*flex-grow: 1;*/
  // border-radius: 4px;
}
.datepicker-body .datepicker-body-div div span{
    display: block!important;
}
.datepicker-body span{
    /*display: block;*/
    display: inline-block;
    text-align: center;
    vertical-align: top;
    margin-right: -1px;
    /*width: pxTorem(28px);*/
    line-height: pxTorem(28px);
    height: pxTorem(28px);
    /*margin: 0 -2px;*/
    /*margin: 0 -0.5px;*/
    // border-radius: 4px;
}
.datepicker-body .datepicker-body-div{
    display: flex;
}
.datepicker-body .datepicker-body-div div{
    /*width: pxTorem(28px);*/
    line-height: pxTorem(28px);
    height: pxTorem(28px);
    flex-grow: 1;
    position: relative;
    // border-radius: 4px;
}
.datepicker-body .datepicker-body-div i{
    display: block;
    position: absolute;
    top: 0;
    color: #00adfd;
}
.datepicker-body .datepicker-body-div .datepicker-preBtn{
    left: 0;
}
.datepicker-body .datepicker-body-div .datepicker-nextBtn{
    right: 0;
}
.datepicker-ctrl p {
  width: 65%;
}
    /*.datepicker-ctrl span {*/
.datepicker-ctrl i {
  position: absolute;
}
.datepicker-body span {
  text-align: center;
}
.datepicker-monthRange span{
  width: pxTorem(48px);
  height: pxTorem(50px);
  line-height: pxTorem(45px);
}
.datepicker-item-disable {
  background-color: white!important;
  cursor: not-allowed!important;
}
.decadeRange span:first-child,
.decadeRange span:last-child,
.datepicker-item-disable,
.datepicker-item-gray{
    /*color: #999;*/
    opacity: .3;
}
.datepicker-dateRange-item-active:hover,
.datepicker-dateRange-item-active {
    /*background: rgb(50, 118, 177)!important;*/
    background-color: #00A5FF!important;
    border-radius: 10%;
    color: white!important;
}
.datepicker-monthRange {
  margin-top: pxTorem(10px);
}
.datepicker-monthRange span,
.datepicker-ctrl span,
.datepicker-ctrl p,
.datepicker-dateRange span {
  cursor: pointer;
}
.datepicker-dateRange .weekend-style{
    color: #F85800;
}
.datepicker-monthRange span:hover,
.datepicker-ctrl p:hover,
.datepicker-ctrl i:hover,
.datepicker-dateRange span:hover,
.datepicker-dateRange-item-hover {
  background-color : #eeeeee;
}
.datepicker-dateRange {
    /*新加*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*flex-wrap: wrap;*/
    .daytoday-start,
    .daytoday-start:hover,
    .daytoday-end,
    .daytoday-end:hover{
        background: rgb(50, 118, 177)!important;
        color: white!important;
    }
}
.datepicker-dateRange .daytoday-range,
.datepicker-dateRange .daytoday-range:hover{
  background-color: #ddd;
}
.datepicker-weekRange{
    display: flex;
    flex-direction: row;
}
.datepicker-weekRange span{
    display: block;
    font-weight: bold;
    flex-grow:1;
    color: #00adfd;
}
.datepicker-weekRange span:first-child,.datepicker-weekRange span:last-child{
    color: #F85800;
}
.datepicker-label{
  background-color: #f8f8f8;
  font-weight: 700;
  padding: pxTorem(7px) 0;
  text-align: center;
}
.datepicker-ctrl{
  position: relative;
  /*height: 30px;*/
  line-height: pxTorem(30px);
  font-weight: bold;
  text-align: center;
}
.month-btn{
  font-weight: bold;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
.datepicker-preBtn{
  left: pxTorem(2px);
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
}
.datepicker-nextBtn{
  right: pxTorem(2px);
}
</style>
