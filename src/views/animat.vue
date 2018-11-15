<template>
    <div class="page page-animat">
        <h2>动画</h2>
        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
            </table>
        </div>
        <p class="desc">施工中。。。</p>

        <div class="form-buttons">
            <v-button size="small" @click="handleBtnClick">添加</v-button>
        </div>

        <div class="box-wrapper">
            <v-animat group :duration="300">
                <div class="box"
                     v-for="(item, index) in list"
                     @click="remove(index)"
                     :key="item"
                >{{item}}
                </div>
            </v-animat>
        </div>

        <br />

        <div class="form-buttons">
            <v-button size="small" @click="handleBtnClick2">添加</v-button>
        </div>
        <div class="box-wrapper linner">
            <v-animat group :duration="300">
                <div class="box"
                     v-for="(item, index) in listInline"
                     @click="remove2(index)"
                     :key="item"
                >{{item}}
                </div>
            </v-animat>
        </div>
    </div>
</template>

<script>
import vButton from 'comb-ui/src/vendors/v-button.vue';
import vAnimat from 'comb-ui/src/vendors/v-animat';
export default {
    components: { vButton, vAnimat },
    data () {
        return {
            list: [0, 1, 2],
            listInline: [0, 1]
        };
    },
    mounted () {
        console.log('animat.mounted... ');
    },
    methods: {
        handleBtnClick () {
            console.log('animat.handleBtnClick... ');
            let randomIndex = Math.floor(Math.random() * this.list.length);
            let n = parseInt(Math.random() * 100);
            do {
                n = parseInt(Math.random() * 100);
            } while (this.list.includes(n) && this.list.length <= 100);
            this.list.splice(randomIndex, 0, n);
        },
        remove (idx) {
            console.log('animat.remove... ', idx);
            this.list.splice(idx, 1);
        },
        handleBtnClick2 () {
            console.log('animat.handleBtnClick2... ');
            // this.$set(this.list, this.list.length, this.list.length);
            let randomIndex = Math.floor(Math.random() * this.listInline.length);
            let n = parseInt(Math.random() * 100);
            do {
                n = parseInt(Math.random() * 100);
            } while (this.listInline.includes(n) && this.listInline.length <= 100);
            this.listInline.splice(randomIndex, 0, n);
        },
        remove2 (idx) {
            console.log('animat.remove2... ', idx);
            this.listInline.splice(idx, 1);
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-animat {
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

        .form-buttons {
            margin: pxTorem(10);
            text-align: right;
        }

        .box-wrapper {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .v-animat {
                display: block;
                width: 100%;
                /*display: flex;*/
                /*flex-direction: row;*/
                /*flex-wrap: wrap;*/
            }

            .box {
                display: inline-block;
                width: pxTorem(60);
                height: pxTorem(60);
                margin: pxTorem(10) 0 0 pxTorem(10);
                background-color: #6c8dd5;
                box-shadow: rgba(108, 141, 213, 0.5) 0 pxTorem(3) pxTorem(10);
                border-radius: pxTorem(5);
                font-size: pxTorem(20);
                color: #e3e3e3;
                text-align: center;
                line-height: pxTorem(60);
                /*display: flex;*/
                /*align-items: center;*/
                /*justify-content: center;*/
            }
        }

        .box-wrapper.linner {
            flex-direction: column;

            .box {
                width: 95%;
            }
        }
    }
</style>
