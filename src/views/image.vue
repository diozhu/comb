<template>
    <div class="page page-image">
        <h2>相册组件 v-album</h2>
        <h2>默认：渐显</h2>
        <v-image v-model="img1" @click="goViewer([img1], 0)"></v-image>
        <h2>缩放</h2>
        <v-image v-model="img2" animation="scale" @click="goViewer([img2], 0)"></v-image>
        <v-image v-model="img3" @click="goViewer([img1, img2, img3, img4, img5, img6], 2)"></v-image>
        <v-image v-model="img4" animation="scale"></v-image>
        <v-image v-model="img5" animation="scale"></v-image>
        <v-image v-model="img6"></v-image>
        <!--<pre v-highlightjs @touchend.stop><code class="html">-->
        <!--&lt;v-album v-model="img1"&gt;&lt;/v-album&gt;-->
        <!--</code></pre>-->

    </div>
</template>
<script>
    import { vImage } from 'comb-ui';

    export default {
        components: { vImage },
        data () {
            return {
                img1:{ url: 'https://s1.oss.dongyin.net/dongyin-net/banner03.jpg', width: '375', height: '137' },
                // img1:{ url: 'https://s1.oss.dongyin.net/dongyin-net/banner03.jpg', width: '375' },
                img2:{ url: 'https://s1.oss.dongyin.net/doing/camp-bg.jpg', width: '750', height: '3095' },
                img3:{
                    url: 'https://s1.oss.dongyin.net/doing/game-ldy-banner.png'
                },
                img4:{
                    url: 'https://s1.oss.dongyin.net/doing/image-sl.jpg'
                },
                img5:{
                    url: 'https://s1.oss.dongyin.net/dongyin-net/why-choose-doing-4.jpg'
                },
                img6:{
                    url: 'https://s01.dongyin.net/dongyin-net/why-choose-doing-5.jpg'
                },
                currentUrls: [],
                showType: 0
            };
        },
        created: function () {
            console.log('page-image.created');
        },
        mounted () {
            console.log('page-image.mounted... ');
            this.init();
        },
        methods: {
            init () {
                // this.img1 = { url: 'https://s1.oss.dongyin.net/dongyin-net/banner03.jpg', width: '375', height: '137' };
                // // this.img1 = { url: 'https://s1.oss.dongyin.net/dongyin-net/banner03.jpg', width: '375' };
                // this.img2 = { url: 'https://s1.oss.dongyin.net/doing/camp-bg.jpg', width: '750', height: '3095' };
                // this.img3 = {
                //     url: 'https://s1.oss.dongyin.net/doing/game-ldy-banner.png'
                // };
                // this.img4 = {
                //     url: 'https://s1.oss.dongyin.net/doing/image-sl.jpg'
                // };
                // this.img5 = {
                //     url: 'https://s1.oss.dongyin.net/dongyin-net/why-choose-doing-4.jpg'
                // };
                // this.img6 = {
                //     url: 'https://s01.dongyin.net/dongyin-net/why-choose-doing-5.jpg'
                // };
            },
            goToViewImage () {
                this.$root.img = arguments[0];
                this.$router.push({path: 'viewImage'});
            },

            goViewer (imgs, idx) {
                console.log('list.goViewer: ', imgs, idx);
//                e.stopPropagation();
//                e.preventDefault();
                this.$root.swipes = {list: imgs, idx: idx}; // swipe
                this.$root.img = imgs; // viewer
                this.$router.push({name: 'Viewer', query: {idx: idx}});
                // this.$router.push({name: 'swipe'});
                return false;
            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/_mixins";

    .page-image{
        padding: 0 ($grid-gutter-width / 2);

/*
        .v-image {
            margin: 0 (-$grid-gutter-width / 2);
            !*width: initial;*!
        }
*/
    }


</style>
