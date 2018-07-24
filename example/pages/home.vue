<template>
    <div class="page page-home">
        <div v-for="(rows, index) in list" :key="index">
            <h2>{{rows.title}}</h2>
            <div v-for="(item, idx) in rows.list" :key="idx">
                <!--<p>{{ item.name }}</p>-->
                <v-cell
                    :title="item.name"
                    is-link
                    :to="item.name"
                ></v-cell>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import {menus} from '../router';
// import Vue from 'vue';
// import vCell from '../../packages/v-cell.vue';
// Vue.component(vCell.name, vCell);
// console.log('home: ', vCell);
export default {
    // comments: { vCell },
    data () {
        return {
            list: menus
        };
    },

    created () {
        // this.list = list;
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
