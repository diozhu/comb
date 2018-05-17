<template>
    <div v-show="!option['hidden']"
         class="v-form-item"
         :class="{'required': validator && validator['required']}"
    >
        <!--:value="option['type'] == 'picker' ? currentValue[option['valueKey']] : currentValue"-->
        <v-cell
            :title="option['label'] || ''"
            :is-link="isLink"
            @click.native="handleClick(attr)"
            :value="defaultTxt"
            :class="{'noborder': placeholderRemark}"
            v-clickoutside="doCloseActive"
        >
            <v-radio
                v-if="option['type'] == 'radio'"
                :options="option['options'] || []"
                :mode="option['mode'] || 'list'"
                :radioClasses="option['radioClasses'] || ''"
                v-model="currentValue"
                :disabled="option['disabled']"
                :readonly="option['readonly']"
                :field="option['field'] || idx + '_' + attr"
                v-validator="validator"
            ></v-radio>

            <input
                v-if="(option['type'] == 'text' || option['type'] == 'number' || option['type'] == 'tel')"
                :type="(option['type'] == 'mobile' || option['type'] == 'tel') ? 'tel' : option['type']"
                class="v-field__core input"
                v-model="currentValue"
                :disabled="option['disabled']"
                :readonly="option['readonly']"
                :placeholder="option['placeholder'] || '请输入'"
                @focus="active = true"
                :field="option['field'] || idx + '_' + attr"
                v-validator="validator"
            />
            <i v-if="clearEnable && active"
               class="icon icon-error"
               @click="handleClear"
            ></i>

            <textarea v-if="option['type'] == 'textarea'"
                      class="v-field__core textarea"
                      :placeholder="option['placeholder'] || '请输入'"
                      :rows="option['rows']"
                      :disabled="option['disabled']"
                      :readonly="option['readonly']"
                      v-model="currentValue"
                      @change="$emit('change', currentValue)"
                      :field="option['field'] || idx + '_' + attr"
                      v-validator="validator"
            ></textarea>
            <div v-if="option['type'] == 'textarea' && option['limit']"
                 class="v-field__limit"
                 :class="{'alarm': currentValue.length && option['alarm'] && option['limit'] && option['limit'] - currentValue.length < option['alarm']}"
            >
                {{currentValue.length || 0}}/{{option['limit']}}
            </div>
        </v-cell>
        <p v-if="placeholderRemark" class="v-form-item__desc">{{option['placeholderRemark']}}</p>
        <!--弹框-->
        <v-popup
            v-if="option['type'] == 'picker'"
            v-model="popupVisibles[attr]"
            :toolbar="true"
            @handleConfirm="(val) => handlePickerConfirm(attr, val)"
        >
            <v-picker
                :ref="'picker' + attr"
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
            :value="currentValueDt"
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
            value: String | Object, // 绑定表单字段对象的默认值
            idx: Number,            // 传入当前字段的序号
            attr: String,           // 传入当前的属性名
            option: {               // 各字段对象的组件类型声明，及组件的各种依赖参数
                type: Object,
                default: () => {}
            },
            validator: {            // 各字段对象的校验规则
                type: Object,
                default: () => {}
            }
        },

        data () {
            return {
                timmer: null,        // 计时器
                defaultCompleted: true,          // 初始化结束标识
                currentValue: this.value,
                currentValueDt: null,
                popupVisibles: {},   // popup是否显示的缓存对象
                pickerValue: {},     // picker值的缓存
                old: '',
                active: false        // 清除图标的标识
            };
        },

        watch: {
            value (val) {
                this.currentValue = val;
            },

            currentValue (val) {
                // this.len = val ? val.length : 0;
                if (this.option['limit'] && val.length > this.option['limit']) {
                    this.currentValue = this.old;
                    return;
                }
                this.old = this.currentValue;
                this.$emit('input', val);
            }
        },

        computed: {
            defaultTxt () { // 如果是picker，显示的内容需要转换
                let str = this.currentValue;
                if (this.option['pickerType'] === 'region') { // 省市区格式
                    let k = this.option['valueKey'],
                        pr = this.currentValue[0] && this.currentValue[0][k],
                        ci = this.currentValue[1] && this.currentValue[1][k],
                        co = this.currentValue[2] && this.currentValue[2][k];
                    str = pr + '  ' + ci + '  ' + co;
                } else if (this.option['type'] === 'picker') { // picker格式
                    str = this.currentValue[this.option['valueKey']];
                }
                return str;
            },
            isLink () {
                return (this.option['isLink'] || this.option['type'] === 'picker' || this.option['type'] === 'datetime-picker') && !this.option['disabled'];
            },
            placeholderRemark () { // 是否显示placeholderRemark
                return this.option['placeholderRemark'] && !this.currentValue.length;
            },
            clearEnable () {
                return this.option['type'] !== 'radio' || this.option['type'] !== 'textarea' || this.option['type'] !== 'checkbox' || this.option['type'] !== 'picker';
            }
        },

        created () {
            this.init();
        },

        methods: {
            init () {
                // this.$logger.log(`【v-form-item】${this._uid}.init... `);
                if (this.option && this.option['pickerType'] === 'region') this.initRegion();
                if (this.option && this.option['type'] === 'picker' && this.currentValue) this.$nextTick(() => { this.initPickerDefaults(); });
                if (this.option && this.option['pickerType'] === 'region' && this.currentValue) this.$nextTick(() => { this.initRegionDefaults(); });
                // if (this.option && this.option['pickerType'] === 'date' && this.currentValue) this.$nextTick(() => { this.initDatetimeDefaults(); });
                if (this.option && this.option['pickerType'] === 'date' && this.currentValue) this.initDatetimeDefaults();
            },
            initRegion () { // 初始化地区选择数据，联动。 Author by Dio Zhu. on 2018.5.10
                // this.$logger.log(`【v-form-item】${this._uid}.initRegion... `);
                api.getProvinceList().then(res => {
                    // this.$logger.log(`【v-form-item】${this._uid}.getProvinceList.response: `, res);
                    if (!res || !res.length) return;
                    this._changeDatas(res, 0, 'province_id');
                }).catch(e => {
                    this.$toast(trans(e));
                    if (this.timmer) clearTimeout(this.timmer);
                });
            },
            initPickerDefaults () { // 初始化picker默认值。 Author by Dio Zhu. on 2018.5.16
                // this.$logger.log(`【v-form-item】${this._uid}.initPickerDefaults... `, this.attr, this.currentValue, this.$refs['picker' + this.attr]);
                if (this.currentValue && this.currentValue[this.option.key || 'key']) {
                    this.$refs['picker' + this.attr].setSlotValue(0, {key: this.currentValue[this.option.key || 'key'], values: this.currentValue[this.option.valueKey || 'valueKey']});
                }
            },
            initRegionDefaults () { // 区域设定默认值
                // this.$logger.log(`【v-form-item】${this._uid}.initRegionDefaults... `, this.attr, this.$refs, this);
                if (!this.option.slots || !this.option.slots[2].values || !this.option.slots[2].values.length) { // 异步初始化如果未完成，递归。。。Author by Dio Zhu. on 2018.5.11
                    this.timmer = setTimeout(() => { return this.initRegionDefaults(); }, 500);
                    return;
                }
                this.defaultCompleted = false; // 设定默认值标识
                // 设定省的默认值
                if (this.currentValue && this.currentValue[0] && this.currentValue[0][this.option.key || 'key']) {
                    this.$refs['picker' + this.attr].setSlotValue(0, {key: this.currentValue[0][this.option.key || 'key'], values: this.currentValue[0][this.option.valueKey || 'valueKey']});
                } else {
                    this.$refs['picker' + this.attr].setSlotValue(0, {key: '1', values: '北京'});
                }
                this.$logger.log(`【v-form-item】${this._uid}.initRegionDefaults... ==================>>> region init done!!! start setting default...`);
            },
            initDatetimeDefaults () { // 时间picker的默认值
                // this.$logger.log(`【v-form-item】${this._uid}.initDatetimeDefaults...`, this.currentValue);
                if (this.currentValue) this.$set(this, 'currentValueDt', new Date(this.currentValue));
            },
            handleClear () { // 点击input后面的清除图标
                if (this.option['disabled'] || this.option['readonly']) return;
                this.currentValue = '';
                if (this.$refs[this.attr]) this.$refs[this.attr].focus();
            },
            doCloseActive () { // 点击外部区域，重置清除图标的显示标识
                this.active = false;
            },
            // 改变省市区，数据格式变成key->value格式 -----v1.0.5 修改地区选择默认值  -by dinglei 2018.3.26
            _changeDatas (data, num, sty) {
                let ary = [];
                data.forEach(item => { ary.push({key: item[sty], values: item.name}); });
                this.$set(this.option.slots[num], 'values', ary);
                // this.$logger.log(`【v-form-item】${this._uid}._changeDatas: `, data, num, sty, this.option.slots[num]);
            },
            handleClick (key) {
                if (!this.isLink) return;
                this.$logger.log(`【v-form-item】${this._uid}.handleClick: `, key, this.$refs);
                if (this.option && this.option['type'] === 'datetime-picker') {
                    // this.$set(this.popupVisibles, key, true);
                    this.$refs.pickerDatetime.open();
                } else if (this.option && this.option['type'] === 'picker') {
                    this.$set(this.popupVisibles, key, true);
                }
            },
            handlePickerChange (key, obj, val) { // 缓存picker的值
                // this.$logger.log(`【v-form-item】${this._uid}.onPickerChange: --------->>> `, key, JSON.stringify(val), this.currentValue);
                if (key === 'region') { // 地区组件的change
                    let sameProvince = !!(val[0] && this.pickerValue[0] && this.pickerValue[0]['key'].toString() === val[0]['key'].toString() && this.pickerValue[0]['values'].toString() === val[0]['values'].toString()),
                        sameCity = !!(val[1] && this.pickerValue[1] && this.pickerValue[1]['key'].toString() === val[1]['key'].toString() && this.pickerValue[1]['values'].toString() === val[1]['values'].toString()),
                        sameCounty = !!(val[2] && this.pickerValue[2] && this.pickerValue[2]['key'].toString() === val[2]['key'].toString() && this.pickerValue[2]['values'].toString() === val[2]['values'].toString()),
                        provinceTag = !!((val[0] && !sameProvince) || (val[0] && !val[1])),
                        cityTag = !!((val[1] && !sameCity) || (val[1] && !val[2])),
                        countyTag = !!(!this.defaultCompleted && this.currentValue[2] && this.currentValue[2]['key']),
                        hasCityDefault = !this.defaultCompleted && (val[1] && this.currentValue[1] && this.currentValue[1]['key'].toString() !== val[1]['key'].toString() && this.currentValue[1]['values'] !== val[1]['values']);
                    // this.$logger.log(`【v-form-item】${this._uid}.onPickerChange: sameProvince: ${sameProvince}, sameCity: ${sameCity}, sameCounty: ${sameCounty}, hasCityDefault: ${hasCityDefault}`);
                    // this.$logger.log(`【v-form-item】${this._uid}.onPickerChange: provinceTag: ${provinceTag}, cityTag: ${cityTag}, countyTag: ${countyTag}`);
                    if (!sameProvince && provinceTag) {
                        // this.$logger.log(`【v-form-item】${this._uid}.onPickerChange: => province!!!`);
                        this.$set(this.pickerValue, 0, val[0]);
                        this.getCitiesByProvince(val[0].key); // 根据省id获取市列表
                    } else if (!sameCity && cityTag && hasCityDefault) {
                        // this.$logger.log(`【v-form-item】${this._uid}.onPickerChange: => city: set default!!!`);
                        this.$refs['picker' + this.attr].setSlotValue(1, {key: this.currentValue[1]['key'], values: this.currentValue[1][this.option.valueKey || 'valueKey']});
                    } else if (!sameCity && cityTag) {
                        // this.$logger.log(`【v-form-item】${this._uid}.onPickerChange: => city!!!`);
                        this.$set(this.pickerValue, 1, val[1]);
                        this.getCountiesByCity(val[1].key); // 根据市，拉区信息
                    } else if (!sameCounty && countyTag) {
                        this.$logger.log(`【v-form-item】${this._uid}.onPickerChange: => county: default value complete!!!`);
                        this.$set(this.pickerValue, 2, Object.assign({}, this.currentValue[2]));
                        this.defaultCompleted = true; // 还原默认值标识
                        this.$refs['picker' + this.attr].setSlotValue(2, {key: this.currentValue[2]['key'], values: this.currentValue[2][this.option.valueKey || 'valueKey']});
                    }
                } else { // 普通picker的change
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
            },
            getCitiesByProvince (id) { // 根据省id获取市列表
                api.getCityLists({province_id: id}).then(res => { // 根据省，拉市信息
                    // this.$logger.log(`【v-form-item】${this._uid}.onPickerChange.getCityLists.success: `, res);
                    if (!res || !res.length) return;
                    this._changeDatas(res, 1, 'city_id');   // 修改数据格式变成key->values格式
                }).catch(e => { this.$toast(trans(e)); });
            },
            getCountiesByCity (id) { // 根据省id获取市列表
                api.getCountyList({city_id: id}).then(res => { // 根据市，拉区信息
                    // this.$logger.log(`【v-form-item】${this._uid}.onPickerChange.getCountyList.success: `, res);
                    if (!res || !res.length) return;
                    this._changeDatas(res, 2, 'county_id');
                }).catch(e => { this.$toast(trans(e)); });
            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .v-form-item {
        position: relative;

        &.required::after {
            content: '*';
            font-size: pxTorem(14);
            position: absolute;
            top: 50%;
            left: pxTorem(6);
            margin-top: pxTorem(-7);
        }

        input{opacity:1;} /*统一颜色*/
        input,
        textarea {
            &::-webkit-input-placeholder {/* WebKit browsers */
                color: #bebebe;
                font-size:pxTorem(14);
                font-weight: 300;
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

        .v-field__core {

            &.textarea {
                width: 100%;
                min-height: pxTorem(68);
                appearance: none;
                /*overflow: auto;*/
                resize: none;
                vertical-align: top;
                /*display: block;*/
                /*background: #FFF;*/
                margin: pxTorem(15) 0;
                font-size: pxTorem(15);
                line-height: pxTorem(22);
                color: #1B1B20;
            }

            &.input {
                width: 100%;
                height: 100%;
                font-size: pxTorem(15px);
                color: #1B1B20;
                padding-right: pxTorem(15px);
            }
        }

        .v-form-item__desc {
            margin: 0 0 0 pxTorem(15);
            padding: 0 0 pxTorem(6) pxTorem(84);
            border-bottom: #DDDEE3 1px solid;
        }

        .v-field__limit {
            position: absolute;
            bottom: 0;
            right: 0;
            font-size: pxTorem(14px);
            color: #777E8C;
            text-align: right;
            padding: pxTorem(2) 0;
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
