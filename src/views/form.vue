<template>
    <div class="page page-form">
        <h2>表单</h2>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
            </table>
        </div>

        <h2>默认</h2>
        <v-form v-model="detail" :options="options"></v-form>

        <div class="form-buttons">
            <v-button size="small" @click="handleSubmit">必填验证</v-button>
        </div>

        <div class="blank"></div>
    </div>
</template>

<script>
import vForm from '../vendor/v-form';
import vRow from '../vendor/v-row.vue';
import vCell from '../vendor/v-cell.vue';
import vButton from '../vendor/v-button.vue';

export default {
    components: { vRow, vCell, vForm, vButton },
    data () {
        return {
            detail: {},
            options: {}
        };
    },
    mounted () {
        this.$logger.log('form.mounted... ');
        this.init();
    },
    watch: {
        // detail (val) {
        //     this.$logger.log('form.watch.detail: ', val);
        // }
    },
    methods: {
        init () {
            this.$logger.log('form.init... ');
            // this.validator = this.$validation;
            this.$set(this, 'detail', {
                username: '',
                sex: 1,
                birthday: '2001-02-03',
                mobile: ''
            });
            this.$set(this, 'options', {
                username: {
                    label: '学员姓名',
                    type: 'text',
                    placeholder: '请输入学员姓名'
                },
                sex: {
                    label: '学员性别',
                    type: 'radio',
                    options: [{label: '男', value: 0}, {label: '女', value: 1}],
                    mode: 'list horizontal',
                    radioClasses: 'disk'
                },
                birthday: {
                    label: '学员生日',
                    type: 'datetime-picker',
                    placeholder: '请选择学员生日'
                },
                mobile: {
                    label: '电话',
                    type: 'number',
                    placeholder: '请输入电话号码'
                }
            });
        },
        handleSubmit () {
            this.$logger.log('form.handleSubmit... ');
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-form {

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
