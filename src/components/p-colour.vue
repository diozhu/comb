<script type="text/ecmascript-6">
    /**
     * 色卡
     *              -- Author by Dio Zhu. on 2017.4.28
     */
    export default {
        name: 'p-colour',

        props: {
            color: {
                type: String,
                default: '',
                required: true
            },
            title: {
                type: String,
                default: ''
            },
            subtitle: {
                type: String,
                default: ''
            }
        },

        methods: {
            onClick () {
                this.$toast(this.color);
            }
        },

        render (createElement) {
            let frm = null;
            if (this.title || this.subtitle) {
                frm = createElement(
                    'div',
                    {'class': 'p-colour__frm'},
                    [
                        createElement('div', {'class': 'p-colour__tit'}, this.title),
                        createElement('div', {'class': 'p-colour__sub'}, this.subtitle || (this.title ? this.color : ''))
                    ]
                );
            }

            return createElement(
                'div',
                {'class': 'p-colour'},
                [
                    createElement(
                        'div',
                        {'class': 'p-colour__col', style: {background: this.color}, on: {click: this.onClick}}
                    ),
                    frm
                ]
            );
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .p-colour {
        display: flex;
        flex-direction: row;
    }

    .p-colour__col {
        width: pxTorem(30px);
        height: pxTorem(30px);

        flex-shrink: 0;
        flex-grow: 0;
        flex-basis: auto;
    }

    .p-colour__frm {
        margin-left: pxTorem(3px);
    }

    .p-colour__tit {
        font-size: pxTorem(12px);
        line-height: 1.2;
        margin-top: pxTorem(3px);
    }
    .p-colour__sub {
        font-size: pxTorem(10px);
        line-height: 1;
        color: #95989F;
        margin-top: pxTorem(3px);
    }
</style>
