<template>
    <li class="p-infinite-item" @click="add">
        <a class="version-item">
            <v-feed
                :feedId="data.userInfo.feedId"
                :imgUrl="data.userInfo.avatar"
                :title="data.userInfo.title"
                :subtitle="data.userInfo.subtitle"
                :classes="'title small no-border'"
            ></v-feed>
            <v-text classes="content" :value="data.title"></v-text>
        </a>
    </li>
</template>

<script type="text/ecmascript-6">
    import vFeed from 'comb-ui/src/vendors/v-feed.vue';
    import vText from 'comb-ui/src/vendors/v-text.vue';

    export default {
        components: { vFeed, vText },

        props: {
            data: Object
        },
        methods: {
            add (e) {
                e.preventDefault();
                console.log(this.data.name += ' 233');
            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .p-infinite-item {
        padding: 0 0 3px;
        position: absolute;
        background: #fff;
        width: 100%;
        list-style: none;

        &::after {
            content: "";
            position: absolute;
            bottom: 1.5px;
            left: 150px;
            right: 0;
            border-bottom: 1px solid #e4e4e4;
        }

        .version-item {
            /*display: flex;*/
            /*display: -webkit-box;*/
            /*box-align: center;*/
            /*-webkit-box-align: center;*/
            width: 100%;

            .version-item-img {
                width: pxTorem(60px);
                height: pxTorem(60px);
                position: relative;

                img {
                    width: 100%;
                }
            }


            .version-item-intro {
                -webkit-box-flex: 1;
                box-flex: 1;
                display: block;
                padding: 0 15px 5px;

                span {
                    color: #ff6000;
                }

                .version-item-name {
                    font-size: 14px;
                    color: rgba(0,0,0,.87);
                    margin-bottom: 8px;
                }

                .version-item-brief {
                    font-size: 12px;
                    color: rgba(0,0,0,.54);
                    margin-bottom: 8px;
                    line-height: 15px;
                    overflow: hidden;

                    p {
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        word-break: break-all;
                    }
                }

                .version-item-intro-price {
                    font-size: 15px;
                    position: relative;
                    margin-left: 10px;
                }
            }
        }
    }

</style>
