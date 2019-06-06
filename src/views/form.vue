<template>
    <div class="page page-form">
        <h2>表单组件</h2>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>value</td><td>传入的绑定对象，规定表单中有多少字段</td><td>Object</td><td>-</td><td>-</td></tr>
                <tr><td>options</td><td>传入的字段描述对象，描述每个字段为什么类型的组件，及disabled等限制条件</td><td>Object</td><td>-</td><td>-</td></tr>
                <tr><td>dividers</td><td>传入的分隔对象，可按位置和字段放置，提供slot</td><td>Object</td><td>-</td><td>-</td></tr>
                <tr><td>validators</td><td>传入的校验对象</td><td>Object</td><td>-</td><td>-</td></tr>
            </table>
        </div>
        <br/>
        <p class="desc"><b>必填项*的显示：</b>组件依据validators中是否包含required对象来决定*的显示与否；</p>
        <p class="desc"><b>关于组件的禁用：</b>组件依据options中的disabled针对组件内元素进行禁用；</p>
        <p class="desc"><b>地址联动：</b>组件封装了地址三级联动，并提供默认值赋值功能，需要指定options的type=picker、pickerType=region，注意picker类绑定值的时候要处理成picker对应的对象，而不是值！</p>
        <p class="desc"><b>组件的动态显示及隐藏：</b>通过options中的displayExpr对象指定，该对象通过指定字段及条件依据，组件据此进行显示、隐藏；</p>
        <p class="desc"><b>根据证件类型判断证件号：</b>需要在validators中指定证件类型和证件号为必填项，组件才会受理后续验证；字段名必须依照规则包含'IdentyType'及'IdentyNo'，组件会以此查找字段并进行watch绑定；</p>

        <h2>示例</h2>
        <v-form v-model="detail" :options="options" :dividers="dividers" :validators="validators"></v-form>
        <!--<div class="blank"></div>-->
        <div class="form-buttons">
            <v-button size="small" @click="handleSubmit">必填验证</v-button>
        </div>

        <div class="blank"></div>
    </div>
</template>

<script>
import vForm from 'comb-ui/src/vendors/v-form';
import vRow from 'comb-ui/src/vendors/v-row.vue';
import vCell from 'comb-ui/src/vendors/v-cell.vue';
import vButton from 'comb-ui/src/vendors/v-button.vue';

export default {
    components: { vRow, vCell, vForm, vButton },
    data () {
        return {
            detail: {},
            options: {},
            dividers: {},
            validators: {}
        };
    },
    mounted () {
        console.log('form.mounted... ');
        this.init();
    },
    watch: {
        // detail (val) {
        //     console.log('form.watch.detail: ', val);
        // }
    },
    methods: {
        init () {
            console.log('form.init... ');
            // this.validator = this.$validation;
            this.$set(this, 'detail', { // 初始化值对象绑定，picker类需按对象初始化。Author by Dio Zhu. on 2018.5.11
                username: '',
                sex: 1,
                studentIdentyType: {key: 3, values: '军人身份证'},
                studentIdentyNo: '', // 证件号码，根据证件类型进行校验、提示，必选。Author by Dio Zhu. on 2018.6.21
                studentIdentyImages: [], // 证件照，当证件类型非身份证时，必选。Author by Dio Zhu. on 2018.6.21
                birthday: '2001-02-03',
                region: [{key: 2, values: '广东'}, {key: 5, values: '深圳'}, {key: 1754, values: '南山区'}],
                address: '',
                begin_time: '2018-05-20',
                // 分隔符
                mainName: '',
                mainIdentyType: {key: 1, values: '身份证'},
                mainIdentyNo: '',
                mainPhone: '',
                // 分隔符
                standbyName: '张三',
                standbyIdentyType: {key: 1, values: '身份证'},
                standbyIdentyNo: '110222199009090099',
                standbyPhone: '18600000002',
                // 分隔符
                desc: ''
            });
            // 初始化组件类型。Author by Dio Zhu. on 2018.5.11
            this.$set(this.options, 'username', { label: '学员姓名', type: 'text', placeholder: '请输入学员姓名' });
            this.$set(this.options, 'sex', { label: '学员性别', type: 'radio', options: [{label: '男', value: 0}, {label: '女', value: 1}], mode: 'list horizontal', radioClasses: 'disk' });
            this.$set(this.options, 'studentIdentyType', { label: '证件类型', type: 'picker', key: 'key', valueKey: 'values', slots: [ { flex: 1, values: [ {key: 1, values: '身份证'}, {key: 2, values: '护照'}, {key: 3, values: '军人身份证'}, {key: 4, values: '社会保障卡'}, {key: 5, values: '港澳通行证'}, {key: 6, values: '台湾居民来往大陆通行证'}, {key: 7, values: '户口薄'}, {key: 8, values: '临时居民身份证'}, {key: 9, values: '外国人永久居留证'} ] } ] });
            this.$set(this.options, 'studentIdentyNo', { label: '证件号码', type: 'text', placeholder: '请输入学员证件号码' });
            this.$set(this.options, 'studentIdentyImages', { label: '证件照', type: 'picker', placeholder: '请上传学员证件照', displayExpr: { key: 'studentIdentyType.key', exp: '!==', val: 1 } });
            this.$set(this.options, 'birthday', { label: '学员生日', type: 'datetime-picker', pickerType: 'date', placeholder: '请选择学员生日', displayExpr: { key: 'studentIdentyType.key', exp: '!==', val: 1 } });
            this.$set(this.options, 'region', { label: '所在地区', type: 'picker', pickerType: 'region', placeholder: '请选择所在地区', key: 'key', valueKey: 'values', slots: [ { flex: 1, className: 'slot1', textAlign: 'center' }, { flex: 1, className: 'slot2', textAlign: 'center' }, { flex: 1, className: 'slot3', textAlign: 'center' } ] });
            this.$set(this.options, 'address', { label: '详细地址', type: 'text', placeholder: '请输入您的通讯地址', placeholderRemark: '＊此地址会用于赠品邮寄，请您仔细填写' });
            this.$set(this.options, 'begin_time', { label: '课程有效期', type: 'datetime-picker', pickerType: 'date', placeholder: '请选择课程开始时间' });
            // 分隔符
            this.$set(this.options, 'mainName', { label: '主监护人', type: 'text', placeholder: '请输入监护人姓名' });
            this.$set(this.options, 'mainIdentyType', { label: '证件类型', type: 'picker', key: 'key', valueKey: 'values', slots: [ { flex: 1, values: [ {key: 1, values: '身份证'}, {key: 2, values: '护照'}, {key: 3, values: '军人身份证'}, {key: 4, values: '社会保障卡'}, {key: 5, values: '港澳通行证'}, {key: 6, values: '台湾居民来往大陆通行证'}, {key: 7, values: '户口薄'}, {key: 8, values: '临时居民身份证'}, {key: 9, values: '外国人永久居留证'} ] } ] });
            this.$set(this.options, 'mainIdentyNo', { label: '证件号码', type: 'text', placeholder: '请输入证件号码' });
            this.$set(this.options, 'mainPhone', { label: '手机号', type: 'tel', placeholder: '请输入电话号码' });
            // 分隔符
            this.$set(this.options, 'standbyName', { disabled: true, label: '备用监护人', type: 'text', placeholder: '请输入监护人姓名' });
            this.$set(this.options, 'standbyIdentyType', { disabled: true, label: '证件类型', type: 'picker', key: 'key', valueKey: 'values', slots: [ { flex: 1, values: [ {key: 1, values: '身份证'}, {key: 2, values: '护照'}, {key: 3, values: '军人身份证'}, {key: 4, values: '社会保障卡'}, {key: 5, values: '港澳通行证'}, {key: 6, values: '台湾居民来往大陆通行证'}, {key: 7, values: '户口薄'}, {key: 8, values: '临时居民身份证'}, {key: 9, values: '外国人永久居留证'} ] } ] });
            this.$set(this.options, 'standbyIdentyNo', { disabled: true, label: '证件号码', type: 'text', placeholder: '请输入证件号码' });
            this.$set(this.options, 'standbyPhone', { disabled: true, label: '手机号', type: 'tel', placeholder: '请输入电话号码' });
            // 分隔符
            this.$set(this.options, 'desc', { label: '备注', type: 'textarea', placeholder: '请输入您的备注', limit: 10, alarm: 5 });

            // 设定表单分割
            this.$set(this, 'dividers', {
                0: {label: '必填项'}, // 根据位置分割，按照对象的下标数，放在字段前面
                begin_time: {},       // 放在某个字段之后
                mainPhone: {},       // 放在某个字段之后
                standbyPhone: {}       // 放在某个字段之后
            });

            // 设定校验规则，通过key指定validator指令提示的顺序。Author by Dio Zhu. on 2018.5.16
            // this.$set(this.validators, 'username', { key: Object.keys(this.validators).length + '_username', required: { rule: true, message: '亲~姓名得填~' }, minLength: { rule: 2, message: '姓名最少输入2个字哦~' } });
            // 证件号码的字段标识必须以'IdengyType'结尾！ Author by Dio Zhu. on 2018.5.16
            this.$set(this.validators, 'studentIdentyType', { key: Object.keys(this.validators).length + '_studentIdentyType', required: { rule: true, message: '请选择学员证件类型' } });
            // 证件号码的校验需要通过证件类型判断，证件号码的字段标识必须以'IdengyNo'结尾，组件内部会找到其对应的证件类型进行选择判断！ Author by Dio Zhu. on 2018.5.16
            this.$set(this.validators, 'studentIdentyNo', { key: Object.keys(this.validators).length + '_studentIdentyNo', required: { rule: true, message: '请填写学生证件号码' } });
            this.$set(this.validators, 'studentIdentyImages', { key: Object.keys(this.validators).length + '_studentIdentyImages', required: { rule: true, message: '请上传学生证件照' } });

            // // 初始化证件类型picker的默认位置
            // this.$set(this.options.studentIdengyType.slots[0], 'defaultIndex', 1);
        },
        validate () {
            for (let key in this.$validation) {
                if (this.$validation.hasOwnProperty(key)) {
                    for (let k in this.$validation[key]) {
                        if (this.$validation[key].hasOwnProperty(k)) {
                            this.$toast(this.$validation[key][k]);
                            return false;
                        }
                    }
                }
            }
            return true;
        },
        handleSubmit () {
            console.log('form.handleSubmit... ', this.$validation);
            if (this.validate()) {
                this.$toast('校验完毕~');
            }
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-form {

        .v-form {

            .v-cell__value {

                .alarm {
                    color: darkred;
                }
            }
        }

        .form-buttons {
            padding: pxTorem(20);
            text-align: right;
        }

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
