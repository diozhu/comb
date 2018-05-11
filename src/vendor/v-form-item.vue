<template>
    <div class="v-form-item">
        <!--:value="option['type'] == 'picker' ? currentValue[option['valueKey']] : currentValue"-->
        <v-cell
            :title="option['label'] || ''"
            :is-link="(option['isLink']) || (option['type'] == 'picker' || option['type'] == 'datetime-picker')"
            @click.native="handleClick(attr)"
            :value="defaultTxt"
        >
            <v-radio
                v-if="option['type'] == 'radio'"
                :options="option['options'] || []"
                :mode="option['mode'] || 'list'"
                :radioClasses="option['radioClasses'] || ''"
                v-model="currentValue"
            ></v-radio>
            <input
                v-if="(option['type'] == 'text' || option['type'] == 'number')"
                :type="option['type'] == 'mobile' ? 'tel' : option['type']"
                class="v-field__core input"
                v-model="currentValue"
                :placeholder="option['placeholder'] || '请输入'"
            />
        </v-cell>
        <!--弹框-->
        <v-popup
            v-if="option['type'] == 'picker'"
            v-model="popupVisibles[attr]"
            :toolbar="true"
            @handleConfirm="(val) => handlePickerConfirm(attr, val)"
        >
            <v-picker
                :ref="attr"
                :slots="option['slots']"
                :valueKey="option['valueKey'] || 'values'"
                @change="(o, v) => handlePickerChange(attr, o, v)"
                :visible-item-count="5"
                :show-toolbar="true"
            ></v-picker>
        </v-popup>
        <!--日期弹框-->
        <v-datetime-picker
            v-if="option['type'] == 'datetime-picker'"
            ref="pickerDatetime"
            :type="option['pickerType'] || 'smart'"
            :visibleItemCount="5"
            @confirm="(val) => handlePickerDatetime(attr, val)"
        ></v-datetime-picker>
    </div>
</template>
<script>
    import vCell from '../vendor/v-cell';
    import vRadio from '../vendor/v-radio';
    import clickoutside from '../js/utils/clickoutside';
    import vPopup from '../vendor/v-popup';
    import * as api from '../js/core/api'; //eslint-disable-line
    import * as utils from '../js/utils/utils'; //eslint-disable-line
    import trans from '../js/core/trans.js';
    import vPicker from '../vendor/v-picker';
    import vDatetimePicker from '../vendor/v-datetime-picker';
    import Vue from 'vue';
    import Validator from '../vendor/v-validator.js';
    Vue.use(Validator);

    export default {
        name: 'v-form-item',

        components: { vCell, vRadio, vPopup, vPicker, vDatetimePicker },
        directives: { clickoutside },
        props: {
            value: String | Object,
            attr: String,       // 传入当前的属性名
            option: {
                type: Object,
                default: () => {}
            }
        },

        data () {
            return {
                defaultCompleted: false,          // 初始化结束标识
                currentValue: this.value,
                popupVisibles: {},   // popup是否显示的缓存对象
                pickerValue: {}      // picker值的缓存
            };
        },

        watch: {
            value (val) {
                this.currentValue = val;
            },

            currentValue (val) {
                // this.len = val ? val.length : 0;
                // if (this.limit && this.len > this.limit) {
                //     this.currentValue = this.old;
                //     return;
                // }
                // this.old = this.currentValue;
                this.$emit('input', val);
            }
        },

        computed: {
            defaultTxt () {
                let str = this.currentValue;
                if (this.option['pickerType'] === 'region') {
                    let k = this.option['valueKey'],
                        pr = this.currentValue[0] && this.currentValue[0][k],
                        ci = this.currentValue[1] && this.currentValue[1][k],
                        co = this.currentValue[2] && this.currentValue[2][k];
                    str = pr + '  ' + ci + '  ' + co;
                } else if (this.option['type'] === 'picker') {
                    str = this.currentValue[this.option['valueKey']];
                }
                return str;
            }
        },

        created () {
            this.init();
        },

        methods: {
            init () {
                // this.$logger.log(`【v-form-item】${this._uid}.init... `);
                // [].forEach.call(this.currentValue, v => {});
                if (this.option && this.option['pickerType'] === 'region') this.initRegion();
                if (this.option && this.option['pickerType'] === 'region' && this.currentValue) this.initRegionDefaults();
            },
            initRegion () { // 初始化地区选择数据，联动。 Author by Dio Zhu. on 2018.5.10
                this.$logger.log(`【v-form-item】${this._uid}.initRegion... `);
                api.getProvinceList().then(res => {
                    this.$logger.log(`【v-form-item】${this._uid}.getProvinceList.response: `, res);
                    if (!res) return;
                    this._changeDatas(res, 0, 'province_id');
                }).catch(e => this.$toast(trans(e)));
            },
            initRegionDefaults () { // 区域设定默认值
                // this.$logger.log(`【v-form-item】${this._uid}.initRegionDefaults... `);
                if (!this.option.slots || !this.option.slots[2].values || !this.option.slots[2].values.length) { // 异步初始化如果未完成，递归。。。Author by Dio Zhu. on 2018.5.11
                    setTimeout(() => { return this.initRegionDefaults(); }, 500);
                    return;
                }
                this.defaultCompleted = true; // 设定默认值标识
                // 设定省的默认值
                if (this.currentValue && this.currentValue[0] && this.currentValue[0][this.option.key || 'key']) {
                    this.$refs[this.attr].setSlotValue(0, {key: this.currentValue[0][this.option.key || 'key'], values: this.currentValue[0][this.option.valueKey || 'valueKey']});
                } else {
                    this.$refs[this.attr].setSlotValue(0, {key: '1', values: '北京'});
                }
                this.$logger.log(`【v-form-item】${this._uid}.initRegionDefaults... ----------->>> done!!!`);
            },
            // 改变省市区，数据格式变成key->value格式 -----v1.0.5 修改地区选择默认值  -by dinglei 2018.3.26
            _changeDatas (data, num, sty) {
                let ary = [];
                data.forEach(item => { ary.push({key: item[sty], values: item.name}); });
                this.$set(this.option.slots[num], 'values', ary);
                // this.$logger.log(`【v-form-item】${this._uid}._changeDatas: `, data, num, sty, this.option.slots[num]);
            },
            handleClick (key) {
                this.$logger.log(`【v-form-item】${this._uid}.handleClick: `, key, this.$refs);
                if (this.option && this.option['type'] === 'datetime-picker') {
                    // this.$set(this.popupVisibles, key, true);
                    this.$refs.pickerDatetime.open();
                } else if (this.option && this.option['type'] === 'picker') {
                    this.$set(this.popupVisibles, key, true);
                }
            },
            handlePickerChange (key, obj, val) { // 缓存picker的值
                this.$logger.log(`【v-form-item】${this._uid}.onPickerChange: `, key, JSON.stringify(val), this.currentValue);
                if (key === 'region') { // 地区组件的change
                    if (val[2] && val[2].key) this.$set(this.pickerValue, 2, val[2]);
                    if ((val[0] && this.pickerValue[0] && this.pickerValue[0]['key'] !== val[0]['key']) || (val[0] && !val[1])) { // 省变化，拉取市信息
                        this.$logger.log(`【v-form-item】${this._uid}.onPickerChange: =======>>> province!!!`);
                        this.$set(this.pickerValue, 0, val[0]);
                        api.getCityLists({province_id: val[0].key}).then(res => {
                            this.$logger.log(`【v-form-item】${this._uid}.onPickerChange.getCityLists.success: `, res);
                            if (!res) return;
                            this._changeDatas(res, 1, 'city_id');   // 修改数据格式变成key->values格式
                        }).catch(e => {
                            this.$toast(trans(e));
                            if (e.data) {
                                console.log(e.data);
                            }
                        });
                    } else if ((val[1] && this.pickerValue[1] && this.pickerValue[1]['key'] !== val[1]['key']) || (val[1] && !val[2])) { // 市变化，拉取区信息
                        this.$logger.log(`【v-form-item】${this._uid}.onPickerChange: =======>>> city!!!`, this.currentValue[1]['key'], val[1]['key']);
                        if (this.defaultCompleted && this.currentValue[1] && this.currentValue[1]['key'] !== val[1]['key']) { // 如果有默认值，直接赋值返回，再次进来触发市变化拉区信息。。。
                            // this.$set(this.pickerValue, '1', this.currentValue[1]);
                            this.$set(this.pickerValue, 1, Object.assign({}, this.currentValue[1]));
                            this._changeDatas([], 2, 'county_id');
                            this.$refs[this.attr].setSlotValue(1, {key: this.currentValue[1]['key'], values: this.currentValue[1][this.option.valueKey || 'valueKey']});
                            return;
                        }
                        this.$set(this.pickerValue, 1, val[1]);
                        api.getCountyList({city_id: val[1].key}).then(res => {
                            this.$logger.log(`【v-form-item】${this._uid}.onPickerChange.getCountyList.success: `, res);
                            if (!res) return;
                            this._changeDatas(res, 2, 'county_id');
                        }).catch(e => {
                            this.$toast(trans(e));
                            if (e.data) {
                                console.log(e.data);
                            }
                        });
                    // } else if ((val[2] && this.pickerValue[2] && this.pickerValue[2]['key'] !== val[2]['key']) || (val[2])) {
                    // } else if (val[2]) {
                    } else if (this.defaultCompleted && this.currentValue[2] && this.currentValue[2]['key']) {
                        this.$logger.log(`【v-form-item】${this._uid}.onPickerChange: =======>>> county!!!`);
                        // if (this.defaultCompleted && this.currentValue[2] && this.currentValue[2]['key'] !== val[2]['key']) {
                        // this.$set(this.pickerValue, 2, this.currentValue[2]);
                        this.$set(this.pickerValue, 2, Object.assign({}, this.currentValue[2]));
                        this.defaultCompleted = false; // 还原默认值标识
                        this.$refs[this.attr].setSlotValue(2, {key: this.currentValue[2]['key'], values: this.currentValue[2][this.option.valueKey || 'valueKey']});
                        //     return;
                        // }
                        // this.$set(this.pickerValue, '2', val[2]);
                    }
                } else {
                    this.$set(this, 'pickerValue', val);
                }
            },
            handlePickerConfirm (key, val) { // 点击确定时返回picker缓存的值
                // let obj = this.pickerValue[key][0],
                //     k = this.options[key]['valueKey'],
                //     v = obj[k];
                // this.$logger.log(`【v-form-item】${this._uid}.handlePickerConfirm: `, ...arguments, obj, k, v);
                // this.$set(this.currentValue, key, v);
                if (key === 'region') {
                    this.$set(this, 'currentValue', Object.assign({}, this.pickerValue));
                } else {
                    this.$set(this, 'currentValue', Object.assign({}, this.pickerValue[0]));
                }
            },
            handlePickerDatetime (key, dt) {
                this.$logger.log(`【v-form-item】${this._uid}.handlePickerDatetime: `, ...arguments);
                this.$set(this, 'currentValue', utils.formatTime(dt, 'yyyy-MM-dd'));
            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .v-form-item {

        input{opacity:1;} /*统一颜色*/
        input,
        textarea {
            &::-webkit-input-placeholder {/* WebKit browsers */
                color: #bebebe;
                font-size:pxTorem(14px);
            }
        }

        .icon.icon-error {
            background: #b2b2b2;
            color: #FFF;
            border-radius: 50%;
            padding: pxTorem(2px);
            font-size: pxTorem(14px);
            opacity: .7;
        }
    }
    .v-form-item {

        input {
            /*border: #00aeff 1px solid;*/
        }
    }

    /*.v-field {*/
        /*display: block;*/
        /*input{opacity:1;} !*统一颜色*!*/
        /*input,*/
        /*textarea {*/
            /*&::-webkit-input-placeholder {!* WebKit browsers *!*/
                /*color: #bebebe;*/
                /*font-size:pxTorem(14px);*/
            /*}*/
        /*}*/

        /*.icon.icon-error {*/
            /*background: #b2b2b2;*/
            /*color: #FFF;*/
            /*border-radius: 50%;*/
            /*padding: pxTorem(2px);*/
            /*font-size: pxTorem(14px);*/
            /*opacity: .7;*/
        /*}*/
    /*}*/

    /*.v-field__tit {*/
        /*width: 100%;*/
        /*height: pxTorem(44px);*/
        /*font-size: pxTorem(15px);*/
        /*line-height: pxTorem(44px);*/
        /*margin-left: pxTorem(15px);*/
        /*border-bottom: #DDDEE3 pxTorem(1px) solid;*/
    /*}*/

    /*.v-field__core {*/

        /*&.textarea {*/
            /*width: 100%;*/
            /*min-height: pxTorem(100px);*/
            /*appearance: none;*/
            /*overflow: auto;*/
            /*resize: none;*/
            /*vertical-align: top;*/
            /*display: block;*/
            /*background: #FFF;*/
            /*padding: pxTorem(15px) 0;*/
            /*font-size: pxTorem(15px);*/
            /*line-height: pxTorem(22px);*/
        /*}*/

        /*&.input {*/
            /*width: 100%;*/
            /*height: 100%;*/
            /*font-size: pxTorem(15px);*/
            /*padding-right: pxTorem(15px);*/
        /*}*/
    /*}*/

    /*.has-limit {*/
        /*.v-cell__value {*/
            /*padding-bottom: pxTorem(33px);*/
        /*}*/
    /*}*/
    /*.v-field__limit {*/
        /*position: absolute;*/
        /*bottom: 0;*/
        /*right: 0;*/
        /*font-size: pxTorem(14px);*/
        /*color: #777E8C;*/
        /*text-align: right;*/
        /*padding: pxTorem(10px) pxTorem(15px);*/
    /*}*/

    /*.limit-outer .v-field__limit {*/
        /*background: transparent;*/
        /*border-top: #DDDEE3 pxTorem(1px) solid;*/
    /*}*/

    /*.v-field.multi {*/

        /*.v-cell__value {*/
            /*display: flex;*/
            /*flex-direction: column;*/
            /*align-items: flex-start;*/

            /*> div {*/
                /*padding: pxTorem(10) pxTorem(10) 0 pxTorem(10);*/
                /*font-size: pxTorem(14);*/
                /*color: #000;*/
            /*}*/
        /*}*/
    /*}*/
</style>
