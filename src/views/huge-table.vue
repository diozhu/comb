<template>
    <div class="page page-huge-table">
        <v-table v-model="list">
            <v-table-column label="日期" prop="date" width="150"></v-table-column>
            <v-table-column label="姓名" prop="name" width="150"></v-table-column>
            <v-table-column label="省份" prop="province" width="150"></v-table-column>
            <v-table-column label="地址" prop="address" width="300"></v-table-column>
        </v-table>
    </div>
</template>

<script>
    import * as api from '../js/core/api.js';
    import { vTable, vTableColumn } from 'comb-ui';

    export default {
        components: { vTable, vTableColumn },
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
                // api.getScheduleList({delay: 500}).then(res => {
                //     console.log('huge-table.init.getDelay: ', res);
                //     this.list = res;
                // });
                api.getDelay({delay: 200}).then(res => {
                    console.log('huge-table.init.getDelay: ', res);
                    this.list = [
                        { date: '2018-11-27', name: '张三', province: '北京', address: '朝阳区酒仙桥路瀚海国际大厦' },
                        { date: '2018-11-27', name: '张三', province: '北京', address: '朝阳区酒仙桥路瀚海国际大厦' },
                        { date: '2018-11-27', name: '张三', province: '北京', address: '朝阳区酒仙桥路瀚海国际大厦' },
                        { date: '2018-11-27', name: '张三', province: '北京', address: '朝阳区酒仙桥路瀚海国际大厦' },
                        { date: '2018-11-27', name: '张三', province: '北京', address: '朝阳区酒仙桥路瀚海国际大厦' }
                    ];
                });
            }
        }
    };
</script>
