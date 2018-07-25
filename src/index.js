/**
 * Created by diozhu on 2017/2/6.
 */
// import Vue from 'vue';
import toast from '../packages/v-toast.js';
import messageBox from '../packages/v-message-box.js';
import validator from '../packages/v-validator.js';
import button from '../packages/v-button.vue';
import cell from '../packages/v-cell.vue';
import row from '../packages/v-row.vue';
import col from '../packages/v-col.vue';
import popup from '../packages/v-popup.vue';
import picker from '../packages/v-picker.vue';
import datetimePicker from '../packages/v-datetime-picker.vue';
import field from '../packages/v-field.vue';
import spinner from '../packages/v-spinner';
// import vText from './v-text.vue';
// import vFeed from './v-feed.vue';
// import Refresh from './v-refresh';
// import vRefresh from './v-refresh.vue';
// import Scroll from './v-scroll';
// import vScroll from './v-scroll.vue';
// import InfiniteScroll from './v-infinite-scroll';
// import vInfiniteScroll from './v-infinite-scroll.vue';
// import Swipe from './v-swipe'; // 滑动手势
// import ScrollPosition from './v-scroll-position'; // 滚动条位置记录、还原
// import Logger from '../js/utils/logger';

const version = '1.0.0';
const install = function (Vue) {
    if (install.installed) return;

    Vue.$toast = Vue.prototype.$toast = toast;
    Vue.$messagebox = Vue.prototype.$messagebox = messageBox;
    // Vue.$validator = Vue.prototype.$validator = validator;

    Vue.component(button.name, button);
    Vue.component(cell.name, cell);
    Vue.component(row.name, row);
    Vue.component(col.name, col);
    Vue.component(popup.name, popup);
    Vue.component(picker.name, picker);
    Vue.component(datetimePicker.name, datetimePicker);
    Vue.component(field.name, field);
    Vue.component(spinner.name, spinner);
    // Vue.component(vText.name, vText);
    // Vue.component(vFeed.name, vFeed);
    // Vue.component(vRefresh.name, vRefresh);
    // Vue.component(vScroll.name, vScroll);
    // Vue.component(vInfiniteScroll.name, vInfiniteScroll);
    //
    // Vue.use(Refresh);
    // Vue.use(Scroll);
    // Vue.use(InfiniteScroll);
    // Vue.use(Swipe);
    // Vue.use(ScrollPosition);
    //
    // Vue.$logger = Vue.prototype.$logger = Logger;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    install as default,
    version,
    toast,
    messageBox,
    validator,
    button,
    cell,
    row,
    col,
    popup,
    picker,
    datetimePicker,
    field,
    spinner,
    // vText,
    // vFeed,
    //
    // Refresh,
    // vRefresh,
    // Scroll,
    // vScroll,
    // vInfiniteScroll,
    // InfiniteScroll,
    // Swipe,
    // ScrollPosition,
    //
    // Logger
};
