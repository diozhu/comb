<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <v-button @click="handleClick">toast</v-button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "home",
    components: {
        HelloWorld
    },
    methods: {
        handleClick() {
            console.log("Home.handleClick: ");
            this.$toast("toast~");
        }
    }
};
</script>
