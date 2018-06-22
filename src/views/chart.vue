<template>
    <div class="page">
        <v-charts :chartData="chartData" :settings="settings"></v-charts>
    </div>
</template>

<script>
import vCharts from '../vendor/v-charts/v-charts';

// 柱状图
export default {
    name: 'antv-4',
    components: {vCharts},
    data () {
        return {
            chartData: {
                rows: [
                    {name: 'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6},
                    {name: 'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4}
                ],
                config: {
                    type: 'fold',
                    fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'], // 展开字段集
                    key: '月份', // key字段
                    value: '月均降雨量' // value字段
                }
            },
            settings: {
                option: {
                    // container: 'total',
                    width: 700,
                    height: 500
                },

                x: '月份',
                y: '月均降雨量',

                draw: [
                    {
                        operation: 'interval',
                        color: ['name']
                    }
                ]
            }
        };
    }
};
</script>

<style>

</style>
