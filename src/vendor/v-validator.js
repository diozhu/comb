/**
 * 校验
 *              -- Author by Dio Zhu. on 2017.8.15
 */
import Vue from 'vue';
import * as utils from '../js/utils/utils.js';
import * as dom from '../js/utils/dom.js';

const ctx = '@@Validator'; //eslint-disable-line

// === base ===

let doBind = function () {
        if (!this) return;
        // console.log(`[v-validator].${this.vm._uid}.doBind: `, this.binded, this);
        if (this.binded) return; //eslint-disable-line
        this.binded = true;
        this.watchs = [];

        this.field = this.vm['field'] || this.vm._uid;
        // console.log(`[v-validator].${this.vm._uid}.doBind: `, this.field);
        if (this.field) {
            if (this.expression.required) _initRequired.call(this);
            if (this.expression.minLength || this.expression.maxLength) _initLength.call(this);
            if (this.expression.mail) _initMail.call(this);
            if (this.expression.tel) _initTel.call(this);
            if (this.expression.mobile) _initMobile.call(this);
            if (this.expression.card) _initCard.call(this);
            if (this.expression.numbers) _initNumbers.call(this);
            if (this.expression.text) _initText.call(this);
            if (this.expression.bank) _initBank.call(this);
        }
    },
    _getMsg = function (tag, def) {
        let msg = '';
        if (typeof this.expression[tag] === 'string') {
            msg = this.expression[tag];
        } else if (this.expression[tag]['message'] && typeof this.expression[tag]['message'] === 'string') {
            msg = this.expression[tag]['message'];
        } else {
            msg = def;
        }
        return msg;
    },
    _initRequired = function () { // 必填项初始化
        console.log(`[v-validator].${this.vm._uid}._initRequired: `, this.vm.value);
        _watchRequired.call(this, this.vm.value); // 初始化
        this.watchs.push(this.vm.$watch('value', _watchRequired.bind(this))); // 监听v-field的value
        // console.log(`[v-validator].${this.vm._uid}._initRequired: `, this.vm._watchers);
    },
    _watchRequired = function (newVal, oldVal) { // 监听输入与否
        // console.log(`[v-validator].${this.vm._uid}._watchInputable: `, field, ...arguments);
        if (!Vue.$validation[this.field]) Vue.$validation[this.field] = Vue.prototype.$validation[this.field] = {}; // 初始化
        // Vue.$validation[field]['required'] = Vue.prototype.$validation[field]['required'] = !!newVal.length; // 以前的方式，返回true或false
        if (newVal.length) { // 如果存在，删除标识，如果不存在，写入提示语（或true）
            delete Vue.$validation[this.field]['required'];
            delete Vue.prototype.$validation[this.field]['required'];
        } else {
            let msg = _getMsg.call(this, 'required', '您有未录入的数据哦~');
            Vue.$validation[this.field]['required'] = Vue.prototype.$validation[this.field]['required'] = msg;
        }
    },
    _initLength = function () { // 初始化
        console.log(`[v-validator].${this.vm._uid}._initLength: `, this.vm.value);
        _watchLength.call(this, this.vm.value); // 初始化
        this.watchs.push(this.vm.$watch('value', _watchLength.bind(this))); // 监听v-field的value
        // console.log(`[v-validator].${this.vm._uid}._initLength: `, this.vm._watchers);
    },
    _watchLength = function (newVal, oldVal) { // 监听输入长度
        // console.log(`[v-validator].${this.vm._uid}._watchLength: `, newVal);
        if (!Vue.$validation[this.field]) Vue.$validation[this.field] = Vue.prototype.$validation[this.field] = {}; // 初始化
        if (newVal && this.expression.minLength) {
            let min = typeof this.expression.minLength === 'number' ? this.expression.minLength : this.expression.minLength.rule;
            if (newVal.length && newVal.length >= min) {
                delete Vue.$validation[this.field]['minLength'];
                delete Vue.prototype.$validation[this.field]['minLength'];
            } else {
                let msg = _getMsg.call(this, 'minLength', '至少输入' + min + '字哦~');
                Vue.$validation[this.field]['minLength'] = Vue.prototype.$validation[this.field]['minLength'] = msg;
            }
        }
        if (newVal && this.expression.maxLength) {
            let max = typeof this.expression.maxLength === 'number' ? this.expression.maxLength : this.expression.maxLength.rule;
            if (newVal.length && newVal.length < max) {
                delete Vue.$validation[this.field]['maxLength'];
                delete Vue.prototype.$validation[this.field]['maxLength'];
            } else {
                let msg = _getMsg.call(this, 'maxLength', '最多输入' + max + '字哦~');
                Vue.$validation[this.field]['maxLength'] = Vue.prototype.$validation[this.field]['maxLength'] = msg;
            }
        }
    },
    _initMail = function () { // 初始化
        console.log(`[v-validator].${this.vm._uid}._initMail: `, this.vm.value);
        _watchMail.call(this, this.vm.value); // 初始化
        this.watchs.push(this.vm.$watch('value', _watchMail.bind(this))); // 监听v-field的value
    },
    _watchMail = function (newVal, oldVal) { // 监听输入长度
        // console.log(`[v-validator].${this.vm._uid}._watchMail: `, newVal);
        if (!Vue.$validation[this.field]) Vue.$validation[this.field] = Vue.prototype.$validation[this.field] = {}; // 初始化
        if (newVal && this.expression.mail) {
            if (utils.validateEmail(newVal)) {
                delete Vue.$validation[this.field]['mail'];
                delete Vue.prototype.$validation[this.field]['mail'];
            } else {
                let msg = _getMsg.call(this, 'mail', '邮箱格式不对哦~');
                Vue.$validation[this.field]['mail'] = Vue.prototype.$validation[this.field]['mail'] = msg;
            }
        }
    },
    _initTel = function () { // 初始化
        console.log(`[v-validator].${this.vm._uid}._initTel: `, this.vm.value);
        _watchTel.call(this, this.vm.value); // 初始化
        this.watchs.push(this.vm.$watch('value', _watchTel.bind(this))); // 监听v-field的value
    },
    _watchTel = function (newVal, oldVal) { // 监听输入长度
        // console.log(`[v-validator].${this.vm._uid}._watchTel: `, newVal);
        if (!Vue.$validation[this.field]) Vue.$validation[this.field] = Vue.prototype.$validation[this.field] = {}; // 初始化
        if (newVal && this.expression.tel) {
            if (utils.validateTel(newVal)) {
                delete Vue.$validation[this.field]['tel'];
                delete Vue.prototype.$validation[this.field]['tel'];
            } else {
                let msg = _getMsg.call(this, 'tel', '电话格式不对哦~');
                Vue.$validation[this.field]['tel'] = Vue.prototype.$validation[this.field]['tel'] = msg;
            }
        }
    },
    _initMobile = function () { // 初始化
        console.log(`[v-validator].${this.vm._uid}._initMobile: `, this.vm.value);
        _watchMobile.call(this, this.vm.value); // 初始化
        this.watchs.push(this.vm.$watch('value', _watchMobile.bind(this))); // 监听v-field的value
    },
    _watchMobile = function (newVal, oldVal) { // 监听输入长度
        // console.log(`[v-validator].${this.vm._uid}._watchMobile: `, newVal);
        if (!Vue.$validation[this.field]) Vue.$validation[this.field] = Vue.prototype.$validation[this.field] = {}; // 初始化
        if (newVal && this.expression.mobile) {
            if (utils.validateMobile(newVal)) {
                delete Vue.$validation[this.field]['mobile'];
                delete Vue.prototype.$validation[this.field]['mobile'];
            } else {
                let msg = _getMsg.call(this, 'mobile', '手机格式不对哦~');
                Vue.$validation[this.field]['mobile'] = Vue.prototype.$validation[this.field]['mobile'] = msg;
            }
        }
    },
    _initCard = function () { // 初始化
        console.log(`[v-validator].${this.vm._uid}._initCard: `, this.vm.value);
        _watchCard.call(this, this.vm.value); // 初始化
        this.watchs.push(this.vm.$watch('value', _watchCard.bind(this))); // 监听v-field的value
    },
    _watchCard = function (newVal, oldVal) { // 监听输入长度
        // console.log(`[v-validator].${this.vm._uid}._watchCard: `, newVal);
        if (!Vue.$validation[this.field]) Vue.$validation[this.field] = Vue.prototype.$validation[this.field] = {}; // 初始化
        if (newVal && this.expression.card) {
            if (utils.validateCard(newVal)) {
                delete Vue.$validation[this.field]['card'];
                delete Vue.prototype.$validation[this.field]['card'];
            } else {
                let msg = _getMsg.call(this, 'card', '身份证号格式不对哦~');
                Vue.$validation[this.field]['card'] = Vue.prototype.$validation[this.field]['card'] = msg;
            }
        }
    },
    _initNumbers = function () { // 初始化
        console.log(`[v-validator].${this.vm._uid}._initNumbers: `, this.vm.value);
        _watchNumbers.call(this, this.vm.value); // 初始化
        this.watchs.push(this.vm.$watch('value', _watchNumbers.bind(this))); // 监听v-field的value
    },
    _watchNumbers = function (newVal, oldVal) { // 监听输入长度
        // console.log(`[v-validator].${this.vm._uid}._watchNumbers: `, newVal);
        if (!Vue.$validation[this.field]) Vue.$validation[this.field] = Vue.prototype.$validation[this.field] = {}; // 初始化
        if (newVal && this.expression.numbers) {
            if (utils.validateNumbers(newVal)) {
                delete Vue.$validation[this.field]['numbers'];
                delete Vue.prototype.$validation[this.field]['numbers'];
            } else {
                let msg = _getMsg.call(this, 'numbers', '只能输入数字哦~');
                Vue.$validation[this.field]['numbers'] = Vue.prototype.$validation[this.field]['numbers'] = msg;
            }
        }
    },
    _initText = function () { // 初始化
        console.log(`[v-validator].${this.vm._uid}._initText: `, this.vm.value);
        _watchText.call(this, this.vm.value); // 初始化
        this.watchs.push(this.vm.$watch('value', _watchText.bind(this))); // 监听v-field的value
    },
    _watchText = function (newVal, oldVal) { // 监听输入长度
        // console.log(`[v-validator].${this.vm._uid}._watchText: `, newVal);
        if (!Vue.$validation[this.field]) Vue.$validation[this.field] = Vue.prototype.$validation[this.field] = {}; // 初始化
        if (newVal && this.expression.text) {
            if (utils.validateText(newVal)) {
                delete Vue.$validation[this.field]['text'];
                delete Vue.prototype.$validation[this.field]['text'];
            } else {
                let msg = _getMsg.call(this, 'text', '不能包含特殊字符哦~');
                Vue.$validation[this.field]['text'] = Vue.prototype.$validation[this.field]['text'] = msg;
            }
        }
    },
    _initBank = function () { // 初始化
        console.log(`[v-validator].${this.vm._uid}._initBank: `, this.vm.value);
        _watchBank.call(this, this.vm.value); // 初始化
        this.watchs.push(this.vm.$watch('value', _watchBank.bind(this))); // 监听v-field的value
    },
    _watchBank = function (newVal, oldVal) { // 监听输入长度
        // console.log(`[v-validator].${this.vm._uid}._watchBank: `, newVal);
        if (!Vue.$validation[this.field]) Vue.$validation[this.field] = Vue.prototype.$validation[this.field] = {}; // 初始化
        if (newVal && this.expression.bank) {
            if (utils.validateBank(newVal)) {
                delete Vue.$validation[this.field]['bank'];
                delete Vue.prototype.$validation[this.field]['bank'];
            } else {
                let msg = _getMsg.call(this, 'bank', '银行卡格式不对哦~');
                Vue.$validation[this.field]['bank'] = Vue.prototype.$validation[this.field]['bank'] = msg;
            }
        }
    };

// === init ===

let Validator = {
        bind (el, binding, vnode) {
            if (typeof binding.value === 'undefined') return;
            console.log(`[v-validator].${vnode.context._uid}.bind!`);
            el[ctx] = {
                el,
                vm: vnode.context,
                expression: binding.value
            };
            const args = arguments;
            el[ctx].vm.$nextTick(() => {
                if (dom.isAttached(el)) {
                    setTimeout(() => { doBind.call(el[ctx], args); }, 0);
                    return; // Add by Dio Zhu. on 2017.2.14
                }
                el[ctx].bindTryCount = 0;
                let tryBind = function () {
                    if (el[ctx].bindTryCount > 10) return; //eslint-disable-line
                    el[ctx].bindTryCount++;
                    if (dom.isAttached(el)) {
                        doBind.call(el[ctx], args);
                    } else {
                        setTimeout(tryBind, 50);
                    }
                };
                // tryBind();
                setTimeout(tryBind, 0);
            });
        },

        // inserted (el) {
        //     console.log(`[v-validator].${el[ctx].vm._uid}.inserted!`);
        //     // doInserted.call(el[ctx], ...arguments);
        // },
        // update (el) {
        //     console.log('----- v-validator.update!', el);
        // },
        // componentUpdated (el) {
        //     console.log('----- v-validator.componentUpdated!', el);
        // },

        unbind (el, binding, vnode, oldVnode) {
            if (typeof binding.value === 'undefined') return;
            console.log(`[v-validator].${el[ctx].vm._uid}.unbind!`);
            Vue.$validation = Vue.prototype.$validation = {}; // 解绑时清除全局数据
            if (el[ctx] && el[ctx].watchs) { // 清除所有监听
                el[ctx].watchs.forEach(v => {
                    v();
                });
                el[ctx].watchs = [];
            }
            console.log(`[v-validator].${el[ctx].vm._uid}.unbind: `, el[ctx].vm._watchers);
        },
        // update (el) {
        //     console.log(`[v-validator].update!`);
        // },
        // componentUpdated (el) {
        //     console.log(`[v-validator].componentUpdated!`);
        // },

        clear (el) {
            console.log('v-validator.clear!');
        }
    },
    validation = {
    };

// === install ===

const install = function (Vue) {
    Vue.directive('validator', Validator);
    Vue.$validation = Vue.prototype.$validation = validation; // 全局数据标识
};

if (!Vue.prototype.$isServer && window.Vue) {
    window.Validator = Validator;
    Vue.use(install); // eslint-disable-line
}

Validator.install = install;
export default Validator;

