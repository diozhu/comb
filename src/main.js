import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import CombUi from "comb-ui";
Vue.use(CombUi);
import './js/utils/highlightjs.js'; // 代码高亮

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
