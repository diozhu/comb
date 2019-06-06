<template>
    <div class="p-follow">
        <v-button
            type="info"
            :disabled="disabled"
            :cus-class="btnClasses"
            @click.stop="handleClick">{{followStatus}}</v-button>
    </div>
</template>
<script>
    import vButton from 'comb-ui/src/vendors/v-button.vue';
    import { mapState, mapMutations } from 'vuex'; //eslint-disable-line

    /**
     * 关注组件，目的是为了解决多页面keep-alive时，状态的统一管理。状态管理使用vuex方式，具体操作在/store/modules/follow.js中；
     * 数据初始依据传入的followuid和status，在created中进行判断赋值；
     * 形参：
     *      userid：当前用户id
     *      followuid：需要关注的用户id
     *      status：当前关注状态，整形
     *      border：是否显示边框（可自定义）
     *              -- Author by Dio Zhu. on 2017.3.21
     */
    export default {
        name: 'p-follow',

        components: { vButton },

        props: {
            disabled: { // 禁用标识
                type: Boolean,
                default: false
            },
            userid: { // 当前用户id
                type: Number,
                default: 0
            },
            followuid: { // 要关注的用户id
                type: Number,
                default: 0,
                required: true
            },
            status: { // 关注状态
                type: Number,
                default: 0,
                required: true
            },
            border: { // 是否显示边框
                type: Boolean,
                default: false
            }
        },

        data () {
            return {
                stateStr: '+关注',
                btnClasses: (!this.value ? 'red ' : '') + (!this.border ? 'no-border ' : '')
            };
        },

        computed: {
            ...mapState({
                followStatus (state) {
                    let str = '';
                    if (this.userid === this.followuid) { // 当前用户显示'我'，不可操作
                        str = '我';
                        this.btnClasses = 'no-border';
                    } else {
                        if (!state.follow.follows[this.followuid]) {
                            str = '+关注';
                            this.btnClasses = 'red';
                        } else {
                            str = '已关注';
                            this.btnClasses = '';
                        }
                        if (!this.border) this.btnClasses += ' no-border';
                    }
                    return str;
                }
            })
        },

        watch: {

        },

        created () {
            this.init();
        },

        methods: {
            ...mapMutations(['GET_FOLLOW']),

            init () { // 初始化store中的follows
                if (typeof this.$store.state.follow.follows[this.followuid] === 'undefined' && this.followuid) {
                    this.$store.commit('SET_FOLLOW', {uid: this.followuid, status: this.status});
                }
            },

            handleClick (evt) {
                if (this.userid === this.followuid) { // 当前用户显示'我'，不可操作
                    return;
                }
                if (!this.$store.state.follow.follows[this.followuid]) {
                    this.addAttention();
                } else {
                    this.delAttention();
                }
            },
            addAttention () {
                this.$store.dispatch('followAdd', this.followuid);
                this.$toast({message: '关注成功', duration: 500, position: 'bottom'});
            },

            delAttention () {
                this.$store.dispatch('followDel', this.followuid);
                this.$toast({message: '已取消关注', duration: 500, position: 'bottom'});
            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .p-follow {
        width: pxTorem(62px);
        height: pxTorem(24px);

        .v-btn {
            background: #FFF;
            color: #333;
            border: #333 1px solid;
             -webkit-border-radius: pxTorem(2px);
             -moz-border-radius: pxTorem(2px);
            border-radius: pxTorem(2px);

            .v-btn-text {
                font-size: pxTorem(12px);
                line-height: 1;
            }
        }
        .red {
            color: #F55151;
            border: #F55151 1px solid;
        }
        .hui{
            color: #898989;
        }
    }
</style>
