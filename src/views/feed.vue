<template>
    <div class="page page-feed">
        <h2>名片参考样例</h2>

        <div class="t-6">
            <div>
                <div>
                    <div style="background: url(https://s01.dongyin.net/doing/default-avatar.png)"></div>
                </div>
            </div>
        </div>

        <div class="listview listview-form" v-for="(user, index) in this.users" :key="index">

            <v-feed
                :feedId = "user.feedId"
                :imgUrl = "user.avatarId"
                :title = "user.title"
                :subtitle = "user.subtitle"
                :desc = "user.desc"
                :msgNum = "user.msgNum"
                :age = "user.age"
                :sex = "user.sex"
            > </v-feed>

        </div>

        <v-feed
            :feedId = "'c_1407459100687437'"
            :imgUrl = "'https://s01.dongyin.net/doing/default-avatar.png'"
            :title = "'老朱'"
            :subtitle = "'人在江湖飘~'"
            :classes = "'small'"
        > </v-feed>
    </div>
</template>

<script type="text/ecmascript-6">
    import vFeed from 'comb-ui/src/vendors/v-feed';

    export default {
        components: { vFeed },

        data () {
            return {
                users: null
            };
        },

        mounted () {
            //        console.log('feed mounted... ');
            this.users = [
                {
                    userId: '397833',
                    feedId: 'o_1407459100687437',
                    avatarId: 'https://s01.dongyin.net/doing/default-avatar.png',
                    title: 'Dio',
                    desc: '18:00',
                    subtitle: 'Dio...',
                    msgNum: '1'
                },
                {
                    userId: '397833',
                    feedId: 'c_1407459100687437',
                    avatarId: 'https://s01.dongyin.net/doing/default-avatar.png',
                    title: '老朱',
                    desc: '18:00',
                    subtitle: '推广啦啦啦',
                    msgNum: '2'
                },
                {
                    userId: '397833',
                    feedId: 'g_1407459100687437',
                    avatarId: 'https://s01.dongyin.net/doing/default-avatar.png',
                    title: '李四',
                    desc: '18:00',
                    subtitle: '老李哇哈哈',
                    msgNum: '9'
                },

                {
                    userId: '397833',
                    feedId: 'o_1407459100687437',
                    avatarId: 'https://s01.dongyin.net/doing/default-avatar.png',
                    title: 'Dio',
                    desc: '1km以内',
                    subtitle: 'Dio...',
                    msgNum: '11',
                    age: '11',
                    sex: '1'
                },
                {
                    userId: '397833',
                    feedId: 'c_1407459100687437',
                    avatarId: 'https://s01.dongyin.net/doing/default-avatar.png',
                    title: '老朱',
                    desc: '2.1km',
                    subtitle: '推广啦啦啦',
                    msgNum: '12',
                    age: '22',
                    sex: '1'
                },
                {
                    userId: '397833',
                    feedId: 'g_1407459100687437',
                    avatarId: 'https://s01.dongyin.net/doing/default-avatar.png',
                    title: '李四',
                    desc: '200km',
                    subtitle: '老李哇哈哈',
                    msgNum: '19',
                    age: '33',
                    sex: '2'
                }
            ];
        },

        methods: {

        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-feed {
        h2 {
            margin-left: pxTorem(15px);
            line-height: pxTorem(40px);
        }

        .desc {
            height: pxTorem(28px);
            font-size: pxTorem(14px);
            line-height: pxTorem(28px);
            padding-left: pxTorem(15px);
            color: #777E8C;
            background: #f2f2f4;
        }

        .v-feed {
            margin-top: pxTorem(10px);
        }

        .t-6 {
            width: pxTorem(46px);
            height:pxTorem(46px);
            transform: rotate(120deg);
            visibility: hidden;

            div {
                width: 100%;
                height:100%;
                overflow: hidden;
            }

            >div {
                transform: rotate(-60deg);
                visibility: hidden;

                >div {
                    transform: rotate(-60deg);
                    visibility: visible;

                    >div {
                        // transform: rotate(-60deg);
                        visibility: visible;

                    }
                }
            }
        }
    }
</style>
