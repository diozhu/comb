<template>
    <div class="v-char-indexes" ref="container" @touchmove="handleMove">
        <div v-for="(item, index) in keys" :key="index" class="v-char-indexes__frm" :class="{'cur fade': item == value}">
            <p class="v-char-indexes__con" @click="handleClick(item)">
                {{item}}
            </p>
            <p v-show="item == value" class="label">{{item}}</p>
        </div>
    </div>
</template>
<script>
    // import * as utils from '../js/utils/utils'; //eslint-disable-line

    /**
     *              -- Author by Dio Zhu. on 2018.4.10
     */

    export default {
        name: 'v-char-indexes',
        components: {},

        props: {
            value: {        // 当前选择字符
                type: String,
                default: ''
            }
        },

        data () {
            return {
                keys: [] // 26个大写字母
            };
        },

        computed: {
        },

        watch: {
        },

        created () {
            this.$logger.log(`v-char-indexes.created: `, this.value);
            this.init();
        },

        methods: {
            init () { // 初始化
                this.$logger.log('v-char-indexes.init...');
                for (let i = 0, len = 26;i < len;i++) this.keys.push(String.fromCharCode(65 + i));
            },
            handleClick (item) {
                // this.$logger.log('v-char-indexes.handleClick...', item);
                this.$emit('input', item);
            },
            handleMove (e) {
                let h = parseInt(this.$refs.container.offsetHeight / 26),
                    t = this.$refs.container.offsetTop,
                    y = e.touches[0].clientY,
                    idx = parseInt((y - t) / h),
                    letter = this.keys[idx] || this.keys[0];
                // this.$logger.log('v-char-indexes.handleMove...', idx, letter);
                if (this.value !== letter) this.$emit('input', letter);
            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";
    .v-char-indexes {
        /*border: red 1px solid;*/
        width: pxTorem(20);
        height: pxTorem(520);
        text-align: center;
        position: fixed;
        right: pxTorem(12);
        top: 50%;
        display: block;
        /*margin-top: -50%;*/
        margin-top: pxTorem(-260);
    }

    .v-char-indexes__frm {
        position: relative;

        .label {
            position: absolute;
            font-size: pxTorem(14);
            top: pxTorem(2);
            left: pxTorem(-20);
        }
    }

    .v-char-indexes__con {
        width: pxTorem(20);
        height: pxTorem(20);
        /*width: 4vh;*/
        /*height: 4vh;*/
        font-size: pxTorem(12);
        line-height: pxTorem(20);
    }

    .v-char-indexes__frm {

        .v-char-indexes__con {

            .label {
                opacity: 0;
            }
        }

        &.cur {

            .v-char-indexes__con {
                border: #cccccc 1px solid;
                border-radius: 50%;
            }

            .label {
                opacity: 0;
            }
        }
        &.fade {

            .label {
                animation: fade_out 1s ease-in-out;
            }
        }
    }

    .v-char-indexes {
        @keyframes fade_out {
            0% { opacity: 1; }
            90% { opacity: 0.8; }
            95% { opacity: 0.3; }
            100% { opacity: 0; }
        }
    }
</style>
