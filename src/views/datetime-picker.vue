<template>
    <div style="height: 100%;">
        <div class="page page-datetime">
            <h2>Datetime Picker</h2>

            <p class="desc">时间选择器，一个结合了picker和popup的复合控件。</p>

            <div class="attributes">
                <h2>API</h2>
                <table>
                    <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                    <tr><td>value</td><td>日期值</td><td>Date</td><td>-</td><td>-</td></tr>
                    <tr><td>type</td><td>日期类型</td><td>String</td><td>datetime<br>date<br>time<br>smart</td><td>datetime</td></tr>
                    <tr><td>visibleItemCount</td><td>显示的行数</td><td>Number</td><td>-</td><td>5</td></tr>
                    <tr><td>startDate</td><td>开始时间</td><td>Date</td><td>-</td><td>十年前（smart模式：当天）</td></tr>
                    <tr><td>endDate</td><td>结束时间</td><td>Date</td><td>-</td><td>十年后（smart模式：俩月后）</td></tr>
                    <tr><td>startHour</td><td>开始时</td><td>Number</td><td>-</td><td>0</td></tr>
                    <tr><td>endHour</td><td>结束时</td><td>Number</td><td>-</td><td>23</td></tr>
                    <tr><td>yearFormat<br>monthFormat<br>dateFormat<br>hourFormat<br>minuteFormat</td><td>格式化</td><td>String</td><td>-</td><td>'{value}'</td></tr>
                    <tr><td>cancelText</td><td>取消按钮文本</td><td>String</td><td>-</td><td>'取消'</td></tr>
                    <tr><td>confirmText</td><td>确定按钮文本</td><td>String</td><td>-</td><td>'确定'</td></tr>
                    <tr><th>slots</th><th colspan="4">说明</th></tr>
                    <tr><td>-</td><td colspan="4">-</td></tr>
                    <tr><th>events</th><th colspan="4">说明</th></tr>
                    <tr><td>confirm</td><td colspan="4">选择后的返回值（类型：Date）</td></tr>
                </table>
            </div>

            <h2>示例</h2>
            <ul class="listview listview-form">
                <li>
                    <v-cell title="选择日期" is-link @click.native="openPicker1" :value="formatedValue1"></v-cell>
                </li>
            </ul>
            <pre v-highlightjs @touchend.stop><code class="html">
            &lt;ul class="listview listview-form"&gt;
                &lt;li&gt;
                    &lt;v-cell title="选择日期" is-link @click.native="openPicker1" :value="formatedValue1"&gt;&lt;/v-cell&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
            &lt;v-datetime-picker
                ref="picker1"
                @confirm="handlePicker1"
            >&lt;/v-datetime-picker&gt;
            </code></pre>

            <h2>选择日期</h2>
            <ul class="listview listview-form">
                <li>
                    <v-cell title="选择日期" is-link @click.native="openPicker2" :value="formatedValue2"></v-cell>
                </li>
            </ul>
            <pre v-highlightjs @touchend.stop><code class="html">
            &lt;ul class="listview listview-form"&gt;
                &lt;li&gt;
                    &lt;v-cell title="选择日期" is-link @click.native="openPicker2" :value="formatedValue2"&gt;&lt;/v-cell&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
            &lt;v-datetime-picker
                ref="picker2"
                type="date"
                @confirm="handlePicker2"
            >&lt;/v-datetime-picker&gt;
            </code></pre>

            <h2>选择时间</h2>
            <ul class="listview listview-form">
                <li>
                    <v-cell title="选择时间" is-link @click.native="openPicker3" :value="formatedValue3"></v-cell>
                </li>
            </ul>
            <pre v-highlightjs @touchend.stop><code class="html">
            &lt;ul class="listview listview-form"&gt;
                &lt;li&gt;
                    &lt;v-cell title="选择时间" is-link @click.native="openPicker3" :value="formatedValue3"&gt;&lt;/v-cell&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
            &lt;v-datetime-picker
                ref="picker3"
                type="time"
                @confirm="handlePicker3"
            >&lt;/v-datetime-picker&gt;
            </code></pre>

            <h2>格式化</h2>
            <ul class="listview listview-form">
                <li>
                    <v-cell title="选择日期" is-link @click.native="openPicker4" :value="formatedValue4"></v-cell>
                </li>
            </ul>
            <pre v-highlightjs @touchend.stop><code class="html">
            &lt;ul class="listview listview-form"&gt;
                &lt;li&gt;
                    &lt;v-cell title="选择日期" is-link @click.native="openPicker4" :value="formatedValue4"&gt;&lt;/v-cell&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
            &lt;v-datetime-picker
                ref="picker4"
                type="date"
                @confirm="handlePicker4"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
            >&lt;/v-datetime-picker&gt;
            </code></pre>

            <h2>默认值</h2>
            <ul class="listview listview-form">
                <li>
                    <v-cell title="选择日期" is-link @click.native="openPicker5" :value="formatedValue5"></v-cell>
                </li>
            </ul>
            <pre v-highlightjs @touchend.stop><code class="html">
            &lt;ul class="listview listview-form"&gt;
                &lt;li&gt;
                    &lt;v-cell title="选择日期" is-link @click.native="openPicker5" :value="formatedValue5"&gt;&lt;/v-cell&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
            &lt;v-datetime-picker
                ref="picker5"
                v-model="value5"
                @confirm="handlePicker5"
            >&lt;/v-datetime-picker&gt;
            </code></pre>

            <!--<h2 style="padding-top: 500px;">特殊样式</h2>-->
            <h2>特殊样式</h2>
            <ul class="listview listview-form">
                <li>
                    <v-cell title="选择日期" is-link @click.native="openPicker6" :value="formatedValue6"></v-cell>
                </li>
            </ul>
            <pre v-highlightjs @touchend.stop><code class="html">
            &lt;ul class="listview listview-form"&gt;
                &lt;li&gt;
                    &lt;v-cell title="选择日期" is-link @click.native="openPicker6" :value="formatedValue6"&gt;&lt;/v-cell&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
            &lt;v-datetime-picker
                ref="picker6"
                type="smart"
                :visibleItemCount="5"
                @confirm="handlePicker6"
            &gt;&lt;/v-datetime-picker&gt;
            </code></pre>

        </div>
        <v-datetime-picker
            ref="picker1"
            @confirm="handlePicker1"
        ></v-datetime-picker>
        <v-datetime-picker
            ref="picker2"
            type="date"
            @confirm="handlePicker2"
        ></v-datetime-picker>
        <v-datetime-picker
            ref="picker3"
            type="time"
            @confirm="handlePicker3"
        ></v-datetime-picker>
        <v-datetime-picker
            ref="picker4"
            type="date"
            @confirm="handlePicker4"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
        ></v-datetime-picker>
        <v-datetime-picker
            ref="picker5"
            v-model="value5"
            @confirm="handlePicker5"
        ></v-datetime-picker>
        <v-datetime-picker
            ref="picker6"
            type="smart"
            :visibleItemCount="5"
            @confirm="handlePicker6"
        ></v-datetime-picker>
    </div>
</template>

<script type="text/babel">
    import vCell from 'comb-ui/src/vendors/v-cell.vue';
    import * as utils from '../js/utils/utils';
    import {Toast} from 'comb-ui/src/vendors/index';
    import vDatetimePicker from 'comb-ui/src/vendors/v-datetime-picker';
    import vButton from 'comb-ui/src/vendors/v-button';

    export default {
        components: { vCell, vDatetimePicker, vButton },
        data () {
            return {
                value1: null,
                value2: null,
                value3: null,
                value4: null,
                value5: new Date(),
                visible: false,
                visible2: false,
                visible3: false,
                visible4: false,
                visible5: false,
                value6: null,
                visible6: false
            };
        },
        computed: {
            formatedValue1 () {
                return this.value1 ? utils.formatTime(this.value1) : '请选择日期（datetime picker）';
            },
            formatedValue2 () {
                return this.value2 ? utils.formatTime(this.value2) : '请选择日期（date picker）';
            },
            formatedValue3 () {
                return this.value3 ? (this.value3) : '请选择时间（time picker）';
            },
            formatedValue4 () {
                return this.value4 ? utils.formatTime(this.value4) : '自定义格式';
            },
            formatedValue5 () {
                return this.value5 ? utils.formatTime(this.value5) : '设定初始值';
            },
            formatedValue6 () {
                return this.value6 ? utils.formatTime(this.value6) : '请选择日期（smart picker）';
            }
        },

        methods: {
            open (picker) {
                console.log('datetime-picker.open: ');
                this.$refs[picker].open();
            },

            handleChange (value) {
                console.log('datetime-picker.handleChange: ', value);
                Toast({
                    message: '选择: ' + utils.formatTime(value),
                    position: 'bottom'
                });
            },

            openPicker1 () {
                this.$refs.picker1.open();
            },
            handlePicker1 (value) {
                console.log('datetime-picker.handlePicker1: ', value);
                this.value1 = value;
            },

            openPicker2 () {
                this.$refs.picker2.open();
            },
            handlePicker2 (value) {
                console.log('datetime-picker.handlePicker2: ', value);
                this.value2 = value;
            },

            openPicker3 () {
                this.$refs.picker3.open();
            },
            handlePicker3 (value) {
                console.log('datetime-picker.handlePicker3: ', value);
                this.value3 = value;
            },

            openPicker4 () {
                this.$refs.picker4.open();
            },
            handlePicker4 (value) {
                console.log('datetime-picker.handlePicker4: ', value);
                this.value4 = value;
            },

            openPicker5 () {
                this.$refs.picker5.open();
            },
            handlePicker5 (value) {
                console.log('datetime-picker.handlePicker5: ', value);
                this.value5 = value;
            },

            openPicker6 () {
                this.$refs.picker6.open();
            },
            handlePicker6 (value) {
                console.log('datetime-picker.handlePicker6: ', value);
                this.value6 = value;
            }
        }
    };
</script>


<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-datetime{

        .v-btn {
            margin-top: pxTorem(20px);
        }
    }
</style>
