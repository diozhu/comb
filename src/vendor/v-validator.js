/**
 * 校验
 *              -- Author by Dio Zhu. on 2017.8.15
 */
// 修改说明---孙硕--2018，2，27
// 先前的验证是通过bind的时候执行一次验证条件的筛选，然后全部加入观察者（$watch）--在触发正则条件的时候讲文案统一加入到$validation
// 中,然后在使用的页面通过遍历validation的方式逐一弹出提示，现在由于有判断条件根据用户交互而改变的需求，因此只执行一次的bind无法满足
// 更改如下
//     页面初始化---》inserted钩子中，将所有元素绑定一次。
//     切换某个元素的时候----》unbind解绑
//     切换显示的时候----》inserted单独绑定该元素
//     页面销毁---》unbind钩子，所有元素解绑
//     改变焦点，和输入，不触发任何钩子函数。

import Vue from 'vue';
import * as utils from '../js/utils/utils.js';

const ctx = '@@Validator'; //eslint-disable-line

// === base ===

let dobind = function () {
        console.log(`【validator】${this.vm._uid}.doUpdate！！！ `, JSON.stringify(this.expression));
        if (!this) return;
        if (this.watchs && this.watchs.length) [].forEach.call(this.watchs, v => { v(); });
        this.watchs = []; // 清除所有绑定事件，这个不能删，避免重复绑定多次执行。。。mod by Dio Zhu. on 2018.5.9
        this.field = this['validate_id'] || this.vm._uid;
        if (this.field) {
            if (!Vue.$validation[this.field]) Vue.$validation[this.field] = Vue.prototype.$validation[this.field] = {}; // 初始化
            if (this.expression.required) _initRequired.call(this);
            if (this.expression.minLength || this.expression.maxLength) _initLength.call(this);
            if (this.expression.mail) _initMail.call(this);
            if (this.expression.tel) _initTel.call(this);
            if (this.expression.mobile) _initMobile.call(this);
            if (this.expression.card) _initCard.call(this);
            if (this.expression.numbers) _initNumbers.call(this);
            if (this.expression.text) _initText.call(this);
            if (this.expression.bank) _initBank.call(this);
            if (this.expression.sorderIdenty) _initSorderIdenty.call(this);
            if (this.expression.socialSecurityCard) _initSocialSecurityCard.call(this);
            if (this.expression.hongKongMacauPasser) _initHongKongMacauPasser.call(this);
            if (this.expression.taiwanPasser) _initTaiwanPasser.call(this);
            if (this.expression.houseHoldRegister) _initHouseHoldRegister.call(this);
            if (this.expression.interimId) _initInterimId.call(this);
            if (this.expression.passport) _initPassport.call(this);
            if (this.expression.username) _initUsername.call(this);
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
        _watchRequired.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchRequired.bind(this)); // 监听v-field的value
    },
    _watchRequired = function (newVal, oldVal) { // 监听输入与否
        if (newVal && newVal.length && !newVal.match(/^\s*$/g)) { // 如果存在，删除标识，如果不存在，写入提示语（或true）,这里我添加了一个不能全为空格的判断---孙硕；
            delete Vue.$validation[this.field]['required'];
            delete Vue.prototype.$validation[this.field]['required'];
        } else {
            let msg = _getMsg.call(this, 'required', '您有未录入的数据哦~');
            Vue.$validation[this.field]['required'] = Vue.prototype.$validation[this.field]['required'] = msg;
        }
    },
    _initLength = function () { // 初始化
        _watchLength.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchLength.bind(this)); // 监听v-field的value
    },
    _watchLength = function (newVal, oldVal) { // 监听输入长度
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
            if (newVal.length && newVal.length <= max) {
                delete Vue.$validation[this.field]['maxLength'];
                delete Vue.prototype.$validation[this.field]['maxLength'];
            } else {
                let msg = _getMsg.call(this, 'maxLength', '最多输入' + max + '字哦~');
                Vue.$validation[this.field]['maxLength'] = Vue.prototype.$validation[this.field]['maxLength'] = msg;
            }
        }
    },
    _initMail = function () { // 初始化
        _watchMail.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchMail.bind(this)); // 监听v-field的value
    },
    _watchMail = function (newVal, oldVal) { // 监听输入长度
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
        _watchTel.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchTel.bind(this)); // 监听v-field的value
    },
    _watchTel = function (newVal, oldVal) { // 监听输入长度
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
        _watchMobile.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchMobile.bind(this)); // 监听v-field的value
    },
    _watchMobile = function (newVal, oldVal) { // 监听输入长度
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
        _watchCard.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchCard.bind(this)); // 监听v-field的value
    },
    _watchCard = function (newVal, oldVal) { // 监听输入长度
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
        _watchNumbers.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchNumbers.bind(this)); // 监听v-field的value
    },
    _watchNumbers = function (newVal, oldVal) { // 监听输入长度
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
        _watchText.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchText.bind(this)); // 监听v-field的value
    },
    _watchText = function (newVal, oldVal) { // 监听输入长度
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
        _watchBank.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchBank.bind(this)); // 监听v-field的value
    },
    _watchBank = function (newVal, oldVal) { // 监听输入长度
        if (newVal && this.expression.bank) {
            if (utils.validateBank(newVal)) {
                delete Vue.$validation[this.field]['bank'];
                delete Vue.prototype.$validation[this.field]['bank'];
            } else {
                let msg = _getMsg.call(this, 'bank', '银行卡格式不对哦~');
                Vue.$validation[this.field]['bank'] = Vue.prototype.$validation[this.field]['bank'] = msg;
            }
        }
    },
    // 新添加的军人身份证验证---孙硕---2017-12-15
    _initSorderIdenty = function () { // 初始化
        _watchSorderIdenty.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchSorderIdenty.bind(this)); // 监听v-field的value
    },
    _watchSorderIdenty = function (newVal, oldVal) { // 监听输入长度
        if (newVal && this.expression.sorderIdenty) {
            if (utils.validateSorderIdenty(newVal)) {
                delete Vue.$validation[this.field]['sorderIdenty'];
                delete Vue.prototype.$validation[this.field]['sorderIdenty'];
            } else {
                let msg = _getMsg.call(this, 'sorderIdenty', '军人身份证格式不对哦~');
                Vue.$validation[this.field]['sorderIdenty'] = Vue.prototype.$validation[this.field]['sorderIdenty'] = msg;
            }
        }
    },
    // 新添加的社保卡验证--孙硕--2017-12-15；
    _initSocialSecurityCard = function () { // 初始化
        _watchSocialSecurityCard.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchSocialSecurityCard.bind(this)); // 监听v-field的value
    },
    _watchSocialSecurityCard = function (newVal, oldVal) { // 监听输入长度
        if (newVal && this.expression.socialSecurityCard) {
            if (utils.validateSocialSecurityCard(newVal)) {
                delete Vue.$validation[this.field]['socialSecurityCard'];
                delete Vue.prototype.$validation[this.field]['socialSecurityCard'];
            } else {
                let msg = _getMsg.call(this, 'socialSecurityCard', '社会保障卡格式不对哦~');
                Vue.$validation[this.field]['socialSecurityCard'] = Vue.prototype.$validation[this.field]['socialSecurityCard'] = msg;
            }
        }
    },
    // 新添加的港澳台通行证验证--孙硕--2017-12-15；
    _initHongKongMacauPasser = function () { // 初始化
        _watchHongKongMacauPasser.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchHongKongMacauPasser.bind(this)); // 监听v-field的value
    },
    _watchHongKongMacauPasser = function (newVal, oldVal) { // 监听输入长度
        if (newVal && this.expression.hongKongMacauPasser) {
            if (utils.validateHongKongMacauPasser(newVal)) {
                delete Vue.$validation[this.field]['hongKongMacauPasser'];
                delete Vue.prototype.$validation[this.field]['hongKongMacauPasser'];
            } else {
                let msg = _getMsg.call(this, 'hongKongMacauPasser', '港澳通行证格式不对哦~');
                Vue.$validation[this.field]['hongKongMacauPasser'] = Vue.prototype.$validation[this.field]['hongKongMacauPasser'] = msg;
            }
        }
    },
    // 新添加的台湾居民来往大陆通行证验证--孙硕--2017-12-15；
    _initTaiwanPasser = function () { // 初始化
        _watchTaiwanPasser.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchTaiwanPasser.bind(this)); // 监听v-field的value
    },
    _watchTaiwanPasser = function (newVal, oldVal) { // 监听输入长度
        if (newVal && this.expression.taiwanPasser) {
            if (utils.validateTaiwanPasser(newVal)) {
                delete Vue.$validation[this.field]['taiwanPasser'];
                delete Vue.prototype.$validation[this.field]['taiwanPasser'];
            } else {
                let msg = _getMsg.call(this, 'taiwanPasser', '台湾居民来往大陆通行证格式不对哦~');
                Vue.$validation[this.field]['taiwanPasser'] = Vue.prototype.$validation[this.field]['taiwanPasser'] = msg;
            }
        }
    },
    // 新添加的户口薄证验证--孙硕--2017-12-15；
    _initHouseHoldRegister = function () { // 初始化
        _watchHouseHoldRegister.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchHouseHoldRegister.bind(this)); // 监听v-field的value
    },
    _watchHouseHoldRegister = function (newVal, oldVal) { // 监听输入长度
        if (newVal && this.expression.houseHoldRegister) {
            if (utils.validateHouseHoldRegister(newVal)) {
                delete Vue.$validation[this.field]['houseHoldRegister'];
                delete Vue.prototype.$validation[this.field]['houseHoldRegister'];
            } else {
                let msg = _getMsg.call(this, 'houseHoldRegister', '户口薄格式不对哦~');
                Vue.$validation[this.field]['houseHoldRegister'] = Vue.prototype.$validation[this.field]['houseHoldRegister'] = msg;
            }
        }
    },
    // 新添加的临时居民身份证证验证--孙硕--2017-12-15；
    _initInterimId = function () { // 初始化
        _watchInterimId.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchInterimId.bind(this)); // 监听v-field的value
    },
    _watchInterimId = function (newVal, oldVal) { // 监听输入长度
        if (newVal && this.expression.interimId) {
            if (utils.validateInterimId(newVal)) {
                delete Vue.$validation[this.field]['interimId'];
                delete Vue.prototype.$validation[this.field]['interimId'];
            } else {
                let msg = _getMsg.call(this, 'interimId', '临时居民身份证格式不对哦~');
                Vue.$validation[this.field]['interimId'] = Vue.prototype.$validation[this.field]['interimId'] = msg;
            }
        }
    },
    // 新添加的临时居民身份证证验证--孙硕--2017-12-15；
    _initPassport = function () { // 初始化
        _watchPassport.call(this, this.vm.value); // 初始化
        this.vm.$watch('value', _watchPassport.bind(this)); // 监听v-field的value
    },
    _watchPassport = function (newVal, oldVal) { // 监听输入长度
        if (newVal && this.expression.passport) {
            if (utils.validatePassport(newVal)) {
                delete Vue.$validation[this.field]['passport'];
                delete Vue.prototype.$validation[this.field]['passport'];
            } else {
                let msg = _getMsg.call(this, 'passport', '护照格式不对哦~');
                Vue.$validation[this.field]['passport'] = Vue.prototype.$validation[this.field]['passport'] = msg;
            }
        }
    },
    // 用户名规则：中文五个、英文30个、不能特殊字符、不能中英混排。 Author by Dio Zhu. on 2018.5.9
    _initUsername = function () { // 初始化
        _watchUsername.call(this, this.vm.value); // 初始化
        // this.vm.$watch('value', _watchUsername.bind(this)); // 监听v-field的value
        // this.watchs.push(this.vm.$watch('value', _watchUsername.bind(this))); // 监听v-field的value
        // console.log(`【v-validator】${this.vm._uid}._initUsername: `, this.watchs);
        this.vm.$watch('value', _watchUsername.bind(this));
    },
    _watchUsername = function (newVal, oldVal) { // 监听输入长度
        // console.log(`【v-validator】${this.vm._uid}._watchUsername................. `, newVal);
        // if (newVal && this.expression.username) {
        //     if (utils.validateUsername(newVal)) {
        //         delete Vue.$validation[this.field]['username'];
        //         delete Vue.prototype.$validation[this.field]['username'];
        //         if (this.expression.warnFunc && typeof this.expression.warnFunc === 'function') this.expression.warnFunc('');
        //     } else {
        //         let msg = _getMsg.call(this, 'username', '请输入正确姓名格式~');
        //         Vue.$validation[this.field]['username'] = Vue.prototype.$validation[this.field]['username'] = msg;
        //         if (this.expression.warnFunc && typeof this.expression.warnFunc === 'function') this.expression.warnFunc(msg);
        //     }
        // }
        if (newVal && this.expression.username) {
            if (utils.validateUsername(newVal)) {
                delete Vue.$validation[this.field]['username'];
                delete Vue.prototype.$validation[this.field]['username'];
            } else {
                let msg = _getMsg.call(this, 'username', '用户名输入有误~');
                Vue.$validation[this.field]['username'] = Vue.prototype.$validation[this.field]['username'] = msg;
            }
        }
    };

// === init ===

let Validator = {
        inserted (el, binding, vnode) {
            if (typeof binding.value === 'undefined') return;
            el[ctx] = {
                el,
                vm: vnode.context,
                expression: binding.value,
                validate_id: binding.value.key || vnode.context._uid
            };
            const args = arguments;
            dobind.call(el[ctx], args);
            // el[ctx].vm.$nextTick(() => {
            //     setTimeout(() => { ; }, 0);
            // });
        },
        unbind (el, binding, vnode) {
            if (typeof binding.value === 'undefined') return;
            let field = binding.value.key || vnode.context._uid;
            Vue.$validation[field] = {};
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

