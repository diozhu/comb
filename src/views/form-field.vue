<template>
    <div class="page page-form-field">
        <h2>v-field</h2>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>title</td><td>左侧标题</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>placeholder</td><td>提示文字</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>clearEnable</td><td>是否显示输入框后面的清除按钮</td><td>Boolean</td><td>-</td><td>true</td></tr>
                <tr><td>limit</td><td>限制字数</td><td>Number</td><td>-</td><td>-</td></tr>
                <tr><td>alarm</td><td>指定最后几个字的时候改变倒计数的样式</td><td>Number</td><td>-</td><td>-</td></tr>
                <tr><td>type</td><td>原生input类型，添加了mobile，实际按照tel透传，但是按照mobile校验</td><td>String</td><td>text<br>email<br>mobile<br>password<br>number<br>date等</td><td>text</td></tr>
                <tr><td>validateable</td><td>是否开启校验，目前只针对email、tel、mobile校验</td><td>Boolean</td><td>-</td><td>true</td></tr>
                <tr><td>rows</td><td>html属性，透传</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>disabled</td><td>html属性，透传</td><td>Boolean</td><td>-</td><td>-</td></tr>
                <tr><td>readonly</td><td>html属性，透传</td><td>Boolean</td><td>-</td><td>-</td></tr>
                <tr><td>attr</td><td>可透传其他html属性，如：<br>{ maxlength: 10 }</td><td>Object</td><td>-</td><td>-</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <ul class="listview listview-form custom">
            <li>
                <v-field v-model="value1" title="标题" placeholder="提示文字..."></v-field>
            </li>
            <li>
                <v-field v-model="value2" title="标题" placeholder="不显示后面的清除图标" :clearEnable="false"></v-field>
            </li>
            <li>
                <v-field v-model="value3" title="标题" placeholder="提示文字改变颜色" class="placeholder-blue"></v-field>
            </li>
            <li>
                <v-field v-model="value4" title="标题" placeholder="限制输入，只能输入10个字" :limit="10"></v-field>
            </li>
            <li>
                <v-field v-model="valueDisabled" title="标题" placeholder="限制输入，只能输入10个字" :limit="10" :disabled="true"></v-field>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form custom"&gt;
            &lt;li&gt;
                &lt;v-field v-model="value1" title="标题" placeholder="提示文字..."&gt;&lt;/v-field&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-field v-model="value2" title="标题" placeholder="不显示后面的清除图标" :clearEnable="false"&gt;&lt;/v-field&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-field v-model="value3" title="标题" placeholder="提示文字改变颜色" class="placeholder-blue"&gt;&lt;/v-field&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-field v-model="value4" title="标题" placeholder="限制输入，只能输入10个字" :limit="10"&gt;&lt;/v-field&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-field v-model="valueDisabled" title="标题" placeholder="限制输入，只能输入10个字" :limit="10" :disabled="true"&gt;&lt;/v-field&gt;
            &lt;/li&gt;
       &lt;/ul&gt;
        </code></pre>

        <h2>类型及校验</h2>
        <p class="desc">
1. 默认开启了类型校验，会针对type为：email、tel的类型进行校验；
2. 校验结果（success、error）会添加在class上，可进行css复写；
3. 邮箱(email)：字母（或数字、下划线、-、. )，加上@，加上两位以上的字母（或数字、-)；
4. 电话(tel)：座机或手机，座机规则：0开头2~3位区号，可以加-（也可不加），加上7~8位数字；
5. 手机(mobile)：1开头的11位数字；
6. 如不需校验，请设置:validateable="false"。
        </p>
        <ul class="listview listview-form custom">
            <li>
                <v-field v-model="value5" title="邮箱" placeholder="请输入邮箱" type="email"></v-field>
            </li>
            <li>
                <v-field v-model="value6" title="电话" placeholder="请输入电话号码" type="tel"></v-field>
            </li>
            <li>
                <v-field v-model="value7" title="手机" placeholder="请输入手机号码" type="mobile"></v-field>
            </li>
            <li>
                <v-field v-model="value8" title="密码" placeholder="请输入密码" type="password"></v-field>
            </li>
            <li>
                <v-field v-model="value9" title="数字" placeholder="请输入数字" type="number"></v-field>
            </li>
            <li>
                <v-field v-model="value10" title="日期" placeholder="请输入日期" type="date"></v-field>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form custom"&gt;
            &lt;li&gt;
                &lt;v-field v-model="value5" title="邮箱" placeholder="请输入邮箱" type="email"&gt;&lt;/v-field&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-field v-model="value6" title="电话" placeholder="请输入电话号码" type="tel"&gt;&lt;/v-field&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-field v-model="value7" title="手机" placeholder="请输入手机号码" type="mobile"&gt;&lt;/v-field&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-field v-model="value8" title="密码" placeholder="请输入密码" type="password"&gt;&lt;/v-field&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-field v-model="value9" title="数字" placeholder="请输入数字" type="number"&gt;&lt;/v-field&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-field v-model="value10" title="日期" placeholder="请输入日期" type="date"&gt;&lt;/v-field&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <h2>textarea</h2>
        <ul class="listview listview-form custom">
            <li>
                <v-field v-model="value11" title="标题" placeholder="提示文字.." type="textarea" rows="4"></v-field>
            </li>
            <li>
                <v-cell title="标题文字"></v-cell>
            </li>
            <li>
                <v-field v-model="value13" placeholder="提示文字...最后10个字报警" type="textarea" rows="8" :limit="20" :alarm="10"></v-field>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form custom"&gt;
            &lt;li&gt;
                &lt;v-field v-model="value11" title="标题" placeholder="提示文字.." type="textarea" rows="4"&gt;&lt;/v-field&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="标题文字"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-field v-model="value13" placeholder="提示文字.." type="textarea" rows="8" :limit="20" :alarm="10"&gt;&lt;/v-field&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <!--<div class="listview listview-form">-->
            <!--&lt;!&ndash;普通样式&ndash;&gt;-->
            <!--<ul>-->
                <!--<li class="height-auto">-->
                    <!--<v-field v-model="value1" label="标题" placeholder="提示文字..." type="textarea" rows="4"> </v-field>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<p class="desc">当前值：{{ value1 }}</p>-->

            <!--<ul>-->
                <!--<li class="height-auto no-border-b">-->
                    <!--<v-field v-model="value2" placeholder="提示文字..." type="textarea" rows="8" limit="20" class="limit-outer"> </v-field>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<p class="desc">当前值（最多20个字）：{{ value2 }}</p>-->

            <!--<ul>-->
                <!--<li class="height-auto">-->
                    <!--<v-field v-model="value3" placeholder="提示文字..." type="textarea" rows="8" limit="20"> </v-field>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<p class="desc">当前值（最多20个字）：{{ value3 }}</p>-->
        <!--</div>-->

        <div class="blank"></div>
    </div>
</template>

<script>
import vField from 'comb-ui/src/vendors/v-field';
import vCell from 'comb-ui/src/vendors/v-cell.vue';

export default {
    components: { vCell, vField },
    data () {
        return {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            value8: '',
            value9: '',
            value10: '',
            value11: '',
            value12: '',
            value13: '',
            valueDisabled: '被禁用'
        };
    },
    mounted () {
        console.log('form-field mounted... ');
    },
    methods: {

    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-form-field {

        .custom {

            .placeholder-blue {

                input,
                textarea {
                    &::-webkit-input-placeholder {/* WebKit browsers */
                        color: #007aff;
                    }
                }
            }

            .v-field__core {

                &.error {
                    border-left: #fa5a5a pxTorem(3px) solid;
                    padding-left: pxTorem(7px);
                }
            }
        }

        .v-field {
            .v-field__limit.alarm {
                color: orangered;
            }
        }

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
