<template>
    <div class="page page-form">
        <h2>表单参考样例</h2>
        <div class="listview listview-form">

            <!--带提示文字的标签-->
            <ul>
                <li class="desc no-border">
                    提示文字（控制在一行之内）
                </li>
                <li class="border-top">
                    <v-label :options="{label:'标题'}" :cb="selectDemo"></v-label>
                </li>
            </ul>
            <!--带提示文字的标签-->
            <ul>
                <li class="no-border-bottom">
                    <v-label :options="{label:'标题'}" :cb="selectDemo"></v-label>
                </li>
                <li class="desc no-border">
                    释义文字（可多行，行距18）
                </li>
            </ul>
            <!--标签-->
            <ul>
                <li>
                    <v-label :options="{label:'标题', descr: '（说明文字说明文字说明）'}" :cb="selectDemo"></v-label>
                </li>
            </ul>
            <ul>
                <li>
                    <v-label :options="{label:'标题', descr: '说明文字', descrClass: 'right'}" :cb="selectDemo"></v-label>
                </li>
            </ul>
            <!--带icon，不带回调-->
            <ul>
                <li>
                    <v-label :options="{label:'标题', iconClass: 'icon icon-location'}"></v-label>
                </li>
            </ul>
            <!--带icon，带回调-->
            <ul>
                <li>
                    <v-label :options="{label:'标题', iconClass: 'icon icon-hart'}" :cb="selectDemo"></v-label>
                </li>
            </ul>
            <!--带icon，带回调，带说明，靠右-->
            <ul>
                <li>
                    <v-label :options="{label:'标题', iconClass: 'icon icon-link', descr: '说明文字', descrClass: 'right'}" :cb="selectDemo"></v-label>
                </li>
            </ul>
            <!--标题、内容靠右-->
            <ul>
                <li>
                    <v-label :options="{label:'标题', descr: '说明文字', descrClass: 'right'}"></v-label>
                </li>
            </ul>
            <!--标题、icon靠右(right)-->
            <ul>
                <li>
                    <v-label :options="{label:'标题', iconClass: 'icon icon-link right'}"></v-label>
                </li>
            </ul>
            <!--标题、icon靠右(right)-->
            <ul>
                <li>
                    <v-label :options="{label:'标题', iconClass: 'icon icon-sort light right'}"></v-label>
                </li>
            </ul>

            <!--标题、删除标识（默认靠左）-->
            <ul>
                <li>
                    <v-label :options="{label:'标题', delable: true}" :id="'1'" @delFunc="delFunc"></v-label>
                </li>
                <li>
                    <v-label :options="{label:'标题', delable: true}" :id="'2'" @delFunc="delFunc"></v-label>
                </li>
                <li>
                    <v-label :options="{label:'标题', delable: true}" :id="'3'" @delFunc="delFunc"></v-label>
                </li>
            </ul>
            <p class="desc">组件返回要删除的ID：{{ deletedId }}</p>

            <!--标题、显示列表-tags-->
            <ul>
                <li>
                    <v-label :options="{label:'标题', labelClass: 'light smaller'}"></v-label>
                </li>
            </ul>
            <ul>
                <li>
                    <v-label :options="{label:'标题', labelClass: 'weighter'}"></v-label>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
import vLabel from 'comb-ui/src/vendors/v-label';

export default {
    data () {
        return {
            deletedId: ''    //  返回删除的id标识
        };
    },
    created: function () {
        console.log('created');
    },
    mounted () {
        console.log('form mounted... ');
    },
    components: {
        'v-label': vLabel
    },
    methods: {
        selectDemo () {
            console.log('form.selectDemo: ');
        },
        handleChange (e) {
            console.log('form.handleChange: ', e);
        },
        delFunc (id, e) {
            this.deletedId = id;
            console.log('form.delFunc: ', id, e);
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
    }
</style>
