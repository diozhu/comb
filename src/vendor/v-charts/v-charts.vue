<template>
    <div class="v-charts" :id="id">
        <span v-if="chartData.rows && chartData.rows.length === 0">没有数据</span>
    </div>
</template>

<script>
import chart from './index';

export default {
    name: 'v-charts',
    props: {
        chartData: {
            type: Object
        },
        settings: {
            type: Object
        }
    },
    data () {
        return {
            id: ''
        };
    },
    methods: {
        init () {
            this.id = 'v-chart-' + this._uid;
        }
    },
    created () {
        this.init();
    },
    mounted () {
        chart(this.id, this.chartData, this.settings);
    }
};
</script>

<style>

</style>
