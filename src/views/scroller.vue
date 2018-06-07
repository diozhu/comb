<template>
    <div class="page page-scrollor">
        <!--<div class="num"><p v-for="n in 500">模拟数据{{n}}</p></div>-->
        <v-refresher :func="init">
            <v-row v-sticky.top="0">
                <v-col>
                    <v-button styles="circle">top 0</v-button>
                </v-col>
            </v-row>

            <v-scroller v-model="listData" :func="getList" func-type="section" :tombstone="true">
                <!--<template v-for="(item, index) in listData">-->
                    <!--<div :key="index" class="listitem" :class="'item-' + index">-->
                        <!--<img src="../assets/default-avatar.png"/>-->
                        <!--<div class="con">-->
                            <!--<p>模拟数据第 {{ index }} 条</p>-->
                            <!--<p v-for="n in parseInt(Math.random() * 10)">随机 {{ n }} 行</p>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</template>-->
                <!--<transition-group name="modal">-->
                    <template v-for="(item, index) in listData">
                        <div v-if="item.shown" :key="index" class="listitem">
                            <img src="../assets/default-avatar.png"/>
                            <div class="con">
                                <p>模拟数据第 {{ index }} 条</p>
                                <!--<p v-for="n in parseInt(Math.random() * 10)">随机 {{ n }} 行</p>-->
                                <p v-for="n in item.list" :key="n">随机 {{ n }} 行</p>
                            </div>
                        </div>
                        <!--<div v-else :key="index" :style="{height: (item.height || 100) + 'px'}" class="listitem tombstone"><div></div><div><p></p><p></p></div></div>-->
                        <div v-else :key="index" class="listitem tombstone"><div></div><div><p></p><p></p></div></div>
                    </template>
                <!--</transition-group>-->
                <!--<template v-for="(item, index) in listData">-->
                    <!--<div :key="index" class="listitem tombstone"><div></div><div><p></p><p></p></div></div>-->
                <!--</template>-->
            </v-scroller>

            <v-row v-sticky.bottom>
                <v-col>
                    <v-button styles="circle">bottom 0</v-button>
                </v-col>
            </v-row>
        </v-refresher>
    </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import VSticky from '../vendor/v-sticky.js';
import vRefresher from '../vendor/v-refresher.vue';
import vScroller from '../vendor/v-scroller.vue';
import vRow from '../vendor/v-row.vue';
import vCol from '../vendor/v-col.vue';
import vText from '../vendor/v-text.vue';
import vButton from '../vendor/v-button.vue';
import * as api from '../js/core/api';
import { mapGetters } from 'vuex';
Vue.use(VSticky);

export default {
    components: { vRefresher, vScroller, vRow, vCol, vText, vButton },

    data () {
        return {
            listData: []
        };
    },

    computed: {
        ...mapGetters(['userInfo'])     // 从store中获取当前登陆用户信息
    },
    mounted () {
        this.$logger.log('scrollor.mounted... ');
        this.init();
    },

    methods: {
        init () {
            return api.getDelay().then(res => {
                this.$logger.log('scrollor.init.success: ', res);
                return Promise.resolve({});
            });
        },
        getList ({ offset, limit }) {
            // return api.getRandomList({offset: offset, limit: limit});
            return api.getInfiniteList({offset: offset, limit: limit}).then(res => {
                [].forEach.call(res, v => {
                    if (!v.list) v.list = [];
                    for (let i = 0, len = parseInt(Math.random() * 10); i < len; i++) v.list[i] = i;
                });
                return Promise.resolve(res);
            });
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    ::-webkit-scrollbar {
        width: 0px!important;
        height: 0px!important;
        opacity:0;
        display: none!important;;
    }
    html {
        height: initial!important;
        user-select: none;

        body {
            width: 100%!important;
            height: initial!important;
            position: relative!important;
            overflow-x: hidden!important;
            overflow-y: initial!important;
            -webkit-overflow-scrolling: touch;
            &::-webkit-scrollbar {
                display: none!important;;
            }

            .page {
                height: initial!important;
                position: relative!important;
                overflow: initial!important;
            }

        }
    }

    .page-scrollor {
        .v-refresh {
            height: initial!important;
            overflow: initial!important;

            .v-refresh__container {
                height: initial!important;
                overflow: initial!important;
            }
        }

        .v-row {
            height: pxTorem(32);
        }
        .v-col {
            width: 100%;
        }

        .listitem {
            padding: pxTorem(8) pxTorem(15);
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: row;
            border-bottom: #ccc 1px solid;
            background: #FFF;

            img {
                width: pxTorem(60);
            }
            .con {
                margin: 0 0 0 pxTorem(10);
            }

            &.tombstone {
                div:first-child {
                    width: pxTorem(60);
                    height: pxTorem(60);
                    background: #F6F6F6;
                }
                div:last-child {
                    flex: 1 1 auto;

                    p {
                        width: 100%;
                        height: pxTorem(10);
                        background: #F6F6F6;
                        margin: 0 0 pxTorem(10) pxTorem(10);
                    }
                }
            }
        }
    }
</style>
