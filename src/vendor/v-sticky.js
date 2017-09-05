import Vue from 'vue';
import * as dom from '../js/utils/dom.js';
import * as utils from '../js/utils/utils.js';

const ctx = '@@sticky';

let listenAction;

// === base ===
let doBind = function () {
        if (this.binded) return; // eslint-disable-line
        this.binded = true;

        console.log(`[v-sticky].${this.vm._uid}.bind!`, this.expression);
        // console.log(`[v-sticky].${this.vm._uid}.bind!!!`, dom.getScrollEventTarget(this.el));
        // this.vm.$nextTick(() => {
        // setTimeout(() => {
        //     console.log(`[v-sticky].${this.vm._uid}.bind!!!`, dom.getScrollEventTarget(this.el));
        // }, 0);
        const params = this.expression || {};
        // const stickyTop = params.stickyTop || 0;
        const zIndex = params.zIndex || 1000;
        // const elStyle = this.el.style;

        this.el.style.position = '-webkit-sticky';
        this.el.style.position = 'sticky';
        // this.el.style.transform = 'translate3d(0, 0, 0)';

        // 如果浏览器支持 css sticky（Currently Safari, Firefox and Chrome Canary）
        let dpr = window.lib && window.lib.flexible && window.lib.flexible.dpr || 1;
        if (~this.el.style.position.indexOf('sticky')) {
            // elStyle.top = `${stickyTop}px`;
            if (this.modifiers.top) this.el.style.top = this.expression * dpr + 'px';
            if (this.modifiers.bottom) this.el.style.bottom = this.expression * dpr + 'px';
            this.el.style.zIndex = zIndex;
            return;
        }

        this.prefixes = dom.getDetectPrefixes();

        // 如果浏览器不支持sticky，初始化位置
        const elementChild = this.el.firstElementChild.style;
        // elementChild.cssText = `left: 0; right: 0; index: ${zIndex}`;
        elementChild.cssText = `left: 0; index: ${zIndex}; transform: translate3d(0, 0, 0);`;
        if (this.modifiers.top) elementChild.cssText += ` top: ${this.expression * dpr}px;`;
        // if (this.modifiers.top) elementChild.cssText += ` top: 0px;`;
        if (this.modifiers.bottom) elementChild.cssText += ` position: fixed; bottom: ${this.expression * dpr}px;`;
        // if (this.modifiers.bottom) elementChild.cssText += ` position: absolute; bottom: ${this.expression * dpr}px;`;

        this.active = false; // 浮动标识

        this.scrollEventTarget = dom.getScrollEventTarget(this.el);
        this.scrollListener = utils.throttle(doCheck.bind(this), 50);
        // this.scrollListener = doCheck.bind(this);
        this.scrollEventTarget.addEventListener('scroll', this.scrollListener);
    },
    doCheck = function () {
        const offsetTop = this.el.getBoundingClientRect().top;
        // console.log(`[v-sticky].${this.vm._uid}.doCheck!`, this.modifiers, offsetTop);
        if (offsetTop <= this.expression) {
            sticky.call(this);
            return;
        }
        reset.call(this);
    },
    sticky = function () {
        if (this.active) return;
        if (!this.el.style.height) {
            this.el.style.height = `${this.el.offsetHeight}px`;
        }
        // console.log(`[v-sticky].${this.vm._uid}.sticky!`);
        this.el.firstElementChild.style.position = 'fixed';
        this.active = true;
    },
    reset = function () {
        if (!this.active) return;
        this.el.firstElementChild.style.position = 'initial';
        this.active = false;
    };

let Sticky = {
    bind (el, binding, vnode) {
        el[ctx] = {
            el,
            vm: vnode.context,
            expression: binding.value || 0,
            modifiers: binding.modifiers
        };
        const args = arguments;
        el[ctx].vm.$on('hook:mounted', function () {
            el[ctx].vm.$nextTick(function () {
                if (dom.isAttached(el)) {
                    doBind.call(el[ctx], args);
                    return; // Add by Dio Zhu. on 2017.2.14
                }

                el[ctx].bindTryCount = 0;

                let tryBind = function () {
                    if (el[ctx].bindTryCount > 10) return; //eslint-disable-line
                    el[ctx].bindTryCount++;
                    if (dom.isAttached(el)) {
                        doBind.call(el[ctx], args);
                    } else {
                        setTimeout(tryBind, 50);
                    }
                };

                tryBind();
            });
        });
    },

    unbind () {
        window.removeEventListener('scroll', listenAction);
    },

    update (el, binding) {
        const params = binding.value || {};
        el.style.top = `${params.stickyTop}px`;
        el.style.zIndex = params.zIndex;
    }
};

// === install ===

const install = function (Vue) {
    Vue.directive('sticky', Sticky);
};

if (!Vue.prototype.$isServer && window.Vue) {
    window.Sticky = Sticky;
    Vue.use(install); // eslint-disable-line
}

Sticky.install = install;
export default Sticky;
