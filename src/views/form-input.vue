<template>
    <div class="page page-form">
        <h2>表单参考样例</h2>

        <div class="attributes">
            <h2>v-input参数</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>title</td><td>左侧标题</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><th>slots</th><th colspan="4">说明</th></tr>
                <tr><td>-</td><td colspan="4">透传的内容</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <div class="listview listview-form">
            <!--普通样式-->
            <ul>
                <li>
                    <v-input :id="'txt1'" :options="{ label:'标题', descr: '输入提示文字'}"> </v-input>
                </li>
                <li>
                    <v-input :id="'txt2'" :options="{label:'标题', descr: '输入提示文字'}" :cb="simpleAlert"></v-input>
                </li>
                <li>
                    <v-input :id="'txt3'" :options="{label:'标题', descr: '输入提示文字'}"></v-input>
                </li>
            </ul>

            <!--限制字数-->
            <ul>
                <li>
                    <v-input :options="{ label:'标题', descr: '只能输入20个字符'}" :limit="20"> </v-input>
                </li>
            </ul>

            <!--轻标题&蓝色提示语-->
            <ul>
                <li>
                    <v-input :id="'txt4'" :options="{label:'标题', labelClass: 'light', inputClass: 'holder-blue', descr: '输入提示文字'}"></v-input>
                </li>
                <li>
                    <v-input :id="'txt5'" :options="{label:'标题', labelClass: 'light', inputClass: 'holder-blue', descr: '输入提示文字'}"></v-input>
                </li>
                <li>
                    <v-input :id="'txt6'" :value="'填写后的内容'" :options="{label:'标题', labelClass: 'light', inputClass: 'holder-blue', descr: '输入提示文字'}"></v-input>
                </li>
            </ul>
            <!--分割线-->
            <ul>
                <li>
                    <v-input :id="'txt7'" :value="'填写/操作后内容'" :options="{label:'标题', labelClass: 'light', inputClass: 'holder-blue', descr: '输入提示文字'}"></v-input>
                </li>
                <li>
                    <v-input :id="'txt8'" :value="'填写/操作后内容'" :options="{label:'标题', labelClass: 'light', inputClass: 'holder-blue', descr: '输入提示文字'}"></v-input>
                </li>
                <li>
                    <v-input :id="'txt9'" :value="'填写/操作后内容'" :options="{label:'标题', labelClass: 'light', inputClass: 'holder-blue', descr: '输入提示文字'}"></v-input>
                </li>
            </ul>
            <!--分割线-->
            <ul>
                <li>
                    <v-input :options="{ label:'标题', descr: '数字九宫格'}" type="number"> </v-input>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import vInput from 'comb-ui/src/vendors/v-input';

export default {
    data () {
        return {
            radioValue: '选项A',
            radioValue2: '',
            radioValue3: '',
            checkboxValue1: true,
            checkboxValue2: false
        };
    },
    created: function () {
        console.log('created');
    },
    mounted () {
        console.log('form mounted... ');
    },
    components: {
        'v-input': vInput
    },
    methods: {
        go (name) {
            this.$router.push(name);
        },
        simpleAlert () {
            console.log('this is simple alert !');
        },
        selectDemo () {
            console.log('form.selectDemo: ');
        },
        handleChange (e) {
            console.log('form.handleChange: ', e);
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-form {
        h2 {
            margin-left: pxTorem(15px);
            line-height: pxTorem(40px);
        }

        .desc {
            height: pxTorem(28px);
            font-size: pxTorem(14px);
            line-height: pxTorem(28px);
            padding-left: pxTorem(15px);
            color: #777E8C;
            background: #f2f2f4;
        }

        .v-radio.position .v-radio__r{
            height: pxTorem(64px);
            line-height: pxTorem(64px);
        }
    }
</style>
