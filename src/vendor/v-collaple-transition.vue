<script>
    import bus from '../vendor/eventbus.js'; //eslint-disable-line

    const elTransition = '0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out';
    const Transition = {
        'before-enter' (el) {
            // console.log('v-collaple-transition.before-enter: ', el);
            el.style.transition = elTransition;
            if (!el.dataset) el.dataset = {};

            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;

            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;
        },

        'enter' (el) {
            console.log('v-collaple-transition.enter: ');
            el.dataset.oldOverflow = el.style.overflow;
            if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + 'px';
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            } else {
                el.style.height = '';
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            }

            el.style.overflow = 'hidden';
        },

        'after-enter' (el) {
            // console.log('v-collaple-transition.after-enter: ', el, parseInt(el.offsetTop), parseInt(el.scrollHeight));
            bus.$emit('v-scroll-position.scrollTo', parseInt(el.offsetTop) + parseInt(el.scrollHeight)); // 滑动结束后通知v-scroll-position组件滚动到指定位置。。。Author by Dio Zhu. on 2018.4.20
            el.style.transition = '';
            el.style.height = '';
            el.style.overflow = el.dataset.oldOverflow;
        },

        'before-leave' (el) {
            if (!el.dataset) el.dataset = {};
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.dataset.oldOverflow = el.style.overflow;

            el.style.height = el.scrollHeight + 'px';
            el.style.overflow = 'hidden';
        },

        'leave' (el) {
            if (el.scrollHeight !== 0) {
                el.style.transition = elTransition;
                el.style.height = 0;
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            }
        },

        'after-leave' (el) {
            el.style.transition = '';
            el.style.height = '';
            el.style.overflow = el.dataset.oldOverflow;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
            console.log('v-collaple-transition.after-leave: ');
        }
    };

    export default {
        name: 'v-collaple-transition',
        functional: true,
        render (h, { children }) {
            const data = {
                on: Transition
            };
            return h('transition', data, children);
        }
    };
</script>
