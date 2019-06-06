<template>
    <div class="page-char-indexes">
        <div class="page" ref="page">
            <h2>字符索引</h2>

            <p class="desc">默认显示A ~ Z的26个字母，可通过letters参数进行定制；</p>
            <p class="desc">滑动、点击组件内的字母，都触发input事件，返回value值，外层可直接通过v-model进行绑定，然后watch value的变化进行滚动处理；</p>
            <p class="desc">滚动页面时可监听scroll事件，并通知组件显示对应字符；</p>
            <p class="desc">组件定位使用fixed，使用组件时，需要把组件放在滚动容器（.page）之外;</p>

            <div class="attributes">
                <h2>API</h2>
                <table>
                    <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                    <tr><td>letters</td><td>定制的字符串数组</td><td>Array</td><td>-</td><td>['A', ~ , 'Z']</td></tr>
                    <tr><td>value</td><td>当前选择的字符</td><td>String</td><td>-</td><td>-</td></tr>
                    <tr><td>showValue</td><td>当前滚动后对应的字符，只让组件显示的，与上面的value不同，不参与回滚逻辑，避免冲突</td><td>String</td><td>-</td><td>-</td></tr>
                </table>
            </div>

            <h2>示例</h2>
            <p class="desc"></p>
            <ul class="listview simple">
                <li v-for="(item, index) in list" :key="index">
                    <p v-if="index == 0 || index > 0 && item.first_letter != list[index - 1].first_letter"
                       :key = "item.first_letter"
                       :ref="item.first_letter"
                    >
                        <a :id="item.first_letter">{{item.first_letter}}</a>
                    </p>
                    {{item.name}}
                </li>
            </ul>
        </div>
        <v-char-indexes v-model="currentLetter" :letters="letters" :showLetter="showLetter"></v-char-indexes>
    </div>
</template>

<script>
import vRow from 'comb-ui/src/vendors/v-row.vue';
import vCol from 'comb-ui/src/vendors/v-col.vue';
import vButton from 'comb-ui/src/vendors/v-button';
import vCharIndexes from 'comb-ui/src/vendors/v-char-indexes';
import * as utils from '../js/utils/utils.js';
import * as dom from '../js/utils/dom.js';
import * as api from '../js/core/api.js';
import Trans from '../js/core/trans.js';

export default {
    components: { vButton, vRow, vCol, vCharIndexes },
    data () {
        return {
            letters: ['#', 'B', 'D', 'Z'],
            list: [{}],
            currentLetter: '',
            showLetter: '',
            target: null,
            scrolling: false
        };
    },
    mounted () {
        console.log('char-indexes.mounted...');
        this.init();
    },
    watch: {
        currentLetter (val) {
            // console.log('char-indexes.watch.currentLetter: ', val);
            this.scrollTo(val);
        }
    },
    methods: {
        init () {
            // 找到滚动容器，并监听滚动事件
            this.target = dom.getScrollEventTarget(this.$refs.page);
            if (this.target) this.target.addEventListener('scroll', utils.throttle(this.scrollHandle, 100));
            console.log('char-indexes.init...', this.target);

            // 模拟数据
            api.getDelay({delay: 500}).then(res => {
                console.log('char-indexes.init.success...');
                this.$set(this, 'list', [
                    {'first_letter': '#', 'name': '阿斯蒂芬'},
                    {'first_letter': '#', 'name': '阿斯顿发送到发'},
                    {'first_letter': '#', 'name': '粗大的司法所'},
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
        scrollTo (val) { // 当前key变化时，重置滚动容器中滚动条的位置。 Author by Dio Zhu. on 2018.5.9
            // console.log('char-indexes.scrollTo: ', val);
            if (this.$refs[val] && this.$refs[val].length) {
                if (!this.target) this.target = dom.getScrollEventTarget(this.$refs[val][0]);
                let t = this.$refs[val][0].offsetTop;
                this.target.scrollTop = t;
                this.scrolling = true;
                setTimeout(() => { this.scrolling = false; }, 1000);
            }
        },
        scrollHandle () { // 监听滚动容器滚动，计算当前是哪个字符。 Author by Dio Zhu. on 2018.5.9
            if (this.scrolling) return;
            let t = this.target.scrollTop,
                k = '';
            for (let key in this.$refs) {
                if (this.$refs.hasOwnProperty(key) && this.$refs[key][0] && this.$refs[key][0].offsetTop < t) k = key;
            }
            // console.log('char-indexes.scrollHandle: ', k);
            // this.currentLetter = k; // 会与上面的逻辑冲突。。。
            this.showLetter = k;
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-char-indexes {
        height: 100%;
        padding: 0 ($grid-gutter-width / 2);

    }
</style>
