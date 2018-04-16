<template>
    <div>
        <!--基本款-->
        <slider @slide='slide'>
            <!-- slot  -->
        </slider>
        <!--<div class="sliderButton">
            <button @click="slidePre">上一页</button>
            <button @click="slideNext">下一页</button>
            <button @click="appendslider">添加一页</button>
            <button @click="turnTo(2)">跳转到第三页</button>
        </div>-->
    </div>
</template>
<script>
    import slider from '../vendor/v-slider';
    export default {
        data () {
            return {
                someList: [
                    {
                        title: 'slide1',
                        url: 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
                    },
                    {
                        title: 'slide2',
                        url: 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
                    },
                    {
                        title: 'slide3',
                        url: 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'
                    }
                ],
                sliderinit: {
                    currentPage: 0,
                    thresholdTime: 500, // 滑动时间阈值判定距离
                    thresholdDistance: 100, // 滑动距离阈值
                    slideSpeed: 1000, // 滑动速度
                    isPreview: false, // 是否是预览
                    loop: true, // 是否开启无缝模式
                    height: 200 // 高度设置(如果是预览可以不用传)
//                    autoplay: 1000 // 自动播放:时间[ms]
                }
            };
        },
        components: {
            slider
        },
        created () {
            this.$root.pages = this.someList;
            this.$root.sliderinit = this.sliderinit;
        },
        methods: {
            turnTo (num) {
                // 传递事件 vue 2.0 传递事件修改了，好的写法应该直接写在空vue类中
                this.$children[0].$emit('slideTo', num);
            },
            slideNext () {
                this.$children[0].$emit('slideNext');
            },
            slidePre () {
                this.$children[0].$emit('slidePre');
            },
            appendslider () {
                this.someList.push({
                    title: 'slidernew',
                    style: {
                        background: '#333',
                        color: '#fff'
                    }
                });
            },
            // 监听事件发生了变化,需要指向一个子组件实例
            slide (pagenum) {
                console.log('currentPage:' + pagenum);
            }
        }
    };
</script>
