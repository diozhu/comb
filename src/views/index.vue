<template>
    <div class="page page-index">
        <div v-for="(rows, index) in list" :key="index">
            <h2>{{rows.title}}</h2>
            <div v-for="(item, idx) in rows.list" :key="idx">
                <!--<p>{{ item.name }}</p>-->
                <v-cell
                    :title="item.name"
                    is-link
                    :to="{ name: item.name }"
                ></v-cell>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {menus} from '../routes.js';

    export default {
        name: "home",
        data () {
            return {
                list: menus
            };
        },
        methods: {
            handleClick () {
                console.log("Home.handleClick: ");
                this.$toast("toast~");
            }
        }
    };
</script>
