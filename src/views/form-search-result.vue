<template>
    <div class="page page-form-search-result">
        <v-row :gutter.Number="30">
            <v-search :autofocus="true" v-model="keywords" @handle-search="handleSearch"> </v-search>
        </v-row>
    </div>
</template>

<script>
    import vRow from '../vendor/v-row.vue';
    import vSearch from '../vendor/v-search';

    export default {
        components: { vRow, vSearch },

        data () {
            return {
                keywords: '',
                defaultResult: [
                    'Apple',
                    'Banana',
                    'Orange',
                    'Durian',
                    'Lemon',
                    'Peach',
                    'Cherry',
                    'Berry',
                    'Core',
                    'Fig',
                    'Haw',
                    'Melon',
                    'Plum',
                    'Pear',
                    'Peanut',
                    'Other'
                ]
            };
        },
        computed: {
            filterResult () {
                return this.defaultResult.filter(val => new RegExp(this.keywords, 'i').test(val));
            }
        },
        watch: {
            keywords (val) {
                this.$toast({message: '搜索：' + val, position: 'top'});
            }
        },
        mounted () {
    //        this.$logger.log('form-search mounted... ');
        },
        methods: {
            handleSearch (val) {
                this.$toast({message: '搜索：' + val, position: 'top'});
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-form-search-result {
        padding: 0 ($grid-gutter-width / 2);

        h2 {
            margin-left: pxTorem(15px);
            line-height: pxTorem(40px);
        }

    }
</style>
