<template>
    <div class="page page-font">
        <h2>Fonts for H5</h2>

        <p class="desc">
            实际项目中，不设定中文字体而使用系统原生字体（Arial）；
            UI所提供的文件中，字体统一使用Heiti SC；
            具体字号与行间距以各项目的实际UI文件为准；
            注意：如果存在多行文字，计算文字与上下边距的时候，请把行高（lineheight）排除计算；
        </p>

        <ul>
            <li class="font24">
                我是24号字
                <span class="font-line-height">建议行间距34px</span>
            </li>
            <li class="font22">
                我是22号字
                <span class="font-line-height">建议行间距31px</span>
            </li>
            <li class="font20">
                我是20号字
                <span class="font-line-height">建议行间距28px</span>
            </li>
            <li class="font18">
                我是18号字
                <span class="font-line-height">建议行间距25px</span>
            </li>
            <li class="font17">
                我是17号字
                <span class="font-line-height">建议行间距24px</span>
            </li>
            <li class="font16">
                我是16号字
                <span class="font-line-height">建议行间距22px</span>
            </li>
            <li class="font15">
                我是15号字
                <span class="font-line-height">建议行间距21px</span>
            </li>
            <li class="font14">
                我是14号字
                <span class="font-line-height">建议行间距18px</span>
            </li>
            <li class="font13">
                我是13号字
                <span class="font-line-height">建议行间距17px</span>
            </li>
            <li class="font12">
                我是12号字
                <span class="font-line-height">建议行间距16px</span>
            </li>
            <li class="font10">
                我是10号字
                <span class="font-line-height">建议行间距13px</span>
            </li>
        </ul>
    </div>
</template>
<style lang="scss">
    @import "../scss/variables";

    .page-font{
        padding: 0 ($grid-gutter-width / 2);

        li{
            height: pxTorem(100px);
            background: #f2f2f4;
            text-align: center;
            margin-bottom: pxTorem(10px);
            padding-top:pxTorem(25px);
            span{
                display: inline-block;
                width: 100%;
                padding: pxTorem(2px);
                font-size: pxTorem(12px);
            }
        }
    }
    .font24{
        font-size: pxTorem(24px);
    }
    .font22{
        font-size: pxTorem(22px);
    }
    .font20{
        font-size: pxTorem(20px);
    }
    .font18{
        font-size: pxTorem(18px);
    }
    .font17{
        font-size: pxTorem(17px);
    }
    .font16{
        font-size: pxTorem(16px);
    }
    .font15{
        font-size: pxTorem(15px);
    }
    .font14{
        font-size: pxTorem(14px);
    }
    .font13{
        font-size: pxTorem(13px);
    }
    .font12{
        font-size: pxTorem(12px);
    }
    .font10{
        font-size: pxTorem(10px);
    }
</style>
<script>
    export default {
        data () {
            return {
            };
        }
    };
</script>
