<template>
    <div class="page page-comment-praises">
        <v-scroll v-model="listData" :func="getList" func-type="section">
            <ul>
                <li v-for="item in listData" @click="goInfo(item)" class="height-auto">
                    <v-feed v-if="item.userInfo"
                        :imgUrl="item.userInfo.avatar"
                        :title="item.userInfo.name"
                        :subtitle="item.userInfo.subtitle"
                        :classes="'title small no-border'"
                    ></v-feed>
                    <v-text :value="'当前主题：' + (item.title ? item.title : '未找到主题：'+ item.SubjectId)"></v-text>
                    <v-text :value="item.abstract"></v-text>
                    <div class="right">
                        <i class="icon icon-heart-o done"></i>
                        <span class="right">{{item.Tm | specialTime}}</span>
                    </div>
                </li>
            </ul>
        </v-scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import vFeed from '../vendor/v-feed';
    import MicroComment from '../vendor/v-comment';
    import * as api from '../js/core/api';
    import vScroll from '../vendor/v-scroll.vue';

    export default {
        components: { vFeed, vScroll },

        data () {
            return {
                listData: []
            };
        },

        mounted () {
            this.$logger.log('comment-praises.mounted... ');
            this.subjectId = this.$route.params.forumId || 0;
        },

        methods: {
            getList ({ page, pageNum }) {
                return MicroComment.getUserPrises({
                    userId: this.$store.getters.userInfo.id,
                    subjectId: this.subjectId,
                    page: page,
                    pageNum: pageNum
                }).then((res) => {
                    this.$logger.log('comment-praises.getList: SUCCESS, ', res);
                    if (res.length) {
                        this.listData = this.listData.concat(res); // 整理list数据

                        this.fillSubject(res); // 补充话题数据
                    }
                    return Promise.resolve(res);
                });
            },

            fillSubject (dat) {
                let ids = [];
                dat.forEach(v => {
                    if (!ids.includes(v.SubjectId)) ids.push(v.SubjectId);
                });

                return api._getSubjectByIds({ids: ids}).then(res => {
                    this.$logger.log('comment-comments.fillSubject: ', res);
                    this.listData.forEach((v, i) => {
                        if (!v.title && res.dataList.hasOwnProperty(v.SubjectId)) this.$set(this.listData[i], 'title', res.dataList[v.SubjectId].title);
                        if (!v.abstract && res.dataList.hasOwnProperty(v.SubjectId)) this.$set(this.listData[i], 'abstract', res.dataList[v.SubjectId].abstract);
                        if (!v.userInfo && res.dataList.hasOwnProperty(v.SubjectId)) this.$set(this.listData[i], 'userInfo', res.dataList[v.SubjectId].userInfo);
                    });
                });
            },

            goInfo (item) {
                this.$router.push({name: 'comment-info', params: {id: item.SubjectId}, query: {}});
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-comment-praises {
        li {
            padding: pxTorem(10px) 0;
            border-bottom: #f2f2f4 pxTorem(5px) solid;
        }

        .icon {
            font-size: pxTorem(15px);
            color: #FB434F;
            padding-right: pxTorem(15px);
        }

        .right {
            text-align: right;
            padding-right: pxTorem(15px);

            p {
                width: 100%;
                margin: 0;
                padding-right: pxTorem(15px);
                text-align: right;
            }
        }
    }
</style>
