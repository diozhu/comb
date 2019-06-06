<template>
    <div class="page-popup">
        <div class="page page-popup">
            <h2>popup</h2>

            <div class="attributes">
                <h2>API</h2>
                <table>
                    <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                    <tr><td>value</td><td>是否显示</td><td>Boolean</td><td>-</td><td>false</td></tr>
                    <tr><td>position</td><td>显示位置</td><td>String</td><td>middle<br>top<br>bottom</td><td>bottom</td></tr>
                </table>
            </div>

            <h2>示例</h2>
            <ul class="listview listview-form">
                <!--<li>-->
                    <!--<v-cell title="点击popup" value="注释浮动" is-link @click.native="popupVisible1 = true"></v-cell>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<v-cell title="点击popup" value="顶部浮动" is-link @click.native="popupVisible2 = true"></v-cell>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<v-cell title="点击popup" value="右侧弹出" is-link @click.native="popupVisible3 = true"></v-cell>-->
                <!--</li>-->
                <li>
                    <v-cell title="点击popup" value="底部弹出" is-link @click.native="popupVisible4 = true"></v-cell>
                </li>
            </ul>
            <pre v-highlightjs @touchend.stop><code class="html">
            &lt;ul class="listview listview-form"&gt;
                &lt;li&gt;
                    &lt;v-cell title="点击popup" value="底部弹出" is-link @click.native="popupVisible4 = true"&gt;&lt;/v-cell&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
            &lt;v-popup v-model="popupVisible4" class="v-popup-4"&gt;
                &lt;v-picker v-model="dateValue" :slots="dateSlots" @change="onDateChange" :visible-item-count="5"
                          :show-toolbar="true"&gt;
                    &lt;span class="v-popup-action v-popup-cancel" @click="popupVisible4 = false"&gt;取消&lt;/span&gt;
                    &lt;span class="v-popup-action v-popup-confirm" @click="confirm"&gt;确定&lt;/span&gt;
                &lt;/v-picker&gt;
            &lt;/v-popup&gt;
            </code></pre>
            <pre v-highlightjs @touchend.stop><code class="html">
export default {
    data() {
        return {
            popupVisible4: false,
            dateSlots: [{
                flex: 1,
                values: ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],
                className: 'slot1'
            }],
            dateValue: ''
        };
    },
    methods: {
        onDateChange (picker, values) {
            this.dateValue = values[0];
        },

        confirm () {
            this.$toast(this.dateValue);
            this.popupVisible4 = false;
        }
    }
};
            </code></pre>

            <div class="page-popup-wrapper">
                <!--<v-button @click.native="popupVisible1 = true" ref="button" :cus-class="'date-btn'">中部弹出 popup</v-button>-->
                <!--<v-button @click.native="popupVisible2 = true" :cus-class="'date-btn'">上侧弹出 popup</v-button>-->
                <!--<v-button @click.native="popupVisible3 = true" :cus-class="'date-btn'">右侧弹出 popup</v-button>-->
                <!--<v-button @click.native="" ref="button" :cus-class="'date-btn'">下侧弹出 popup</v-button>-->
            </div>
        </div>
        <div class="popup-con">
            <v-popup v-model="popupVisible1" position="middle" class="v-popup-float">
                <h2>标题</h2>
                <p>注释文字注释文字注释文字注释文字注释文字注释文字</p>
            </v-popup>
            <v-popup v-model="popupVisible2" position="top" class="v-popup-top" :modal="false">
                <p>更新成功</p>
            </v-popup>
            <v-popup v-model="popupVisible3" position="right" class="v-popup-panel" :modal="false">
                <v-button @clvick.native="popupVisible3 = false">关闭 popup</v-button>
            </v-popup>
            <v-popup v-model="popupVisible4" class="v-popup-4">
                <v-picker v-model="dateValue" :slots="dateSlots" @change="onDateChange" :visible-item-count="5"
                          :show-toolbar="true">
                    <span class="v-popup-action v-popup-cancel" @click="popupVisible4 = false">取消</span>
                    <span class="v-popup-action v-popup-confirm" @click="confirm">确定</span>
                </v-picker>
            </v-popup>
        </div>
    </div>
</template>

<script type="text/babel">
    import vCell from 'comb-ui/src/vendors/v-cell.vue';
    import vPicker from 'comb-ui/src/vendors/v-picker';
    import vPopup from 'comb-ui/src/vendors/v-popup';
    import vButton from 'comb-ui/src/vendors/v-button';

    export default {
        components: { vCell, vPicker, vPopup, vButton },
        data () {
            return {
                popupVisible1: false,
                popupVisible2: false,
                popupVisible3: false,
                popupVisible4: false,
                buttonBottom: 0,
                dateSlots: [{
                    flex: 1,
                    values: ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],
                    className: 'slot1'
                }],
                dateValue: ''
            };
        },

        watch: {
            popupVisible2 (val) {
                if (val) {
                    setTimeout(() => {
                        this.popupVisible2 = false;
                    }, 2000);
                }
            }
        },

        mounted () {
//            this.buttonBottom = this.$refs.button.$el.getBoundingClientRect().bottom;
        },

        methods: {
            onDateChange (picker, values) {
                console.log('values:::', values);

                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
                this.dateValue = values[0];
            },

            confirm () {
                console.log('popup.confirm: ');
                this.$toast(this.dateValue);
                this.popupVisible4 = false;
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";
/*

    .date-btn{
        width:100%;
        height:pxTorem(44px);
        margin-bottom:pxTorem(10px);
    }
    .page-popup-wrapper {
        padding: 0 20px;
        !*position: absolute 50% * * *;*!
        width: 100%;
        !*transform: translateY(-50%);*!
        button:not(:last-child) {
            margin-bottom: 20px;
        }
    }
    .v-popup-1 {
        width: 200px;
        border-radius: 8px;
        padding: 10px;
        transform: translate(-50%, 0);
        h1 {
            font-size: 20px;
            color: #26a2ff;
        }

        p {
            margin-bottom: 10px;
        }
    }

    .v-popup-1::before {
        triangle: 10px top #fff;
        content: '';
        position: absolute;
        top: -20px;
        right: 50px;
    }

    .v-popup-2 {
        width: 100%;
        height: 50px;
        text-align: center;
        background-color: rgba(0,0,0,.7);
        backface-visibility: hidden;
    }

    .v-popup-2 p {
        line-height: 50px;
        color: #fff;
    }

    .v-popup-3 {
        width: 100%;
        height: 100%;
        background-color: #fff;
    }

    .v-popup-3 .v-button {
        position: absolute;
        width: 90%;
        top: 50%;
        left: 5%;
        transform: translateY(-50%);
    }

    .v-popup-4 {
        width: 100%;
        !*.picker-slot-wrapper, .picker-item {*!
        !*backface-visibility: hidden;*!
        !*}*!
        position: absolute;
        bottom: 0;
        background: #FFFFFF;
    }
    .v-popup {
        position: fixed;
        background: #fff;
        top: 50%;
        left: 50%;
        -webkit-transform: translate3d(-50%,-50%,0);
        transform: translate3d(-50%,-50%,0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: .2s ease-out;
        transition: .2s ease-out;
    }
    .v-popup-bottom {
        top: auto;
        right: auto;
        bottom: 0;
        left: 50%;
        -webkit-transform: translate3d(-50%,0,0);
        transform: translate3d(-50%,0,0);
    }
*/
    .page-popup {
        height: 100%;
        overflow: hidden;

        .v-popup-float {
            width: pxTorem(200px);
            top: pxTorem(300px);
            padding: pxTorem(15px);
            border-radius: pxTorem(5px);

            &:before {
                display: inline-block;
                width: 0;
                height: 0;
                border: solid transparent;
                border-width: pxTorem(10px);
                border-bottom-color: #fff;
                content: "";
                position: absolute;
                top: pxTorem(-20px);
                right: pxTorem(20px);
            }
        }

        .v-popup-top {
            width: 100%;
            height: pxTorem(50px);
            text-align: center;
            background-color: rgba(0,0,0,.7);
            backface-visibility: hidden;

            p {
                line-height: pxTorem(50px);
                color: #fff;
            }
        }

        .v-popup-panel {
            width: 100%;
            height: 100%;
            background-color: #fff;

            .v-button {
                position: absolute;
                width: 90%;
                top: 50%;
                left: 5%;
                transform: translateY(-50%);
            }
        }
    }
</style>
