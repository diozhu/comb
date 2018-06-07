<template>
    <div class="page page-scroll-infinite">
        <v-scroll-infinite
            :prerender="10"
            :fetch="getList"
            :item="pScrollInfiniteItem"
            :tombstone="pScrollInfiniteTomstone"
        ></v-scroll-infinite>
    </div>
</template>

<script type="text/ecmascript-6">
//    import Vue from 'vue';
import vText from '../vendor/v-text.vue';
import vFeed from '../vendor/v-feed.vue';
//    import vScrollInfinite from '../vendor/v-scroll-infinite.js';
import vScrollInfinite from '../vendor/v-scroll-infinite.vue';
import pScrollInfiniteItem from '../components/p-scroll-infinite-item.vue';
import pScrollInfiniteTomstone from '../components/p-scroll-infinite-tomstone.vue';
import config from '../config';
import * as api from '../js/core/api';
import Stats from '../../static/js/vendor/stats.min.js'; // 状态插件
// import bus from '../vendor/eventbus.js';

export default {
//        components: { vText, vFeed, 'v-scroll-infinite': vScrollInfinite(Vue) },
    components: { vText, vFeed, vScrollInfinite },

    data () {
        return {
            pScrollInfiniteItem,
            pScrollInfiniteTomstone,
            flashTag: true, // 刷新标识
            listData: []
        };
    },

    computed: {
    },

    created () {
        this.$logger.log('scroll-infinite.created... ');
    },
    mounted () {
        this.$logger.log('scroll-infinite.mounted... ');
        // this.init();
    },

    activated () {
        this.$logger.log('scroll-infinite.activated... ', this.$router.direct());
        // if (this.$router.direct()) this.init();
    },
    methods: {
        init () {
            this.$logger.log(`scroll-infinite.${this._uid}.init: `);
            // bus.$emit('v-scroll-infinite.init');
        },
        initStatsPlugins () { // 初始化状态插件
            if (window.requestIdleCallback) {
                let self = this;
                let stats = new Stats();
                let domPanel = new Stats.Panel('Dom', '#0ff', '#002');
                stats.addPanel(domPanel);
                stats.showPanel(3);
                document.body.appendChild(stats.dom);
                setTimeout(function timeoutFunc () {
                    // Only update DOM node graph when we have time to spare to call
                    // numDomNodes(), which is a fairly expensive function.
                    requestIdleCallback(() => { //eslint-disable-line
                        domPanel.update(self.numDomNodes(document.body), 1500);
                        setTimeout(timeoutFunc, 100);
                    });
                }, 100);
            };
        },
        numDomNodes (node) {
            if (!node.children || node.children.length === 0) return 0;
            let childrenCount = Array.from(node.children).map(this.numDomNodes);
            return node.children.length + childrenCount.reduce(function (p, c) { return p + c; }, 0);
        },

        getList ({ offset = 0, limit = config.LIMIT }) {
            // this.$logger.log('scroll-infinite.methods.getList: ', ...arguments);
            return api.getInfiniteList({
                offset: offset,
                limit: limit
            }).then((res) => {
                // this.$logger.log(`scroll-infinite.methods.getList: SUCCESS ... offset: ${offset}, limit: ${limit} => response ${res.length} `);
                return Promise.resolve(res);
            });
        },
        goDetail (item) {
            this.$logger.log('scroll-infinite.methods.goDetail: ', item.title);
            // this.$router.push({name: 'scroll-two', query: {subjectId: this.$route.query.subjectId, id: item.id}});
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-scroll-infinite {
    }
</style>
