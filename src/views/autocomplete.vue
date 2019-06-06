<template>
    <div class="v-autocomplete">
        <v-autocomplete v-model="value1" :colors="['#007aff', '#ff0000', '#FF9900']">
        </v-autocomplete>
    </div>
</template>
<script>
    import vAutocomplete from 'comb-ui/src/vendors/v-autocomplete.vue';
    export default {
        components: { vAutocomplete },

        data () {
            return {
                value1: null,
                value2: null
            };
        },
        mounted () {
            // console.log('shaolingtabbar.mounted...');
            // this.template = `<h1>${this.selected}我是标签模板第一项.</h1>`;
            // this.template1 = `${this.selected}我是标签模板第二项.`;
            // this.template2 = `${this.selected}我是标签模板第三项.`;
            // this.$refs.testTpl.innerHTML = `<h1>${this.selected}我是标签模板第一项.</h1>`;
        },
        created () {
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";
    .p-float-comments{display:none}
    .v-autocomplete{
        width: 100%;
        line-height: pxTorem(30px);
        font-size: pxTorem(16px);
        padding: pxTorem(100px);
        p{
            font-size: pxTorem(16px)
        }
    }
</style>
