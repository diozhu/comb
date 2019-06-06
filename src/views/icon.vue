<template>
    <div class="page page-icon">
        <h2>IconFont 图标(单色)</h2>

        <p class="desc">
            http://iconfont.cn/
            各个应用在使用时可在此平台创建独立的项目，如有复用icon，请注意icon的名字勿重复，新加入icon务必保证名称的规范。
        </p>
        <pre v-highlightjs @touchend.stop><code class="html">
            <i class="icon icon-error"></i>
        </code></pre>

        <ul class="icon-list">
            <li>
                <i class="icon icon-error"></i>
                <div class="name">错</div>
                <div class="fontclass">.icon-error</div>
            </li>

            <li>
                <i class="icon icon-check"></i>
                <div class="name">单选</div>
                <div class="fontclass">.icon-check</div>
            </li>

            <li>
                <i class="icon icon-heart-o"></i>
                <div class="name">点赞</div>
                <div class="fontclass">.icon-heart-o</div>
            </li>
        </ul>
        <ul class="icon-list">
            <li>
                <i class="icon icon-heart"></i>
                <div class="name">点赞前</div>
                <div class="fontclass">.icon-heart</div>
            </li>

            <li>
                <i class="icon icon-location"></i>
                <div class="name">地址</div>
                <div class="fontclass">.icon-location</div>
            </li>

            <li>
                <i class="icon icon-right"></i>
                <div class="name">对</div>
                <div class="fontclass">.icon-right</div>
            </li>
        </ul>
        <ul class="icon-list">
            <li>
                <i class="icon icon-disk"></i>
                <div class="name">多选未选</div>
                <div class="fontclass">.icon-disk</div>
            </li>

            <li>
                <i class="icon icon-disk-check"></i>
                <div class="name">多选选中</div>
                <div class="fontclass">.icon-disk-check</div>
            </li>

            <li>
                <i class="icon icon-link"></i>
                <div class="name">连接</div>
                <div class="fontclass">.icon-link</div>
            </li>
        </ul>
        <ul class="icon-list">
            <li>
                <i class="icon icon-alert"></i>
                <div class="name">感叹</div>
                <div class="fontclass">.icon-alert</div>
            </li>

            <li>
                <i class="icon icon-sort"></i>
                <div class="name">顺序调整</div>
                <div class="fontclass">.icon-sort</div>
            </li>

            <li>
                <i class="icon icon-camera"></i>
                <div class="name">拍照</div>
                <div class="fontclass">.icon-camera</div>
            </li>
        </ul>
        <ul class="icon-list">
            <li>
                <i class="icon icon-search"></i>
                <div class="name">搜索</div>
                <div class="fontclass">.icon-search</div>
            </li>

            <li>
                <i class="icon icon-input-del"></i>
                <div class="name">输入删除</div>
                <div class="fontclass">.icon-input-del</div>
            </li>

            <li>
                <i class="icon icon-comment"></i>
                <div class="name">评论</div>
                <div class="fontclass">.icon-comment</div>
            </li>
        </ul>
        <ul class="icon-list">
            <li>
                <i class="icon icon-chat"></i>
                <div class="name">讨论群</div>
                <div class="fontclass">.icon-chat</div>
            </li>

            <li>
                <i class="icon icon-add"></i>
                <div class="name">添加图片</div>
                <div class="fontclass">.icon-add</div>
            </li>

            <li>
                <i class="icon icon-arrow-r"></i>
                <div class="name">跳转箭头</div>
                <div class="fontclass">.icon-arrow-r</div>
            </li>
        </ul>
        <ul class="icon-list">
            <li>
                <i class="icon icon-pic"></i>
                <div class="name">图片</div>
                <div class="fontclass">.icon-pic</div>
            </li>

            <li>
                <i class="icon icon-del"></i>
                <div class="name">图片删除</div>
                <div class="fontclass">.icon-del</div>
            </li>

        </ul>
    </div>
</template>
<style lang="scss">

    @import "../scss/variables";
    @import "../scss/_mixins";

    .page-icon{
        padding: 0 ($grid-gutter-width / 2);

        .icon-list{
            //@include box_flex;
            display: flex;
            margin: pxTorem(15px) 0;

            li{
                width: 33.3%;
                text-align: center;
                .icon{
                    font-size: pxTorem(22px);
                }
                div{
                    margin-top: pxTorem(3px);
                    color: #333333;
                }
            }
        }
    }
</style>
<script>
</script>
