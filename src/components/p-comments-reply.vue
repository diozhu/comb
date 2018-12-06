<!--<template>-->
    <!--<div class="p-comments-reply" :class="[{max: !totalShow}]" v-if="currentValue.length > 0">-->
        <!--<ul class="p-comments-reply__con">-->
            <!--<li v-for="(item, idx) in currentValue" v-if="(totalShow && idx < limit) || !totalShow">-->
                <!--<div class="p-comments-reply__con-txt" @click="goReply(item)">-->
                    <!--<span>{{ item.userInfo.title || '' }}</span>-->
                    <!--<template v-if="item.CtId != detail.CommentId && item.ToUserId">回复<span> @{{ item.toUserInfo.title }}</span></template>-->
                    <!--: {{ item.Content || '' }}-->
                <!--</div>-->
                <!--<div v-if="!totalShow" class="p-comments-reply__con-tm">{{ item.Tm | specialTime }}</div>-->
            <!--</li>-->
        <!--</ul>-->
        <!--<div class="p-comments-reply__total" v-if="totalShowTag">-->
            <!--<slot name="total"></slot>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->
<!--<script type="text/ecmascript-6">-->
    <!--export default {-->
        <!--components: {},-->
        <!--props: {-->
            <!--value: {    // 二级评论列表-->
                <!--type: Array,-->
                <!--default: () => []-->
            <!--},-->
            <!--detail: {   // 一级评论对象-->
                <!--type: Object,-->
                <!--default: () => {}-->
            <!--},-->
            <!--limit: {-->
                <!--type: Number,-->
                <!--default: 5-->
            <!--},-->
            <!--totalShow: { // 数据不全显示，超出limit后显示"全部显示"字样-->
                <!--type: Boolean,-->
                <!--default: false-->
            <!--}-->
        <!--},-->

        <!--data () {-->
            <!--return {-->
                <!--currentValue: this.value-->
            <!--};-->
        <!--},-->
        <!--computed: {-->
            <!--totalShowTag () {-->
                <!--return this.totalShow && this.currentValue.length > this.limit;-->
            <!--}-->
        <!--},-->

        <!--watch: {-->
            <!--value (val) {-->
                <!--this.currentValue = val;-->
            <!--}-->
        <!--},-->

        <!--mounted () {-->
<!--//            console.log('p-comments-reply.mounted: ');-->
        <!--},-->
        <!--methods: {-->
            <!--goReply (item) {-->
                <!--// 如果是主题，直接返回parent = 0，如果有parent直接返回，如果没有，取第一级评论的commentId-->
                <!--let pid = !item.CommentId ? 0 : (item.Parent ? item.Parent : item.CommentId);-->
                <!--if (!this.totalShow) { // 因为一级回复的详情页没有接口，无法刷新数据，回复后，返回直接去详情页-->
                    <!--this.$router.replace({name: 'comment-create', params: {id: item.Id}, query: {toid: item.CommentId, touid: item.UserId, pid: pid}});-->
                <!--} else {-->
                    <!--this.$router.push({name: 'comment-create', params: {id: item.Id}, query: {toid: item.CommentId, touid: item.UserId, pid: pid}});-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->
<!--<style rel="stylesheet/scss" lang="scss">-->
    <!--@import "../scss/variables";-->
    <!--@import "../scss/mixins";-->
    <!--/* 列表显示的回复样式 */-->
    <!--.p-comments-reply {-->
        <!--position: relative;-->
        <!--background: #F6F6F6;-->
        <!--/*background: #CFE6FF;*/-->
        <!--margin: 0 pxTorem(15px) pxTorem(15px);-->
        <!--padding: pxTorem(8px);-->

        <!--&:before {-->
            <!--width: 0;-->
            <!--height: 0;-->
            <!--content: '';-->
            <!--display: block;-->
            <!--/*border-left: pxTorem(6px) solid transparent;*/-->
            <!--/*border-right: pxTorem(6px) solid transparent;*/-->
            <!--/*border-bottom: pxTorem(12px) solid #b3c9e2;*/-->
            <!--position: absolute;-->
            <!--top: pxTorem(-4px);-->
            <!--left: pxTorem(10px);-->
            <!--transform: rotate(45deg);-->
            <!--border-width: pxTorem(6px);-->
            <!--border-color: #F6F6F6 transparent transparent #F6F6F6;-->
            <!--border-style: solid;-->
            <!--border-top-left-radius: pxTorem(2px);-->
        <!--}-->
    <!--}-->
    <!--.p-comments-reply__con {-->
        <!--padding-bottom: pxTorem(5px);-->

        <!--.p-comments-reply__con-txt {-->
            <!--font-size: pxTorem(14px);-->
            <!--line-height: pxTorem(21px);-->

            <!--span {-->
                <!--font-size: pxTorem(14px);-->
                <!--line-height: pxTorem(20px);-->
                <!--color: #576B95;-->
                <!--/*color: #007AFF;*/-->
            <!--}-->
        <!--}-->

        <!--.p-comments-reply__con-tm {-->
            <!--padding: 0 pxTorem(15px) pxTorem(15px) 0;-->
            <!--text-align: right;-->
        <!--}-->
   <!--}-->
    <!--.p-comments-reply__total {-->
        <!--font-size: pxTorem(13px);-->
        <!--/*color: #007AFF;*/-->
        <!--color: #777E8C;-->
        <!--letter-spacing: 0;-->
        <!--line-height: 1;-->
        <!--text-align: right;-->
        <!--border-top: #d8d8d8 1px solid;-->
        <!--padding-top: pxTorem(10px);-->
    <!--}-->

    <!--.p-comments-reply {-->
        <!--&.max {-->
            <!--margin: pxTorem(10px) 0 0 0;-->
            <!--padding: pxTorem(15px) 0 0 pxTorem(50px);-->
            <!--background: #FAFAFA;-->
            <!--border-top: #D8D8D8 1px solid;-->
            <!--border-bottom: #D8D8D8 1px solid;-->

            <!--&:before {-->
                <!--border-color: #FFF #FFF #FFF #FFF;-->
                <!--box-shadow: 1px 1px 0 0 #D8D8D8;-->
                <!--top: pxTorem(-6px);-->
                <!--left: pxTorem(50px);-->
            <!--}-->

            <!--li {-->
                <!--border-bottom: #D8D8D8 1px solid;-->

                <!--&:last-child {-->
                    <!--border: 0;-->
                <!--}-->
            <!--}-->

            <!--.p-comments-reply__con {-->
                <!--padding-bottom: 0;-->

                <!--.p-comments-reply__con-txt {-->
                    <!--padding: pxTorem(15px) pxTorem(15px) pxTorem(10px) 0;-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</style>-->
