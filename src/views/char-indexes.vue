<template>
    <div class="page page-char-indexes">
        <h2>api</h2>

        <p class="desc">字符索引</p>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>{}</td><td>接口需要参数</td><td>Object</td><td>-</td><td>-</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <p class="desc"></p>
        <v-char-indexes v-model="currentLetter"></v-char-indexes>
        <ul class="listview simple">
            <li v-for="(item, index) in list" :key="index">
                <p v-if="index == 0 || index > 0 && item.first_letter != list[index - 1].first_letter" :ref="item.first_letter">
                    <a :id="item.first_letter">{{item.first_letter}}</a>
                </p>
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    import vRow from '../vendor/v-row.vue';
    import vCol from '../vendor/v-col.vue';
    import vButton from '../vendor/v-button';
    import vCharIndexes from '../vendor/v-char-indexes';
    // import * as utils from '../js/utils/utils.js';
    import * as dom from '../js/utils/dom.js';
    import * as api from '../js/core/api.js';
    import Trans from '../js/core/trans.js';

    export default {
        components: { vButton, vRow, vCol, vCharIndexes },

        data () {
            return {
                list: [{}],
                currentLetter: ''
            };
        },

        mounted () {
            this.$logger.log('char-indexes.mounted...');
            this.init();
        },

        watch: {
            currentLetter (val) {
                // this.$logger.log('char-indexes.watch.currentLetter: ', val);
                this.scrollTo(val);
            }
        },

        methods: {
            init () {
                this.$logger.log('char-indexes.init...');
                api.getDelay({delay: 500}).then(res => {
                    this.$logger.log('char-indexes.init.success...');
                    this.$set(this, 'list', [
                        {'first_letter': 'B', 'name': '博士A'},
                        {'first_letter': 'B', 'name': '博士B'},
                        {'first_letter': 'B', 'name': '博士后A'},
                        {'first_letter': 'B', 'name': '博士后B'},
                        {'first_letter': 'D', 'name': '大宝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'D', 'name': '大宝贝'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'},
                        {'first_letter': 'Z', 'name': '张三'}
                    ]);
                }).catch(e => this.$toast(Trans(e)));
            },
            scrollTo (val) {
                this.$logger.log('char-indexes.scrollTo: ', val);
                if (this.$refs[val] && this.$refs[val].length) {
                    let target = dom.getScrollEventTarget(this.$refs[val][0]),
                        th = target.offsetHeight,
                        t = this.$refs[val][0].offsetTop;
                    this.$logger.log('char-indexes.scrollTo: ', val, target, th, t);
                    // if (t > th) {
                    // }
                    target.scrollTop = t;
                }
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-char-indexes {
        padding: 0 ($grid-gutter-width / 2);

    }
</style>
