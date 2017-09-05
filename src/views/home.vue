<template>
    <div class="page page-home">
        <dl>
            <dt>
                <img src="../assets/logo.png">
                 <!-- <img src="/app/static/images/mark.png">       -->
                <p>蜂巢（Comb）</p>
            </dt>
            <dd>
                <!--<router-link>wiki</router-link>-->
                <router-link to="/index" class="btn">demo</router-link>
            </dd>
        </dl>
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

        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">

    @import "../scss/_variables.scss";
    @import "../scss/_mixins.scss";

    .page-home{
        display: flex;
        align-items: center;
        justify-content: center;

        dl {
            width: 67%;

            dt{
                display: flex;
                align-items: center;
                justify-content: space-between;
                text-align: center;
                margin-bottom: 20px;

                img {
                    width: 20%;
                    flex: 0 0 auto;
                }

                p {
                    font-size: pxTorem(20px);
                    flex: 1 1 auto;
                }
            }

            dd {
                margin-top: pxTorem(100px);
            }
        }

        .btn{
            width: 100%;
            height: pxTorem(44px);
            line-height: pxTorem(44px);
            border: 1px #3395ff solid;
            border-radius: pxTorem(100px);
            display: block;
            text-align: center;
            color: #007aff;
            font-size: pxTorem(17px);
        }
    }
</style>
