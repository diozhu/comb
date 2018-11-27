<template>
    <div class="page page-huge-table">
        <v-table v-model="list"></v-table>
    </div>
</template>

<script>
    import * as api from '../js/core/api.js';
    import { vTable } from 'comb-ui';

    export default {
        components: { vTable },
        data () {
            return {
                list: []
            };
        },
        mounted () {
            console.log('page.huge-table.mounted: ');
            this.init();
        },
        methods: {
            init () {
                api.getScheduleList({delay: 500}).then(res => {
                    console.log('huge-table.init.getDelay: ', res);
                    this.list = res;
                });
            }
        }
    };
</script>
