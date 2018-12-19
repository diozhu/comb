<template>
    <div class="page page-index">
        <div v-for="(item, index) in list" :key="index">
            <!--<h2>{{ ((item.meta && item.meta.group && item.meta.group != list[index - 1].meta.group) ? item.meta.group : '') }}</h2>-->
            <h2 v-if="item.meta && item.meta.group && item.meta.group != list[index - 1].meta.group">{{item.meta.group}}</h2>
            <!--<h2>{{rows.title}}</h2>-->
            <!--<div v-for="(item, idx) in rows.list" :key="idx">-->
                <!--<p>{{ item.name }}</p>-->
                <v-cell
                    v-if="item.name != 'index' && item.name != '404'"
                    :title="((item.meta && item.meta.title) ? item.meta.title + '（' : '') + item.name + ((item.meta && item.meta.title) ? '）' : '')"
                    is-link
                    :to="{ name: item.name }"
                ></v-cell>
            <!--</div>-->
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {menus} from '../routes.js';
    import vCell from 'comb-ui/src/vendors/v-cell.vue';

    export default {
        components: { vCell },
        data () {
            return {
                list: menus,
            };
        },
        mounted () {
            console.log('page.index.mounted: ');
        },
        methods: {
            handleClick () {
                console.log("Home.handleClick: ");
                this.$toast("toast~");
            }
        }
    };
</script>
