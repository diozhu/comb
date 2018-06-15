/**
 * _dll_install.js
 *          -- Author by Dio Zhu on 2018.6.13
 */

import vButton from './v-button.vue';
import vText from './v-text.vue';
import vRow from './v-row.vue';
import vCol from './v-col.vue';
import Refresh from './v-refresh';
import vRefresh from './v-refresh.vue';
import Scroll from './v-scroll';
import vScroll from './v-scroll.vue';
import Swipe from './v-swipe'; // 滑动手势
import vSwipe from './v-swipe.vue';
import vSwipeItem from './v-swipe-item.vue';
import ScrollPosition from './v-scroll-position'; // 滚动条位置记录、还原
import MessageBox from './v-message-box.js';
import Toast from './v-toast.js';
import Logger from '../js/utils/logger';
import vForm from './v-form.vue';
import vFormItem from './v-form-item.vue';
import vCalendar from './v-calendar.vue';

const version = '1.0.1';
const install = function (Vue) {
    if (install.installed) return;

    Vue.component(vButton.name, vButton);
    Vue.component(vText.name, vText);
    Vue.component(vRow.name, vRow);
    Vue.component(vCol.name, vCol);
    Vue.component(vRefresh.name, vRefresh);
    Vue.component(vScroll.name, vScroll);
    Vue.component(vSwipe.name, vSwipe);
    Vue.component(vSwipeItem.name, vSwipeItem);
    Vue.component(vForm.name, vForm);
    Vue.component(vFormItem.name, vFormItem);
    Vue.component(vCalendar.name, vCalendar);

    Vue.use(Refresh);
    Vue.use(Scroll);
    Vue.use(Swipe);
    Vue.use(ScrollPosition);

    Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
    Vue.$toast = Vue.prototype.$toast = Toast;
    Vue.$logger = Vue.prototype.$logger = Logger;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    install as default,
    version,
    vButton,
    vText,
    vRow,
    vCol,
    vSwipe,
    vSwipeItem,
    vForm,
    vFormItem,
    vCalendar,

    Refresh,
    vRefresh,
    Scroll,
    vScroll,
    Swipe,
    ScrollPosition,

    MessageBox,
    Toast,
    Logger
};
