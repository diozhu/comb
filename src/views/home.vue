<template>
    <div class="page page-home">
        <div class="logo">
            <img src="../assets/logo.png">
            <p>蜂巢（Comb）</p>
        </div>
        <div class="listview simple">
            <ul>
                <router-link :to="{ path: '/index' }" tag="li">示例<i class="icon icon-arrow-r"></i></router-link>
            </ul>
        </div>
        <div class="listview simple">
            <ul>
                <li @click="go('http://git.hy-sport.cn/front/comb/blob/develop/README.md')">readme<i class="icon icon-arrow-r"></i></li>
                <li @click="go('http://git.hy-sport.cn/front/comb/issues')">issues<i class="icon icon-arrow-r"></i></li>
            </ul>
        </div>
        <div class="listview simple">
            <ul>
                <li @click="go('http://git.hy-sport.cn/front/generator-comb/blob/develop/README.md')">脚手架<i class="icon icon-arrow-r"></i></li>
            </ul>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    export default {
        components: {},

        data () {
            return {
            };
        },

        mounted () {
            this.$logger.log('home.mounted... ');
        },

        methods: {
            go (url) {
                document.location.href = url;
            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">

    @import "../scss/_variables.scss";
    @import "../scss/_mixins.scss";

    .page-home{
        .logo {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            img {
                width: pxTorem(50px);
                padding: pxTorem(15px);
            }
            p {
                font-size: pxTorem(12px);
            }
        }

        .listview {
            padding: 0 0 pxTorem(10px) 0;

            li {
                display: flex;
                justify-content: space-between;
                font-size: pxTorem(14px);

                .icon {
                    margin: 0 pxTorem(15px);
                    font-size: pxTorem(16px);
                    color: #dddee3;
                }
            }
        }
    }
</style>
