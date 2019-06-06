<template>
    <div class="page page-toast">
        <h2>弹出框参考样例</h2>

        <div class="attributes">
            <h2>API</h2>
            <p class="desc">v-row</p>
            <table>
                <tr><th>options参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>title</td><td>标题</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>message</td><td>内容</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>confirmButtonText</td><td>确认按钮文字</td><td>String</td><td>-</td><td>-</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <ul class="listview listview-form">
            <li>
                <v-cell title="点击弹出alert" value="默认样式" is-link @click.native="openAlert"></v-cell>
            </li>
            <li>
                <v-cell title="点击弹出alert" value="无标题、多行内容" is-link @click.native="openAlertMulti"></v-cell>
            </li>
            <li>
                <v-cell title="点击弹出alert" value="带参数" is-link @click.native="openAlertCus"></v-cell>
            </li>
            <li>
                <v-cell title="点击弹出confirm" value="默认样式" is-link @click.native="openConfirm"></v-cell>
            </li>
            <li>
                <v-cell title="点击弹出confirm" value="纯标题" is-link @click.native="openConfirmLimit"></v-cell>
            </li>
            <li>
                <v-cell title="点击弹出prompt" value="默认样式" is-link @click.native="openPrompt"></v-cell>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form"&gt;
            &lt;li&gt;
                &lt;v-cell title="点击弹出alert" value="默认样式" is-link @click.native="openAlert"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="点击弹出alert" value="无标题、多行内容" is-link @click.native="openAlertMulti"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="点击弹出alert" value="带参数" is-link @click.native="openAlertCus"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="点击弹出confirm" value="默认样式" is-link @click.native="openConfirm"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="点击弹出confirm" value="纯标题" is-link @click.native="openConfirmLimit"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="点击弹出prompt" value="默认样式" is-link @click.native="openPrompt"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>
        <pre v-highlightjs @touchend.stop><code class="html">
        import Messagebox from 'comb-ui/src/vendors/v-message-box.js';
        export default {
            components: { vCell },

            data () {
                return { };
            },
            mounted () {
                console.log('message-box.mounted... ');
            },
            methods: {
                openAlert: function () {
                    Messagebox.alert('请检查你的网络设置', '发送申请失败');
                },

                openAlertMulti: function () {
                    Messagebox.alert('请检查你的网络设置请检查你的网络设置请检查你的网络设置请检查你的网络设置');
                },
                openAlertCus: function () {
                    Messagebox({title: 'title', message: 'message', confirmButtonText: 'ye~'});
                },

                openConfirm () {
                    Messagebox.confirm('确定执行此操作?', '提示').then(act => {
                        this.$toast('您点击了确认~');
                    }).catch(act => {
                        this.$toast('您点击了取消~');
                    });
                },

                openConfirmLimit: function () {
                    Messagebox.confirm('',
                        `退出群聊后，
        将不再接受此群聊消息`
                    ).then(act => {
                        this.$toast('您点击了确认~');
                    }).catch(act => {
                        this.$toast('您点击了取消~');
                    });
                },

                openPrompt () {
                    Messagebox.prompt('请填写邀请码或者邀请者的手机号可以获得10个通宝', '', {
                        inputPlaceholder: '输入邀请码或邀请人手机号'
                    }).then(({ value }) => {
                        if (value) {
                            this.$toast(`您输入的是：${value}`);
                        }
                    }).catch(() => {});
                }
            }
        };
        </code></pre>

    </div>
</template>

<script>
    import vCell from 'comb-ui/src/vendors/v-cell.vue';
    import Messagebox from 'comb-ui/src/vendors/v-message-box.js';

    export default {
        components: { vCell },
        data () {
            return { };
        },
        mounted () {
            console.log('message-box.mounted... ');
        },

        beforeRouteLeave (to, from, next) {
            console.log('message-box.beforeRouteLeave... ');
            try {
                Messagebox.close(); // 离开前关闭
            } catch (e) {}
            next();
        },
        methods: {
            openAlert: function () {
                Messagebox.alert('请检查你的网络设置', '发送申请失败');
            },
            openAlertMulti: function () {
                Messagebox.alert('请检查你的网络设置请检查你的网络设置请检查你的网络设置请检查你的网络设置');
            },
            openAlertCus: function () {
                Messagebox({title: '标题', message: '内容', confirmButtonText: '知道了'});
            },

            openConfirm () {
                Messagebox.confirm('确定执行此操作?', '提示').then(act => {
                    this.$toast('您点击了确认~');
                }).catch(act => {
                    this.$toast('您点击了取消~');
                });
            },
            openConfirmLimit: function () {
                Messagebox.confirm('',
                    `退出群聊后，
    将不再接受此群聊消息`
                ).then(act => {
                    this.$toast('您点击了确认~');
                }).catch(act => {
                    this.$toast('您点击了取消~');
                });
            },

            openPrompt () {
                Messagebox.prompt('请填写邀请码或者邀请者的手机号可以获得10个通宝', '', {
                    inputPlaceholder: '输入邀请码或邀请人手机号'
                }).then(({ value }) => {
                    if (value) {
                        this.$toast(`您输入的是：${value}`);
                    }
                }).catch(() => {});
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-toast {

    }
</style>
