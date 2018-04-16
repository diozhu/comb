<template>
    <div class="page page-colour">
        <h2>Colour for H5</h2>

        <p class="desc">
            本色彩适用于平台上挂载的所有H5应用。
            应用方只能参照此手册配色，不得出现其他色系。（定制版本除外）
        </p>
        <v-row :aligment="true">
            <v-col :span="3"><p-colour color="#007AFF" title="科技蓝"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#00CBB9" title="湖青绿"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#FF6F48" title="阳光橙"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#FF477C" title="玫瑰粉"></p-colour></v-col>
        </v-row>

        <h2>色阶</h2>
        <p class="desc">灰色色阶及字色规范</p>
        <br>
        <v-row :aligment="true">
            <v-col><p-colour color="#000000" title="标题字色、昵称字色"></p-colour></v-col>
            <v-col><p-colour color="#333333" title="正文字色、推广语字色、搜索文字"></p-colour></v-col>
            <v-col><p-colour color="#777E8C" title="提示色"></p-colour></v-col>
            <v-col><p-colour color="#8E8E93" title="feed时间字色"></p-colour></v-col>

            <v-col><p-colour color="#95989F" title="item未编辑字色、展示字色"></p-colour></v-col>
            <v-col><p-colour color="#ACB38F" title="辅助字"></p-colour></v-col>
            <v-col><p-colour color="#C1C1C1" title="Button不可点击色"></p-colour></v-col>
            <v-col><p-colour color="#DDDEE3" title="边框线色、button不可点击色"></p-colour></v-col>

            <v-col><p-colour color="#F2F2F4" title="背景色"></p-colour></v-col>
        </v-row>

        <h2>色卡</h2>
        <p-colour color="#007AFF" title="科技蓝"></p-colour>
        <br>
        <p class="desc">沿用蓝，理智、忠诚、科技、稳重且富有亲和感，凸显政府级企业的威严。</p>
        <h3>适用范围</h3>
        <p class="desc">企业应用、to B平台类、工作效率类、科技类等</p>
        <h3>辅色</h3>
        <v-row :aligment="true">
            <v-col :span="1"><p-colour color="#007AFF"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#1987FF"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#3395FF"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#4CA1FF"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#66AFFF"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#7FBCFF"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#99CAFF"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#B2D7FF"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#CCE4FF"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#E5F1FF"></p-colour></v-col>
        </v-row>
        <br>
        <v-row :aligment="true">
            <v-col :span="3"><p-colour color="#007AFF" subtitle="#007AFF"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#4CA1FF" subtitle="#4CA1FF"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#F7B64B" subtitle="#F7B64B"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#FA5A5A" subtitle="#FA5A5A"></p-colour></v-col>
        </v-row>
        <br>
        <h3>案例</h3>
        <img class="case" src="../assets/case-1.png">

        <br><br><br><hr><br><br><br>
        <p-colour color="#00CBB9" title="湖青绿"></p-colour>
        <br>
        <p class="desc">绿色代表自然和谐、健康、通行、秩序感、是使人放松的的色彩。</p>
        <h3>适用范围</h3>
        <p class="desc">教育、招聘、to C、安全类等</p>
        <h3>辅色</h3>
        <v-row :aligment="true">
            <v-col :span="1"><p-colour color="#00B6A6"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#19BDAE"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#00CBB9"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#33D5C7"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#4CDACE"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#66E0D5"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#7FE5DC"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#99EAE3"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#B2EFEA"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#CCF5F1"></p-colour></v-col>
        </v-row>
        <br>
        <v-row :aligment="true">
            <v-col :span="3"><p-colour color="#00B6A6" subtitle="#00B6A6"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#33D5C7" subtitle="#33D5C7"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#FF7B57" subtitle="#FF7B57"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#FF6D97" subtitle="#FF6D97"></p-colour></v-col>
        </v-row>
        <br>
        <h3>案例</h3>
        <img class="case" src="../assets/case-2.png">

        <br><br><br><hr><br><br><br>
        <p-colour color="#FF6F48" title="阳光橙"></p-colour>
        <br>
        <p class="desc">带来活力、热情、食欲、使人愉快的颜色、强化视觉的冲击力。</p>
        <h3>适用范围</h3>
        <p class="desc">to C平台类、服务类、钱包、O2O、邀请有奖等</p>
        <h3>辅色</h3>
        <v-row :aligment="true">
            <v-col :span="1"><p-colour color="#FF6237"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FF6F48"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FF7D5A"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FF8C6D"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FF9A7E"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FFA991"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FFB7A3"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FFC5B6"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FFD3C8"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FFE2DA"></p-colour></v-col>
        </v-row>
        <br>
        <v-row :aligment="true">
            <v-col :span="3"><p-colour color="#FF6237" subtitle="#FF6237"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#FF7D5A" subtitle="#FF7D5A"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#FF6D97" subtitle="#FF6D97"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#00CBB9" subtitle="#00CBB9"></p-colour></v-col>
        </v-row>
        <br>
        <h3>案例</h3>
        <img class="case" src="../assets/case-3.png">

        <br><br><br><hr><br><br><br>
        <p-colour color="#FF477C" title="玫瑰粉"></p-colour>
        <br>
        <p class="desc">赋予了应用温馨、主动、开放、快乐的性格，极富社交及女性特色。</p>
        <h3>适用范围</h3>
        <p class="desc">女性、社交、母婴、主打温馨类等</p>
        <h3>辅色</h3>
        <v-row :aligment="true">
            <v-col :span="1"><p-colour color="#FF336E"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FF477C"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FF6C96"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FF7EA3"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FF91B0"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FFA3BD"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FFB5CB"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FFC7D7"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FFDAE5"></p-colour></v-col>
            <v-col :span="1"><p-colour color="#FFECF1"></p-colour></v-col>
        </v-row>
        <br>
        <v-row :aligment="true">
            <v-col :span="3"><p-colour color="#FF336E" subtitle="#FF336E"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#FF6C96" subtitle="#FF6C96"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#F7B64B" subtitle="#F7B64B"></p-colour></v-col>
            <v-col :span="3"><p-colour color="#3395FF" subtitle="#3395FF"></p-colour></v-col>
        </v-row>
        <br>
        <h3>案例</h3>
        <img class="case" src="../assets/case-4.png">

        <div class="blank"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import vRow from '../vendor/v-row.vue';
    import vCol from '../vendor/v-col.vue';
    import pColour from '../components/p-colour.vue';

    export default {
        components: { vRow, vCol, pColour },

        data () {
            return {};
        },

        created () {
            this.$logger.log('colour.mounted... ');
        },

        methods: {}
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-colour {
        padding: 0 ($grid-gutter-width / 2);

        h2 {
            margin-left: 0;
        }
        h3 {
            margin-top: pxTorem(20px);
            margin-bottom: pxTorem(6px)
        }
        hr {
            border: 1px solid #DDDEE3;
        }
        .desc {
            padding: 0;
        }
        .case {
            height: pxTorem(32px);
        }

        .v-row {

            .v-col {
                margin-bottom: pxTorem(3px);
            }
        }

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
