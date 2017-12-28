webpackJsonp([9], {
    0: function (e, t) {
        e.exports = function (e, t, i, n, o) {
            var s, r = e = e || {}, a = typeof e.default;
            "object" !== a && "function" !== a || (s = e, r = e.default);
            var l = "function" == typeof r ? r.options : r;
            t && (l.render = t.render, l.staticRenderFns = t.staticRenderFns), n && (l._scopeId = n);
            var c;
            if (o ? (c = function (e) {
                    (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o)
                }, l._ssrRegister = c) : i && (c = i), c) {
                var d = l.functional, u = d ? l.render : l.beforeCreate;
                d ? l.render = function (e, t) {
                    return c.call(t), u(e, t)
                } : l.beforeCreate = u ? [].concat(u, c) : [c]
            }
            return {esModule: s, exports: r, options: l}
        }
    }, 1: function (e, t) {
        function i(e, t) {
            n(t, d, function () {
                a[e].instances.push(this)
            }), n(t, "beforeDestroy", function () {
                var t = a[e].instances;
                t.splice(t.indexOf(this), 1)
            })
        }

        function n(e, t, i) {
            var n = e[t];
            e[t] = n ? Array.isArray(n) ? n.concat(i) : [n, i] : [i]
        }

        function o(e) {
            return function (t, i) {
                try {
                    e(t, i)
                } catch (e) {
                    console.error(e), console.warn("Something went wrong during Vue component hot-reload. Full reload required.")
                }
            }
        }

        var s, r, a = window.__VUE_HOT_MAP__ = Object.create(null), l = !1, c = !1, d = "beforeCreate";
        t.install = function (e, i) {
            l || (l = !0, s = e.__esModule ? e.default : e, r = s.version.split(".").map(Number), c = i, s.config._lifecycleHooks.indexOf("init") > -1 && (d = "init"), t.compatible = r[0] >= 2, t.compatible || console.warn("[HMR] You are using a version of vue-hot-reload-api that is only compatible with Vue.js core ^2.0.0."))
        }, t.createRecord = function (e, t) {
            "function" == typeof t && (t = t.options), i(e, t), a[e] = {Ctor: s.extend(t), instances: []}
        }, t.rerender = o(function (e, t) {
            var i = a[e];
            t ? ("function" == typeof t && (t = t.options), i.Ctor.options.render = t.render, i.Ctor.options.staticRenderFns = t.staticRenderFns, i.instances.slice().forEach(function (e) {
                e.$options.render = t.render, e.$options.staticRenderFns = t.staticRenderFns, e._staticTrees = [], e.$forceUpdate()
            })) : i.instances.slice().forEach(function (e) {
                e.$forceUpdate()
            })
        }), t.reload = o(function (e, t) {
            var n = a[e];
            if (t) {
                "function" == typeof t && (t = t.options), i(e, t), r[1] < 2 && (n.Ctor.extendOptions = t);
                var o = n.Ctor.super.extend(t);
                n.Ctor.options = o.options, n.Ctor.cid = o.cid, n.Ctor.prototype = o.prototype, o.release && o.release()
            }
            n.instances.slice().forEach(function (e) {
                e.$vnode && e.$vnode.context ? e.$vnode.context.$forceUpdate() : console.warn("Root or manually mounted instance modified. Full reload required.")
            })
        })
    }, 102: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(42);
        const s = () => {
            !1 === navigator.onLine && Object(o.a)("网络链接失败，请检查网络后重试")
        };
        n.platform.isAlipay || (s(), window.addEventListener("offline", s))
    }, 11: function (e, t, i) {
        !function (t, i) {
            e.exports = i()
        }(0, function () {
            return function (e) {
                function t(n) {
                    if (i[n]) return i[n].exports;
                    var o = i[n] = {i: n, l: !1, exports: {}};
                    return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }

                var i = {};
                return t.m = e, t.c = i, t.d = function (e, i, n) {
                    t.o(e, i) || Object.defineProperty(e, i, {configurable: !1, enumerable: !0, get: n})
                }, t.n = function (e) {
                    var i = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(i, "a", i), i
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 17)
            }([function (e, t) {
                e.exports = function (e, t, i, n, o, s) {
                    var r, a = e = e || {}, l = typeof e.default;
                    "object" !== l && "function" !== l || (r = e, a = e.default);
                    var c = "function" == typeof a ? a.options : a;
                    t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), i && (c.functional = !0), o && (c._scopeId = o);
                    var d;
                    if (s ? (d = function (e) {
                            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
                        }, c._ssrRegister = d) : n && (d = n), d) {
                        var u = c.functional, h = u ? c.render : c.beforeCreate;
                        u ? (c._injectStyles = d, c.render = function (e, t) {
                            return d.call(t), h(e, t)
                        }) : c.beforeCreate = h ? [].concat(h, d) : [d]
                    }
                    return {esModule: r, exports: a, options: c}
                }
            }, function (e, t, i) {
                var n = new (i(2));
                document.body ? n.elem = n.render(document.body) : document.addEventListener("DOMContentLoaded", function () {
                    n.elem = n.render(document.body)
                }, !1), e.exports = n
            }, function (e, t, i) {
                function n(e) {
                    return Array.prototype.slice.call(e, 0)
                }

                function o(e, t, i) {
                    var o = e.querySelectorAll(l);
                    o && n(o).forEach(function (e) {
                        e.attributes && n(e.attributes).forEach(function (n) {
                            var o = n.localName.toLowerCase();
                            if (-1 !== a.indexOf(o)) {
                                var s = c.exec(e.getAttribute(o));
                                if (s && 0 === s[1].indexOf(t)) {
                                    var r = function (e) {
                                        return e.replace(/\(|\)/g, "\\$&")
                                    }(i + s[1].split(t)[1]);
                                    e.setAttribute(o, "url(" + r + ")")
                                }
                            }
                        })
                    })
                }

                function s() {
                    var e = document.getElementsByTagName("base")[0], t = window.location.href.split("#")[0],
                        i = e && e.href;
                    this.urlPrefix = i && i !== t ? t + u : u;
                    var s = new r;
                    s.sniff(), this.browser = s.browser, this.content = [], "ie" !== this.browser.name && i && window.addEventListener("spriteLoaderLocationUpdated", function (e) {
                        var t = this.urlPrefix, i = e.detail.newUrl.split(u)[0] + u;
                        o(this.svg, t, i), this.urlPrefix = i, ("firefox" === this.browser.name || "edge" === this.browser.name || "chrome" === this.browser.name && this.browser.version[0] >= 49) && n(document.querySelectorAll("use[*|href]")).forEach(function (e) {
                            var n = e.getAttribute(h);
                            n && 0 === n.indexOf(t) && e.setAttributeNS(p, h, i + n.split(u)[1])
                        })
                    }.bind(this))
                }

                var r = i(3),
                    a = ["clipPath", "colorProfile", "src", "cursor", "fill", "filter", "marker", "markerStart", "markerMid", "markerEnd", "mask", "stroke"],
                    l = "[" + a.join("],[") + "]", c = /^url\((.*)\)$/, d = function (e) {
                        for (var t = e.querySelector("defs"), i = e.querySelectorAll("symbol linearGradient, symbol radialGradient, symbol pattern"), n = 0, o = i.length; n < o; n++) t.appendChild(i[n])
                    }, u = "#", h = "xlink:href", p = "http://www.w3.org/1999/xlink",
                    f = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="' + p + '"';
                s.styles = ["position:absolute", "width:0", "height:0"], s.spriteTemplate = function () {
                    return f + ' style="' + s.styles.join(";") + '"><defs>{content}</defs></svg>'
                }, s.symbolTemplate = function () {
                    return f + ">{content}</svg>"
                }, s.prototype.content = null, s.prototype.add = function (e, t) {
                    return this.svg && this.appendSymbol(e), this.content.push(e), u + t
                }, s.prototype.wrapSVG = function (e, t) {
                    var i = t.replace("{content}", e),
                        n = (new DOMParser).parseFromString(i, "image/svg+xml").documentElement;
                    return document.importNode && (n = document.importNode(n, !0)), "ie" !== this.browser.name && this.urlPrefix && o(n, u, this.urlPrefix), n
                }, s.prototype.appendSymbol = function (e) {
                    var t = this.wrapSVG(e, s.symbolTemplate()).childNodes[0];
                    this.svg.querySelector("defs").appendChild(t), "firefox" === this.browser.name && d(this.svg)
                }, s.prototype.toString = function () {
                    var e = document.createElement("div");
                    return e.appendChild(this.render()), e.innerHTML
                }, s.prototype.render = function (e, t) {
                    e = e || null, t = "boolean" != typeof t || t;
                    var i = this.wrapSVG(this.content.join(""), s.spriteTemplate());
                    return "firefox" === this.browser.name && d(i), e && (t && e.childNodes[0] ? e.insertBefore(i, e.childNodes[0]) : e.appendChild(i)), this.svg = i, i
                }, e.exports = s
            }, function (e, t) {
                !function (t) {
                    function i() {
                        var e = this;
                        r.forEach(function (t) {
                            e[t] = {name: s, version: [], versionString: s}
                        })
                    }

                    function n(e, t, i) {
                        o[t].forEach(function (n) {
                            var o = n[0], r = n[1], a = i.match(o);
                            a && (e[t].name = r, a[2] ? (e[t].versionString = a[2], e[t].version = []) : a[1] ? (e[t].versionString = a[1].replace(/_/g, "."), e[t].version = function (e) {
                                return e.split(/[\._]/).map(function (e) {
                                    return parseInt(e)
                                })
                            }(a[1])) : (e[t].versionString = s, e[t].version = []))
                        })
                    }

                    var o = {
                        browser: [[/msie ([\.\_\d]+)/, "ie"], [/trident\/.*?rv:([\.\_\d]+)/, "ie"], [/firefox\/([\.\_\d]+)/, "firefox"], [/chrome\/([\.\_\d]+)/, "chrome"], [/version\/([\.\_\d]+).*?safari/, "safari"], [/mobile safari ([\.\_\d]+)/, "safari"], [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"], [/crios\/([\.\_\d]+).*?safari/, "chrome"], [/opera/, "opera"], [/opera\/([\.\_\d]+)/, "opera"], [/opera ([\.\_\d]+)/, "opera"], [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"], [/opios\/([a-z\.\_\d]+)/, "opera"], [/blackberry/, "blackberry"], [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"], [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"], [/rim.*?version\/([\.\_\d]+)/, "blackberry"], [/iceweasel\/([\.\_\d]+)/, "iceweasel"], [/edge\/([\.\d]+)/, "edge"]],
                        os: [[/linux ()([a-z\.\_\d]+)/, "linux"], [/mac os x/, "macos"], [/mac os x.*?([\.\_\d]+)/, "macos"], [/os ([\.\_\d]+) like mac os/, "ios"], [/openbsd ()([a-z\.\_\d]+)/, "openbsd"], [/android/, "android"], [/android ([a-z\.\_\d]+);/, "android"], [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"], [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"], [/windows phone.*?([\.\_\d]+)/, "windows.phone"], [/windows mobile/, "windows.mobile"], [/blackberry/, "blackberryos"], [/bb\d+/, "blackberryos"], [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]],
                        device: [[/ipad/, "ipad"], [/iphone/, "iphone"], [/lumia/, "lumia"], [/htc/, "htc"], [/nexus/, "nexus"], [/galaxy nexus/, "galaxy.nexus"], [/nokia/, "nokia"], [/ gt\-/, "galaxy"], [/ sm\-/, "galaxy"], [/xbox/, "xbox"], [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]]
                    }, s = "Unknown", r = Object.keys(o);
                    i.prototype.sniff = function (e) {
                        var t = this, i = (e || navigator.userAgent || "").toLowerCase();
                        r.forEach(function (e) {
                            n(t, e, i)
                        })
                    }, void 0 !== e && e.exports ? e.exports = i : (t.Sniffr = new i, t.Sniffr.sniff(navigator.userAgent))
                }(this)
            }, function (e, t, i) {
                "use strict";
                var n = i(6), o = i.n(n), s = {
                    name: "UxPopup",
                    props: {
                        position: {type: String, default: "center"},
                        opacity: {type: Number, default: .7},
                        duration: {type: Number, default: .2},
                        showCloseButton: {type: Boolean, default: !1},
                        touchClose: {type: Boolean, default: !0},
                        zIndex: {type: Number, default: 7777}
                    },
                    data: function () {
                        return {CloseIcon: o.a}
                    },
                    computed: {
                        maskStyle: function () {
                            var e = {top: "flex-start", center: "center", bottom: "flex-end"}[this.position] || "";
                            return {
                                background: "rgba(0, 0, 0, " + this.opacity + ")",
                                transitionDuration: this.duration + "s",
                                alignItems: e,
                                zIndex: "" + this.zIndex
                            }
                        }, wrapperStyle: function () {
                            return {transitionDuration: this.duration + "s"}
                        }
                    },
                    methods: {
                        closePopup: function () {
                            this.$emit("CLOSE_POPUP")
                        }, clickMask: function () {
                            this.touchClose && this.$emit("CLOSE_POPUP")
                        }
                    }
                }, r = {
                    render: function () {
                        var e = this, t = e.$createElement, i = e._self._c || t;
                        return i("Transition", {
                            attrs: {
                                enterClass: e.$style.maskEnter,
                                enterActiveClass: e.$style.maskEnterActive,
                                leaveClass: e.$style.maskLeave,
                                leaveActiveClass: e.$style.maskLeaveActive
                            }
                        }, [i("div", {
                            class: e.$style.mask, style: e.maskStyle, on: {
                                click: function (t) {
                                    t.stopPropagation(), e.clickMask()
                                }, touchmove: function (e) {
                                    e.stopPropagation(), e.preventDefault()
                                }
                            }
                        }, [i("div", {
                            class: [e.$style.wrapper, e.$style[e.position + "-wrapper"]],
                            style: e.wrapperStyle,
                            on: {
                                click: function (e) {
                                    e.stopPropagation()
                                }
                            }
                        }, [e.showCloseButton ? i("div", {
                            class: e.$style.close, on: {
                                click: function (t) {
                                    t.stopPropagation(), e.closePopup()
                                }
                            }
                        }, [i("svg", [i("use", {attrs: {"xlink:href": e.CloseIcon}})])]) : e._e(), e._v(" "), e._t("default")], 2)])])
                    }, staticRenderFns: []
                }, a = i(0)(s, r, !1, function (e) {
                    this.$style = i(5)
                }, null, null);
                t.a = a.exports
            }, function (e, t) {
                e.exports = {
                    mask: "Popup-mask_2vJ_ko7",
                    wrapper: "Popup-wrapper_2IImAZj",
                    close: "Popup-close_2ubCStW",
                    "center-wrapper": "Popup-center-wrapper_29jr-9C",
                    centerWrapper: "Popup-center-wrapper_29jr-9C",
                    "mask-enter": "Popup-mask-enter_qsQRhJA",
                    maskEnter: "Popup-mask-enter_qsQRhJA",
                    "mask-leave-active": "Popup-mask-leave-active_zmQ0FSR",
                    maskLeaveActive: "Popup-mask-leave-active_zmQ0FSR",
                    "bottom-wrapper": "Popup-bottom-wrapper_1GLew3-",
                    bottomWrapper: "Popup-bottom-wrapper_1GLew3-",
                    "top-wrapper": "Popup-top-wrapper_37npiN2",
                    topWrapper: "Popup-top-wrapper_37npiN2"
                }
            }, function (e, t, i) {
                var n = i(1);
                e.exports = n.add('<symbol viewBox="0 0 32 32" id="close.ff66167" ><path fill-rule="evenodd" d="M17.556 16.142L30.99 2.707a1 1 0 1 0-1.413-1.414L16.142 14.728 2.707 1.293a1 1 0 1 0-1.414 1.414l13.435 13.435L1.293 29.577a1 1 0 1 0 1.414 1.414l13.435-13.434L29.577 30.99a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.413L17.557 16.142z"/></symbol>', "close.ff66167")
            }, function (e, t, i) {
                "use strict";
                var n = {
                    name: "UxDialogue",
                    props: {
                        title: {type: String, default: "重要提示"},
                        content: {type: String, default: ""},
                        textAlign: {type: String, default: "center"},
                        buttons: {
                            type: Array, default: function () {
                                return []
                            }
                        }
                    }
                }, o = {
                    render: function () {
                        var e = this, t = e.$createElement, i = e._self._c || t;
                        return i("div", {class: e.$style.wrapper}, [e.title ? i("h3", {class: e.$style.title}, [e._v(e._s(e.title))]) : e._e(), e._v(" "), e.content ? i("p", {
                            class: e.$style.content,
                            style: {textAlign: e.textAlign},
                            domProps: {innerHTML: e._s(e.content)}
                        }) : e._e(), e._v(" "), e._t("default"), e._v(" "), e.buttons.length ? i("div", {class: e.$style.buttons}, e._l(e.buttons, function (t) {
                            return i("button", {
                                class: [e.$style.button, (n = {}, n[e.$style.highlight] = t.highlight, n)],
                                attrs: {type: "button"},
                                on: {click: t.action}
                            }, [e._v("\n      " + e._s(t.text) + "\n    ")]);
                            var n
                        })) : e._e()], 2)
                    }, staticRenderFns: []
                }, s = i(0)(n, o, !1, function (e) {
                    this.$style = i(8)
                }, null, null);
                t.a = s.exports
            }, function (e, t) {
                e.exports = {
                    wrapper: "Dialogue-wrapper_1c-lP67",
                    title: "Dialogue-title_3apUe-w",
                    content: "Dialogue-content_3oyn5c6",
                    buttons: "Dialogue-buttons_3Q2BV0T",
                    highlight: "Dialogue-highlight_WRW2YrD"
                }
            }, , , , , , , , , function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(4), o = i(7), s = {
                    name: "UxMessageBox", components: {Popup: n.a, Dialogue: o.a}, data: function () {
                        return this.reject = null, {
                            title: null,
                            content: null,
                            textAlign: null,
                            buttons: [],
                            showCloseButton: !1,
                            showPopup: !1,
                            showTextInput: !1,
                            inputContent: "",
                            inputPlaceholder: ""
                        }
                    }, methods: {
                        close: function () {
                            var e = this;
                            setTimeout(function () {
                                e.inputContent = "", e.inputPlaceholder = "", e.showTextInput = !1, e.showCloseButton = !1
                            }), this.reject = null, this.showPopup = !1
                        }, setAlert: function (e) {
                            var t = this, i = e.title, n = e.content, o = e.textAlign, s = e.showCloseButton,
                                r = e.buttonText;
                            return this.title = i, this.content = n, this.textAlign = o, this.showCloseButton = !!s, new Promise(function (e, i) {
                                t.reject = i, t.buttons = [{
                                    text: r || "知道了", action: function () {
                                        e(), t.close()
                                    }, highlight: !0
                                }], t.showPopup = !0
                            })
                        }, setConfirm: function (e) {
                            var t = this, i = e.title, n = e.content, o = e.textAlign, s = e.showCloseButton,
                                r = e.resolveText, a = e.rejectText;
                            return this.title = i, this.content = n, this.textAlign = o, this.showCloseButton = !!s, new Promise(function (e, i) {
                                t.reject = i, t.buttons = [{
                                    text: a || "取消", action: function () {
                                        i({action: "CANCEL"}), t.close()
                                    }
                                }, {
                                    text: r || "确认", action: function () {
                                        e(), t.close()
                                    }, highlight: !0
                                }], t.showPopup = !0
                            })
                        }, prompt: function (e) {
                            var t = this, i = e.title, n = e.content, o = e.rejectText, s = e.resolveText,
                                r = e.showCloseButton, a = e.validator, l = e.placeholder;
                            return this.title = i, this.content = n, this.showTextInput = !0, this.showCloseButton = !!r, this.inputPlaceholder = l || "", new Promise(function (e, i) {
                                t.reject = i, t.buttons = [{
                                    text: o || "取消", action: function () {
                                        i({action: "CANCEL"}), t.close()
                                    }
                                }, {
                                    text: s || "确认", action: function () {
                                        a && !a(t.inputContent) || (e(t.inputContent), t.close())
                                    }, highlight: !0
                                }], t.showPopup = !0
                            })
                        }, popupCloseHandler: function () {
                            this.reject && this.reject({action: "CLOSE"}), this.close()
                        }
                    }
                }, r = {
                    render: function () {
                        var e = this, t = e.$createElement, i = e._self._c || t;
                        return i("Popup", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.showPopup,
                                expression: "showPopup"
                            }], attrs: {showCloseButton: e.showCloseButton}, on: {
                                CLOSE_POPUP: function (t) {
                                    e.popupCloseHandler()
                                }
                            }
                        }, [i("Dialogue", {
                            attrs: {
                                title: e.title,
                                content: e.content,
                                textAlign: e.textAlign,
                                buttons: e.buttons
                            }
                        }, [e.showTextInput ? i("div", {class: e.$style.box}, [i("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model.trim",
                                value: e.inputContent,
                                expression: "inputContent",
                                modifiers: {trim: !0}
                            }],
                            attrs: {placeholder: e.inputPlaceholder, type: "text"},
                            domProps: {value: e.inputContent},
                            on: {
                                input: function (t) {
                                    t.target.composing || (e.inputContent = t.target.value.trim())
                                }, blur: function (t) {
                                    e.$forceUpdate()
                                }
                            }
                        })]) : e._e()])], 1)
                    }, staticRenderFns: []
                }, a = i(0)(s, r, !1, function (e) {
                    this.$style = i(18)
                }, null, null).exports, l = {
                    name: "UxToast", data: function () {
                        return {messages: [], showToast: !1, timeout: null}
                    }, methods: {
                        setToast: function () {
                            var e = this;
                            clearTimeout(this.timeout), this.showToast = !0, this.timeout = setTimeout(function () {
                                e.showToast = !1
                            }, 3e3)
                        }, afterLeave: function () {
                            this.messages.shift(), this.messages.length && this.setToast()
                        }, addMessage: function (e) {
                            this.messages.push(e), 1 === this.messages.length && this.setToast()
                        }
                    }
                }, c = {
                    render: function () {
                        var e = this.$createElement, t = this._self._c || e;
                        return t("Transition", {
                            attrs: {
                                enterClass: this.$style.enter,
                                leaveActiveClass: this.$style.leaveActive
                            }, on: {afterLeave: this.afterLeave}
                        }, [t("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: this.showToast,
                                expression: "showToast"
                            }], class: this.$style.wrapper
                        }, [this._v("\n    " + this._s(this.messages[0]) + "\n  ")])])
                    }, staticRenderFns: []
                }, d = i(0)(l, c, !1, function (e) {
                    this.$style = i(19)
                }, null, null).exports;
                t.default = {
                    install: function (e) {
                        var t = new e({
                            name: "ux-messagebox", render: function (e) {
                                return e("div", {}, [e(a, {ref: "MessageDialog"}), e(d, {ref: "MessageToast"})])
                            }
                        }).$mount();
                        document.body.appendChild(t.$el), e.prototype.$MessageBox = {
                            alert: t.$refs.MessageDialog.setAlert,
                            confirm: t.$refs.MessageDialog.setConfirm,
                            prompt: t.$refs.MessageDialog.prompt,
                            toast: t.$refs.MessageToast.addMessage
                        }
                    }
                }
            }, function (e, t) {
                e.exports = {box: "MessageDialog-box_3zL04f3"}
            }, function (e, t) {
                e.exports = {
                    wrapper: "MessageToast-wrapper_1b8l3iQ",
                    enter: "MessageToast-enter_2wapAlH",
                    "leave-active": "MessageToast-leave-active_3JFUzDj",
                    leaveActive: "MessageToast-leave-active_3JFUzDj"
                }
            }])
        })
    }, 115: function (e, t, i) {
        "use strict";
        t.a = {tagType: {1: "家", 2: "学校", 3: "公司"}, sexType: {1: "男", 2: "女"}}
    }, 136: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(25), s = i(137);
        t.a = {
            data() {
                return this.autoLogin = !1, this.hbInstance = null, {
                    alipay: {alipayCode: "", authType: 1, phone: ""},
                    alipayAuthType: 0
                }
            }, created() {
                if (n.platform.isAlipay) {
                    const e = UParams();
                    this.autoLogin = e.auth_type || this.alipayInvoke && (!this.alipayInvoke.length || -1 !== this.alipayInvoke.indexOf(e.from)) && !n.store.userId, this._canAuthHongbao = 1 === this.alipayAuthType && o.b.canJSAuth
                }
            }, mounted() {
                if (n.platform.isAlipay) {
                    const e = UParams();
                    e.auth_type ? (this.alipay.alipayCode = o.b.getCookieAlipayCode(), this.alipay.authType = e.auth_type, this.alipay.phone = o.c.getUrlPhone(), o.c.store.set("code", this.alipay.alipayCode), this.alipayLogin()) : this.autoLogin ? this.authThenLogin() : n.store.userId && e.auth_arr && this.openAuthHongbao(), -1 !== ["pay_antvip", "pay_living"].indexOf(e.from) && this.$on("GEO_AND_USER", () => {
                        this.openAuthHongbao(5)
                    })
                }
            }, methods: {
                authThenLogin(e = 1) {
                    o.b.getAlipayCode(e).then(e => {
                        this.alipay.alipayCode = e.alipay_code, this.alipay.authType = e.auth_type, this.alipay.phone = e.mobile, this.alipayLogin()
                    }).catch(() => {
                    })
                }, openAuthHongbao(e) {
                    this.hbInstance = Object(s.a)(e), this.hbInstance && this.hbInstance.$on("ALI_LOGIN", () => this.$emit("ALI_LOGIN"))
                }, alipayLogin() {
                    o.a.login(this.alipay.alipayCode, this.alipay.authType).then(() => {
                        this.$emit("ALI_LOGIN")
                    }).catch(e => {
                        switch (e.name) {
                            case"ALIPAY_LOGIN_NEED_USER_AUTH_LOGIN":
                                0 === this.alipayAuthType && this.$refs.loginPopup ? this.$refs.loginPopup.show() : this._canAuthHongbao && this.showAuthHongbao(3);
                                break;
                            case"ALIPAY_LOGIN_NEED_AUTH_USER":
                                this._canAuthHongbao ? this.showAuthHongbao() : this.authThenLogin(2);
                                break;
                            case"ALIPAY_LOGIN_NEED_H5_LOGIN":
                                UBT.send("EVENT", {id: 101471}), this._canAuthHongbao && this.showAuthHongbao(3);
                                break;
                            default:
                                window.perf && window.perf.sendEvent({
                                    name: "h5/alipay-login-failed",
                                    id: "r1KWDIKYZ",
                                    data: {error: e.message || JSON.stringify(e)}
                                })
                        }
                    })
                }, showAuthHongbao(e) {
                    (n.store.location || {}).geohash && this.openAuthHongbao(e), this.$on("LOC_SUCCESS", () => this.openAuthHongbao(e))
                }
            }
        }
    }, 137: function (e, t, i) {
        "use strict";
        var n = i(138);
        let o = !1;
        t.a = (e => {
            if (o) return;
            const t = new Vue({
                mixins: [n.a], created() {
                    this.state = e || 0
                }
            }).$mount();
            return o = !0, document.body.appendChild(t.$el), t
        })
    }, 138: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(140), o = i(153), s = !1, r = {};
            e.hot && e.hot.accept(['!!vue-style-loader!css-loader?{"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-bbcd8d28","scoped":false,"hasInlineConfig":true}!stylus-loader!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(67);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-bbcd8d28"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(67), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/components/authHongbao/index.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 139: function (e, t, i) {
        (t = e.exports = i(17)(void 0)).push([e.i, ".index-1h3wz_0 {\n  width: 8.533333rem;\n  width: 85.333333vw;\n}\n\n.index-2IlVa_0 {\n  width: 8.533333rem;\n  width: 85.333333vw;\n  height: 4.266667rem;\n  height: 42.666667vw;\n  background-repeat: no-repeat;\n  background-position: bottom center;\n  background-size: 100%;\n}\n\n.index-2q9zh_0 {\n  background-image: -webkit-gradient(linear, right top, left top, from(#e5183e), to(#fd5e4f));\n  background-image: -webkit-linear-gradient(right, #e5183e, #fd5e4f);\n  background-image: linear-gradient(to left, #e5183e, #fd5e4f);\n  padding-top: 0.453333rem;\n  padding-top: 4.533333vw;\n  margin-top: -0.026667rem;\n  margin-top: -0.266667vw;\n  border-bottom-left-radius: 0.320000rem;\n  border-bottom-left-radius: 3.200000vw;\n  border-bottom-right-radius: 0.320000rem;\n  border-bottom-right-radius: 3.200000vw;\n}\n\n.index-WNZje_0 {\n  font-size: 0.346667rem;\n  color: #ffd9a6;\n}\n\n.index-WNZje_0 .index-1BhJH_0 {\n  color: #fff;\n}\n\n.index-23pEl_0 {\n  position: absolute;\n  top: -0.853333rem;\n  top: -8.533333vw;\n  height: 0.853333rem;\n  height: 8.533333vw;\n  width: 8.533333rem;\n  width: 85.333333vw;\n}\n\n.index-e24aF_0 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  background-image: -webkit-gradient(linear, right top, left top, from(#dc1e36), to(#fd4e4c));\n  background-image: -webkit-linear-gradient(right, #dc1e36, #fd4e4c);\n  background-image: linear-gradient(to left, #dc1e36, #fd4e4c);\n  border-bottom-left-radius: 0.320000rem;\n  border-bottom-left-radius: 3.200000vw;\n  border-bottom-right-radius: 0.320000rem;\n  border-bottom-right-radius: 3.200000vw;\n  padding-bottom: 0.666667rem;\n  padding-bottom: 6.666667vw;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  text-align: center;\n  padding-top: 0.346667rem;\n  padding-top: 3.466667vw;\n}\n\n.index-e24aF_0 .index-3kTG5_0 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  font-size: 0.426667rem;\n  color: #ffd9a6;\n  margin-top: 0.133333rem;\n  margin-top: 1.333333vw;\n}\n\n.index-e24aF_0 .index-3kTG5_0.index-1JgBL_0 {\n  color: #fff;\n}\n\n.index-e24aF_0 .index-3kTG5_0 svg {\n  fill: #ffd9a6;\n  width: 0.480000rem;\n  width: 4.800000vw;\n  height: 0.426667rem;\n  height: 4.266667vw;\n  margin-right: 0.213333rem;\n  margin-right: 2.133333vw;\n}\n\n.index-2wYvZ_0 {\n  display: block;\n  width: 6.666667rem;\n  width: 66.666667vw;\n  height: 1.173333rem;\n  height: 11.733333vw;\n  font-size: 0.426667rem;\n  text-align: center;\n  border-radius: 0.640000rem;\n  border-radius: 6.400000vw;\n  border: 0.013333rem solid #f5de95 ;\n  border: 0.133333vw solid #f5de95 ;\n  color: #ffd9a6;\n  background-color: transparent;\n}\n\n.index-2wYvZ_0.index-1hSZf_0 {\n  position: relative;\n  background-color: #f2c189;\n  border: none;\n  margin-top: 0.373333rem;\n  margin-top: 3.733333vw;\n  margin-bottom: 0.213333rem;\n  margin-bottom: 2.133333vw;\n}\n\n.index-2wYvZ_0.index-1hSZf_0:after {\n  display: table-cell;\n  content: attr(content);\n  position: absolute;\n  left: 0;\n  width: 6.666667rem;\n  width: 66.666667vw;\n  border-radius: 0.640000rem;\n  border-radius: 6.400000vw;\n  height: 1.173333rem;\n  height: 11.733333vw;\n  line-height: 1.173333rem;\n  line-height: 11.733333vw;\n  bottom: 0.053333rem;\n  bottom: 0.533333vw;\n  color: #974200;\n  font-weight: bold;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#fdf6db), to(#f5de95));\n  background-image: -webkit-linear-gradient(top, #fdf6db, #f5de95);\n  background-image: linear-gradient(to bottom, #fdf6db, #f5de95);\n  -webkit-box-shadow: 0 0.053333rem 0.160000rem 0 rgba(0, 0, 0, .2);\n  -webkit-box-shadow: 0 0.533333vw 1.600000vw 0 rgba(0, 0, 0, .2);\n  box-shadow: 0 0.053333rem 0.160000rem 0 rgba(0, 0, 0, .2);\n  box-shadow: 0 0.533333vw 1.600000vw 0 rgba(0, 0, 0, .2);\n}\n\n.index-2wYvZ_0.index-2C2B2_0:after {\n  color: #999;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#f5f5f5), to(#e5e5e5));\n  background-image: -webkit-linear-gradient(#f5f5f5, #e5e5e5);\n  background-image: linear-gradient(#f5f5f5, #e5e5e5);\n  -webkit-box-shadow: 0 0.053333rem 0.160000rem rgba(0, 0, 0, .1);\n  -webkit-box-shadow: 0 0.533333vw 1.600000vw rgba(0, 0, 0, .1);\n  box-shadow: 0 0.053333rem 0.160000rem rgba(0, 0, 0, .1);\n  box-shadow: 0 0.533333vw 1.600000vw rgba(0, 0, 0, .1);\n}\n\n.index-1dLfx_0 {\n  width: 6.666667rem;\n  width: 66.666667vw;\n  height: 1.173333rem;\n  height: 11.733333vw;\n  border-radius: 0.640000rem;\n  border-radius: 6.400000vw;\n  background-color: rgba(0, 0, 0, .3);\n  display: block;\n  margin: 0.133333rem auto;\n  margin: 1.333333vw auto;\n  text-align: center;\n  font-size: 0.373333rem;\n  color: #fdf6db;\n}\n\n.index-1dLfx_0::-webkit-input-placeholder {\n  color: #fdf6db;\n}\n\n.index-1dLfx_0:-ms-input-placeholder {\n  color: #fdf6db;\n}\n\n.index-1dLfx_0::-ms-input-placeholder {\n  color: #fdf6db;\n}\n\n.index-1dLfx_0::placeholder {\n  color: #fdf6db;\n}\n\n.index-1dLfx_0:focus::-webkit-input-placeholder {\n  color: #fdb2a4;\n  opacity: 0.85;\n}\n\n.index-1dLfx_0:focus:-ms-input-placeholder {\n  color: #fdb2a4;\n  opacity: 0.85;\n}\n\n.index-1dLfx_0:focus::-ms-input-placeholder {\n  color: #fdb2a4;\n  opacity: 0.85;\n}\n\n.index-1dLfx_0:focus::placeholder {\n  color: #fdb2a4;\n  opacity: 0.85;\n}\n\n.index-lXBa6_0 {\n  height: 2.320000rem;\n  height: 23.200000vw;\n  line-height: 2.320000rem;\n  line-height: 23.200000vw;\n  color: #ffd9a6;\n  font-size: 0.693333rem;\n  text-align: center;\n}", ""]), t.locals = {
            root: "index-1h3wz_0",
            header: "index-2IlVa_0",
            content: "index-2q9zh_0",
            phoneTip: "index-WNZje_0",
            phone: "index-1BhJH_0",
            arc: "index-23pEl_0",
            "btn-group": "index-e24aF_0",
            btnGroup: "index-e24aF_0",
            tip: "index-3kTG5_0",
            white: "index-1JgBL_0",
            btn: "index-2wYvZ_0",
            primary: "index-1hSZf_0",
            disabled: "index-2C2B2_0",
            input: "index-1dLfx_0",
            emptyTip: "index-lXBa6_0"
        }
    }, 140: function (e, t, i) {
        "use strict";
        var n = i(25), o = i(4), s = i(42), r = i(55), a = i(44), l = i(141), c = i(145), d = i(148), u = i(151),
            h = i(152);
        const p = UParams(), f = {
            normal: "//fuss10.elemecdn.com/7/6f/cf47fa4a7277a5209e83470fe3ce8png.png",
            aliday: "//fuss10.elemecdn.com/7/ca/8278cf43fe304a6b47544ddf779b9png.png"
        }, m = p.auth_arr, g = [{title: "立即领取并授权", primary: !0, handler: "makeAuth", state: 0}, {
            title: "确认领取",
            primary: !0,
            handler: "loginThenGetHongbao",
            state: 1
        }, {title: "换一个账号", primary: !1, handler: "changeAccount", state: 1}, {
            title: "确认领取",
            primary: !0,
            handler: "getPhoneHongbao",
            state: [3, 4]
        }, {title: "确认领取", primary: !0, handler: "getBaida", state: 5}, {
            title: "去购买",
            primary: !0,
            handler: "goSvip",
            state: 6
        }, {title: "有钱任性，不需要", primary: !1, handler: "cancel", state: [0, 3, 4, 5, 6]}], v = () => {
            const e = babelHelpers.extends({}, p, {auth_arr: 1}),
                t = `${location.pathname}#${window.Utils.paramToString(e)}`,
                i = `/login/#redirect=${encodeURIComponent(t)}`;
            location.href = i
        }, y = {
            0: {name: "auth-state-1", id: "rJtX4hCbf"},
            1: {name: "auth-state-2", id: "Hk1VN3CWf"},
            2: {name: "auth-state-3", id: "r1CVE20Wf"},
            3: {name: "auth-state-4", id: "ryrrxO8Gf"},
            4: {name: "auth-state-5", id: "rJ2rguIMM"},
            6: {name: "auth-state-7", id: "H18XCicff"}
        }, b = e => {
            const t = y[e];
            t && window.perf && window.perf.sendEvent(t)
        }, w = () => {
            const e = o.store.userId;
            if (!e) return;
            let t = {};
            try {
                t = JSON.parse(localStorage.getItem("ARRIVAL_STAMP")) || {}
            } catch (e) {
            }
            t[e] = Date.now(), localStorage.setItem("ARRIVAL_STAMP", JSON.stringify(t))
        }, x = -1 !== ["pay_antvip", "pay_living"].indexOf(p.from);
        t.a = {
            components: {MaskLayer: r.a, HongbaoCover: l.a, Hongbao: c.a}, data() {
                return this.icon = d.a, {
                    showModal: !1,
                    state: 0,
                    headerImg: null,
                    hongbaoList: [],
                    alipay: {alipayCode: "", authType: 1, phone: ""},
                    isBusying: !1,
                    phoneInput: ""
                }
            }, watch: {
                state(e) {
                    b(e);
                    const t = {4: 21, 6: 19};
                    t[e] && UBT.send("EVENT", {id: 101859, params: {type: t[e]}})
                }
            }, computed: {
                btnDisabled() {
                    return (3 === this.state || 4 === this.state) && !/^1\d{10}$/.test(this.phoneInput)
                }, btnConfig() {
                    return g.filter(e => Array.isArray(e.state) ? -1 !== e.state.indexOf(this.state) : e.state === this.state)
                }, phone() {
                    return n.c.formatHiddenPhone(this.alipay.phone)
                }
            }, created() {
                const e = () => {
                    let e = 17;
                    3 === this.state ? e = 18 : 5 === this.state && (e = "pay_antvip" === p.from ? 20 : 22), UBT.send("EVENT", {
                        id: 101859,
                        params: {type: e}
                    }), b(this.state)
                };
                m ? Promise.all([this.getHongbao(), this.checkAliday()]).then(([t, i]) => {
                    t.length && (this.headerImg = `url(${f[i ? "aliday" : "normal"]})`, this.showModal = !0, e())
                }).catch(() => {
                }) : this.checkAliday().then(t => {
                    const i = new Image;
                    i.onload = (() => {
                        this.headerImg = `url(${i.src})`, this.showModal = !0, e()
                    }), i.src = f[t ? "aliday" : "normal"]
                }).catch(() => {
                })
            }, methods: {
                btnHanlder(e) {
                    this[e] && this[e]()
                },
                checkAliday: () => Promise.all([u.a.showAlidayShop(3, (o.store.location || {}).geohash), Object(a.a)()]).then(([e, t]) => "pay_hui" === p.from ? e : e && !t.disabled).catch(() => !1),
                makeAuth() {
                    UBT.send("EVENT", {id: 101990}), UBT.send("EVENT", {
                        id: 101408,
                        params: {type: 4}
                    }), n.b.getAlipayCode(2).then(e => {
                        this.alipay.alipayCode = e.alipay_code, this.alipay.authType = e.auth_type, this.alipay.phone = e.mobile, this.alipayLogin(), UBT.send("EVENT", {id: 101989})
                    }).catch(e => {
                        11 === e.error ? this.state = 4 : Object(s.a)("网络繁忙，请稍后再试"), UBT.send("EVENT", {id: 102329})
                    })
                },
                changeAccount() {
                    UBT.send("EVENT", {id: 102331}), v()
                },
                loginThenGetHongbao() {
                    UBT.send("EVENT", {id: 102330}), this.isBusying = !0, n.a.login(this.alipay.alipayCode, this.alipay.authType, {auth_login: 1}).then(() => {
                        this.getHongbao().catch(() => {
                        })
                    }).catch(() => {
                        Object(s.a)("网络繁忙，请稍后再试")
                    }).always(() => {
                        this.isBusying = !1
                    })
                },
                getHongbao() {
                    const e = (o.store.location || {}).geohash, t = o.store.userId;
                    if (!t) return;
                    const i = () => u.a.handleHongbao(t, e, 1).then(e => (this.hongbaoHandler(e), e)).catch(e => (Object(s.a)("网络繁忙，请稍后再试"), Promise.reject(e)));
                    return x ? (w(), Object(h.a)().then(e => {
                        this.hongbaoHandler(e.hongbao_list)
                    }).catch(e => e && "UNDER_RISK" === e.name ? i() : (Object(s.a)("网络繁忙，请稍后再试"), Promise.reject(e)))) : i()
                },
                cancel() {
                    const e = {3: 5, 4: 6, 6: 7, pay_antvip: 8, pay_living: 9}, t = e[p.from] || e[this.state] || 4;
                    5 === this.state && w(), UBT.send("EVENT", {id: 101409, params: {type: t}}), this.showModal = !1
                },
                alipayLogin() {
                    n.a.login(this.alipay.alipayCode, this.alipay.authType).then(o.biz.userId).then(() => {
                        this.getHongbao().catch(() => {
                        })
                    }).catch(e => {
                        switch (e.name) {
                            case"ALIPAY_LOGIN_NEED_USER_AUTH_LOGIN":
                                this.state = 1;
                                break;
                            case"ALIPAY_LOGIN_NEED_AUTH_USER":
                                this.showModal = !1;
                                break;
                            case"ALIPAY_LOGIN_NEED_H5_LOGIN":
                                UBT.send("EVENT", {id: 101471}), v();
                                break;
                            default:
                                Object(s.a)("网络繁忙，请稍后再试"), window.perf && window.perf.sendEvent({
                                    name: "h5/alipay-login-failed",
                                    id: "r1KWDIKYZ",
                                    data: {error: e.message || JSON.stringify(e)}
                                })
                        }
                    })
                },
                hongbaoHandler(e) {
                    if (e.length) {
                        this.hongbaoList = e, this.state = 2;
                        const t = {pay_mt: 4, pay_antvip: 3, pay_living: 6}[p.from] || {3: 1, 4: 2}[this.state] || 5;
                        UBT.send("EVENT", {id: 102332, params: {type: t}})
                    } else this.state = 6
                },
                getPhoneHongbao() {
                    const e = {3: 5, 4: 6, pay_antvip: 8, pay_living: 9};
                    if (UBT.send("EVENT", {
                            id: 101408,
                            params: {type: e[p.from] || e[this.state]}
                        }), !/^1\d{10}$/.test(this.phoneInput)) return Object(s.a)("请输入正确的手机号");
                    if (this.isBusying) return;
                    const t = () => {
                        this.isBusying = !0, u.a.queryUnAuthHongbao(this.phoneInput).then(e => {
                            this.hongbaoHandler(e.hongbao_list)
                        }).catch(() => {
                            Object(s.a)("网络繁忙，请稍后再试")
                        }).always(() => {
                            this.isBusying = !1
                        })
                    };
                    x ? (this.isBusying = !0, Object(h.a)(this.phoneInput).then(e => {
                        this.hongbaoHandler(e.hongbao_list)
                    }).catch(e => {
                        e && "UNDER_RISK" === e.name ? t() : Object(s.a)("网络繁忙，请稍后再试")
                    }).always(() => {
                        this.isBusying = !1
                    })) : t()
                },
                getBaida() {
                    UBT.send("EVENT", {
                        id: 101408,
                        params: {type: "pay_antvip" === p.from ? 8 : 9}
                    }), this.getHongbao().catch(() => {
                    })
                },
                goSvip() {
                    UBT.send("EVENT", {id: 101408, params: {type: 7}}), ap.pushWindow("/supervip/")
                }
            }
        }
    }, 141: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(144), o = !1, s = {};
            e.hot && e.hot.accept(['!!vue-style-loader!css-loader?{"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-530cfd54","scoped":false,"hasInlineConfig":true}!stylus-loader!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./hongbao-cover.vue'], function () {
                var e = s.$style;
                if (e) {
                    var t = i(70);
                    JSON.stringify(t) !== JSON.stringify(e) && (s.$style = t, i(1).rerender("data-v-530cfd54"))
                }
            });
            var r = function (e) {
                o || (s.$style = i(70), Object.defineProperty(this, "$style", {
                    get: function () {
                        return s.$style
                    }
                }))
            }, a = i(0)(n.a, null, r, null, null);
            a.options.__file = "src/components/authHongbao/hongbao-cover.vue", a.esModule && Object.keys(a.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), t.a = a.exports
        }).call(t, i(2)(e))
    }, 142: function (e, t, i) {
        (t = e.exports = i(17)(void 0)).push([e.i, ".hongbao-cover-3PXKa_0 {\n  width: 7.133333rem;\n  width: 71.333333vw;\n  height: 2.320000rem;\n  height: 23.200000vw;\n  display: block;\n  margin: 0 auto;\n  background-image: url(" + i(143) + ");\n  background-repeat: no-repeat;\n  background-size: 100%;\n  background-position: center center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 0.293333rem;\n  padding-top: 2.933333vw;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.hongbao-cover-1Hjld_0 {\n  margin-top: -0.186667rem;\n  margin-top: -1.866667vw;\n  width: 2.160000rem;\n  width: 21.600000vw;\n  text-align: center;\n}\n\n.hongbao-cover-oWfgA_0 {\n  padding-left: 0.400000rem;\n  padding-left: 4.000000vw;\n}\n\n.hongbao-cover-tkhvE_0 {\n  font-size: 0.746667rem;\n  font-weight: bold;\n  color: #ff5339;\n}\n\n.hongbao-cover-31OvY_0 {\n  font-weight: normal;\n  font-size: 0.320000rem;\n}\n\n.hongbao-cover-3-Viz_0 {\n  color: #666;\n  font-size: 0.266667rem;\n}\n\n.hongbao-cover-3_QuO_0 {\n  color: #333;\n  font-size: 0.373333rem;\n  font-weight: bold;\n  margin-bottom: 0.266667rem;\n  margin-bottom: 2.666667vw;\n}\n\n.hongbao-cover-11s5n_0 {\n  display: block;\n  height: 0.426667rem;\n  height: 4.266667vw;\n  width: 1.866667rem;\n  width: 18.666667vw;\n}\n\n.hongbao-cover-3NDUV_0 {\n  border: 0.026667rem solid #ff5339 ;\n  border: 0.266667vw solid #ff5339 ;\n  border-radius: 0.053333rem;\n  border-radius: 0.533333vw;\n  color: #ff5339;\n}", ""]), t.locals = {
            "hongbao-static": "hongbao-cover-3PXKa_0",
            hongbaoStatic: "hongbao-cover-3PXKa_0",
            left: "hongbao-cover-1Hjld_0",
            right: "hongbao-cover-oWfgA_0",
            price: "hongbao-cover-tkhvE_0",
            currency: "hongbao-cover-31OvY_0",
            limit: "hongbao-cover-3-Viz_0",
            title: "hongbao-cover-3_QuO_0",
            tag: "hongbao-cover-11s5n_0",
            tagGhost: "hongbao-cover-3NDUV_0"
        }
    }, 143: function (e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTM1IDE3NCI+PGRlZnM+PHBhdGggaWQ9ImIiIGQ9Ik0xNzUuOTY0IDloMzM1LjEyQTMuOTE3IDMuOTE3IDAgMCAxIDUxNSAxMi45MTd2MTQ0LjE2NmEzLjkxNyAzLjkxNyAwIDAgMS0zLjkxNyAzLjkxN0gxNzYuMzNjLTEuMjQ2LTMuOTc5LTQuOTUzLTYuODY1LTkuMzMzLTYuODY1cy04LjA4NyAyLjg4Ni05LjMzNCA2Ljg2NUgyMy45MTdBMy45MTcgMy45MTcgMCAwIDEgMjAgMTU3LjA4M1YxMi45MTdBMy45MTcgMy45MTcgMCAwIDEgMjMuOTE3IDlIMTU4LjAzYzEuNTA5IDMuNDYzIDQuOTU2IDUuODg0IDguOTY3IDUuODg0IDQuMDEgMCA3LjQ1OC0yLjQyIDguOTY3LTUuODg0eiIvPjxmaWx0ZXIgaWQ9ImEiIHdpZHRoPSIxMDIuOCUiIGhlaWdodD0iMTA5LjIlIiB4PSItMS40JSIgeT0iLTUuOSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGR5PSItMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiIHN0ZERldmlhdGlvbj0iMiIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMSAwIi8+PC9maWx0ZXI+PHBhdGggaWQ9ImQiIGQ9Ik0xNzMuOTY0IDE1aDM0NC4xMkEzLjkxNyAzLjkxNyAwIDAgMSA1MjIgMTguOTE3djE0NC4xNjZhMy45MTcgMy45MTcgMCAwIDEtMy45MTcgMy45MTdIMTc0LjMzYy0xLjI0Ni0zLjk3OS00Ljk1My02Ljg2NS05LjMzMy02Ljg2NXMtOC4wODcgMi44ODYtOS4zMzQgNi44NjVIMTcuOTE3QTMuOTE3IDMuOTE3IDAgMCAxIDE0IDE2My4wODNWMTguOTE3QTMuOTE3IDMuOTE3IDAgMCAxIDE3LjkxNyAxNUgxNTYuMDNjMS41MDkgMy40NjMgNC45NTYgNS44ODQgOC45NjcgNS44ODQgNC4wMSAwIDcuNDU4LTIuNDIgOC45NjctNS44ODR6Ii8+PGZpbHRlciBpZD0iYyIgd2lkdGg9IjEwMi44JSIgaGVpZ2h0PSIxMDkuMiUiIHg9Ii0xLjQlIiB5PSItNS45JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0yIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIgc3RkRGV2aWF0aW9uPSIyIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd0JsdXJPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz48L2ZpbHRlcj48cGF0aCBpZD0iZiIgZD0iTTE3MS45NjQgMjJoMzUyLjEyQTMuOTE3IDMuOTE3IDAgMCAxIDUyOCAyNS45MTd2MTQ0LjE2NmEzLjkxNyAzLjkxNyAwIDAgMS0zLjkxNyAzLjkxN0gxNzIuMzNjLTEuMjQ2LTMuOTc5LTQuOTUzLTYuODY1LTkuMzMzLTYuODY1cy04LjA4NyAyLjg4Ni05LjMzNCA2Ljg2NUgxMS45MTdBMy45MTcgMy45MTcgMCAwIDEgOCAxNzAuMDgzVjI1LjkxN0EzLjkxNyAzLjkxNyAwIDAgMSAxMS45MTcgMjJIMTU0LjAzYzEuNTA5IDMuNDYzIDQuOTU2IDUuODg0IDguOTY3IDUuODg0IDQuMDEgMCA3LjQ1OC0yLjQyIDguOTY3LTUuODg0eiIvPjxmaWx0ZXIgaWQ9ImUiIHdpZHRoPSIxMDIuNyUiIGhlaWdodD0iMTA5LjIlIiB4PSItMS4zJSIgeT0iLTUuOSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGR5PSItMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiIHN0ZERldmlhdGlvbj0iMiIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMSAwIi8+PC9maWx0ZXI+PGZpbHRlciBpZD0iZyIgd2lkdGg9IjExNCUiIGhlaWdodD0iMTA5LjMlIiB4PSItNS4zJSIgeT0iLTMuNSUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGR4PSIxIiBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPjxmZUdhdXNzaWFuQmx1ciBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiIHN0ZERldmlhdGlvbj0iMSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjEgMCIvPjxmZU1lcmdlPjxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIi8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+PC9mZU1lcmdlPjwvZmlsdGVyPjxsaW5lYXJHcmFkaWVudCBpZD0iaiIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0U4RDE4RCIvPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkYzQ0YiLz48c3RvcCBvZmZzZXQ9IjEwLjg0OSUiIHN0b3AtY29sb3I9IiNFQkNCN0UiLz48c3RvcCBvZmZzZXQ9IjM0LjMzOCUiIHN0b3AtY29sb3I9IiNGMUQyOEMiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNGRkU3QjIiLz48L2xpbmVhckdyYWRpZW50PjxyZWN0IGlkPSJpIiB3aWR0aD0iNSIgaGVpZ2h0PSIxNzIiIHg9IjI0IiByeD0iMi41Ii8+PGZpbHRlciBpZD0iaCIgd2lkdGg9IjM2MCUiIGhlaWdodD0iMTA3LjYlIiB4PSItMTEwJSIgeT0iLTMuOCUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+PGZlT2Zmc2V0IGR4PSIxIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIgc3RkRGV2aWF0aW9uPSIyIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd0JsdXJPdXRlcjEiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz48L2ZpbHRlcj48bGluZWFyR3JhZGllbnQgaWQ9ImsiIHgxPSI5Ny44MjMlIiB4Mj0iMi41MzclIiB5MT0iMTcuOTU2JSIgeTI9IjkyLjEyMiUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNDOEIxNDQiLz48c3RvcCBvZmZzZXQ9IjE5Ljc3OCUiIHN0b3AtY29sb3I9IiNFQUQ1N0YiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNDRkIxNkUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibCIgeDE9Ijg0LjE0MiUiIHgyPSIwJSIgeTE9IjAlIiB5Mj0iOTAuOTkyJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0U4RDE4RCIvPjxzdG9wIG9mZnNldD0iMzEuNDA2JSIgc3RvcC1jb2xvcj0iI0ZGRUNCNCIvPjxzdG9wIG9mZnNldD0iODIuOTcxJSIgc3RvcC1jb2xvcj0iI0VCQ0I3RSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0MzOUM0OSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJtIiB4MT0iOTIuNTc1JSIgeDI9IjUuNjQ5JSIgeTE9IjgwLjE1OCUiIHkyPSI4LjYyNCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNFOUQ4ODUiLz48c3RvcCBvZmZzZXQ9IjUzLjc4OSUiIHN0b3AtY29sb3I9IiNGNURENzgiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNERkJGNzAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0ibiIgeDE9IjQuMjMxJSIgeDI9Ijk3LjczNSUiIHkxPSIxMy4xMjklIiB5Mj0iOTUuNjQyJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0IwOEUyMiIvPjxzdG9wIG9mZnNldD0iNjIuNDkxJSIgc3RvcC1jb2xvcj0iI0VBQzc3OCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0Q0QUU1MCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJvIiB4MT0iMTYuOSUiIHgyPSI5Mi4zNjQlIiB5MT0iOTAuMjA5JSIgeTI9IjkuNjg2JSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0Y1REU5NiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0YxRDQ3OSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJwIiB4MT0iNzUuMTg2JSIgeDI9IjE3LjQ0JSIgeTE9Ijg3LjQyMSUiIHkyPSIzLjc5OSUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNFOUQ4ODUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNEOUJENzciLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0icSIgeDE9IjEwLjg1NSUiIHgyPSI5Ni42MjElIiB5MT0iOC4yMTQlIiB5Mj0iODkuMTEzJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0U1Q0E3QyIvPjxzdG9wIG9mZnNldD0iMzUuNTI5JSIgc3RvcC1jb2xvcj0iI0ZGRTlCQSIvPjxzdG9wIG9mZnNldD0iNzkuNjc5JSIgc3RvcC1jb2xvcj0iI0Y4RDU3NCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0RDQkI1OSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJyIiB4MT0iOTAuMjYlIiB4Mj0iMTAuNjE1JSIgeTE9IjUwJSIgeTI9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0RGQkE1QiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI0Y2RDg4MiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsPSIjRkNGQ0ZDIiB4bGluazpocmVmPSIjYiIvPjx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2MpIiB4bGluazpocmVmPSIjZCIvPjx1c2UgZmlsbD0iI0ZDRkNGQyIgeGxpbms6aHJlZj0iI2QiLz48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNlKSIgeGxpbms6aHJlZj0iI2YiLz48dXNlIGZpbGw9IiNGQ0ZDRkMiIHhsaW5rOmhyZWY9IiNmIi8+PHBhdGggc3Ryb2tlPSIjREREIiBzdHJva2UtZGFzaGFycmF5PSIyIiBkPSJNMTYzIDQzdjExMSIvPjxnIGZpbHRlcj0idXJsKCNnKSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDM2IDcpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNoKSIgeGxpbms6aHJlZj0iI2kiLz48dXNlIGZpbGw9InVybCgjaikiIHhsaW5rOmhyZWY9IiNpIi8+PHBhdGggZmlsbD0idXJsKCNrKSIgZmlsbC1vcGFjaXR5PSIuOSIgZD0iTTI5LjQ5IDQzLjY0OGM3LjI4NC0xLjI3MyAxMi43MjgtMi45MTcgMTYuMzMzLTQuOTMxIDUuNDA2LTMuMDIyIDcuODY1LTYuNzY2IDYuNDM2LTkuNjI0LS43MTktMS4zMzQtMS45NTktMi4zMTItMy43MjEtMi45MzQgMS4wMSAzLjUzNi0uMTQ4IDYuMTc2LTMuNDcyIDcuOTIzLTMuMzIzIDEuNzQ2LTcuMDU3IDMuMDYtMTEuMiAzLjk0bC00LjM3NSA1LjYyNnoiLz48cGF0aCBmaWxsPSJ1cmwoI2wpIiBkPSJNMjYuNjI0IDM5Ljg3M2M3LjYxNS05LjQ3MiAxMy40OC0xNC4zOTQgMTcuNTk0LTE0Ljc2NSAyLjk0OC0uNjEzIDUuNjM3Ljc0IDguMDY5IDQuMDYyLTIuMTgtMi40MDUtNS4zNS0xLjc5Ny05LjUxMSAxLjgyNi00LjE2MiAzLjYyMy04LjI1IDcuOTE4LTEyLjI2NyAxMi44ODVsLTMuODg1LTQuMDA4eiIvPjxwYXRoIGZpbGw9InVybCgjbSkiIGQ9Ik00NC4wMTIgNDguOTU1Yy01LjQ0LTMuMjAxLTEwLjAyNi01LjExOS0xMy43NTctNS43NTJsLTIuNTg4IDQuNTljNS41NDggMi4wMzkgMTAuNDk5IDQuMjAyIDE0Ljg1MiA2LjQ5IDQuMzU0IDIuMjg5IDguNzc0IDUuNjk1IDEzLjI2MSAxMC4yMTgtMi40MDUtNy4xNjItNi4zMjctMTIuMzQ0LTExLjc2OC0xNS41NDZ6Ii8+PHBhdGggZmlsbD0idXJsKCNuKSIgZmlsbC1vcGFjaXR5PSIuOCIgZD0iTTkuNDM4IDI5LjQxNGMtNC42MTggMS40NjgtNS4wNzIgMy45NTEtMS4zNjQgNy40NDkgMy43MDggMy40OTcgOC41NDEgNi4xMiAxNC41IDcuODY4TDIxLjU2IDQzLjA5Yy45NS0uNzQ4LS4wMi0yLjE5NC0yLjkxLTQuMzM4LTUuNDY3LTMuMjEyLTguNTM4LTYuMzI0LTkuMjEzLTkuMzM3eiIvPjxwYXRoIGZpbGw9InVybCgjbykiIGQ9Ik0yMi4zODcgNDQuMTkzTC40MTQgNjEuMjc2IDguMDMgNjNsMTguMTA2LTE0Ljk2OHoiLz48cGF0aCBmaWxsPSJ1cmwoI3ApIiBkPSJNNDcgNTFjOC4yOTYgNy41MTMgMTEuMjY4IDE2Ljc3MSA4LjkxNyAyNy43NzMtMi41NzItMy4xMTktNC4xMjctNS4yNS00LjY2Ni02LjM5NCAxLjc4OS0zLjg1NCAyLjI2My03LjQ3OCAxLjQyMy0xMC44NzJDNTEuODM0IDU4LjExMiA0OS45NDMgNTQuNjEgNDcgNTF6Ii8+PHBhdGggZmlsbD0idXJsKCNxKSIgZD0iTTI1LjU4NiAzOS42NTdjLTQuMDMtNi44ODctMTEuOTE3LTExLjg3Mi0xNC42MzctMTEuMzk5LTEuODE0LjMxNS0zLjU0OCAxLjUwNC01LjIwMyAzLjU2NyAxLjcxNi0xLjA1NiA0LjI0My0uMDggNy41ODIgMi45MjggMy4zMzggMy4wMDggNi4yMjMgNS45NzQgOC42NTQgOC44OTggMS40MDgtMS4yOSAyLjYxLTIuNjIxIDMuNjA0LTMuOTk0eiIvPjxwYXRoIGZpbGw9InVybCgjcikiIGQ9Ik0yNC4xNiA0MC4wNTZsNC4yMjMtLjI0NGEyIDIgMCAwIDEgMi4xIDIuMjQ1bC0uNDczIDMuNzgzYTIgMiAwIDAgMS0xLjc3NiAxLjc0MWwtMi45OTQuMzE0YTIgMiAwIDAgMS0yLjE3MS0xLjYwM2wtLjc1Ny0zLjg1NGEyIDIgMCAwIDEgMS44NDctMi4zODJ6IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAyNi4zODYgNDMuODU4KSIvPjwvZz48L2c+PC9zdmc+"
    }, 144: function (e, t, i) {
        "use strict";
        var n = i(82);
        t.a = {
            functional: !0, render(e, t) {
                const {$style: i} = t;
                return e("div", {class: i.hongbaoStatic}, [e("div", {class: i.left}, [e("p", {class: i.price}, [e("span", {class: i.currency}, ["¥"]), "19"]), e("p", {class: i.limit}, ["最高"])]), e("div", {class: i.right}, [e("p", {class: i.title}, ["限时特惠大礼包"]), e(n.a, {
                    class: i.tag,
                    attrs: {ghostClass: i.tagGhost}
                }, ["支付宝外卖节"])])])
            }
        }
    }, 145: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(146), o = i(147), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-453f702a","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./hongbao.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(71);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-453f702a"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(71), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/components/authHongbao/hongbao.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] hongbao.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 146: function (e, t, i) {
        "use strict";
        var n = i(4);
        t.a = {
            props: {hongbao: {type: Object, required: !0}}, computed: {
                amount() {
                    return String(this.hongbao.amount).split(".")
                }
            }, methods: {
                handleClick() {
                    this.hongbao.hongbao_name.indexOf("外卖节") > -1 && n.platform.isAlipay ? ap.pushWindow("/aliday/") : location.href = "//h5.ele.me"
                }
            }
        }
    }, 147: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {class: e.$style.hongbao}, [i("div", {class: e.$style.amount}, [i("p", {class: e.$style.sum}, [i("small", {attrs: {"aria-hidden": "true"}}, [e._v("¥")]), i("span", [e._v(e._s(e.amount[0]))]), +e.amount[1] ? i("span", {class: e.$style.decimal}, [e._v("." + e._s(e.amount[1]))]) : e._e()]), e.hongbao.sum_condition_description ? i("p", [e._v(e._s(e.hongbao.sum_condition_description))]) : e._e()]), i("div", {class: e.$style.description}, [i("h4", {class: e.$style.name}, [e._v(e._s(e.hongbao.hongbao_name))]), e.hongbao.tags && e.hongbao.tags.length > 0 ? i("div", {class: e.$style.tagWrap}, e._l(e.hongbao.tags, function (t) {
                return i("span", {style: {borderColor: "#" + t.color, color: "#" + t.color}}, [e._v(e._s(t.name))])
            })) : e._e()]), i("div", {class: e.$style.operation}, [e.hongbao.scheme ? i("a", {
                attrs: {href: "javascript:;"},
                on: {touchstart: e.handleClick}
            }, [e._v("去使用")]) : e._e()])])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 148: function (e, t, i) {
        "use strict";
        var n = i(149), o = i.n(n), s = i(150), r = i.n(s);
        t.a = {Success: o.a, ArcCover: r.a}
    }, 149: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 32 32" id="success" ><path fill="#FEF0CA" fill-rule="nonzero" d="M16 32C7.17 32 0 24.83 0 16S7.17 0 16 0s16 7.17 16 16-7.17 16-16 16zm-2.074-9.719c.533 0 1.067-.177 1.481-.592l7.941-7.94c.83-.83.83-2.134 0-2.964a2.075 2.075 0 0 0-2.963 0l-6.518 6.519-2.311-2.311c-.83-.83-2.134-.83-2.904 0-.83.83-.83 2.133 0 2.903l3.792 3.793c.415.415.949.592 1.482.592z"/></symbol>', "success")
    }, 150: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 640 64" id="arc-cover" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="arc-cover_a" x1="100%" x2="0%" y1="50%" y2="50%"><stop offset="0%" stop-opacity=".05"/><stop offset="49.809%" stop-opacity=".1"/><stop offset="100%" stop-opacity=".05"/></linearGradient><linearGradient id="arc-cover_d" x1="100%" x2="1.25%" y1="50%" y2="50%"><stop offset="0%" stop-color="#DC1E36"/><stop offset="100%" stop-color="#FD4E4C"/></linearGradient><path id="arc-cover_c" d="M0 13c86.885 32.667 193.219 49 319 49s232.781-16.333 321-49v360c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V13z"/><filter id="arc-cover_b" width="107.3%" height="112.2%" x="-3.7%" y="-6.6%" filterUnits="objectBoundingBox"><feOffset dy="-2" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="7.5"/><feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/></filter></defs><g fill="none" fill-rule="evenodd"><path fill="url(#arc-cover_a)" d="M0 10c86.885 30.667 193.219 46 319 46s232.781-15.333 321-46v313c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V10z"/><use fill="#000" filter="url(#arc-cover_b)" xlink:href="#arc-cover_c"/><use fill="url(#arc-cover_d)" xlink:href="#arc-cover_c"/></g></symbol>', "arc-cover")
    }, 151: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(57), s = i(28);
        t.a = {
            handleHongbao: o.a.handleHongbao, showAlidayShop: s.a.showAlidayShop, queryUnAuthHongbao(e) {
                const t = {geohash: (n.store.location || {}).geohash, phone: e};
                return "pay_mt" === UParams().from && (t.is_upgraded = 1), Object(n.$fetch)(`/marketing/v1/alipay_unregistered_startup_hongbao?${window.Utils.paramToString(t)}`, {method: "POST"})
            }
        }
    }, 152: function (e, t, i) {
        "use strict";
        var n = i(4);
        const o = {
            pay_antvip: "3b5b2132f1c2ef8f895829a6e883d13c",
            pay_living: "4ce7c6b400c930bbbb7b0d356b3430b3"
        }[UParams().from], s = () => {
            let e = "";
            for (let t = 0; t < 4; t++) e += "0000000".concat(Math.floor(2821109907456 * Math.random()).toString(36)).slice(-8);
            return e
        }, r = e => (e => Object(n.$fetch)("/marketing/hongbao/h5/grab", {
            method: "POST",
            body: JSON.stringify(e)
        }))(e).then(e => {
            const t = e.ret_code;
            return -1 !== [2, 7, 8, 9].indexOf(t) ? (2 !== t && UBT.send("EVENT", {id: 102395}), Promise.reject({name: "UNDER_RISK"})) : (e.hongbao_list.forEach(e => {
                e.hongbao_name = e.name, e.sum_condition_description = `满${e.sum_condition}元可用`
            }), e)
        });
        t.a = (e => e ? r({weixin_uid: s(), group_sn: o, phone: e}) : n.biz.userBasic().then(e => r({
            weixin_uid: s(),
            group_sn: o,
            phone: e.mobile,
            user_id: e.user_id
        })))
    }, 153: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return e.showModal ? i("MaskLayer", {
                attrs: {showClose: 2 === e.state}, on: {
                    CLOSEMODAL: function (t) {
                        e.showModal = !1
                    }
                }
            }, [i("div", {class: e.$style.root}, [i("div", {
                class: e.$style.header,
                style: {backgroundImage: e.headerImg}
            }), i("div", {class: e.$style.content}, [e.hongbaoList.length || 6 === e.state ? e._e() : i("HongbaoCover"), e.hongbaoList.length || 6 !== e.state ? e._l(e.hongbaoList, function (e, t) {
                return i("Hongbao", {key: t, attrs: {hongbao: e}})
            }) : i("p", {class: e.$style.emptyTip}, [e._v("红包已被抢光了")]), i("div", {class: e.$style.btnGroup}, [i("svg", {class: e.$style.arc}, [i("use", {attrs: {"xlink:href": e.icon.ArcCover}})]), 1 === e.state ? i("p", {class: e.$style.phoneTip}, [e._v("\n          将使用"), i("span", {class: e.$style.phone}, [e._v(e._s(e.phone))]), e._v("登录饿了么并领取大红包\n        ")]) : 2 === e.state ? i("p", {class: e.$style.tip}, [i("svg", [i("use", {attrs: {"xlink:href": e.icon.Success}})]), i("span", [e._v("领取成功，快去使用吧!")])]) : 3 === e.state || 4 === e.state ? i("div", [i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.phoneInput,
                    expression: "phoneInput"
                }],
                class: e.$style.input,
                attrs: {
                    type: "tel",
                    placeholder: "输入手机号领大礼包",
                    "ubt-click": "102346",
                    "ubt-data-type": 3 === e.state ? 1 : 2
                },
                domProps: {value: e.phoneInput},
                on: {
                    input: function (t) {
                        t.target.composing || (e.phoneInput = t.target.value)
                    }
                }
            })]) : 6 === e.state ? i("p", {class: [e.$style.tip, e.$style.white]}, [e._v("购买超级会员，立赠20元红包")]) : e._e(), e._l(e.btnConfig, function (t) {
                return i("button", {
                    class: (n = {}, n[e.$style.btn] = !0, n[e.$style.primary] = t.primary, n[e.$style.disabled] = t.primary && e.btnDisabled, n),
                    attrs: {content: t.title, type: "button"},
                    on: {
                        click: function (i) {
                            e.btnHanlder(t.handler)
                        }
                    }
                }, [e._v(e._s(t.title))]);
                var n
            })], 2)], 2)])]) : e._e()
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 159: function (e, t, i) {
        !function (t, i) {
            e.exports = i()
        }(0, function () {
            return function (e) {
                function t(n) {
                    if (i[n]) return i[n].exports;
                    var o = i[n] = {i: n, l: !1, exports: {}};
                    return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }

                var i = {};
                return t.m = e, t.c = i, t.d = function (e, i, n) {
                    t.o(e, i) || Object.defineProperty(e, i, {configurable: !1, enumerable: !0, get: n})
                }, t.n = function (e) {
                    var i = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(i, "a", i), i
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 14)
            }([function (e, t, i) {
                var n = new (i(2));
                document.body ? n.elem = n.render(document.body) : document.addEventListener("DOMContentLoaded", function () {
                    n.elem = n.render(document.body)
                }, !1), e.exports = n
            }, function (e, t) {
                e.exports = function (e, t, i, n, o, s) {
                    var r, a = e = e || {}, l = typeof e.default;
                    "object" !== l && "function" !== l || (r = e, a = e.default);
                    var c = "function" == typeof a ? a.options : a;
                    t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), i && (c.functional = !0), o && (c._scopeId = o);
                    var d;
                    if (s ? (d = function (e) {
                            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
                        }, c._ssrRegister = d) : n && (d = n), d) {
                        var u = c.functional, h = u ? c.render : c.beforeCreate;
                        u ? (c._injectStyles = d, c.render = function (e, t) {
                            return d.call(t), h(e, t)
                        }) : c.beforeCreate = h ? [].concat(h, d) : [d]
                    }
                    return {esModule: r, exports: a, options: c}
                }
            }, function (e, t, i) {
                function n(e) {
                    return Array.prototype.slice.call(e, 0)
                }

                function o(e, t, i) {
                    var o = e.querySelectorAll(l);
                    o && n(o).forEach(function (e) {
                        e.attributes && n(e.attributes).forEach(function (n) {
                            var o = n.localName.toLowerCase();
                            if (-1 !== a.indexOf(o)) {
                                var s = c.exec(e.getAttribute(o));
                                if (s && 0 === s[1].indexOf(t)) {
                                    var r = function (e) {
                                        return e.replace(/\(|\)/g, "\\$&")
                                    }(i + s[1].split(t)[1]);
                                    e.setAttribute(o, "url(" + r + ")")
                                }
                            }
                        })
                    })
                }

                function s() {
                    var e = document.getElementsByTagName("base")[0], t = window.location.href.split("#")[0],
                        i = e && e.href;
                    this.urlPrefix = i && i !== t ? t + u : u;
                    var s = new r;
                    s.sniff(), this.browser = s.browser, this.content = [], "ie" !== this.browser.name && i && window.addEventListener("spriteLoaderLocationUpdated", function (e) {
                        var t = this.urlPrefix, i = e.detail.newUrl.split(u)[0] + u;
                        o(this.svg, t, i), this.urlPrefix = i, ("firefox" === this.browser.name || "edge" === this.browser.name || "chrome" === this.browser.name && this.browser.version[0] >= 49) && n(document.querySelectorAll("use[*|href]")).forEach(function (e) {
                            var n = e.getAttribute(h);
                            n && 0 === n.indexOf(t) && e.setAttributeNS(p, h, i + n.split(u)[1])
                        })
                    }.bind(this))
                }

                var r = i(3),
                    a = ["clipPath", "colorProfile", "src", "cursor", "fill", "filter", "marker", "markerStart", "markerMid", "markerEnd", "mask", "stroke"],
                    l = "[" + a.join("],[") + "]", c = /^url\((.*)\)$/, d = function (e) {
                        for (var t = e.querySelector("defs"), i = e.querySelectorAll("symbol linearGradient, symbol radialGradient, symbol pattern"), n = 0, o = i.length; n < o; n++) t.appendChild(i[n])
                    }, u = "#", h = "xlink:href", p = "http://www.w3.org/1999/xlink",
                    f = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="' + p + '"';
                s.styles = ["position:absolute", "width:0", "height:0"], s.spriteTemplate = function () {
                    return f + ' style="' + s.styles.join(";") + '"><defs>{content}</defs></svg>'
                }, s.symbolTemplate = function () {
                    return f + ">{content}</svg>"
                }, s.prototype.content = null, s.prototype.add = function (e, t) {
                    return this.svg && this.appendSymbol(e), this.content.push(e), u + t
                }, s.prototype.wrapSVG = function (e, t) {
                    var i = t.replace("{content}", e), n = function (e) {
                        try {
                            if (document.importNode) return document.importNode(e, !0)
                        } catch (e) {
                        }
                        return e
                    }((new DOMParser).parseFromString(i, "image/svg+xml").documentElement);
                    return "ie" !== this.browser.name && this.urlPrefix && o(n, u, this.urlPrefix), n
                }, s.prototype.appendSymbol = function (e) {
                    var t = this.wrapSVG(e, s.symbolTemplate()).childNodes[0];
                    this.svg.querySelector("defs").appendChild(t), "firefox" === this.browser.name && d(this.svg)
                }, s.prototype.toString = function () {
                    var e = document.createElement("div");
                    return e.appendChild(this.render()), e.innerHTML
                }, s.prototype.render = function (e, t) {
                    e = e || null, t = "boolean" != typeof t || t;
                    var i = this.wrapSVG(this.content.join(""), s.spriteTemplate());
                    return "firefox" === this.browser.name && d(i), e && (t && e.childNodes[0] ? e.insertBefore(i, e.childNodes[0]) : e.appendChild(i)), this.svg = i, i
                }, e.exports = s
            }, function (e, t) {
                !function (t) {
                    function i() {
                        var e = this;
                        r.forEach(function (t) {
                            e[t] = {name: s, version: [], versionString: s}
                        })
                    }

                    function n(e, t, i) {
                        o[t].forEach(function (n) {
                            var o = n[0], r = n[1], a = i.match(o);
                            a && (e[t].name = r, a[2] ? (e[t].versionString = a[2], e[t].version = []) : a[1] ? (e[t].versionString = a[1].replace(/_/g, "."), e[t].version = function (e) {
                                return e.split(/[\._]/).map(function (e) {
                                    return parseInt(e)
                                })
                            }(a[1])) : (e[t].versionString = s, e[t].version = []))
                        })
                    }

                    var o = {
                        browser: [[/msie ([\.\_\d]+)/, "ie"], [/trident\/.*?rv:([\.\_\d]+)/, "ie"], [/firefox\/([\.\_\d]+)/, "firefox"], [/chrome\/([\.\_\d]+)/, "chrome"], [/version\/([\.\_\d]+).*?safari/, "safari"], [/mobile safari ([\.\_\d]+)/, "safari"], [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"], [/crios\/([\.\_\d]+).*?safari/, "chrome"], [/opera/, "opera"], [/opera\/([\.\_\d]+)/, "opera"], [/opera ([\.\_\d]+)/, "opera"], [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"], [/opios\/([a-z\.\_\d]+)/, "opera"], [/blackberry/, "blackberry"], [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"], [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"], [/rim.*?version\/([\.\_\d]+)/, "blackberry"], [/iceweasel\/([\.\_\d]+)/, "iceweasel"], [/edge\/([\.\d]+)/, "edge"]],
                        os: [[/linux ()([a-z\.\_\d]+)/, "linux"], [/mac os x/, "macos"], [/mac os x.*?([\.\_\d]+)/, "macos"], [/os ([\.\_\d]+) like mac os/, "ios"], [/openbsd ()([a-z\.\_\d]+)/, "openbsd"], [/android/, "android"], [/android ([a-z\.\_\d]+);/, "android"], [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"], [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"], [/windows phone.*?([\.\_\d]+)/, "windows.phone"], [/windows mobile/, "windows.mobile"], [/blackberry/, "blackberryos"], [/bb\d+/, "blackberryos"], [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]],
                        device: [[/ipad/, "ipad"], [/iphone/, "iphone"], [/lumia/, "lumia"], [/htc/, "htc"], [/nexus/, "nexus"], [/galaxy nexus/, "galaxy.nexus"], [/nokia/, "nokia"], [/ gt\-/, "galaxy"], [/ sm\-/, "galaxy"], [/xbox/, "xbox"], [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]]
                    }, s = "Unknown", r = Object.keys(o);
                    i.prototype.sniff = function (e) {
                        var t = this, i = (e || navigator.userAgent || "").toLowerCase();
                        r.forEach(function (e) {
                            n(t, e, i)
                        })
                    }, void 0 !== e && e.exports ? e.exports = i : (t.Sniffr = new i, t.Sniffr.sniff(navigator.userAgent))
                }(this)
            }, , , , , , , , , , , function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(16), o = i.n(n), s = i(17), r = i.n(s), a = i(18), l = i.n(a), c = i(19), d = i.n(c),
                    u = i(20), h = i.n(u), p = i(21), f = i.n(p), m = i(22), g = i.n(m), v = i(23), y = i.n(v), b = {
                        Index: o.a,
                        IndexActive: r.a,
                        Discover: l.a,
                        DiscoverActive: d.a,
                        Order: h.a,
                        OrderActive: f.a,
                        Profile: g.a,
                        ProfileActive: y.a
                    }, w = /Eleme/i.test(navigator.userAgent), x = /^opensite/i.test(document.domain),
                    _ = location.pathname.replace(/\//g, "");
                -1 === ["index", "discover", "order", "profile"].indexOf(_) && (_ = "index");
                var I = [{
                    name: "index",
                    text: "外卖",
                    icon: b.Index,
                    iconActive: b.IndexActive,
                    link: location.origin + "/msite/"
                }, {
                    name: "discover",
                    text: "发现",
                    icon: b.Discover,
                    iconActive: b.DiscoverActive,
                    link: location.origin + "/discover/"
                }, {
                    name: "order",
                    text: "订单",
                    icon: b.Order,
                    iconActive: b.OrderActive,
                    link: location.origin + "/order/#/"
                }, {
                    name: "profile",
                    text: "我的",
                    icon: b.Profile,
                    iconActive: b.ProfileActive,
                    link: location.origin + "/profile/"
                }], A = {
                    props: {tab: {type: String, default: _}, iPhoneXMode: {type: Boolean, default: !1}},
                    data: function () {
                        return {
                            isApp: w, tabs: x ? I.filter(function (e) {
                                return -1 !== ["index", "order"].indexOf(e.name)
                            }) : I
                        }
                    },
                    computed: {
                        currentTab: function () {
                            return this.tab
                        }
                    },
                    methods: {
                        open: function (e) {
                            location.replace(e)
                        }
                    }
                }, k = {
                    render: function () {
                        var e = this, t = e.$createElement, i = e._self._c || t;
                        return e.isApp ? e._e() : i("footer", {class: [e.$style.wrapper, e.iPhoneXMode && e.$style.iPhoneXWrapper]}, [i("div", {class: e.$style.footer}, e._l(e.tabs, function (t) {
                            return i("a", {
                                class: e.$style.footerTab, attrs: {href: t.link}, on: {
                                    click: function (i) {
                                        i.preventDefault(), e.open(t.link)
                                    }
                                }
                            }, [i("svg", {class: e.$style.footerTabIcon}, [i("use", {attrs: {"xlink:href": t.name === e.currentTab ? t.iconActive : t.icon}})]), e._v(" "), i("span", {class: [e.$style.footerTabText, t.name === e.currentTab ? e.$style.footerTabTextActive : ""]}, [e._v("\n        " + e._s(t.text) + "\n      ")])])
                        }))])
                    }, staticRenderFns: []
                }, C = i(1)(A, k, !1, function (e) {
                    this.$style = i(15)
                }, null, null).exports;
                t.default = C
            }, function (e, t) {
                e.exports = {
                    wrapper: "index-wrapper_1Rsz2pX",
                    iPhoneXWrapper: "index-iPhoneXWrapper_3HBLdbN",
                    footer: "index-footer_Gtduid_",
                    footerTab: "index-footerTab_bl0lbJN",
                    footerTabIcon: "index-footerTabIcon_1EbB8wS",
                    footerTabText: "index-footerTabText_1It8yh0",
                    footerTabTextActive: "index-footerTabTextActive_3gjOLc6"
                }
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 40 40" id="index-regular.b245d60" ><g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="2"><path d="M31.426 23.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"/><path d="M29.074 31.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C33.202 2.416 21.869-1.62 12.294 2.844 2.718 7.309-1.474 18.586 2.93 28.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"/></g></symbol>', "index-regular.b245d60")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 40 40" id="index.18edf5a" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="index.18edf5a_c" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#2BAEFF"/><stop offset="100%" stop-color="#0095FF"/></linearGradient><linearGradient id="index.18edf5a_d" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#29ADFF"/><stop offset="100%" stop-color="#0095FF"/></linearGradient><path id="index.18edf5a_a" d="M30.426 22.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"/><mask id="index.18edf5a_e" width="9.455" height="10.456" x="-1" y="-1"><path fill="#fff" d="M29.426 18.382h9.455v10.456h-9.455z"/><use xlink:href="#index.18edf5a_a"/></mask><path id="index.18edf5a_b" d="M28.074 30.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C32.202 1.416 20.869-2.62 11.294 1.844 1.718 6.309-2.474 17.586 1.93 27.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"/><mask id="index.18edf5a_f" width="38.769" height="39.241" x="-.7" y="-.7"><path fill="#fff" d="M-.521-.675h38.769v39.241H-.521z"/><use xlink:href="#index.18edf5a_b"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)"><use fill="url(#index.18edf5a_c)" xlink:href="#index.18edf5a_a"/><use stroke="url(#index.18edf5a_d)" stroke-width="2" mask="url(#index.18edf5a_e)" xlink:href="#index.18edf5a_a"/></g><g transform="translate(1 1)"><use fill="url(#index.18edf5a_c)" xlink:href="#index.18edf5a_b"/><use stroke="url(#index.18edf5a_d)" stroke-width="1.4" mask="url(#index.18edf5a_f)" xlink:href="#index.18edf5a_b"/></g></g></symbol>', "index.18edf5a")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 40 40" id="discover-regular.8ef537f" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="discover-regular.8ef537f_a" d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"/><mask id="discover-regular.8ef537f_b" width="40" height="40" x="0" y="0" fill="#fff"><use xlink:href="#discover-regular.8ef537f_a"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#666" stroke-width="4" mask="url(#discover-regular.8ef537f_b)" xlink:href="#discover-regular.8ef537f_a"/><path stroke="#666" stroke-width="2" d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"/><path fill="#666" d="M15.693 24.636c-.692.276-1.02-.06-.747-.746l2.21-4.946c.225-.505.721-.602 1.122-.202l2.563 2.563c.394.394.31.893-.203 1.122l-4.945 2.209z"/></g></symbol>', "discover-regular.8ef537f")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 40 40" id="discover.5811137" ><defs><linearGradient id="discover.5811137_a" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#2BAEFF"/><stop offset="100%" stop-color="#0095FF"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#discover.5811137_a)" d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"/><path fill="#FFF" d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"/><path fill="url(#discover.5811137_a)" d="M6.482 5.44c-.684-.294-.678-.764 0-1.055L11.54 2.45c.517-.198.936.085.936.65v3.625c0 .558-.412.852-.936.65L6.48 5.44z" transform="rotate(-45 34.258 3.92)"/></g></symbol>', "discover.5811137")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 38 38" id="order-regular.41c17f8" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><rect id="order-regular.41c17f8_a" width="38" height="38" rx="2"/><mask id="order-regular.41c17f8_b" width="38" height="38" x="0" y="0" fill="#fff"><use xlink:href="#order-regular.41c17f8_a"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#666" stroke-width="4" mask="url(#order-regular.41c17f8_b)" xlink:href="#order-regular.41c17f8_a"/><rect width="24" height="2" x="7" y="8" fill="#666" rx="1"/><rect width="20" height="2" x="7" y="17" fill="#666" rx="1"/><rect width="8" height="2" x="7" y="26" fill="#666" rx="1"/></g></symbol>', "order-regular.41c17f8")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 38 38" id="order.070ae2a" ><defs><linearGradient id="order.070ae2a_a" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#2BAEFF"/><stop offset="100%" stop-color="#0095FF"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><rect width="38" height="38" fill="url(#order.070ae2a_a)" rx="2"/><rect width="24" height="2" x="7" y="8" fill="#FFF" rx="1"/><rect width="20" height="2" x="7" y="17" fill="#FFF" rx="1"/><rect width="8" height="2" x="7" y="26" fill="#FFF" rx="1"/></g></symbol>', "order.070ae2a")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 38 38" id="profile-regular.c151d62" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="profile-regular.c151d62_a" d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833z"/><mask id="profile-regular.c151d62_c" width="18" height="21" x="0" y="0" fill="#fff"><use xlink:href="#profile-regular.c151d62_a"/></mask><path id="profile-regular.c151d62_b" d="M0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"/><mask id="profile-regular.c151d62_d" width="38" height="16" x="0" y="0" fill="#fff"><use xlink:href="#profile-regular.c151d62_b"/></mask></defs><g fill="none" fill-rule="evenodd" stroke="#666" stroke-width="4"><use mask="url(#profile-regular.c151d62_c)" xlink:href="#profile-regular.c151d62_a"/><use mask="url(#profile-regular.c151d62_d)" xlink:href="#profile-regular.c151d62_b"/></g></symbol>', "profile-regular.c151d62")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 38 38" id="profile.dbc5ebf" ><defs><linearGradient id="profile.dbc5ebf_a" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#2BAEFF"/><stop offset="100%" stop-color="#0095FF"/></linearGradient></defs><path fill="url(#profile.dbc5ebf_a)" fill-rule="evenodd" d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833zM0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"/></symbol>', "profile.dbc5ebf")
            }])
        })
    }, 17: function (e, t) {
        function i(e, t) {
            var i = e[1] || "", n = e[3];
            if (!n) return i;
            if (t && "function" == typeof btoa) {
                var o = function (e) {
                    return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"
                }(n), s = n.sources.map(function (e) {
                    return "/*# sourceURL=" + n.sourceRoot + e + " */"
                });
                return [i].concat(s).concat([o]).join("\n")
            }
            return [i].join("\n")
        }

        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map(function (t) {
                    var n = i(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n
                }).join("")
            }, t.i = function (e, i) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var n = {}, o = 0; o < this.length; o++) {
                    var s = this[o][0];
                    "number" == typeof s && (n[s] = !0)
                }
                for (o = 0; o < e.length; o++) {
                    var r = e[o];
                    "number" == typeof r[0] && n[r[0]] || (i && !r[2] ? r[2] = i : i && (r[2] = "(" + r[2] + ") and (" + i + ")"), t.push(r))
                }
            }, t
        }
    }, 173: function (e, t, i) {
        "use strict";
        var n = i(292), o = i.n(n), s = i(293), r = i.n(s), a = i(294), l = i.n(a), c = i(295), d = i.n(c), u = i(296),
            h = i.n(u), p = i(297), f = i.n(p), m = i(298), g = i.n(m), v = i(299), y = i.n(v);
        t.a = {
            Shop: o.a,
            ArrowLeft: r.a,
            Search: l.a,
            Bin: d.a,
            ArrowRight: h.a,
            Logo: f.a,
            Right: g.a,
            SuperVipArrowRight: y.a
        }
    }, 18: function (e, t, i) {
        function n(e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t], n = c[i.id];
                if (n) {
                    n.refs++;
                    for (r = 0; r < n.parts.length; r++) n.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++) n.parts.push(s(i.parts[r]));
                    n.parts.length > i.parts.length && (n.parts.length = i.parts.length)
                } else {
                    for (var o = [], r = 0; r < i.parts.length; r++) o.push(s(i.parts[r]));
                    c[i.id] = {id: i.id, refs: 1, parts: o}
                }
            }
        }

        function o() {
            var e = document.createElement("style");
            return e.type = "text/css", d.appendChild(e), e
        }

        function s(e) {
            var t, i, n = document.querySelector('style[data-vue-ssr-id~="' + e.id + '"]');
            if (n) {
                if (p) return f;
                n.parentNode.removeChild(n)
            }
            if (m) {
                var s = h++;
                n = u || (u = o()), t = r.bind(null, n, s, !1), i = r.bind(null, n, s, !0)
            } else n = o(), t = function (e, t) {
                var i = t.css, n = t.media, o = t.sourceMap;
                n && e.setAttribute("media", n);
                o && (i += "\n/*# sourceURL=" + o.sources[0] + " */", i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                if (e.styleSheet) e.styleSheet.cssText = i; else {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(i))
                }
            }.bind(null, n), i = function () {
                n.parentNode.removeChild(n)
            };
            return t(e), function (n) {
                if (n) {
                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                    t(e = n)
                } else i()
            }
        }

        function r(e, t, i, n) {
            var o = i ? "" : n.css;
            if (e.styleSheet) e.styleSheet.cssText = g(t, o); else {
                var s = document.createTextNode(o), r = e.childNodes;
                r[t] && e.removeChild(r[t]), r.length ? e.insertBefore(s, r[t]) : e.appendChild(s)
            }
        }

        var a = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !a) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
        var l = i(41), c = {}, d = a && (document.head || document.getElementsByTagName("head")[0]), u = null, h = 0,
            p = !1, f = function () {
            }, m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        e.exports = function (e, t, i) {
            p = i;
            var o = l(e, t);
            return n(o), function (t) {
                for (var i = [], s = 0; s < o.length; s++) {
                    var r = o[s];
                    (a = c[r.id]).refs--, i.push(a)
                }
                t ? n(o = l(e, t)) : o = [];
                for (s = 0; s < i.length; s++) {
                    var a = i[s];
                    if (0 === a.refs) {
                        for (var d = 0; d < a.parts.length; d++) a.parts[d]();
                        delete c[a.id]
                    }
                }
            }
        };
        var g = function () {
            var e = [];
            return function (t, i) {
                return e[t] = i, e.filter(Boolean).join("\n")
            }
        }()
    }, 2: function (e, t) {
        e.exports = function (e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                    enumerable: !0, get: function () {
                        return t.l
                    }
                }), Object.defineProperty(t, "id", {
                    enumerable: !0, get: function () {
                        return t.i
                    }
                }), Object.defineProperty(t, "exports", {enumerable: !0}), t.webpackPolyfill = 1
            }
            return t
        }
    }, 21: function (e, t, i) {
        "use strict";
        i.d(t, "a", function () {
            return o
        });
        var n = i(4);
        const o = (e, t = {}) => {
            n.platform.isAlipay && window.AlipayJSBridge ? ap.pushWindow(e) : t.replace ? window.location.replace(e) : window.location.href = e
        }
    }, 22: function (e, t, i) {
        !function (t, i) {
            e.exports = i()
        }(0, function () {
            return function (e) {
                function t(n) {
                    if (i[n]) return i[n].exports;
                    var o = i[n] = {i: n, l: !1, exports: {}};
                    return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }

                var i = {};
                return t.m = e, t.c = i, t.i = function (e) {
                    return e
                }, t.d = function (e, i, n) {
                    t.o(e, i) || Object.defineProperty(e, i, {configurable: !1, enumerable: !0, get: n})
                }, t.n = function (e) {
                    var i = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(i, "a", i), i
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 4)
            }([function (e, t, i) {
                "use strict";
                i.d(t, "b", function () {
                    return o
                }), i.d(t, "a", function () {
                    return s
                });
                var n = function (e) {
                    return Object.prototype.toString.call(e).slice(8, -1)
                }, o = function (e) {
                    if (void 0 === e && (e = {}), "Object" !== n(e)) throw"param 必须是一个 object";
                    var t = [];
                    return Object.keys(e).forEach(function (i) {
                        var o = e[i];
                        Array.isArray(o) ? t = t.concat(o.map(function (e) {
                            return encodeURIComponent(i) + "[]=" + encodeURIComponent(e)
                        })) : "Object" === n(o) ? (o = JSON.stringify(o), t.push(encodeURIComponent(i) + "=" + encodeURIComponent(o))) : "Undefined" !== n(o) && "Null" !== n(o) && t.push(encodeURIComponent(i) + "=" + encodeURIComponent(o))
                    }), t.join("&")
                }, s = function (e, t) {
                    if (!t && !(t = (window.navigator.userAgent.match(/Eleme\/([\d|\.]+)/i) || [])[1])) return !1;
                    e = e.split("."), t = t.split(".");
                    var i;
                    return e.forEach(function (e, n) {
                        var o = t[n];
                        if (void 0 === o && (o = 0), void 0 === i) {
                            var s = Number(e) - Number(o);
                            0 !== s && (i = s > 0)
                        }
                    }), !!i
                }
            }, function (e, t, i) {
                "use strict";
                var n = i(0), o = i(5), s = /Eleme/i.test(navigator.userAgent),
                    r = {useScheme: s, useLinkScheme: s && !i.i(n.a)("7.26")};
                t.a = function (e, t) {
                    void 0 === t && (t = r), e.directive("boot", {
                        bind: function (e, i, n) {
                            var s = n.data && n.data.attrs && n.data.attrs["boot-event"];
                            if (!i.value) throw new Error("HowlTheme: Missing value.");
                            e.addEventListener("click", function () {
                                return function (e, t) {
                                    e && (("function" == typeof s ? s : function () {
                                    })(), location.href = e)
                                }(function (e) {
                                    var t = e.arg, i = e.modifiers, n = e.value, s = i.plus;
                                    if ("auto" === t && n) {
                                        if ("shop" === n.to) return o.a;
                                        if ("food" === n.to) return s ? o.b : o.c;
                                        if (!n.to || "not" === n.to) return function () {
                                            return ""
                                        }
                                    }
                                    if ("shop" === t) return o.a;
                                    if ("food" === t) return s ? o.b : o.c;
                                    throw new Error("HowlTheme: Wrong binding mode.")
                                }(i)(i.value, t))
                            })
                        }
                    })
                }
            }, function (e, t, i) {
                "use strict";
                var n = i(7), o = (i.n(n), {threshold: [1]});
                t.a = function (e, t) {
                    void 0 === t && (t = o), e.directive("scan", {
                        bind: function (e, i, n) {
                            var o = i.value || function () {
                                }, s = n.data.attrs.scanData || n.data.attrs["scan-data"],
                                r = new IntersectionObserver(function (t) {
                                    var i = t[0];
                                    i && i.isIntersecting && (o && o(i, s), r.unobserve(e))
                                }, t);
                            r.observe(e)
                        }
                    })
                }
            }, function (e, t, i) {
                "use strict";
                var n = i(6), o = {limit: 2e6, minQuality: .4, obstruct: !1};
                t.a = function (e, t) {
                    void 0 === t && (t = {});
                    var i = function (e) {
                        var t = e.minQuality > .1 && e.minQuality < 1, i = e.limit > 1e3;
                        if (t && i) return e;
                        throw Error("Zip directive options error")
                    }(Object.assign(o, t)), s = function (e, t) {
                        if (e.size < i.limit) return t(e);
                        var o = i.limit / e.size - .05;
                        if (o < i.minQuality) return t(e);
                        new n.a(e, {
                            quality: o, success: function (n) {
                                if (n.size >= i.limit) return t(e);
                                t(n)
                            }, error: function (i) {
                                console.log("Zip directive, compress error, " + i.message), t(e)
                            }
                        })
                    };
                    e.directive("zip", {
                        bind: function (e, t) {
                            var i = t.value || function () {
                            };
                            e.addEventListener("change", function (e) {
                                var t = e.target;
                                if (t && t.files) for (var n = t.files.length; n--;) s(t.files[n], function (t) {
                                    return i(e, t)
                                })
                            })
                        }
                    })
                }
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(2);
                i.d(t, "ScanObserver", function () {
                    return n.a
                });
                var o = i(3);
                i.d(t, "ZipObserver", function () {
                    return o.a
                });
                var s = i(1);
                i.d(t, "BootObserver", function () {
                    return s.a
                })
            }, function (e, t, i) {
                "use strict";
                i.d(t, "a", function () {
                    return o
                }), i.d(t, "c", function () {
                    return s
                }), i.d(t, "b", function () {
                    return r
                });
                var n = i(0), o = function (e, t) {
                    var i = e.shop, n = e.geohash, o = t.useScheme;
                    return t.useLinkScheme && i.scheme ? i.scheme : o ? 1 === i.type ? "eleme://retail_store?re_store_id=" + i.id + "&type=" + i.type : "eleme://restaurant?restaurant_id=" + i.id + "&type=" + i.type : "/shop/#id=" + i.id + "&geohash=" + n
                }, s = function (e, t) {
                    var i = e.shop;
                    void 0 === i && (i = {});
                    var n = e.food, o = e.geohash, s = t.useScheme, r = t.useLinkScheme;
                    if (r && n.scheme) return n.scheme;
                    if (r && i.scheme) return i.scheme;
                    var a = i.id || n.restaurant_id, l = i.type || 0;
                    return s ? 1 === l ? "eleme://retail_store?re_store_id=" + a + "&re_group_id=" + n.category_id + "&re_food_id=" + n.id + "&type=" + l : "eleme://restaurant?restaurant_id=" + a + "&target_food_id=" + n.id + "&type=" + l : "/shop/#id=" + a + "&geohash=" + o
                }, r = function (e, t) {
                    var o = e.shop;
                    void 0 === o && (o = {});
                    var s = e.food, r = e.geohash, a = t.useScheme, l = t.useLinkScheme;
                    if (l && s.cart_link) return s.cart_link;
                    if (l && o.cart_link) return o.cart_link;
                    var c = o.id || s.restaurant_id, d = o.type || 0, u = o.name || s.restaurant_name,
                        h = "eleme://restaurant?restaurant_id=" + c + "&target_food_id=" + s.id + '&cart_operations={"add_foods":[{"id":' + s.id + ',"quantity":1,"specs":[]}]}&type=' + d + "&auto_expand_cart_view=1",
                        p = "eleme://retail_store?re_store_id=" + c + "&re_group_id=" + s.category_id + "&re_food_id=" + s.id + '&cart_operations={"add_foods":[{"id":' + s.id + ',"quantity":1,"specs":[]}]}&type=' + d + "&auto_expand_cart_view=1";
                    return a ? 1 === d ? p : h : "/sales/shop/#" + i.i(n.b)({
                        id: c,
                        agentFee: JSON.stringify({piecewise_agent_fee: o.piecewise_agent_fee}),
                        geohash: r,
                        shopname: u,
                        cartOperations: JSON.stringify({
                            clear_cart: !1,
                            add_foods: [{
                                id: s.id,
                                is_flash_sell: !1,
                                specfoods: [{
                                    food_id: s.id,
                                    sku_id: s.sku_id,
                                    quantity: 1,
                                    stock: s.stock,
                                    name: s.name,
                                    price: s.price,
                                    original_price: s.original_price,
                                    packing_free: s.packing_free || 0
                                }]
                            }]
                        })
                    })
                }
            }, function (e, t, i) {
                "use strict";

                function n(e) {
                    return a.test(e)
                }

                var o = function (e, t) {
                    return t = {exports: {}}, function (e) {
                        !function (t) {
                            var i = t.HTMLCanvasElement && t.HTMLCanvasElement.prototype, n = t.Blob && function () {
                                    try {
                                        return Boolean(new Blob)
                                    } catch (e) {
                                        return !1
                                    }
                                }(), o = n && t.Uint8Array && function () {
                                    try {
                                        return 100 === new Blob([new Uint8Array(100)]).size
                                    } catch (e) {
                                        return !1
                                    }
                                }(), s = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder,
                                r = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
                                a = (n || s) && t.atob && t.ArrayBuffer && t.Uint8Array && function (e) {
                                    var t, i, a, l, c, d, u, h, p;
                                    if (!(t = e.match(r))) throw new Error("invalid data URI");
                                    for (i = t[2] ? t[1] : "text/plain" + (t[3] || ";charset=US-ASCII"), a = !!t[4], l = e.slice(t[0].length), c = a ? atob(l) : decodeURIComponent(l), d = new ArrayBuffer(c.length), u = new Uint8Array(d), h = 0; h < c.length; h += 1) u[h] = c.charCodeAt(h);
                                    return n ? new Blob([o ? u : d], {type: i}) : ((p = new s).append(d), p.getBlob(i))
                                };
                            t.HTMLCanvasElement && !i.toBlob && (i.mozGetAsFile ? i.toBlob = function (e, t, n) {
                                e(n && i.toDataURL && a ? a(this.toDataURL(t, n)) : this.mozGetAsFile("blob", t))
                            } : i.toDataURL && a && (i.toBlob = function (e, t, i) {
                                e(a(this.toDataURL(t, i)))
                            })), e.exports ? e.exports = a : t.dataURLtoBlob = a
                        }(window)
                    }(t), t.exports
                }(), s = Object.prototype.toString, r = {
                    maxWidth: 1 / 0,
                    maxHeight: 1 / 0,
                    minWidth: 0,
                    minHeight: 0,
                    width: void 0,
                    height: void 0,
                    quality: .8,
                    mimeType: "auto",
                    convertSize: 5e6,
                    success: null,
                    error: null
                }, a = /^image\/.+$/, l = function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }, c = function () {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }

                    return function (t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }(), d = Object.assign || function (e) {
                    for (var t = arguments, i = 1; i < arguments.length; i++) {
                        var n = t[i];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, u = window.URL || window.webkitURL, h = window.FileReader, p = /\.\w+$/, f = function () {
                    function e(t, i) {
                        l(this, e), this.result = null, t && this.compress(t, i)
                    }

                    return c(e, [{
                        key: "compress", value: function (e, t) {
                            var i = this, a = new Image;
                            return t = d({}, r, t), new Promise(function (t, i) {
                                if (function (e) {
                                        return e instanceof Blob || "[object Blob]" === s.call(e)
                                    }(e)) if (n(e.type)) if (u) t(u.createObjectURL(e)); else if (h) {
                                    var o = new h;
                                    o.onload = function (e) {
                                        return t(e.file.result)
                                    }, o.onabort = i, o.onerror = i, o.readAsDataURL(e)
                                } else i("The current browser does not support image compression."); else i("The first argument must be an image File or Blob object."); else i("The first argument must be a File or Blob object.")
                            }).then(function (t) {
                                return new Promise(function (i, n) {
                                    a.onload = function () {
                                        i({width: a.naturalWidth, height: a.naturalHeight})
                                    }, a.onabort = n, a.onerror = n, a.alt = e.name, a.src = t
                                })
                            }).then(function (i) {
                                var s = i.width, r = i.height;
                                return new Promise(function (i) {
                                    var l = document.createElement("canvas"), c = l.getContext("2d"), d = s / r,
                                        u = Math.max(t.maxWidth, 0) || 1 / 0, h = Math.max(t.maxHeight, 0) || 1 / 0,
                                        p = Math.max(t.minWidth, 0) || 0, f = Math.max(t.minHeight, 0) || 0, m = s,
                                        g = r;
                                    u < 1 / 0 && h < 1 / 0 ? h * d > u ? h = u / d : u = h * d : u < 1 / 0 ? h = u / d : h < 1 / 0 && (u = h * d), p > 0 && f > 0 ? f * d > p ? f = p / d : p = f * d : p > 0 ? f = p / d : f > 0 && (p = f * d), t.width > 0 ? (m = t.width, g = m / d) : t.height > 0 && (g = t.height, m = g * d), m = Math.min(Math.max(m, p), u), g = Math.min(Math.max(g, f), h), l.width = m, l.height = g, n(t.mimeType) || (t.mimeType = e.type), e.size > t.convertSize && "image/png" === t.mimeType && (t.mimeType = "image/jpeg"), "image/jpeg" === t.mimeType && (c.fillStyle = "#fff", c.fillRect(0, 0, m, g)), c.drawImage(a, 0, 0, m, g), l.toBlob ? l.toBlob(i, t.mimeType, t.quality) : i(o(l.toDataURL(t.mimeType, t.quality)))
                                })
                            }).then(function (o) {
                                if (u && u.revokeObjectURL(a.src), o) if (o.size > e.size && !(t.width > 0 || t.height > 0 || t.maxWidth < 1 / 0 || t.maxHeight < 1 / 0 || t.minWidth > 0 || t.minHeight > 0)) o = e; else {
                                    var s = new Date;
                                    o.lastModified = s.getTime(), o.lastModifiedDate = s, o.name = e.name, o.name && o.type !== e.type && (o.name = o.name.replace(p, function (e) {
                                        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                            i = n(e) ? e.substr(6) : "";
                                        return "jpeg" === i && (i = "jpg"), i && t && (i = "." + i), i
                                    }(o.type)))
                                } else o = e;
                                return i.result = o, t.success && t.success(o), Promise.resolve(o)
                            }).catch(function (e) {
                                if (!t.error) throw e;
                                t.error(new Error(e))
                            })
                        }
                    }]), e
                }();
                t.a = f
            }, function (e, t) {
                !function (e, t) {
                    "use strict";

                    function i(e) {
                        this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        }, this.isIntersecting = !!e.intersectionRect;
                        var t = this.boundingClientRect, i = t.width * t.height, n = this.intersectionRect,
                            o = n.width * n.height;
                        this.intersectionRatio = i ? o / i : this.isIntersecting ? 1 : 0
                    }

                    function n(e, t) {
                        var i = t || {};
                        if ("function" != typeof e) throw new Error("callback must be a function");
                        if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
                        this._checkForIntersections = function (e, t) {
                            var i = null;
                            return function () {
                                i || (i = setTimeout(function () {
                                    e(), i = null
                                }, t))
                            }
                        }(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map(function (e) {
                            return e.value + e.unit
                        }).join(" ")
                    }

                    function o(e, t, i, n) {
                        "function" == typeof e.addEventListener ? e.addEventListener(t, i, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, i)
                    }

                    function s(e, t, i, n) {
                        "function" == typeof e.removeEventListener ? e.removeEventListener(t, i, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, i)
                    }

                    function r(e, t) {
                        var i = Math.max(e.top, t.top), n = Math.min(e.bottom, t.bottom), o = Math.max(e.left, t.left),
                            s = Math.min(e.right, t.right), r = s - o, a = n - i;
                        return r >= 0 && a >= 0 && {top: i, bottom: n, left: o, right: s, width: r, height: a}
                    }

                    function a(e) {
                        var t;
                        try {
                            t = e.getBoundingClientRect()
                        } catch (e) {
                        }
                        return t ? (t.width && t.height || (t = {
                            top: t.top,
                            right: t.right,
                            bottom: t.bottom,
                            left: t.left,
                            width: t.right - t.left,
                            height: t.bottom - t.top
                        }), t) : {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0}
                    }

                    function l(e, t) {
                        for (var i = t; i;) {
                            if (i == e) return !0;
                            i = c(i)
                        }
                        return !1
                    }

                    function c(e) {
                        var t = e.parentNode;
                        return t && 11 == t.nodeType && t.host ? t.host : t
                    }

                    if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in i.prototype) "isIntersecting" in i.prototype || Object.defineProperty(i.prototype, "isIntersecting", {
                        get: function () {
                            return this.intersectionRatio > 0
                        }
                    }); else {
                        var d = [];
                        n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.observe = function (e) {
                            if (!this._observationTargets.some(function (t) {
                                    return t.element == e
                                })) {
                                if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                                this._registerInstance(), this._observationTargets.push({
                                    element: e,
                                    entry: null
                                }), this._monitorIntersections()
                            }
                        }, n.prototype.unobserve = function (e) {
                            this._observationTargets = this._observationTargets.filter(function (t) {
                                return t.element != e
                            }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                        }, n.prototype.disconnect = function () {
                            this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                        }, n.prototype.takeRecords = function () {
                            var e = this._queuedEntries.slice();
                            return this._queuedEntries = [], e
                        }, n.prototype._initThresholds = function (e) {
                            var t = e || [0];
                            return Array.isArray(t) || (t = [t]), t.sort().filter(function (e, t, i) {
                                if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                                return e !== i[t - 1]
                            })
                        }, n.prototype._parseRootMargin = function (e) {
                            var t = (e || "0px").split(/\s+/).map(function (e) {
                                var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                                if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                                return {value: parseFloat(t[1]), unit: t[2]}
                            });
                            return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
                        }, n.prototype._monitorIntersections = function () {
                            this._monitoringIntersections || (this._monitoringIntersections = !0, this._checkForIntersections(), this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (o(e, "resize", this._checkForIntersections, !0), o(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            }))))
                        }, n.prototype._unmonitorIntersections = function () {
                            this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(e, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                        }, n.prototype._checkForIntersections = function () {
                            var t = this._rootIsInDom(), n = t ? this._getRootRect() : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                            this._observationTargets.forEach(function (o) {
                                var s = o.element, r = a(s), l = this._rootContainsTarget(s), c = o.entry,
                                    d = t && l && this._computeTargetAndRootIntersection(s, n), u = o.entry = new i({
                                        time: e.performance && performance.now && performance.now(),
                                        target: s,
                                        boundingClientRect: r,
                                        rootBounds: n,
                                        intersectionRect: d
                                    });
                                c ? t && l ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
                            }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                        }, n.prototype._computeTargetAndRootIntersection = function (i, n) {
                            if ("none" != e.getComputedStyle(i).display) {
                                for (var o = a(i), s = c(i), l = !1; !l;) {
                                    var d = null, u = 1 == s.nodeType ? e.getComputedStyle(s) : {};
                                    if ("none" == u.display) return;
                                    if (s == this.root || s == t ? (l = !0, d = n) : s != t.body && s != t.documentElement && "visible" != u.overflow && (d = a(s)), d && !(o = r(d, o))) break;
                                    s = c(s)
                                }
                                return o
                            }
                        }, n.prototype._getRootRect = function () {
                            var e;
                            if (this.root) e = a(this.root); else {
                                var i = t.documentElement, n = t.body;
                                e = {
                                    top: 0,
                                    left: 0,
                                    right: i.clientWidth || n.clientWidth,
                                    width: i.clientWidth || n.clientWidth,
                                    bottom: i.clientHeight || n.clientHeight,
                                    height: i.clientHeight || n.clientHeight
                                }
                            }
                            return this._expandRectByRootMargin(e)
                        }, n.prototype._expandRectByRootMargin = function (e) {
                            var t = this._rootMarginValues.map(function (t, i) {
                                return "px" == t.unit ? t.value : t.value * (i % 2 ? e.width : e.height) / 100
                            }), i = {
                                top: e.top - t[0],
                                right: e.right + t[1],
                                bottom: e.bottom + t[2],
                                left: e.left - t[3]
                            };
                            return i.width = i.right - i.left, i.height = i.bottom - i.top, i
                        }, n.prototype._hasCrossedThreshold = function (e, t) {
                            var i = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                                n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                            if (i !== n) for (var o = 0; o < this.thresholds.length; o++) {
                                var s = this.thresholds[o];
                                if (s == i || s == n || s < i != s < n) return !0
                            }
                        }, n.prototype._rootIsInDom = function () {
                            return !this.root || l(t, this.root)
                        }, n.prototype._rootContainsTarget = function (e) {
                            return l(this.root || t, e)
                        }, n.prototype._registerInstance = function () {
                            d.indexOf(this) < 0 && d.push(this)
                        }, n.prototype._unregisterInstance = function () {
                            var e = d.indexOf(this);
                            -1 != e && d.splice(e, 1)
                        }, e.IntersectionObserver = n, e.IntersectionObserverEntry = i
                    }
                }(window, document)
            }])
        })
    }, 235: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 20 32" id="arrow-right" ><path fill="#aaa" d="M3.485 5.957l1.98-1.98 11.882 11.882L5.465 28.024l-1.98-1.98 9.902-10.184z"/></symbol>', "arrow-right")
    }, 236: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 20 32" id="arrow-left" ><path fill="#fff" d="M16.552 5.633l-2.044-2.044L2.243 15.854l12.265 12.557 2.044-2.044L6.331 15.854z"/></symbol>', "arrow-left")
    }, 237: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 120 120" id="select" ><circle cx="60" cy="60" r="60"/><path fill="#FFF" d="M63.84 84.678a1.976 1.976 0 0 1-.387.545l-7.975 7.976a1.996 1.996 0 0 1-2.829-.005L24.172 64.716a2.005 2.005 0 0 1-.005-2.828l7.976-7.976a1.996 1.996 0 0 1 2.828.005l19.015 19.015L91.498 35.42a1.991 1.991 0 0 1 2.823 0l7.976 7.977c.784.784.78 2.043 0 2.823L63.84 84.678z"/></symbol>', "select")
    }, 238: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 18 18" id="edit" ><g fill="#999" fill-rule="evenodd"><path d="M8.513 3v1H2.076A.076.076 0 0 0 2 4.075v11.85c0 .041.034.075.075.075h11.85a.074.074 0 0 0 .075-.072V9.521h1v6.407C15 16.52 14.518 17 13.925 17H2.075A1.076 1.076 0 0 1 1 15.925V4.075C1 3.481 1.481 3 2.076 3h6.437z"/><path fill-rule="nonzero" d="M7.1 10.04l.068 1.312 1.306.067 7.648-7.59-1.42-1.404L7.1 10.04zm7.95-8.676l2.134 2.109a.5.5 0 0 1 .004.707l-8.324 8.26-2.648-.137-.138-2.655 8.267-8.282a.5.5 0 0 1 .705-.002z"/></g></symbol>', "edit")
    }, 239: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 14 14" id="clear" ><path fill="#CCC" fill-rule="evenodd" d="M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0zm2.843 8.96a.624.624 0 1 1-.884.883L7 7.883l-1.958 1.96a.62.62 0 0 1-.884 0 .624.624 0 0 1 0-.883L6.116 7 4.157 5.04a.625.625 0 0 1 .884-.884L7 6.117l1.96-1.96a.625.625 0 1 1 .883.884L7.883 7l1.96 1.96z"/></symbol>', "clear")
    }, 240: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 15 15" id="time" ><path fill="#2395FF" fill-rule="evenodd" d="M14.934 6.5h-2.025a5.476 5.476 0 0 0-1.09-2.406l1.42-1.422A7.468 7.468 0 0 1 14.935 6.5zm.05 1.5A7.5 7.5 0 1 1 6.5.066v2.025A5.502 5.502 0 0 0 7.5 13a5.5 5.5 0 0 0 5.478-5h2.006zm-2.82-6.374l-1.427 1.427A5.47 5.47 0 0 0 8 2.023V.015a7.464 7.464 0 0 1 4.164 1.61zM6.366 8.634a1.25 1.25 0 0 1 0-1.768c.488-.488 4.132-2.364 4.132-2.364S8.622 8.146 8.134 8.634a1.25 1.25 0 0 1-1.768 0z"/></symbol>', "time")
    }, 241: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 15 19" id="address" ><path fill="#2395FF" fill-rule="evenodd" d="M12.76 13.54c-1.344 1.617-4.534 4.619-4.534 4.619a1.058 1.058 0 0 1-1.445.004s-3.152-2.98-4.527-4.61C.879 11.923 0 10.243 0 8.113 0 3.907 3.358.5 7.5.5 11.642.5 15 3.908 15 8.112c0 2.125-.897 3.81-2.24 5.427zM7.5 10.884a2.885 2.885 0 1 0 0-5.77 2.885 2.885 0 0 0 0 5.77z"/></symbol>', "address")
    }, 242: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 20 20" id="tip" ><g fill="none" fill-rule="evenodd"><circle cx="10" cy="10" r="9.3" stroke="#999" stroke-width="1.4"/><path fill="#999" d="M10.16 4.865c-1.076 0-1.92.306-2.53.931-.612.611-.917 1.44-.917 2.502H8.24c0-.64.13-1.134.393-1.483.29-.422.77-.626 1.425-.626.524 0 .946.146 1.237.436.276.291.421.684.421 1.193 0 .378-.145.727-.407 1.062l-.247.276c-.902.8-1.455 1.397-1.644 1.804-.203.378-.29.844-.29 1.382v.247h1.556v-.247c0-.35.072-.67.232-.96.131-.262.335-.524.611-.757.684-.596 1.091-.974 1.222-1.134.364-.466.553-1.062.553-1.775 0-.872-.291-1.57-.873-2.08-.582-.523-1.338-.77-2.269-.77zm-.262 8.51c-.29 0-.553.087-.756.29-.204.19-.306.437-.306.742 0 .291.102.538.306.742.203.204.465.306.756.306s.553-.102.757-.291c.203-.204.32-.451.32-.757 0-.305-.102-.552-.306-.742-.204-.203-.465-.29-.77-.29z"/></g></symbol>', "tip")
    }, 243: function (e, t) {
        e.exports = "data:image/png;base64,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"
    }, 244: function (e, t) {
        e.exports = "data:image/png;base64,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"
    }, 2444: function (e, t, i) {
        e.exports = i(2445)
    }, 2445: function (e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = i(2446), o = (i(102), i(11)), s = i.n(o), r = i(46), a = i(63), l = i.n(a);
        Vue.use(s.a), Vue.use(r.a), Vue.use(window.VueImg, {
            prefix: "//fuss10.elemecdn.com",
            loading: "a7ca7e9e5aa15b1b8fc6f1bece8ee385jpeg",
            error: "a7ca7e9e5aa15b1b8fc6f1bece8ee385jpeg"
        }), Vue.use(l.a, {blacklist: ["svg"]}), window.setTimeout(() => {
            new Vue({el: "#app", render: e => e(n.a)})
        }, 0)
    }, 2446: function (e, t, i) {
        "use strict";
        var n = i(2449), o = i(2493), s = !1, r = function (e) {
            s || i(2447)
        }, a = i(0)(n.a, o.a, r, null, null);
        a.options.__file = "src/msite/app.vue", a.esModule && Object.keys(a.esModule).some(function (e) {
            return "default" !== e && "__" !== e.substr(0, 2)
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions."), t.a = a.exports
    }, 2447: function (e, t) {
    }, 2448: function (e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="
    }, 2449: function (e, t, i) {
        "use strict";
        var n = i(452), o = i.n(n), s = i(9), r = i.n(s), a = i(159), l = i.n(a), c = i(33), d = i.n(c), u = i(26),
            h = i.n(u), p = i(4), f = i(380), m = i(136), g = i(290), v = i(2450), y = i(453), b = i(356), w = i(76),
            x = i(381), _ = i(2451), I = i(84), A = i(251), k = i(34), C = i(456), S = i(2487), M = i(93), T = i(2490);
        const N = {home: "饿了么", poi: "收货地址", addAddress: "新增地址", addressSearch: "搜索地址", category: "分类"},
            j = "INDEX_ENTRY_DATA", E = {}, O = () => {
                p.platform.isAlipay && (f.a.reportBizReady(), Object(x.b)())
            }, L = UParams();
        t.a = {
            mixins: [m.a, v.a, y.a, M.a],
            data() {
                this.platform = p.platform, this.icon = b.c, this.filterParams = {}, this.exposureSwitch = (window.crayfish || {}).ubtExposure, this.lightweightCities = (window.crayfish || {}).lightweightCities, this.freedinnerToken = L.token, L.from && (this.alipayInvoke = []);
                let e = {
                    isIPhoneX: p.platform.isIPhoneX,
                    sessionData: Object.assign({
                        geohash: "",
                        locationName: "",
                        shopList: [],
                        foodEntryData: []
                    }, w.a.restore()),
                    page: "home",
                    shopLoading: !0,
                    locationFailed: !1,
                    locState: 0,
                    showAlidayElements: !1,
                    weather: {},
                    hotwords: [],
                    alipayAuthType: 1,
                    population: 0,
                    customizedHeader: !1,
                    isAgentCity: !1
                };
                return e.sessionData.shopList.forEach(e => {
                    e.shown = !1, e.cartQuantity = k.a.getQuantity(e.id)
                }), e
            },
            computed: {
                geohash() {
                    return this.sessionData.geohash
                }, position() {
                    if (!this.geohash) return {latitude: -180, longitude: -180};
                    let [e, t] = Geohash.decode(this.geohash);
                    return {latitude: e, longitude: t}
                }, headerData() {
                    let e;
                    return e = this.locationFailed ? "未能获取地址" : this.sessionData.locationName ? this.sessionData.locationName : this.locState ? "正在识别地址..." : "正在定位...", {
                        geohash: this.geohash,
                        latitude: this.position.latitude,
                        longitude: this.position.longitude,
                        title: e
                    }
                }, errorTip() {
                    let e = null;
                    switch (!0) {
                        case this.locationFailed:
                            (e = b.b.locationFailed).button.action = (() => {
                                this.page = "poi"
                            });
                            break;
                        case!this.shopLoading && !this.sessionData.shopList.length:
                            e = b.b.empty
                    }
                    return e
                }, geoAndUser() {
                    return !(!this.userId || !this.geohash)
                }, lightweightTest() {
                    if (!Array.isArray(this.lightweightCities)) return !1;
                    const e = p.store.get("cityId") || 0, t = p.store.get("districtId") || 0;
                    return this.lightweightCities.indexOf(e) > -1 || this.lightweightCities.indexOf(t) > -1
                }
            },
            watch: {
                sessionData: {
                    handler: function () {
                        let e = this.sessionData;
                        this.lazyRefreshOn || (e = Object.assign({}, this.sessionData, {shopList: []})), w.a.cache(e)
                    }, deep: !0
                }, page(e) {
                    let t = document.body.style;
                    "home" !== e ? (t.overflow = "hidden", t.height = "100vh") : (t.overflow = "", t.height = ""), this.updateNavBar(e)
                }, geoAndUser(e) {
                    e && this.$emit("GEO_AND_USER")
                }
            },
            components: {
                HeaderInfo: _.c,
                KeyWords: _.d,
                ShopList: d.a,
                ElemeFooter: l.a,
                BackTop: o.a,
                NoDataTip: r.a,
                LoadMore: h.a,
                Poi: _.e,
                AddressForm: _.b,
                AddressSearch: A.a,
                Activity: _.a,
                Arrival: I.a,
                MiniCart: C.a,
                UbtExposure: g.a,
                FloatFestivalHongbao: S.a,
                Category: T.a
            },
            directives: {sticky: window.VueSticky.default},
            mounted() {
                const e = e => {
                    this.updateHeader(e), this.initialLoadMore(), this.mergeRequest(), this.checkAgentCity()
                };
                this.sessionData.locationName && this.sessionData.geohash ? (this.$emit("LOC_SUCCESS", this.sessionData.geohash), e()) : b.e.getGeohash().then(t => {
                    this.sessionData.geohash = t, this.locState = 1, p.store.setLocation(t), this.$emit("LOC_SUCCESS", t), this.userId ? b.a.userLocation(this.userId, t).then(e => 2 === e.type ? Promise.resolve(e.addresses[0]) : Promise.reject()).then(t => {
                        this.sessionData.geohash = t.st_geohash, p.store.setLocation(t.st_geohash, t.address), b.e.poiCallback(t), e(t.address)
                    }).catch(() => {
                        e()
                    }) : e()
                }).catch(t => {
                    b.e.sendLocationFailed(t), this.$emit("LOC_FAILURE");
                    const i = b.e.getStoreLocation();
                    i ? (this.sessionData.geohash = i, e()) : (this.shopLoading = !1, this.locationFailed = !0, O())
                });
                document.addEventListener("visibilitychange", () => {
                    "visible" === document.visibilityState && this.sessionData.shopList.forEach(e => {
                        e.cartQuantity = k.a.getQuantity(e.id)
                    })
                }), history.replaceState({page: this.page}, "", location.href), window.addEventListener("popstate", e => {
                    this.page = e.state.page
                })
            },
            methods: {
                updateHeader(e) {
                    if (!e) return b.a.poi(this.position).then(e => {
                        this.sessionData.locationName = e.name, b.e.poiCallback(e), p.store.setLocation(this.geohash, e.name)
                    }).catch(e => {
                        b.e.sendPoiFailed(e, this.position), this.locationFailed = !0
                    });
                    this.sessionData.locationName = e
                }, updateEntries() {
                    const e = b.d.get(j);
                    return e && (this.sessionData.foodEntryData = e), b.a.entry({
                        latitude: this.position.latitude,
                        longitude: this.position.longitude,
                        templates: ["main_template", "favourable_template"]
                    }).then(e => {
                        this.handleEntires(e)
                    }).catch(() => ({}))
                }, handleEntires(e) {
                    if (!e || !e.length) return;
                    const t = e[0], i = e[1] || [];
                    try {
                        this.population = JSON.parse(i.entries[0].more).population || 0
                    } catch (e) {
                        this.population = 0
                    }
                    let n = t.entries;
                    p.platform.isAlipay && (n = t.entries.filter(e => 1 !== e.id)), b.d.set(j, n), this.sessionData.foodEntryData = n
                }, initialLoadMore() {
                    this.sessionData.shopList.length ? this.shopLoading = !1 : this.loadMore().then(() => {
                        this.shopLoading = !1, O()
                    })
                }, loadMore(e = {}) {
                    return b.a.shopList(babelHelpers.extends({
                        latitude: this.position.latitude,
                        longitude: this.position.longitude,
                        offset: this.sessionData.shopList.length,
                        limit: 8,
                        extras: ["activities", "tags"],
                        extra_filters: "home"
                    }, this.filterParams)).then(t => {
                        (t = t.filter(e => !E[e.id])).forEach(e => {
                            e.shown = !0, e.height = 0, e.cartQuantity = k.a.getQuantity(e.id), E[e.id] = !0
                        }), e.replace ? this.sessionData.shopList = t : this.sessionData.shopList.push(...t)
                    }).catch(() => {
                    })
                }, changeGeohash({geohash: e, address: t, cityId: i, districtId: n}) {
                    this.page = "home", history.replaceState({page: "home"}, "", location.href), e && (this.locationFailed = !1, this.sessionData.geohash = e, p.store.setLocation(e, t), b.e.poiCallback({
                        city_id: i,
                        district_id: n
                    }), this.updateHeader(t), this.updateEntries(), this.checkAgentCity(), this.sessionData.shopList = [], this.shopLoading = !0, this.initialLoadMore(), this.lightweightTest || this.$nextTick(() => {
                        this.$refs.header.update(), this.$refs.keywords.getHotSearch()
                    }))
                }, goToShop(e, t) {
                    return () => {
                        sessionStorage.setItem("scrollY", document.body.scrollTop);
                        const i = `/shop/#geohash=${this.geohash}&id=${e.id}&s_type=${e.type}`;
                        UBT.send("EVENT", {
                            id: 101846,
                            params: {index: t, restaurant_id: e.id, rank_id: e.authentic_id}
                        }), e.bidding && b.a.biddingClick(e.id, this.userId || 0, this.geohash, e.bidding), this.$visit(i)
                    }
                }, goSearch(e) {
                    let t = "/search/";
                    e && (t += `#/shop?keyword=${encodeURIComponent(e)}&geohash=${this.geohash}`), k.a.deleteSessionStorage("search/"), this.$visit(t)
                }, poiEnter() {
                    this.$refs.poi.$el.scrollTop = 0
                }, goToPage(e) {
                    "addressSearch" === e && this.$refs.addressSearch.searchAddress(), this.page = e, "addressSearch" === history.state.page && "addAddress" === e ? history.replaceState({page: "addAddress"}, "", location.href) : history.pushState({page: e}, "", location.href)
                }, back() {
                    history.back()
                }, updateNavBar(e) {
                    let t = this;
                    p.platform.isAlipay && (ap.setNavigationBar({title: N[e]}), "poi" === e ? ap.setOptionButton({
                        items: [{title: "新增地址"}],
                        onClick() {
                            t.userId ? (UBT.send("EVENT", {id: 101631}), t.goToPage("addAddress"), t.$refs.addAddress.resetData()) : ap.pushWindow("/login")
                        }
                    }) : "home" === e ? this.setOptionMenu() : ap.setOptionButton({reset: !0}))
                }, joinAliday(e = !1) {
                    this.showAlidayElements = !0, this.customizedHeader = e
                }, mergeRequest() {
                    const {latitude: e, longitude: t} = this.position;
                    b.a.mergeRequest({latitude: e, longitude: t, lightweight: this.lightweightTest}).then(e => {
                        e && Object.keys(e).forEach(t => {
                            if (!e[t]) return;
                            const i = e[t].code;
                            i >= 200 && i < 300 && ("foodEntryData" === t ? this.handleEntires(JSON.parse(e[t].body)) : this[t] = JSON.parse(e[t].body))
                        })
                    }).catch(() => {
                    })
                }, checkAgentCity() {
                    const {latitude: e, longitude: t} = this.position;
                    b.a.isAgentCity(e, t).then(e => {
                        this.isAgentCity = "1" === e.is_agent_city
                    }).catch(() => {
                        this.isAgentCity = !1
                    })
                }
            }
        }
    }, 245: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAklJREFUSA2tlc1LVGEUh2emUfKjVMohRfpwUaItxCRCwcD+gUIQihYta9OicBktW7RwE200ihaBSuIQY4qbIaLaBBFqG5djUCS2yCBLx+d3xzO8c703Z3QOPHPO+Z33Ped+TyRSZstms3VwG96UtTUNu2EUfoFZ1b6H0KkLXltHnz+95wE0aoAR2PQ1ddOL8b1MoMN59r2Ell32J0oeQPNems5A7S7NVU7EiliUX0LzsyTTUExz7WsoegDND7PhFcgH2XfEn75CddED2PgATvoaWPqPYBbqTdj2uQEc3VFfoSClfhzhZoFYmDwkvVQoeVmVncE7mryFW+A/Cq28DrbW2+n8zBPr0jQ7moWxCA1r4Q+Y/SZ4Cu22ingawqyfwteQ4mMd1SBUWjO8Xu8bMM8medm5nNvxm0TpgKYdlZywpvfgakgxit7GEA1PhKy5jz4ZUpP8TWfQ/Z8FjdFodJ36ZsCaNFoNtAbUTMpogBaZLRLokTO7sB2smOD4J8TXnDwo/KKbnHFu0BLxsJMr7INxn/aXvB4WfbqbrpMc1ICUo+rL2ApJR5sg7gH3q/me/BBsQJjN6ZR0icadc9ON1TN/GQbgGej7o2/PIzD7RNAC2h9mL7wC42tgwTkM/SPp0csbeQziMAWye9DpRcE/n5EPuA1OIei5N1sluAMdcAy8zzq+Ap7DXWiEIFtGzL+kuiSeISq+Aj1wArKQgTSkeFw38J6x9gj5Cv4jQpfJ+DEYoqZ9nuUHmFCKZ8AZ1nfCGnyg8Y9S9pdl7RZG91f8Dce3sAAAAABJRU5ErkJggg=="
    }, 2450: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(34);
        t.a = {
            data() {
                return this.lazyRefreshOn = !n.platform.isAlipay, this.scrolled = !1, {}
            }, mounted() {
                if (this.lazyRefreshOn) {
                    const e = window.requestIdleCallback || window.requestAnimationFrame || function (e) {
                        setTimeout(e, 30)
                    }, t = () => {
                        this.updateShops(), e(t)
                    };
                    t()
                }
            }, methods: {
                updateShops() {
                    let e = this.$refs.shopList;
                    if (!e) return;
                    let t = e.offsetTop, i = window.scrollY, n = i + window.innerHeight, o = t;
                    this.sessionData.shopList.forEach(e => {
                        o > i - 500 && o < n + 500 && (e.shown = !0), o += e.height || 0
                    }), this.$nextTick(this.updateShopHeight)
                }, updateShopHeight() {
                    this.sessionData.shopList.forEach((e, t) => {
                        let i = document.querySelector(`.shop-${t}`);
                        i && (e.height = i.offsetHeight)
                    }), this.scrolled || this.$nextTick(() => {
                        this.scrolled = o.a.updatePosition("scrollY")
                    })
                }
            }
        }
    }, 2451: function (e, t, i) {
        "use strict";
        var n = i(2452), o = i(2462), s = i(2465), r = i(2475);
        i.d(t, "e", function () {
            return n.a
        }), i.d(t, "d", function () {
            return s.b
        }), i.d(t, "c", function () {
            return s.a
        }), i.d(t, "b", function () {
            return o.a
        }), i.d(t, "a", function () {
            return r.a
        })
    }, 2452: function (e, t, i) {
        "use strict";
        var n = i(2453);
        t.a = n.a
    }, 2453: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(2454), o = i(2460), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-0c644e24","scoped":false,"hasInlineConfig":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./poi.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(787);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-0c644e24"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(787), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/msite/component/poi/poi.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] poi.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 2454: function (e, t, i) {
        "use strict";
        var n = i(9), o = i.n(n), s = i(4), r = i(2455), a = i(2458), l = i(356), c = i(2459), d = i.n(c), u = i(27);
        t.a = {
            components: {AddressCell: r.a, NoDataTip: o.a}, props: ["addressData", "userId"], data() {
                return this.icon = l.c, this.platform = s.platform, this.emptyTip = {
                    img: "no-log",
                    title: "没有搜索结果",
                    content: "换个关键字试试"
                }, {
                    reloading: !1,
                    Locate: d.a,
                    query: "",
                    addresses: [],
                    results: [],
                    currentAddress: this.addressData || {}
                }
            }, directives: {sticky: window.VueSticky.default}, mounted() {
                u.a.$on("updateAddress", this.updateAddresses)
            }, watch: {
                userId() {
                    this.userId && this.updateAddresses()
                }, addressData: {
                    handler(e) {
                        this.currentAddress = e
                    }, deep: !0
                }
            }, methods: {
                updateAddresses() {
                    return a.a.addresses(this.userId).then(e => {
                        this.addresses = e.filter(e => 0 === e.poi_type && e.st_geohash && "0" !== e.st_geohash)
                    }).catch(() => {
                    })
                }, search() {
                    if (!this.query) return this.results = [];
                    a.a.search(this.query).then(e => {
                        this.results = e
                    }).catch(() => {
                    })
                }, select(e) {
                    this.query = "", e || (e = {
                        geohash: this.currentAddress.geohash,
                        address: this.currentAddress.address,
                        cityId: this.currentAddress.city_id,
                        districtId: this.currentAddress.district_id
                    }), this.$emit("select", e)
                }, add() {
                    u.a.$emit("RESET_DATA"), UBT.send("EVENT", {id: 101631}), this.$emit("add")
                }, reLocate() {
                    this.reloading = !0, l.e.getGeohash().catch(e => (l.e.sendLocationFailed(e), Promise.reject())).then(e => {
                        const [t, i] = Geohash.decode(e);
                        return l.a.poi({latitude: t, longitude: i}).catch(e => (l.e.sendPoiFailed(e), Promise.reject()))
                    }).then(e => {
                        this.currentAddress = e, this.currentAddress.title = e.name
                    }).catch(() => {
                    }).always(() => {
                        this.reloading = !1
                    }), window.Tracert && window.Tracert.info({
                        seedId: "LBS_LOCATION_ACCURACY",
                        params: [{bizType: "ele"}, {timeKey: Date.now()}]
                    })
                }, back() {
                    history.back()
                }
            }, beforeDestroy() {
                u.a.$off("updateAddress", this.updateAddresses)
            }
        }
    }, 2455: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(2456), o = i(2457), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-840dc80c","scoped":false,"hasInlineConfig":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./AddressCell.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(788);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-840dc80c"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(788), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/msite/component/poi/AddressCell.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] AddressCell.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 2456: function (e, t, i) {
        "use strict";
        t.a = {
            props: ["data", "from"], methods: {
                onclick() {
                    let e = this.data.geohash || this.data.st_geohash || "",
                        t = "search" === this.from ? this.data.name : this.data.address;
                    this.$emit("select", {
                        geohash: e,
                        address: t,
                        cityId: this.data.city_id,
                        districtId: this.data.district_id
                    })
                }
            }
        }
    }, 2457: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {
                class: this.$style.cell,
                on: {click: this.onclick}
            }, [t("p", [t("span", {class: this.$style.name}, [this._v(this._s(this.data.name))]), this.data.sex ? t("span", {class: this.$style.sex}, [this._v("\n      " + this._s(1 === this.data.sex ? "先生" : "女士") + "\n    ")]) : this._e(), t("span", {class: this.$style.phone}, [this._v(this._s(this.data.phone))])]), t("p", {class: this.$style.address}, [this._v(this._s(this.data.address))])])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 2458: function (e, t, i) {
        "use strict";
        var n = i(4);
        const {paramToString: o} = window.Utils;
        t.a = {
            addresses: e => Object(n.$fetch)(`/member/v1/users/${e}/addresses`, {credentials: "include"}),
            search(e) {
                const t = n.store.get("location") || {};
                let i = {keyword: e, offset: 0, limit: 20, longitude: t.longitude, latitude: t.latitude};
                return Object(n.$fetch)(`/bgs/poi/search_poi_nearby?${o(i)}`)
            }
        }
    }, 2459: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 15 15" id="locate" ><g fill="none" fill-rule="evenodd"><circle cx="7.5" cy="7.5" r="7" stroke="#2395FF"/><path fill="#2395FF" d="M7 0h1v5H7zM7 10h1v5H7zM10 7h5v1h-5zM0 7h5v1H0z"/></g></symbol>', "locate")
    }, 246: function (e, t, i) {
        "use strict";
        var n = i(248), o = i(249), s = !1, r = function (e) {
            s || i(247)
        }, a = i(0)(n.a, o.a, r, "data-v-d9b7a926", null);
        a.options.__file = "src/checkout/routes/address-form/components/form-content.vue", a.esModule && Object.keys(a.esModule).some(function (e) {
            return "default" !== e && "__" !== e.substr(0, 2)
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] form-content.vue: functional components are not supported with templates, they should use render functions."), t.a = a.exports
    }, 2460: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {class: e.$style.page}, [e.platform.isAlipay ? e._e() : n("div", {
                directives: [{
                    name: "sticky",
                    rawName: "v-sticky"
                }]
            }, [n("div", {class: e.$style.header}, [n("svg", {
                class: e.$style.arrow,
                on: {click: e.back}
            }, [n("use", {attrs: {"xlink:href": e.icon.ArrowLeft}})]), n("div", {class: e.$style.title}, [e._v("选择收货地址")]), e.userId ? n("span", {
                class: e.$style.addAddress,
                on: {click: e.add}
            }, [e._v("新增地址")]) : e._e()])]), n("form", {
                class: e.$style.form, on: {
                    submit: function (t) {
                        t.preventDefault(), e.search(t)
                    }
                }
            }, [n("img", {class: e.$style.img, attrs: {src: i(2461)}}), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.query,
                    expression: "query"
                }],
                class: e.$style.input,
                attrs: {type: "search", placeholder: "请输入地址", autofocus: ""},
                domProps: {value: e.query},
                on: {
                    compositionend: e.search, input: function (t) {
                        t.target.composing || (e.query = t.target.value)
                    }
                }
            })]), n("section", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.results.length,
                    expression: "results.length"
                }]
            }, e._l(e.results, function (t, i) {
                return n("AddressCell", {key: i, attrs: {data: t, from: "search"}, on: {select: e.select}})
            })), n("section", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.currentAddress && e.currentAddress.title && !e.results.length,
                    expression: "currentAddress && currentAddress.title && !results.length"
                }], class: e.$style.section
            }, [n("h4", [e._v("当前地址")]), n("div", {
                class: e.$style.current, on: {
                    click: function (t) {
                        e.select()
                    }
                }
            }, [n("span", [e._v(e._s(e.currentAddress.title))]), n("span", {
                class: e.$style.relocate,
                on: {
                    click: function (t) {
                        t.stopPropagation(), e.reLocate(t)
                    }
                }
            }, [n("svg", {class: (o = {}, o[e.$style.reloading] = e.reloading, o)}, [n("use", {attrs: {"xlink:href": e.Locate}})]), n("span", [e._v("重新定位")])])])]), n("section", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.addresses.length && !e.results.length,
                    expression: "addresses.length && !results.length"
                }], class: e.$style.section
            }, [n("h4", [e._v("收货地址")]), e._l(e.addresses, function (t, i) {
                return n("AddressCell", {key: i, attrs: {data: t, from: "user"}, on: {select: e.select}})
            })], 2), !e.query || e.results.length || e.addresses.length ? e._e() : n("section", {class: e.$style.noDataTip}, [n("NoDataTip", {attrs: {data: e.emptyTip}})], 1)]);
            var o
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 2461: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAAXNSR0IArs4c6QAABBNJREFUWAntWc9rE0EYNRujJ2lLKUJ7FrSKHgsFD15rRREJXgRr0gavosU/QS14EiRtYqVeJCdFDR4ED4VCj4rGg2dbpJS2eDNk63vb3XX229lsZ7MxCg4MM9+Ped/L7MzsN5vMAYOyuLh4rNlsXsSQs6gju7u7w5lMZhDtJto16L6hLudyuZdTU1Nf0U+tZOKQarVadmdn57pt27fgOxrnr9gblmU97Ovre5rP51uKPlG3LdFyuXweqA9QTQhKIg0oZkul0htpMJG1RPEorfn5+XsAumMCFuM7NzMzcxdLxI7x05pDRKvV6pFWq/UcZCe0I6BEsA00q/BZQ38T7SDaYejG0B9qM66ezWavFgqFH1E+UfqDqgFBrIWFhSiSnIlnqJXp6ekV3cxwPJ7EOHyKqNdQLVS/wD7hTsIF3XjfUdMJzCiCzAHstvQD6Ao2RqlYLH6Stii5UqmcwgYsA4/EZZnDmp2VynayT9TdOK+lM0g+6e/vv4md+1Pa4mScGIe2t7cfg+wNje+kyQZziPII2tra+giwwO4mSWyAgiaIkQpPqqoh2xgYGDi936PLWUM8JzUkVziTRowinInD5SPMo25codaLDlH3MFc9bK7JJI9bBfH6xCEe5MDRpInrDQm1Fl+L0MpHvmSycUKoGoWLx1NDLaNufFWn7VvuuztgxHqqBhTpCRUJpYsvfSjz0TPB8AvW0gY2kFxPvr2TDnGJLzAC8YXNF0l0xJf2OqsAC6wlYU8surirAkDGF+Y90cJj5qvPL5CZrnWtSHwZPyqwhV85qBohb6py2n2JL+NHxeOMBohBDhCPGphUL/Fl/ChczmjgUUMOLIWogUn1El/Gj8LlZuL1QS1M1ZwXgapMo+/ijgksGV+Y90QSWlYtABtyUzVVnUqfuMQXYIH4wuaLFi9ivvS7w3yyGyWEGxE/FNvJnpDifYZFfY3ayMTPpPkaZX6KpPkD4qjLqoFU72SIlUbhDOJtUdgsJr3MJ4U+kUgc4mGwSvKAJm4kvjOQV1p48LboF6ylcSa9vqKDjps8y0y/4cbdF/K/leF7P+lP3ZlwdlaRoIQ2lsdD1/ozSiPPOdxCX6Gd0DjbCLAEG4MkuoV6mMD5jnoOt9kvni6uDRClczfv9SoZU7IhogRzZ/Y+2tDVWQ1m2G/BP6uOMSEbOC48EADYeLz8nDOJGjgNPB+DluOJcwW1qY7DRBxFfY/ldkLV6/raGVUdeZVO62seXiyXgF1Dzakx9jOzsURVwDS+jyYla0RUJd1JPwnZnhDljzQl2zOipmS1u76Tx2oyFpnTC/jnUXWnwbt6vX7Yw+spUZJoQ3Z4fX39+F9DtA3Zt/gyzfzVKT2fUY8IZxbnKf8a4geQR/gkedmz/W+7MQO/ADJZA0ikosHZAAAAAElFTkSuQmCC"
    }, 2462: function (e, t, i) {
        "use strict";
        var n = i(2463), o = i(2464), s = i(0)(n.a, o.a, null, null, null);
        s.options.__file = "src/msite/component/poi/AddressForm.vue", s.esModule && Object.keys(s.esModule).some(function (e) {
            return "default" !== e && "__" !== e.substr(0, 2)
        }) && console.error("named exports are not supported in *.vue files."), s.options.functional && console.error("[vue-loader] AddressForm.vue: functional components are not supported with templates, they should use render functions."), t.a = s.exports
    }, 2463: function (e, t, i) {
        "use strict";
        var n = i(32), o = i(27), s = i(246), r = i(4);
        const a = {
            name: "",
            sex: 0,
            phone: "",
            phone_bk: "",
            address: "",
            address_detail: "",
            poi_type: 0,
            tag_type: 0,
            st_geohash: ""
        };
        t.a = {
            data() {
                return this.platform = r.platform, {
                    address_id: null,
                    formContent: Object.assign({}, a),
                    showOtherPhone: !1
                }
            }, props: ["userId"], components: {FormContent: s.a}, methods: {
                formSubmit() {
                    this.formContent.name ? this.formContent.phone && /^1\d{10}$/.test(this.formContent.phone) ? this.formContent.st_geohash && this.formContent.address ? o.a.loading || (o.a.$emit("loading"), n.a.postAddress({
                        userId: this.userId,
                        body: this.formContent,
                        addressId: this.address_id
                    }).then(e => {
                        o.a.$emit("loading.stop"), o.a.$emit("updateAddress"), this.$emit("select", {
                            geohash: e.st_geohash,
                            address: e.address
                        }), UBT.send("EVENT", {id: 101630})
                    }).catch(e => {
                        this.$MessageBox.alert({
                            title: "提示",
                            content: e.message || "请输入正确的格式"
                        }), o.a.$emit("loading.stop")
                    })) : this.$MessageBox.toast("请输入正确的小区/写字楼/学校等地址信息") : this.$MessageBox.toast("请输入正确的手机号") : this.$MessageBox.toast("请输入联系人")
                }, searchAddress() {
                    this.$emit("search")
                }, getSearchResult(e) {
                    this.formContent.address = e.name, this.formContent.st_geohash = e.geohash, this.formContent.address_detail = e.address, this.$emit("add")
                }, resetData() {
                    this.formContent = Object.assign({}, a), this.address_id = null, this.showOtherPhone = !1, this.platform.isAlipay && this.getDefaultAddressInfo()
                }, getDefaultAddressInfo() {
                    let e = r.store.get("ali_user_info") || {}, {geohash: t = "", locationName: i = ""} = r.store.location || {};
                    this.formContent = babelHelpers.extends({}, this.formContent, {st_geohash: t, address: i}, e)
                }
            }, mounted() {
                o.a.$on("ADDRESS_SEARCH", this.getSearchResult), o.a.$on("RESET_DATA", this.resetData)
            }, beforeDestroy() {
                o.a.$off("ADDRESS_SEARCH", this.getSearchResult), o.a.$off("RESET_DATA", this.resetData)
            }
        }
    }, 2464: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this.$createElement;
            return (this._self._c || e)("FormContent", {
                attrs: {
                    content: this.formContent,
                    showOtherPhone: this.showOtherPhone
                }, on: {search: this.searchAddress, submit: this.formSubmit}
            })
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 2465: function (e, t, i) {
        "use strict";
        var n = i(2466), o = i(2472);
        i.d(t, "b", function () {
            return o.a
        }), i.d(t, "a", function () {
            return n.a
        })
    }, 2466: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(2467), o = i(2471), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-948c9382","scoped":false,"hasInlineConfig":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./headerInfo.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(789);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-948c9382"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(789), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/msite/component/emotional-header/headerInfo.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] headerInfo.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 2467: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(2468), s = i.n(o), r = i(2469), a = i.n(r), l = i(2470), c = i.n(l), d = i(790);
        t.a = {
            props: {
                data: {type: Object, required: !0},
                iPhoneXMode: {type: Boolean, default: !1},
                weatherProp: {type: Object},
                lightweight: {type: Boolean},
                isNewUser: {required: !0},
                isAgentCity: {required: !0}
            },
            data: () => ({Icon: {Location: s.a, Arrow: a.a, Category: c.a}, weatherData: null, platform: n.platform}),
            computed: {
                weather() {
                    return this.weatherData || this.weatherProp
                }, showLightweightMsite() {
                    return this.platform.isAlipay && this.isAgentCity && this.isNewUser
                }
            },
            methods: {
                getWeather() {
                    d.a.weather(this.data).then(e => {
                        this.weatherData = e
                    }).catch(() => {
                    })
                }, update() {
                    this.getWeather()
                }
            }
        }
    }, 2468: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 26 31" id="location" ><path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"/></symbol>', "location")
    }, 2469: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 14 8" id="arrow" ><path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"/></symbol>', "arrow")
    }, 247: function (e, t) {
    }, 2470: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 15 12" id="category" ><path fill="#FFF" fill-rule="evenodd" d="M4.167 0H15v1.714H4.167V0zm0 5.143H15v1.714H4.167V5.143zm0 5.143H15V12H4.167v-1.714zM0 0h1.667v1.714H0V0zm0 5.143h1.667v1.714H0V5.143zm0 5.143h1.667V12H0v-1.714z"/></symbol>', "category")
    }, 2471: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("header", {class: [e.$style.container, e.iPhoneXMode && e.$style.iPhoneXMode]}, [i("div", {class: e.$style.addressAndWeather}, [i("div", {
                class: e.$style.addressContainer,
                attrs: {"aria-label": "当前地址：" + e.data.title + "，轻点两下重新选择", role: "button"},
                on: {
                    click: function (t) {
                        e.$emit("click-location")
                    }
                }
            }, [i("svg", {class: e.$style.addressIcon}, [i("use", {attrs: {"xlink:href": e.Icon.Location}})]), i("span", {class: e.$style.addressText}, [e._v(e._s(e.data.title))]), i("svg", {class: e.$style.addressExtraIcon}, [i("use", {attrs: {"xlink:href": e.Icon.Arrow}})])]), e.showLightweightMsite ? i("aside", {
                class: e.$style.category,
                attrs: {"ubt-click": "102396"},
                on: {
                    click: function (t) {
                        e.$emit("click-category")
                    }
                }
            }, [i("svg", {class: e.$style.categoryIcon}, [i("use", {attrs: {"xlink:href": e.Icon.Category}})]), i("span", {class: e.$style.categoryText}, [e._v("分类")])]) : e.weather && e.weather.image_hash && !e.lightweight ? i("aside", {
                class: e.$style.weather,
                attrs: {"aria-hidden": "true"}
            }, [i("div", {class: e.$style.weatherTitle}, [i("h2", {class: e.$style.temperature}, [e._v(e._s(e.weather.temperature) + "°")]), i("p", {class: e.$style.description}, [e._v(e._s(e.weather.description))])]), i("img", {
                directives: [{
                    name: "img",
                    rawName: "v-img",
                    value: {hash: e.weather.image_hash, width: 55, height: 55},
                    expression: "{ hash: weather.image_hash, width: 55, height: 55 }"
                }], class: e.$style.weatherIcon, attrs: {alt: "天气图标"}
            })]) : e._e()])])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 2472: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(2473), o = i(2474), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-3e254c8e","scoped":false,"hasInlineConfig":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./keywords.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(791);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-3e254c8e"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(791), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/msite/component/emotional-header/keywords.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] keywords.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 2473: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(790);
        t.a = {
            props: {data: {type: Object, required: !0}, keywordsProp: {type: Array}},
            data: () => ({keywordsData: null}),
            computed: {
                keywords() {
                    return this.keywordsData || this.keywordsProp
                }
            },
            methods: {
                getHotSearch() {
                    this.data.geohash && o.a.hotSearch(this.data).then(e => {
                        this.keywordsData = e
                    }).catch(() => {
                    })
                }, clickHandler(e) {
                    if (3 !== e.type) return void this.$emit("GO_SEARCH", e.word);
                    const {url: t} = UParams(e.link);
                    n.platform.isAlipay ? ap.pushWindow(t) : location.href = t
                }
            }
        }
    }, 2474: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {class: e.$style.menuWrapper}, [i("div", {class: e.$style.menuContainer}, e._l(e.keywords, function (t) {
                return i("a", {
                    attrs: {
                        href: "javascript:;",
                        "ubt-click": "101410",
                        "ubt-data-type": "情感化首页",
                        "ubt-data-keyword": t.word
                    }, on: {
                        click: function (i) {
                            e.clickHandler(t)
                        }
                    }
                }, [e._v(e._s(t.word))])
            }))])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 2475: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(2476), o = i(2485), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-1f533279","scoped":false,"hasInlineConfig":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(792);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-1f533279"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(792), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/msite/component/activity/index.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 2476: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(2477), s = i(28), r = i(2481), a = i(48), l = i(44);
        const c = e => new Promise((t, i) => {
            let n = new Image;
            n.onload = (() => {
                t(n.src), n = null
            }), n.onerror = (() => i()), n.src = window.VueImg.getSrc(e)
        });
        t.a = {
            props: {
                geohash: {type: String, required: !0},
                userId: {required: !0},
                foodEntryData: {type: Array},
                isNewUser: {required: !0},
                joinAliday: {
                    type: Function, default: () => {
                    }
                },
                population: {type: Number, required: !0},
                isAgentCity: {type: Boolean, default: !1}
            }, data() {
                return this.platform = n.platform, {
                    activityLinks: {top: [], bottom: []},
                    topURL: "",
                    newUserImg: "",
                    agentCityNewUserImg: "",
                    showActivity: !1,
                    toptoonData: {}
                }
            }, components: {FoodEntry: o.a, Supervip: r.a}, mounted() {
                this.geohash && this.checkAliday()
            }, watch: {
                geohash() {
                    this.checkAliday()
                }, userId(e) {
                    e || (this.showActivity = !0, this.showNewUser())
                }, isNewUser(e) {
                    e ? this.showNewUser() : this.showActivity = !0
                }, showLightweightMsite(e) {
                    e && this.showAgentCityNewUser()
                }
            }, methods: {
                redirect(e) {
                    const t = UParams(e);
                    e += `${Object.keys(t).length ? "&" : "#"}geohash=${this.geohash}`, this.$visit(e)
                }, openActivity(e, t) {
                    UBT.send("EVENT", {id: 101868, params: {title: e.title, sort_index: t}}), this.redirect(e.url)
                }, openToptoon() {
                    const {url: e} = this.toptoonData;
                    e && (UBT.send("EVENT", {id: "101889", params: {message: e.split("/")[1]}}), this.redirect(e))
                }, showNewUser() {
                    c({hash: a.d.hash, width: 710, height: 178}).then(e => {
                        this.newUserImg = e
                    }).catch(() => {
                    })
                }, showAgentCityNewUser() {
                    c({hash: a.b.hash, width: 750, height: 210}).then(e => {
                        this.agentCityNewUserImg = e
                    }).catch(() => {
                    })
                }, checkAliday() {
                    n.platform.isAlipay && (this.alidayConfig = Object(l.a)().then(e => {
                        if (this.alidayConfig = e, this.toptoonData = this.alidayConfig.ALIDAY, this.alidayConfig.disabled) return this.topURL = "", void(this.activityLinks = a.a);
                        s.a.showAlidayShop(this.alidayConfig.ALIDAY.limit, this.geohash).then(e => {
                            e ? (this.showToptoon(), this.activityLinks = this.alidayConfig.ACTIVITY_LINKS_ALIDAY, this.joinAliday(this.alidayConfig.customizeHeader)) : (this.topURL = "", this.activityLinks = a.a)
                        })
                    }))
                }, showToptoon() {
                    const {hash: e, url: t} = this.toptoonData || {};
                    e && t && c({hash: e, width: 750, height: 210}).then(e => {
                        this.topURL = e, UBT.send("EVENT", {id: 101988, params: {message: t.split("/")[1]}})
                    }).catch(() => {
                    })
                }
            }, computed: {
                isSuperVipShow() {
                    return n.platform.isAlipay && this.geohash && this.userId && !this.isNewUser
                }, showLightweightMsite() {
                    return n.platform.isAlipay && this.geohash && this.isAgentCity && this.isNewUser
                }, isSalesShow() {
                    return this.population > 0
                }
            }
        }
    }, 2477: function (e, t, i) {
        "use strict";
        var n = i(2479), o = i(2480), s = !1, r = function (e) {
            s || i(2478)
        }, a = i(0)(n.a, o.a, r, null, null);
        a.options.__file = "src/msite/component/foodentry/index.vue", a.esModule && Object.keys(a.esModule).some(function (e) {
            return "default" !== e && "__" !== e.substr(0, 2)
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), t.a = a.exports
    }, 2478: function (e, t) {
    }, 2479: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(34);
        t.a = {
            name: "FoodEntry",
            props: {data: {type: Array, default: () => []}},
            data: () => ({showIndicators: !1}),
            computed: {
                entryData() {
                    this.data.forEach(e => {
                        if (/eleme:\/\/restaurants\?/.test(e.link)) {
                            let t = decodeURIComponent(e.link).replace(/eleme:\/\/restaurants\?/, "");
                            e.link = `/msite/food/#${t}`
                        } else UParams(e.link).url && (e.link = UParams(e.link).url)
                    });
                    const e = Math.ceil(this.data.length / 8);
                    for (var t = [], i = 0; i < e; i++) t.push(this.data.slice(8 * i, 8 * (i + 1)));
                    return this.showIndicators = e > 1, t
                }
            },
            methods: {
                goToCategory(e, t, i) {
                    if (!e.is_in_serving) return;
                    o.a.deleteSessionStorage("msite/food");
                    let s = e.link, r = {}, a = {};
                    try {
                        r = UParams(e.link), a = JSON.parse(r.target), r.restaurant_category_ids = (a.restaurant_category_id || []).join(",")
                    } catch (e) {
                        r = {}
                    }
                    UBT.send("EVENT", {
                        id: 101845,
                        params: {title: e.name, id: e.id, sort_index: t + 8 * i}
                    }), n.platform.isAlipay ? (/msite/.test(e.link) ? s = "/msite/food/" : r = {}, ap.pushWindow({
                        url: s,
                        data: r
                    })) : location.href = `${s.replace(/([#&])(target=[^&]*)(&?)/g, "$1")}&restaurant_category_ids=${a.restaurant_category_id || ""}`
                }
            },
            components: {swipe: window.VueSwipe.Swipe, "swipe-item": window.VueSwipe.SwipeItem}
        }
    }, 248: function (e, t, i) {
        "use strict";
        var n = i(115), o = i(37);
        const s = n.a.tagType;
        t.a = {
            props: {content: {type: Object}, showOtherPhone: {type: Boolean}}, data() {
                return {
                    showAnotherPhone: this.showOtherPhone,
                    tagMap: Object.keys(s).map(e => ({title: s[e], value: +e})),
                    icon: o.a
                }
            }, watch: {
                showOtherPhone(e) {
                    this.showAnotherPhone = e
                }
            }, methods: {
                searchAddress() {
                    this.$emit("search")
                }, formSubmit() {
                    this.$emit("submit", this.formContent)
                }
            }, computed: {
                formContent() {
                    return this.content
                }
            }
        }
    }, 2480: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", [i("swipe", {
                staticClass: "foodentry",
                attrs: {auto: 0, "show-indicators": e.showIndicators}
            }, e._l(e.entryData, function (t, n) {
                return i("swipe-item", {key: n}, e._l(t, function (t, o) {
                    return i("a", {
                        attrs: {href: "javascript:", role: "button"}, on: {
                            click: function (i) {
                                e.goToCategory(t, o, n)
                            }
                        }
                    }, [i("div", {staticClass: "container"}, [i("img", {
                        directives: [{
                            name: "img",
                            rawName: "v-img",
                            value: {hash: t.image_hash, width: 90, height: 90},
                            expression: "{ hash: item.image_hash, width: 90, height: 90 }"
                        }], attrs: {alt: t.title}
                    }), t.is_in_serving ? e._e() : i("span", {staticClass: "service"}, [e._v("敬请期待")])]), i("span", {staticClass: "title"}, [e._v(e._s(t.name))])])
                }))
            }))], 1)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 2481: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(2482), o = i(2484), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-97554328","scoped":false,"hasInlineConfig":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(793);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-97554328"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(793), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/msite/component/supervip/index.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 2482: function (e, t, i) {
        "use strict";
        var n = i(2483), o = i(173);
        t.a = {
            props: {geohash: {type: String, required: !0}, userId: {required: !0}},
            data: () => ({
                data: {valid_order_amount: 5, description: ""},
                checkedAmount: 0,
                setTimeoutId: 0,
                isSupervip: !0,
                loaded: !1,
                Icons: o.a
            }),
            mounted() {
                const [e, t] = Geohash.decode(this.geohash);
                n.a.supervipInfo(this.userId, {latitude: e, longitude: t}).then(e => {
                    this.data = e, this.loaded = !0, setTimeout(this.showTipsAsync, 300)
                }).catch(e => {
                    "SUPER_VIP_NOT_FOUND" === e.name && (this.isSupervip = !1, this.loaded = !0)
                })
            },
            computed: {
                leftTimes() {
                    const {required_order_amount: e, valid_order_amount: t} = this.data;
                    return t >= e ? e : e - t
                }, meetCondition() {
                    return this.data.valid_order_amount >= this.data.required_order_amount
                }
            },
            methods: {
                showTipsAsync() {
                    this.checkedAmount >= this.data.valid_order_amount ? this.setTimeoutId && clearTimeout(this.setTimeoutId) : (this.checkedAmount++, setTimeout(this.showTipsAsync, 84))
                }, redirect() {
                    this.$visit("/supervip/")
                }
            }
        }
    }, 2483: function (e, t, i) {
        "use strict";
        var n = i(4);
        const {paramToString: o} = window.Utils;
        t.a = {supervipInfo: (e, t) => Object(n.$fetch)(`/member/v1/users/${e}/supervip/entry?${o(t)}`, {credentials: "include"})}
    }, 2484: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return e.loaded ? i("a", {
                class: e.$style.banner,
                attrs: {"ubt-click": "101933", "ubt-data-type": e.isSupervip ? 1 : 0},
                on: {click: e.redirect}
            }, [e.isSupervip ? i("div", {class: e.$style.wrapper}, [i("div", {class: e.$style.description}, [i("span", [e._v(e._s(e.data.title))]), i("p", [e._v(e._s(e.data.description.text))])]), i("div", {class: e.$style.footer}, [i("ul", {class: e.$style.radio}, e._l(e.data.required_order_amount, function (t) {
                return i("li", {class: (n = {}, n[e.$style.checked] = t <= e.checkedAmount, n)});
                var n
            })), e.meetCondition ? i("p", [e._v("已满" + e._s(e.data.required_order_amount) + "单可领红包")]) : i("p", [e._v("再下" + e._s(e.leftTimes) + "单领红包")])]), i("img", {
                directives: [{
                    name: "img",
                    rawName: "v-img",
                    value: {hash: e.data.image_hash, width: 260, height: 200},
                    expression: "{ hash: data.image_hash, width: 260, height: 200 }"
                }], attrs: {alt: "美食"}
            })]) : i("div", {class: e.$style.nonSupervip}, [i("div", {class: e.$style.tip}, [i("span", [e._v("限时")]), i("p", [e._v("超级会员")]), e._m(0)]), i("div", {class: e.$style.hint}, [e._v("\n      立送"), i("span", [e._v("20元")]), e._v("无门槛红包\n      "), i("svg", [i("use", {attrs: {"xlink:href": e.Icons.SuperVipArrowRight}})])]), i("img", {
                directives: [{
                    name: "img",
                    rawName: "v-img",
                    value: {hash: "f8f1bd24c2c3643e0f25f901c1aa5d65png", width: 198, height: 160},
                    expression: "{ hash: 'f8f1bd24c2c3643e0f25f901c1aa5d65png', width: 198, height: 160 }"
                }], class: e.$style.crownLogo, attrs: {alt: "超级会员"}
            })])]) : e._e()
        };
        n._withStripped = !0;
        var o = {
            render: n, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("p", [this._v("单月低至"), t("span", [this._v("6元")])])
            }]
        };
        t.a = o
    }, 2485: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {class: e.$style.root}, [e.topURL ? n("section", {
                class: e.$style.toptoon,
                on: {click: e.openToptoon}
            }, [n("img", {
                attrs: {
                    src: e.topURL,
                    "ubt-visit": "102399",
                    "ubt-click": "102400",
                    "ubt-data-message": "aliday"
                }
            })]) : e.agentCityNewUserImg && e.showLightweightMsite ? n("section", {class: e.$style.toptoon}, [n("img", {
                attrs: {
                    src: e.agentCityNewUserImg,
                    "ubt-visit": "102399",
                    "ubt-click": "102400",
                    "ubt-data-message": "newuser"
                }, on: {
                    click: function (t) {
                        e.redirect("/newuser/")
                    }
                }
            })]) : e._e(), e._t("default"), e.showLightweightMsite ? e._e() : n("section", [e.foodEntryData.length ? n("FoodEntry", {attrs: {data: e.foodEntryData}}) : n("div", {staticClass: "foodentry-wrapper"}, [n("img", {
                staticClass: "shellAnimation",
                attrs: {src: i(2486)}
            })]), e.isSuperVipShow ? n("Supervip", {
                attrs: {
                    geohash: e.geohash,
                    userId: e.userId
                }
            }) : e._e(), e.newUserImg ? n("div", {class: e.$style.newUser}, [n("img", {
                attrs: {
                    src: e.newUserImg,
                    "ubt-click": "101889",
                    "ubt-data-message": "newuser"
                }, on: {
                    click: function (t) {
                        e.redirect("/newuser/")
                    }
                }
            })]) : e._e()], 1), e.showActivity ? n("section", {
                class: e.$style.activity,
                attrs: {id: "activity-lego"}
            }, [n("div", {class: e.$style.top}, e._l(e.activityLinks.top, function (t, i) {
                return i || e.isSalesShow ? n("div", {
                    class: [t.class ? e.$style[t.class] : "", e.$style.item, e.isSalesShow ? "" : e.$style.onlyOne],
                    on: {
                        click: function (n) {
                            e.openActivity(t, i)
                        }
                    }
                }, [n("h3", {class: e.$style.title}, [e._v(e._s(t.title))]), n("div", {class: e.$style.content}, [e._v(e._s(t.content))]), n("div", {class: e.$style.info}, [t.showAmount ? n("span", [e._v(e._s(e.population) + "人")]) : e._e(), e._v(e._s(t.info) + "\n         ")]), e.isSalesShow ? n("img", {
                    directives: [{
                        name: "img",
                        rawName: "v-img",
                        value: {hash: t.imghash, width: 240, height: 160},
                        expression: "{ hash: item.imghash, width: 240, height: 160 }"
                    }]
                }) : n("img", {
                    directives: [{
                        name: "img",
                        rawName: "v-img",
                        value: {hash: t.bigImghash, width: 282, height: 188},
                        expression: "{ hash: item.bigImghash, width: 282, height: 188 }"
                    }]
                })]) : e._e()
            })), n("div", {class: e.$style.bottom}, e._l(e.activityLinks.bottom, function (t, i) {
                return n("div", {
                    class: [t.class ? e.$style[t.class] : "", e.$style.item], on: {
                        click: function (n) {
                            e.openActivity(t, i + e.activityLinks.top.length)
                        }
                    }
                }, [n("h3", {class: e.$style.title}, [e._v(e._s(t.title))]), n("span", {class: e.$style.content}, [e._v(e._s(t.content))]), n("img", {
                    directives: [{
                        name: "img",
                        rawName: "v-img",
                        value: {hash: t.imghash, width: 232, height: 154},
                        expression: "{ hash: item.imghash, width: 232, height: 154 }"
                    }]
                })])
            }))]) : e._e()], 2)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 2486: function (e, t) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCA0OTAiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2NDg5SDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDEgMCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnPjx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPjx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz48L2c+PGcgZmlsbD0iI0Y2RjZGNiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzYgMzYpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0NiAzNikiPjxwYXRoIGQ9Ik05IDEzOWgxMDB2MzRIOXoiLz48ZWxsaXBzZSBjeD0iNTkiIGN5PSI1OSIgcng9IjU5IiByeT0iNTkiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjE2IDM2KSI+PHBhdGggZD0iTTkgMTM5aDEwMHYzNEg5eiIvPjxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4ODYgMzYpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjwvZz48ZyBmaWxsPSIjRjZGNkY2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0NiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxNiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg4NiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjwvZz48L2c+PC9zdmc+"
    }, 2487: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(2488), o = i(2489), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-214293f6","scoped":false,"hasInlineConfig":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(794);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-214293f6"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(794), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/msite/component/float-festival-hongbao/index.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 2488: function (e, t, i) {
        "use strict";
        var n = i(48), o = i(44);
        t.a = {
            props: {delay: {type: Number, default: 100}, iPhoneXMode: {type: Boolean, default: !1}}, data() {
                return this.activityRef = null, {show: !1, logoUrl: "", logShow: !1}
            }, mounted() {
                Object(o.a)().then(e => {
                    this.logoUrl = window.VueImg.getSrc({hash: e.floatHongbaoImage})
                })
            }, methods: {
                goFestival() {
                    UBT.send("EVENT", {id: 102066, params: {title: "2亿红包"}});
                    const e = UParams().token;
                    if (!e) return ap.pushWindow(n.c.url);
                    const t = `${n.c.url}${n.c.url.indexOf("?") > -1 ? "&" : "?"}`;
                    ap.pushWindow(`${t}token=${e}`)
                }, scrollEvent() {
                    this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
                        (this.activityRef || (this.activityRef = document.getElementById("activity-lego"), this.activityRef)) && (this.show = this.activityRef.getBoundingClientRect().top <= 0, this.show && !this.logShow && (UBT.send("EVENT", {
                            id: 102065,
                            params: {title: "2亿红包"}
                        }), this.logShow = !0))
                    }, this.delay)
                }
            }, created() {
                window.addEventListener("scroll", this.scrollEvent)
            }, destroyed() {
                this.timeout && clearTimeout(this.timeout), window.removeEventListener("scroll", this.scrollEvent), this.activityRef = null
            }
        }
    }, 2489: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("Transition", {
                attrs: {
                    enterClass: e.$style.enter,
                    leaveActiveClass: e.$style.leaveActive
                }
            }, [i("div", {
                directives: [{name: "show", rawName: "v-show", value: e.show, expression: "show"}],
                class: [e.$style.wrapper, e.iPhoneXMode && e.$style.iPhoneXMode],
                on: {
                    click: function (t) {
                        t.stopPropagation(), e.goFestival(t)
                    }
                }
            }, [i("img", {class: e.$style.icon, attrs: {src: e.logoUrl, alt: "外卖节"}})])])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 249: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "addressfrom"}, [n("div", {staticClass: "content"}, [n("div", {staticClass: "formbloack username"}, [n("div", {staticClass: "label-wrap"}, [e._v("联系人")]), n("div", {staticClass: "input-group-wrap"}, [n("div", {staticClass: "input-wrap"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formContent.name,
                    expression: "formContent.name"
                }],
                attrs: {placeholder: "你的姓名", maxlength: "20"},
                domProps: {value: e.formContent.name},
                on: {
                    input: function (t) {
                        t.target.composing || (e.formContent.name = t.target.value)
                    }
                }
            })]), n("div", {staticClass: "input-wrap bottom spans"}, [n("span", {
                staticClass: "form-span",
                class: {checked: 1 === e.formContent.sex},
                on: {
                    click: function (t) {
                        e.formContent.sex = 1
                    }
                }
            }, [e._v("\n            先生\n          ")]), n("span", {
                staticClass: "form-span",
                class: {checked: 2 === e.formContent.sex},
                on: {
                    click: function (t) {
                        e.formContent.sex = 2
                    }
                }
            }, [e._v("\n            女士\n          ")])])])]), n("div", {staticClass: "formbloack phone"}, [n("div", {staticClass: "label-wrap"}, [e._v("电话")]), n("div", {staticClass: "input-group-wrap rightbtn"}, [n("div", {staticClass: "input-wrap"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formContent.phone,
                    expression: "formContent.phone"
                }],
                attrs: {placeholder: "你的手机号", type: "tel", maxlength: "20"},
                domProps: {value: e.formContent.phone},
                on: {
                    input: function (t) {
                        t.target.composing || (e.formContent.phone = t.target.value)
                    }
                }
            }), n("img", {
                staticClass: "inputicon-right", attrs: {src: i(250)}, on: {
                    click: function (t) {
                        e.showAnotherPhone ^= 1
                    }
                }
            })]), e.showAnotherPhone ? n("div", {staticClass: "input-wrap bottom"}, [n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formContent.phone_bk,
                    expression: "formContent.phone_bk"
                }],
                attrs: {placeholder: "备选电话", type: "tel", maxlength: "20"},
                domProps: {value: e.formContent.phone_bk},
                on: {
                    input: function (t) {
                        t.target.composing || (e.formContent.phone_bk = t.target.value)
                    }
                }
            })]) : e._e()])]), n("div", {staticClass: "formbloack address"}, [e._m(0), n("div", {staticClass: "input-group-wrap"}, [n("div", {
                staticClass: "input-wrap top",
                on: {click: e.searchAddress}
            }, [n("input", {
                attrs: {placeholder: "小区/写字楼/学校等", readonly: "true"},
                domProps: {value: e.formContent.address}
            }), n("svg", [n("use", {attrs: {"xlink:href": e.icon.ArrowRight}})])]), n("div", {staticClass: "input-wrap bottom"}, [n("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.formContent.address_detail,
                    expression: "formContent.address_detail"
                }],
                attrs: {rows: "2", placeholder: "详细地址 (如门牌号等)", maxlength: "100"},
                domProps: {value: e.formContent.address_detail},
                on: {
                    input: function (t) {
                        t.target.composing || (e.formContent.address_detail = t.target.value)
                    }
                }
            }), n("svg", [n("use", {attrs: {"xlink:href": e.icon.Edit}})])])])]), n("div", {staticClass: "formbloack tags"}, [n("div", {staticClass: "label-wrap"}, [e._v("标签")]), n("div", {staticClass: "input-wrap spans"}, e._l(e.tagMap, function (t) {
                return n("span", {
                    staticClass: "form-span",
                    class: {checked: e.formContent.tag_type === t.value},
                    on: {
                        click: function (i) {
                            e.formContent.tag_type = e.formContent.tag_type === t.value ? 0 : t.value
                        }
                    }
                }, [e._v("\n          " + e._s(t.title) + "\n        ")])
            }))])]), n("div", {staticClass: "form-button-wrap"}, [n("button", {
                staticClass: "form-button",
                on: {click: e.formSubmit}
            }, [e._v("确定")])])])
        };
        n._withStripped = !0;
        var o = {
            render: n, staticRenderFns: [function () {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", {staticClass: "label-wrap"}, [t("p", [this._v("位置")]), t("p", [this._v("详细地址")])])
            }]
        };
        t.a = o
    }, 2490: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(2491), o = i(2492), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-2934c4b0","scoped":false,"hasInlineConfig":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(795);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-2934c4b0"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(795), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/msite/component/category/index.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 2491: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(34);
        t.a = {
            name: "Category", props: {data: {type: Array, default: () => []}}, computed: {
                entryData() {
                    this.data.forEach(e => {
                        if (/eleme:\/\/restaurants\?/.test(e.link)) {
                            let t = decodeURIComponent(e.link).replace(/eleme:\/\/restaurants\?/, "");
                            e.link = `/msite/food/#${t}`
                        } else UParams(e.link).url && (e.link = UParams(e.link).url)
                    });
                    const e = Math.ceil(this.data.length / 8);
                    let t = [];
                    for (var i = 0; i < e; i++) t.push(this.data.slice(8 * i, 8 * (i + 1)));
                    return t
                }
            }, methods: {
                goToCategory(e, t, i) {
                    if (!e.is_in_serving) return;
                    o.a.deleteSessionStorage("msite/food");
                    let s = {}, r = {};
                    try {
                        s = UParams(e.link), r = JSON.parse(s.target), s.restaurant_category_ids = (r.restaurant_category_id || []).join(",")
                    } catch (e) {
                        s = {}
                    }
                    if (n.platform.isAlipay) {
                        const t = /msite/.test(e.link), i = t ? "/msite/food/" : e.link, n = t ? s : {};
                        ap.pushWindow({url: i, data: n})
                    } else location.href = `${url.replace(/([#&])(target=[^&]*)(&?)/g, "$1")}&restaurant_category_ids=${r.restaurant_category_id || ""}`
                }
            }
        }
    }, 2492: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {class: e.$style.categories}, e._l(e.entryData, function (t, n) {
                return i("div", {key: n}, e._l(t, function (t, o) {
                    return i("div", {
                        class: e.$style.category,
                        attrs: {"ubt-visit": "102397", "ubt-click": "102398", "ubt-message": t.name},
                        on: {
                            click: function (i) {
                                e.goToCategory(t, o, n)
                            }
                        }
                    }, [i("span", {class: e.$style.categoryText}, [e._v(e._s(t.name))]), i("img", {
                        directives: [{
                            name: "img",
                            rawName: "v-img",
                            value: {hash: t.image_hash, width: 90, height: 90},
                            expression: "{ hash: item.image_hash, width: 90, height: 90 }"
                        }], attrs: {alt: t.title}
                    })])
                }))
            }))
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 2493: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("div", {staticClass: "wrapper"}, [n("transition", [e.isAgentCity ? n("div", [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "category" === e.page,
                    expression: "page === 'category'"
                }], staticClass: "page"
            }, [e.platform.isAlipay ? e._e() : n("div", {staticClass: "header"}, [n("svg", {
                staticClass: "arrow",
                on: {click: e.back}
            }, [n("use", {attrs: {"xlink:href": e.icon.ArrowLeft}})]), n("div", {staticClass: "address-title"}, [e._v("分类")])]), n("Category", {attrs: {data: e.sessionData.foodEntryData}})], 1)]) : e._e()]), n("transition", {
                attrs: {name: "slide"},
                on: {enter: e.poiEnter}
            }, [n("Poi", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "poi" === e.page,
                    expression: "page === 'poi'"
                }],
                ref: "poi",
                attrs: {userId: e.userId, "address-data": e.headerData},
                on: {
                    select: e.changeGeohash, add: function (t) {
                        e.goToPage("addAddress")
                    }
                }
            })], 1), n("transition", [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "addAddress" === e.page || "addressSearch" === e.page,
                    expression: "page === 'addAddress' || page === 'addressSearch'"
                }], staticClass: "page"
            }, [e.platform.isAlipay ? e._e() : n("div", {staticClass: "header"}, [n("svg", {
                staticClass: "arrow",
                on: {click: e.back}
            }, [n("use", {attrs: {"xlink:href": e.icon.ArrowLeft}})]), n("div", {staticClass: "address-title"}, [e._v(e._s("addAddress" === e.page ? "新增地址" : "搜索地址"))])]), n("AddressForm", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "addAddress" === e.page,
                    expression: "page === 'addAddress'"
                }], ref: "addAddress", attrs: {userId: e.userId}, on: {
                    search: function (t) {
                        e.goToPage("addressSearch")
                    }, add: e.back, select: e.changeGeohash
                }
            }), n("AddressSearch", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "addressSearch" === e.page,
                    expression: "page === 'addressSearch'"
                }], ref: "addressSearch"
            })], 1)]), n("div", {class: ["home" === e.page ? "" : "unscrollable", e.customizedHeader && "aliday"]}, [n("HeaderInfo", {
                ref: "header",
                attrs: {
                    data: e.headerData,
                    iPhoneXMode: e.isIPhoneX,
                    "weather-prop": e.weather,
                    lightweight: e.lightweightTest,
                    "is-new-user": e.isNewUser,
                    "is-agent-city": e.isAgentCity
                },
                on: {
                    "click-location": function (t) {
                        e.goToPage("poi")
                    }, "click-category": function (t) {
                        e.goToPage("category")
                    }
                }
            }), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "home" === e.page,
                    expression: "page === 'home'"
                }, {name: "sticky", rawName: "v-sticky", value: {zIndex: 999}, expression: "{ zIndex: 999 }"}],
                staticClass: "search-wrapper"
            }, [n("div", {
                staticClass: "search",
                attrs: {href: "javascript:;", role: "button"},
                on: {
                    click: function (t) {
                        e.goSearch()
                    }
                }
            }, [n("a", {staticClass: "content"}, [n("svg", [n("use", {attrs: {"xlink:href": e.icon.Search}})]), n("span", [e._v("搜索商家、商品名称")])])])]), e.lightweightTest ? e._e() : n("KeyWords", {
                ref: "keywords",
                attrs: {data: e.headerData, "keywords-prop": e.hotwords},
                on: {GO_SEARCH: e.goSearch}
            }), e.locationFailed ? e._e() : [e.platform.isAlipay && e.userId && e.geohash ? n("Arrival", {
                attrs: {
                    geohash: e.geohash,
                    userId: e.userId
                }
            }) : e._e(), n("Activity", {
                attrs: {
                    foodEntryData: e.sessionData.foodEntryData,
                    geohash: e.geohash,
                    isNewUser: e.isNewUser,
                    userId: e.userId,
                    population: e.population,
                    joinAliday: e.joinAliday,
                    isAgentCity: e.isAgentCity
                }
            }), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.shopLoading,
                    expression: "!shopLoading"
                }], staticClass: "shoplist-title", attrs: {id: "shoplist-title"}
            }, [e._v("推荐商家")]), e.shopLoading ? n("section", {staticClass: "section"}, e._l(3, function (e) {
                return n("img", {staticClass: "shellAnimation", attrs: {src: i(2448)}})
            })) : e._e(), n("section", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.shopLoading,
                    expression: "!shopLoading"
                }], ref: "shopList", staticClass: "shoplist"
            }, [e._l(e.sessionData.shopList, function (t, i) {
                return [e.platform.isAlipay && e.exposureSwitch ? n("UbtExposure", {
                    attrs: {
                        params: {
                            from: 10,
                            restaurant_id: t.id,
                            index: i
                        }
                    }
                }) : e._e(), t.shown ? n("ShopList", {
                    class: "shop-" + i,
                    attrs: {link: e.goToShop(t, i), shop: t}
                }) : n("div", {style: {height: (t.height || 100) + "px"}})]
            }), n("LoadMore", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.errorTip || "list-empty" !== e.errorTip.name,
                    expression: "!errorTip || errorTip.name !== 'list-empty'"
                }], attrs: {loadMore: e.loadMore, offset: e.sessionData.shopList.length}
            })], 2)], e.errorTip ? n("NoDataTip", {
                staticClass: "nodatatip",
                attrs: {data: e.errorTip}
            }) : e._e(), n("ElemeFooter", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "home" === e.page,
                    expression: "page === 'home'"
                }], attrs: {iPhoneXMode: e.isIPhoneX}
            }), e.showAlidayElements ? [e.userId ? n("MiniCart", {
                attrs: {
                    iPhoneXMode: e.isIPhoneX,
                    aliday: e.showAlidayElements
                }
            }) : e._e(), n("FloatFestivalHongbao", {attrs: {iPhoneXMode: e.isIPhoneX}})] : [n("Link", {
                staticClass: "freedinner",
                attrs: {href: e.freedinnerToken ? "/freedinner/#token=" + e.freedinnerToken : "/freedinner/"}
            }, [n("img", {attrs: {src: i(2494)}})]), n("BackTop", {
                staticClass: "backtop",
                attrs: {iPhoneXMode: e.isIPhoneX}
            })]], 2)], 1)
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 2494: function (e, t, i) {
        e.exports = i.p + "static/freedinner.48d01fb.gif"
    }, 250: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAAHRJREFUSA1jZCAT8E59/R+m9XO2KCOMTQrNRIpiaqsdtZzaIUqUeaPBTlQwUVvRaLBTO0SJMm802IkKJmorYkSunahtOCHzRm6ck9UIAAUncnSNNiYIJTB0+ZGb4EZ9jp4W6MIfDXa6BDO6JaPBjh4idOEDAOTZCsiDM8JjAAAAAElFTkSuQmCC"
    }, 251: function (e, t, i) {
        "use strict";
        var n = i(253), o = i(259), s = !1, r = function (e) {
            s || i(252)
        }, a = i(0)(n.a, o.a, r, "data-v-5378dbcc", null);
        a.options.__file = "src/checkout/routes/address-search/index.vue", a.esModule && Object.keys(a.esModule).some(function (e) {
            return "default" !== e && "__" !== e.substr(0, 2)
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), t.a = a.exports
    }, 252: function (e, t) {
    }, 253: function (e, t, i) {
        "use strict";
        var n = i(254), o = i(32), s = i(258), r = i(27);
        t.a = {
            name: "AddressSearch", data() {
                return this.loading = !1, {inputAddress: "", resultList: [], noResult: !1}
            }, components: {SearchRow: n.a}, methods: {
                searchListener: s.a.debounce(function () {
                    "" !== this.inputAddress.trim() && this.searchAddress()
                }, 500), selectAddress(e) {
                    this.$route && "search" === this.$route.name ? (this.$emit("select", e), this.$router.back()) : (r.a.$emit("ADDRESS_SEARCH", e), this.$router && this.$router.back())
                }, searchAddress() {
                    this.loading || (this.loading = !0, o.a.searchAddress(this.inputAddress).then(e => {
                        this.noResult = !e.length, this.resultList = e, this.loading = !1
                    }).catch(() => {
                        this.loading = !1
                    }))
                }
            }, beforeRouteEnter(e, t, i) {
                i(e => {
                    e.searchAddress()
                })
            }
        }
    }, 254: function (e, t, i) {
        "use strict";
        var n = i(256), o = i(257), s = !1, r = function (e) {
            s || i(255)
        }, a = i(0)(n.a, o.a, r, "data-v-56ded016", null);
        a.options.__file = "src/checkout/routes/address-search/components/search-row.vue", a.esModule && Object.keys(a.esModule).some(function (e) {
            return "default" !== e && "__" !== e.substr(0, 2)
        }) && console.error("named exports are not supported in *.vue files."), a.options.functional && console.error("[vue-loader] search-row.vue: functional components are not supported with templates, they should use render functions."), t.a = a.exports
    }, 255: function (e, t) {
    }, 256: function (e, t, i) {
        "use strict";
        t.a = {props: {title: {type: String, required: !0}, location: {type: String, required: !0}}}
    }, 257: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this.$createElement, t = this._self._c || e;
            return t("div", {staticClass: "seachrow"}, [t("p", {staticClass: "seachrow-title"}, [this._v(this._s(this.title))]), t("p", {staticClass: "seachrow-location"}, [this._v(this._s(this.location))])])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 258: function (e, t, i) {
        "use strict";
        t.a = {
            debounce: (e, t) => {
                if ("function" != typeof e) throw new TypeError("Expected a function");
                let i;
                return function () {
                    let n = this, o = arguments;
                    clearTimeout(i), i = setTimeout(() => {
                        e.apply(n, o)
                    }, t)
                }
            }
        }
    }, 259: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {staticClass: "searchview"}, [i("div", {staticClass: "searchbox"}, [i("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.inputAddress,
                    expression: "inputAddress"
                }],
                staticClass: "search-input",
                attrs: {type: "text", placeholder: "请输入小区/写字楼/学校等", autofous: ""},
                domProps: {value: e.inputAddress},
                on: {
                    input: [function (t) {
                        t.target.composing || (e.inputAddress = t.target.value)
                    }, e.searchListener]
                }
            }), i("button", {
                staticClass: "searchbox-btn",
                attrs: {type: "button"},
                on: {click: e.searchAddress}
            }, [e._v("搜索")])]), i("div", {staticClass: "searchlist"}, [e._l(e.resultList, function (t, n) {
                return i("search-row", {
                    key: n,
                    attrs: {title: t.name, location: t.address},
                    nativeOn: {
                        click: function (i) {
                            e.selectAddress(t)
                        }
                    }
                })
            }), i("div", {
                directives: [{name: "show", rawName: "v-show", value: e.noResult, expression: "noResult"}],
                staticClass: "emptyresult"
            }, [i("p", [e._v("找不到地址?")]), i("p", [e._v("请尝试只输入小区,写字楼或学校名,")]), i("p", [e._v("详细地址 (如门牌号) 可稍后输入哦。")])])], 2)])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 26: function (e, t, i) {
        !function (t, i) {
            e.exports = i()
        }(0, function () {
            return function (e) {
                function t(n) {
                    if (i[n]) return i[n].exports;
                    var o = i[n] = {i: n, l: !1, exports: {}};
                    return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }

                var i = {};
                return t.m = e, t.c = i, t.d = function (e, i, n) {
                    t.o(e, i) || Object.defineProperty(e, i, {configurable: !1, enumerable: !0, get: n})
                }, t.n = function (e) {
                    var i = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(i, "a", i), i
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 14)
            }([function (e, t) {
                e.exports = function (e, t, i, n, o, s) {
                    var r, a = e = e || {}, l = typeof e.default;
                    "object" !== l && "function" !== l || (r = e, a = e.default);
                    var c = "function" == typeof a ? a.options : a;
                    t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), i && (c.functional = !0), o && (c._scopeId = o);
                    var d;
                    if (s ? (d = function (e) {
                            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
                        }, c._ssrRegister = d) : n && (d = n), d) {
                        var u = c.functional, h = u ? c.render : c.beforeCreate;
                        u ? (c._injectStyles = d, c.render = function (e, t) {
                            return d.call(t), h(e, t)
                        }) : c.beforeCreate = h ? [].concat(h, d) : [d]
                    }
                    return {esModule: r, exports: a, options: c}
                }
            }, function (e, t, i) {
                var n = new (i(2));
                document.body ? n.elem = n.render(document.body) : document.addEventListener("DOMContentLoaded", function () {
                    n.elem = n.render(document.body)
                }, !1), e.exports = n
            }, function (e, t, i) {
                function n(e) {
                    return Array.prototype.slice.call(e, 0)
                }

                function o(e, t, i) {
                    var o = e.querySelectorAll(l);
                    o && n(o).forEach(function (e) {
                        e.attributes && n(e.attributes).forEach(function (n) {
                            var o = n.localName.toLowerCase();
                            if (-1 !== a.indexOf(o)) {
                                var s = c.exec(e.getAttribute(o));
                                if (s && 0 === s[1].indexOf(t)) {
                                    var r = function (e) {
                                        return e.replace(/\(|\)/g, "\\$&")
                                    }(i + s[1].split(t)[1]);
                                    e.setAttribute(o, "url(" + r + ")")
                                }
                            }
                        })
                    })
                }

                function s() {
                    var e = document.getElementsByTagName("base")[0], t = window.location.href.split("#")[0],
                        i = e && e.href;
                    this.urlPrefix = i && i !== t ? t + u : u;
                    var s = new r;
                    s.sniff(), this.browser = s.browser, this.content = [], "ie" !== this.browser.name && i && window.addEventListener("spriteLoaderLocationUpdated", function (e) {
                        var t = this.urlPrefix, i = e.detail.newUrl.split(u)[0] + u;
                        o(this.svg, t, i), this.urlPrefix = i, ("firefox" === this.browser.name || "edge" === this.browser.name || "chrome" === this.browser.name && this.browser.version[0] >= 49) && n(document.querySelectorAll("use[*|href]")).forEach(function (e) {
                            var n = e.getAttribute(h);
                            n && 0 === n.indexOf(t) && e.setAttributeNS(p, h, i + n.split(u)[1])
                        })
                    }.bind(this))
                }

                var r = i(3),
                    a = ["clipPath", "colorProfile", "src", "cursor", "fill", "filter", "marker", "markerStart", "markerMid", "markerEnd", "mask", "stroke"],
                    l = "[" + a.join("],[") + "]", c = /^url\((.*)\)$/, d = function (e) {
                        for (var t = e.querySelector("defs"), i = e.querySelectorAll("symbol linearGradient, symbol radialGradient, symbol pattern"), n = 0, o = i.length; n < o; n++) t.appendChild(i[n])
                    }, u = "#", h = "xlink:href", p = "http://www.w3.org/1999/xlink",
                    f = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="' + p + '"';
                s.styles = ["position:absolute", "width:0", "height:0"], s.spriteTemplate = function () {
                    return f + ' style="' + s.styles.join(";") + '"><defs>{content}</defs></svg>'
                }, s.symbolTemplate = function () {
                    return f + ">{content}</svg>"
                }, s.prototype.content = null, s.prototype.add = function (e, t) {
                    return this.svg && this.appendSymbol(e), this.content.push(e), u + t
                }, s.prototype.wrapSVG = function (e, t) {
                    var i = t.replace("{content}", e),
                        n = (new DOMParser).parseFromString(i, "image/svg+xml").documentElement;
                    return document.importNode && (n = document.importNode(n, !0)), "ie" !== this.browser.name && this.urlPrefix && o(n, u, this.urlPrefix), n
                }, s.prototype.appendSymbol = function (e) {
                    var t = this.wrapSVG(e, s.symbolTemplate()).childNodes[0];
                    this.svg.querySelector("defs").appendChild(t), "firefox" === this.browser.name && d(this.svg)
                }, s.prototype.toString = function () {
                    var e = document.createElement("div");
                    return e.appendChild(this.render()), e.innerHTML
                }, s.prototype.render = function (e, t) {
                    e = e || null, t = "boolean" != typeof t || t;
                    var i = this.wrapSVG(this.content.join(""), s.spriteTemplate());
                    return "firefox" === this.browser.name && d(i), e && (t && e.childNodes[0] ? e.insertBefore(i, e.childNodes[0]) : e.appendChild(i)), this.svg = i, i
                }, e.exports = s
            }, function (e, t) {
                !function (t) {
                    function i() {
                        var e = this;
                        r.forEach(function (t) {
                            e[t] = {name: s, version: [], versionString: s}
                        })
                    }

                    function n(e, t, i) {
                        o[t].forEach(function (n) {
                            var o = n[0], r = n[1], a = i.match(o);
                            a && (e[t].name = r, a[2] ? (e[t].versionString = a[2], e[t].version = []) : a[1] ? (e[t].versionString = a[1].replace(/_/g, "."), e[t].version = function (e) {
                                return e.split(/[\._]/).map(function (e) {
                                    return parseInt(e)
                                })
                            }(a[1])) : (e[t].versionString = s, e[t].version = []))
                        })
                    }

                    var o = {
                        browser: [[/msie ([\.\_\d]+)/, "ie"], [/trident\/.*?rv:([\.\_\d]+)/, "ie"], [/firefox\/([\.\_\d]+)/, "firefox"], [/chrome\/([\.\_\d]+)/, "chrome"], [/version\/([\.\_\d]+).*?safari/, "safari"], [/mobile safari ([\.\_\d]+)/, "safari"], [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"], [/crios\/([\.\_\d]+).*?safari/, "chrome"], [/opera/, "opera"], [/opera\/([\.\_\d]+)/, "opera"], [/opera ([\.\_\d]+)/, "opera"], [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"], [/opios\/([a-z\.\_\d]+)/, "opera"], [/blackberry/, "blackberry"], [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"], [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"], [/rim.*?version\/([\.\_\d]+)/, "blackberry"], [/iceweasel\/([\.\_\d]+)/, "iceweasel"], [/edge\/([\.\d]+)/, "edge"]],
                        os: [[/linux ()([a-z\.\_\d]+)/, "linux"], [/mac os x/, "macos"], [/mac os x.*?([\.\_\d]+)/, "macos"], [/os ([\.\_\d]+) like mac os/, "ios"], [/openbsd ()([a-z\.\_\d]+)/, "openbsd"], [/android/, "android"], [/android ([a-z\.\_\d]+);/, "android"], [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"], [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"], [/windows phone.*?([\.\_\d]+)/, "windows.phone"], [/windows mobile/, "windows.mobile"], [/blackberry/, "blackberryos"], [/bb\d+/, "blackberryos"], [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]],
                        device: [[/ipad/, "ipad"], [/iphone/, "iphone"], [/lumia/, "lumia"], [/htc/, "htc"], [/nexus/, "nexus"], [/galaxy nexus/, "galaxy.nexus"], [/nokia/, "nokia"], [/ gt\-/, "galaxy"], [/ sm\-/, "galaxy"], [/xbox/, "xbox"], [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]]
                    }, s = "Unknown", r = Object.keys(o);
                    i.prototype.sniff = function (e) {
                        var t = this, i = (e || navigator.userAgent || "").toLowerCase();
                        r.forEach(function (e) {
                            n(t, e, i)
                        })
                    }, void 0 !== e && e.exports ? e.exports = i : (t.Sniffr = new i, t.Sniffr.sniff(navigator.userAgent))
                }(this)
            }, , , , , , , , , , , function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(16), o = i.n(n), s = {
                    name: "UxLoadMore",
                    props: {
                        offset: {type: Number, required: !0},
                        limit: {type: Number, default: 1},
                        bottom: {type: Number, default: Math.floor(document.documentElement.clientHeight / 3)},
                        loadMore: {type: Function, required: !0},
                        activated: {default: !0},
                        tips: {
                            type: Object, default: function () {
                                return {waiting: "正在加载...", loading: "正在加载...", error: "加载失败，点此重试", done: "没有更多了哦~"}
                            }
                        }
                    },
                    data: function () {
                        return {status: "waiting", lastOffset: 0, timeout: null, LoadingIcon: o.a}
                    },
                    methods: {
                        loadMoreFlow: function () {
                            var e = this;
                            this.lastOffset = this.offset, this.status = "loading", this.loadMore().then(function () {
                                e.$nextTick(function () {
                                    e.offset - e.lastOffset < e.limit ? e.removeEvent() : e.status = "waiting"
                                })
                            }).catch(function () {
                                e.status = "error"
                            })
                        }, timeoutCallback: function () {
                            var e = document.documentElement;
                            e.offsetHeight - e.clientHeight - window.pageYOffset < this.bottom && this.loadMoreFlow()
                        }, scrollEvent: function () {
                            this.activated && "waiting" === this.status && (clearTimeout(this.timeout), this.timeout = setTimeout(this.timeoutCallback, 50))
                        }, reloadEvent: function () {
                            "error" === this.status && this.loadMoreFlow()
                        }, addEvent: function () {
                            this.status = "waiting", window.addEventListener("scroll", this.scrollEvent)
                        }, removeEvent: function () {
                            window.removeEventListener("scroll", this.scrollEvent), this.status = "done"
                        }
                    },
                    mounted: function () {
                        this.offset % this.limit ? this.status = "done" : this.addEvent()
                    },
                    beforeDestroy: function () {
                        this.removeEvent()
                    }
                }, r = {
                    render: function () {
                        var e = this, t = e.$createElement, i = e._self._c || t;
                        return i("div", {
                            class: e.$style.wrapper, on: {
                                click: function (t) {
                                    e.reloadEvent()
                                }
                            }
                        }, ["waiting" === e.status ? e._t("waiting", [e.tips.waiting === e.tips.loading ? i("svg", {class: e.$style.icon}, [i("use", {attrs: {"xlink:href": e.LoadingIcon}})]) : e._e(), e._v(" "), i("span", [e._v(e._s(e.tips.waiting))])]) : e._e(), e._v(" "), "loading" === e.status ? e._t("loading", [i("svg", {class: e.$style.icon}, [i("use", {attrs: {"xlink:href": e.LoadingIcon}})]), e._v(" "), i("span", [e._v(e._s(e.tips.loading))])]) : e._e(), e._v(" "), "error" === e.status ? e._t("error", [i("span", [e._v(e._s(e.tips.error))])]) : e._e(), e._v(" "), "done" === e.status ? e._t("done", [i("span", [e._v(e._s(e.tips.done))])]) : e._e()], 2)
                    }, staticRenderFns: []
                }, a = i(0)(s, r, !1, function (e) {
                    this.$style = i(15)
                }, null, null).exports;
                t.default = a
            }, function (e, t) {
                e.exports = {
                    wrapper: "LoadMore-wrapper_3WFhfHy",
                    icon: "LoadMore-icon_cLUJieG",
                    loading: "LoadMore-loading_1ZyT4BS"
                }
            }, function (e, t, i) {
                var n = i(1);
                e.exports = n.add('<symbol viewBox="0 0 64 64" id="loading.001898b" ><path fill-rule="evenodd" d="M60 36h-8c-2.203 0-4-1.797-4-4 0-2.208 1.797-4 4-4h8c2.203 0 4 1.792 4 4 0 2.203-1.797 4-4 4zM48.973 20.686a4 4 0 0 1-5.66 0 3.995 3.995 0 0 1 0-5.655l5.66-5.653a3.99 3.99 0 0 1 5.65 0 4 4 0 0 1 0 5.655l-5.65 5.656zM32 64a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4c2.203 0 4 1.797 4 4v8c0 2.203-1.797 4-4 4zm0-48a4 4 0 0 1-4-4V4a4 4 0 1 1 8 0v8c0 2.208-1.797 4-4 4zM15.03 54.624a3.995 3.995 0 0 1-5.654 0 3.99 3.99 0 0 1 0-5.65l5.655-5.66a3.995 3.995 0 0 1 5.657 0 4.004 4.004 0 0 1 0 5.66l-5.655 5.65zm0-33.938L9.373 15.03a3.995 3.995 0 0 1 0-5.654 4 4 0 0 1 5.654 0l5.655 5.655a3.995 3.995 0 0 1 0 5.657 3.99 3.99 0 0 1-5.65 0zM16 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4 4 4 0 0 1 4-4h8a4 4 0 0 1 4 4zm32.973 11.314l5.65 5.66a3.99 3.99 0 0 1 0 5.65 3.992 3.992 0 0 1-5.65 0l-5.66-5.65a4 4 0 0 1 0-5.66 4 4 0 0 1 5.66 0z"/></symbol>', "loading.001898b")
            }])
        })
    }, 27: function (e, t, i) {
        "use strict";
        t.a = new Vue({
            data() {
                return this.loading = !1, {}
            }
        })
    }, 28: function (e, t, i) {
        "use strict";
        var n = i(4);
        const {paramToString: o} = window.Utils, s = {
            poi: ({latitude: e, longitude: t}) => Object(n.$fetch)(`/bgs/poi/reverse_geo_coding?latitude=${e}&longitude=${t}`),
            userLocation(e, t) {
                const [i, s] = Geohash.decode(t), r = {longitude: s, latitude: i};
                return Object(n.$fetch)(`/member/v2/users/${e}/location?${o(r)}`)
            },
            entry: e => Object(n.$fetch)(`/shopping/v2/entries?${o(e)}`),
            shopList: e => (e.terminal = n.platform.isAlipay ? "alipay" : "h5", Object(n.$fetch)(`/shopping/restaurants?${o(e)}`)),
            crayfish: () => Object(n.$fetch)("//crayfish.elemecdn.com/common.ele.me@json/common", {credentials: "omit"}),
            getSalesAmount: (e, t) => Object(n.$fetch)(`/shopping/v3/flash/init?latitude=${e}&longitude=${t}&limit=20`),
            isNewUser: e => Object(n.$fetch)(`/eus/v1/users/${e}/new_user_check`),
            isAgentCity: (e, t) => Object(n.$fetch)(`/bgs/kv/agent_city/storage?latitude=${e}&longitude=${t}`),
            biddingClick(e, t, i, o) {
                const [s, r] = Geohash.decode(i);
                return Object(n.$fetch)(`/shopping/restaurant/${e}/menu/click`, {
                    method: "POST",
                    credentials: "include",
                    headers: {"content-type": "application/json; charset=utf-8"},
                    body: JSON.stringify({user_id: t, latitude: s, longitude: r, bidding: o})
                }).catch(() => {
                })
            },
            showAlidayShop(e, t) {
                const [i, s] = Geohash.decode(t),
                    r = {offset: 0, limit: e, terminal: "alipay", extras: ["tags"], longitude: s, latitude: i};
                return Object(n.$fetch)(`/shopping/v1/alipay/restaurants/festival?${o(r)}`).then(t => t.restaurants.length === e).catch(() => !1)
            },
            mergeRequest({latitude: e, longitude: t, lightweight: i = !1}) {
                const s = {latitude: e, longitude: t}, r = {
                    requests: {
                        foodEntryData: {
                            method: "GET",
                            url: `/shopping/v2/entries?${o(Object.assign(s, {templates: ["main_template", "favourable_template"]}))}`
                        }
                    }
                };
                return i || (r.requests.weather = {
                    method: "GET",
                    url: `/bgs/weather/current?${o(s)}`
                }, r.requests.hotwords = {
                    method: "GET",
                    url: `/shopping/v3/hot_search_words?${o(s)}`
                }), Object(n.$fetch)("/batch/v2", {
                    headers: {"content-type": "application/json; charset=utf-8"},
                    credentials: "omit",
                    method: "POST",
                    body: JSON.stringify(r)
                })
            }
        };
        t.a = s
    }, 290: function (e, t, i) {
        "use strict";
        var n = i(22), o = (i.n(n), i(291));
        i.d(t, "a", function () {
            return o.a
        }), Vue.use(n.ScanObserver, {threshold: [.2]})
    }, 291: function (e, t, i) {
        "use strict";

        function n(e, t) {
            UBT.send("EVENT", {id: 1644, params: t})
        }

        t.a = {
            functional: !0, props: {params: {type: Object, required: !0}}, render(e, t) {
                const {params: i} = t.props;
                return e("div", {directives: [{name: "scan", value: n}], attrs: {scanData: i}}, [])
            }
        }
    }, 292: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 32 31" id="shop" ><g fill-rule="evenodd"><path d="M28.232 1.822C27.905.728 26.97.152 25.759.152H5.588c-1.252 0-1.867.411-2.397 1.415l-.101.243-.443 1.434-.975 3.154-.002.007C.837 9.101.294 10.854.26 10.956l-.059.259c-.231 1.787.337 3.349 1.59 4.448 1.159 1.017 2.545 1.384 3.865 1.384.07 0 .07 0 .132-.002-.01.001-.01.001.061.002 1.32 0 2.706-.367 3.865-1.384a4.96 4.96 0 0 0 .413-.407l-1.043-.946-1.056.931c1.033 1.171 2.51 1.792 4.21 1.801.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384.148-.13.287-.267.418-.411l-1.044-.944-1.057.93c1.033 1.174 2.511 1.796 4.213 1.806.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384.15-.131.29-.27.422-.416l-1.046-.943-1.058.929c1.033 1.177 2.513 1.801 4.218 1.811.04.002.088.004.173.004 1.32 0 2.706-.367 3.865-1.384 1.206-1.058 1.858-2.812 1.676-4.426-.069-.61-.535-2.207-1.354-4.785l-.109-.342a327.554 327.554 0 0 0-1.295-3.966l-.122-.366.014.043h.004zm-2.684.85l.12.361.318.962c.329.999.658 2.011.965 2.973l.108.338c.719 2.262 1.203 3.92 1.24 4.249.08.711-.233 1.553-.735 1.993-.553.485-1.308.685-2.008.685l-.098-.002c-.987-.007-1.695-.306-2.177-.854l-1.044-1.189-1.06 1.175a2.192 2.192 0 0 1-.188.185c-.553.485-1.308.685-2.008.685l-.098-.002c-.985-.007-1.693-.305-2.174-.852l-1.043-1.185-1.059 1.171c-.058.064-.12.125-.186.183-.553.485-1.308.685-2.008.685l-.098-.002c-.984-.007-1.692-.304-2.173-.85L9.101 12.2l-1.058 1.166a2.248 2.248 0 0 1-.184.181c-.553.485-1.307.685-2.008.685l-.061-.001-.131.001c-.701 0-1.455-.2-2.008-.685-.538-.472-.767-1.102-.654-1.971l-1.396-.18 1.338.44c.043-.13.552-1.775 1.425-4.599l.002-.007.975-3.155.443-1.434-1.345-.415 1.245.658c.054-.102.042-.085-.083-.001-.122.082-.143.086-.009.086H25.763c.053 0-.164-.133-.225-.339l.014.043-.004-.001zM5.528 19.48c.778 0 1.408.63 1.408 1.408v7.424a1.408 1.408 0 1 1-2.816 0v-7.424c0-.778.63-1.408 1.408-1.408z"/><path d="M.28 29.72c0-.707.58-1.28 1.277-1.28h28.155a1.28 1.28 0 0 1 .007 2.56H1.561A1.278 1.278 0 0 1 .28 29.72z"/><path d="M26.008 19.48c.778 0 1.408.63 1.408 1.408v7.424a1.408 1.408 0 1 1-2.816 0v-7.424c0-.778.63-1.408 1.408-1.408z"/></g></symbol>', "shop")
    }, 293: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 28 33" id="arrow-left" ><path fill-rule="evenodd" d="M17.655 1.853L15.961.159.033 16.072 15.961 32l1.694-1.694L3.429 16.08 17.655 1.854z" class="path1"/></symbol>', "arrow-left")
    }, 294: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 14 14" id="search" ><g fill="#999" fill-rule="evenodd"><path fill-rule="nonzero" d="M5.5 9.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 1.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/><rect width="1.5" height="6" x="9.904" y="7.859" rx=".5" transform="rotate(-45 10.654 10.859)"/></g></symbol>', "search")
    }, 295: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 18 20" id="bin" ><path fill="#000" fill-opacity=".54" fill-rule="evenodd" d="M12.5 3h4.75a.75.75 0 1 1 0 1.5h-.787l.037 8.72a6.704 6.704 0 0 1-1.966 4.792A6.705 6.705 0 0 1 9.75 20h-7.5a.75.75 0 0 1-.75-.75v-12a.75.75 0 0 1 1.5 0V18.5h6.75a5.215 5.215 0 0 0 3.72-1.546A5.214 5.214 0 0 0 15 13.227L14.963 4.5H.75a.75.75 0 1 1 0-1.5H5.5V.75A.75.75 0 0 1 6.25 0h5.5a.75.75 0 0 1 .75.75V3zM7 3h4V1.5H7V3z"/></symbol>', "bin")
    }, 296: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 547 987" id="arrow-right" ><path fill="#999" fill-rule="evenodd" d="M0 931.973l51.2 54.613 494.933-494.933L51.2.133 0 51.333l440.32 440.32L0 931.973z"/></symbol>', "arrow-right")
    }, 297: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 42 42" id="logo" ><path fill="#FFF" fill-rule="evenodd" d="M33.217 34.475c-.973-1.655-3.117-2.219-4.793-1.263-.023.011-.051.032-.074.046-6.822 3.807-15.496 1.493-19.423-5.213C4.98 21.309 7.323 12.69 14.16 8.799c5.789-3.294 12.938-2.14 17.395 2.375l-13.491 7.719a3.44 3.44 0 0 0-1.284 4.721c.974 1.651 3.114 2.219 4.79 1.265v.005l19.692-11.231a21.028 21.028 0 0 0-1.505-3.149C33.87.459 20.844-2.983 10.657 2.819.459 8.619-3.024 21.456 2.86 31.501c5.872 10.024 18.863 13.469 29.045 7.711l.029-.013c.004 0 .004 0 .009-.009.006 0 .01 0 .015-.006a22.556 22.556 0 0 0 2.875-1.957l-1.611-2.753h-.005v.001zm8.31-10.611l-1.752-3.002-6.076 3.463 3.505 5.986 3.039-1.73a3.418 3.418 0 0 0 1.284-4.717z"/></symbol>', "logo")
    }, 298: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 1024 1024" id="right" class="icon" ><defs><style> </style></defs><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"/></symbol>', "right")
    }, 299: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 7 12" id="supervip-arrow-right" ><path fill="#8C632B" fill-rule="evenodd" d="M0 10.107l1.452 1.476L7 6.003 1.452.397 0 1.787 4.262 6z"/></symbol>', "supervip-arrow-right")
    }, 3: function (e, t, i) {
        var n = new (i(5));
        document.body ? n.elem = n.render(document.body) : document.addEventListener("DOMContentLoaded", function () {
            n.elem = n.render(document.body)
        }, !1), e.exports = n
    }, 30: function (e, t, i) {
        "use strict";
        var n = i(4);
        const {paramToString: o} = window.Utils, s = {
            fetchShops: e => Object(n.$fetch)(`/shopping/v1/alipay/restaurants/festival?${o(e)}`),
            getAlidayStageHongbaoStatus: ({userId: e, geohash: t}) => Object(n.$fetch)(`/marketing/v1/users/${e}/aliday_hongbaos/status?geohash=${t}`),
            generateAlidayStageHongbao: ({userId: e, geohash: t}) => Object(n.$fetch)(`/marketing/v1/users/${e}/aliday_hongbaos/generate`, {
                headers: {"content-type": "application/json; charset=utf-8"},
                credentials: "include",
                method: "POST",
                body: JSON.stringify({geohash: t})
            }),
            getAlidayContent: e => Object(n.$fetch)(`/shopping/v1/alipay/content?${o(e)}`),
            getPrizeStatus: e => Object(n.$fetch)(`//openapi.ele.me/v2/free_relay/prize/status/?${o(e)}`).then(e => 200 === e.code ? e.data : Promise.reject("Error")),
            getBgsKVStorage: ({name: e, location: t}) => Object(n.$fetch)(`/bgs/kv/${e}/storage?${o(t)}`),
            getClusterActivityFoods: ({activityId: e, params: t}) => Object(n.$fetch)(`/shopping/v1/cluster_activity/${e}/foods?${o(t)}`),
            getClusterActivityRestaurants: ({activityId: e, params: t}) => Object(n.$fetch)(`/shopping/v1/cluster_activity/${e}/restaurants?${o(t)}`),
            getAlidayMarketingStageDetail: ({userId: e, geohash: t}) => Object(n.$fetch)(`/marketing/v1/users/${e}/aliday_marketing_stage/detail?geohash=${t}`),
            genAlidayMarketingStageHongbao: ({userId: e, geohash: t}) => Object(n.$fetch)(`/marketing/v1/users/${e}/aliday_marketing_stage/hongbaos/generate`, {
                headers: {"content-type": "application/json; charset=utf-8"},
                credentials: "include",
                method: "POST",
                body: JSON.stringify({geohash: t})
            })
        };
        t.a = s
    }, 300: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(78);
        const {isAlipay: s} = n.platform, r = e => e ? e.message || JSON.stringify(e) : "undefined";
        t.a = {
            getGeohash: () => s ? Object(o.a)() : window.Utils.getGeohash(), getStoreLocation() {
                let e = null;
                const t = n.store.location || {}, {timestamp: i} = t;
                return i && parseInt(Date.now() / 1e3) - i < 1800 && (e = t.geohash), e
            }, _sendLocationSuccess() {
                window.perf && window.perf.sendEvent({
                    id: s ? "BkOEQttc-" : "SkOpJ5IoZ",
                    name: s ? "msite-location-success" : "msite-location-success-h5"
                })
            }, sendLocationFailed(e) {
                window.perf && window.perf.sendEvent({
                    id: s ? "BybU5FF5b" : "Sk6Ck58sb",
                    name: s ? "msite-location-failed" : "msite-location-failed-h5",
                    data: {error: r(e)}
                })
            }, sendPoiFailed(e, t) {
                window.perf && window.perf.sendEvent({
                    id: "BkR_wc8jZ",
                    name: "msite-poi-failed",
                    data: {error: r(e), data: JSON.stringify(t || {})}
                })
            }, poiCallback({city_id: e, district_id: t}) {
                const i = {};
                e && (n.store.set("cityId", e), i.city_id = e), t && (n.store.set("districtId", t), i.district_id = t), Object.keys(i).length && UBT.send("PARAMS", i)
            }
        }
    }, 301: function (e, t) {
        e.exports = {
            default: "index-DtyzW_0",
            aliday: "index-pJCRT_0",
            shop: "index-2EFsE_0",
            iPhoneXMode: "index-2Nfg0_0"
        }
    }, 32: function (e, t, i) {
        "use strict";
        var n = i(4);
        const {paramToString: o} = window.Utils, s = localStorage.getItem("CURRENT_RESTAURANT_ID");
        t.a = {
            cartCheckout: e => Object(n.$fetch)("/booking/v1/carts/checkout", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(e)
            }, {shopId: s}),
            cartRemarks: (e, t) => Object(n.$fetch)(`/v1/carts/${e}/remarks?sig=${t}`, {credentials: "include"}, {shopId: s}),
            cartOrder: (e, t, i) => Object(n.$fetch)(`/booking/v1/users/${e}/carts/${t}/orders`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(i)
            }, {shopId: s}),
            cartVerifyCode: (e, t) => Object(n.$fetch)(`/booking/v1/carts/${e}/verify_code`, {
                method: "POST",
                body: JSON.stringify(t)
            }, {shopId: s}),
            pay: (e, t) => Object(n.$fetch)(`/bos/v1/users/${e}/orders/${t}/msite_payments`, {
                credentials: "include",
                method: "POST",
                body: JSON.stringify({user_id: e, order_id: t})
            }, {shopId: s}),
            payInAlipay: ({userId: e, orderId: t, alipay_app_id: i, shopId: o}) => Object(n.$fetch)(`/bos/v2/users/${e}/orders/${t}/transactions/koubei`, {
                credentials: "include",
                method: "POST",
                body: JSON.stringify({alipay_app_id: i})
            }, {shopId: o}),
            getHongbao: (e, t) => Object(n.$fetch)(`/promotion/v4/carts/${e}/hongbaos?sig=${t}`, {credentials: "include"}, {shopId: s}),
            getCoupons: (e, t) => Object(n.$fetch)(`/promotion/v1/carts/${e}/${t}/coupons`, {credentials: "include"}, {shopId: t}),
            getInvoices: e => Object(n.$fetch)(`/member/v2/users/${e}/invoices`, {credentials: "include"}, {shopId: s}),
            addInvoice: (e, t) => Object(n.$fetch)(`/member/v2/users/${e}/invoices`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify(t)
            }, {shopId: s}),
            getInvoice: (e, t) => Object(n.$fetch)(`/member/v2/users/${e}/invoices/${t}`, {credentials: "include"}, {shopId: s}),
            updateInvoice: (e, t, i) => Object(n.$fetch)(`/member/v2/users/${e}/invoices/${t}`, {
                method: "PUT",
                credentials: "include",
                body: JSON.stringify(i)
            }, {shopId: s}),
            deleteInvoice: (e, t) => Object(n.$fetch)(`/member/v2/users/${e}/invoices/${t}`, {
                method: "DELETE",
                credentials: "include"
            }, {shopId: s}),
            fetchAddress: (e, t, i) => Object(n.$fetch)(`/booking/v1/users/${e}/carts/${t}/addresses?sig=${i}`, {credentials: "include"}, {shopId: s}),
            postAddress: ({userId: e, body: t}) => Object(n.$fetch)(`/member/v1/users/${e}/addresses`, {
                credentials: "include",
                method: "POST",
                body: JSON.stringify(t)
            }, {shopId: s}),
            setAddress: ({userId: e, body: t, addressId: i}) => Object(n.$fetch)(`/member/v1/users/${e}/addresses/${i}`, {
                method: "PUT",
                credentials: "include",
                body: JSON.stringify(t)
            }, {shopId: s}),
            deleteAddress: ({userId: e, addressId: t}) => Object(n.$fetch)(`/member/v1/users/${e}/addresses/${t}`, {
                method: "DELETE",
                credentials: "include"
            }, {shopId: s}),
            searchAddress(e) {
                const t = n.store.get("location") || {},
                    i = {keyword: e, offset: 0, limit: 20, longitude: t.longitude, latitude: t.latitude};
                return Object(n.$fetch)(`/bgs/poi/search_poi_nearby?${o(i)}`, {}, {shopId: s})
            }
        }
    }, 33: function (e, t, i) {
        !function (t, i) {
            e.exports = i()
        }(0, function () {
            return function (e) {
                function t(n) {
                    if (i[n]) return i[n].exports;
                    var o = i[n] = {i: n, l: !1, exports: {}};
                    return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }

                var i = {};
                return t.m = e, t.c = i, t.d = function (e, i, n) {
                    t.o(e, i) || Object.defineProperty(e, i, {configurable: !1, enumerable: !0, get: n})
                }, t.n = function (e) {
                    var i = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(i, "a", i), i
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 45)
            }([function (e, t, i) {
                var n = new (i(2));
                document.body ? n.elem = n.render(document.body) : document.addEventListener("DOMContentLoaded", function () {
                    n.elem = n.render(document.body)
                }, !1), e.exports = n
            }, function (e, t) {
                e.exports = function (e, t, i, n, o, s) {
                    var r, a = e = e || {}, l = typeof e.default;
                    "object" !== l && "function" !== l || (r = e, a = e.default);
                    var c = "function" == typeof a ? a.options : a;
                    t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), i && (c.functional = !0), o && (c._scopeId = o);
                    var d;
                    if (s ? (d = function (e) {
                            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
                        }, c._ssrRegister = d) : n && (d = n), d) {
                        var u = c.functional, h = u ? c.render : c.beforeCreate;
                        u ? (c._injectStyles = d, c.render = function (e, t) {
                            return d.call(t), h(e, t)
                        }) : c.beforeCreate = h ? [].concat(h, d) : [d]
                    }
                    return {esModule: r, exports: a, options: c}
                }
            }, function (e, t, i) {
                function n(e) {
                    return Array.prototype.slice.call(e, 0)
                }

                function o(e, t, i) {
                    var o = e.querySelectorAll(l);
                    o && n(o).forEach(function (e) {
                        e.attributes && n(e.attributes).forEach(function (n) {
                            var o = n.localName.toLowerCase();
                            if (-1 !== a.indexOf(o)) {
                                var s = c.exec(e.getAttribute(o));
                                if (s && 0 === s[1].indexOf(t)) {
                                    var r = function (e) {
                                        return e.replace(/\(|\)/g, "\\$&")
                                    }(i + s[1].split(t)[1]);
                                    e.setAttribute(o, "url(" + r + ")")
                                }
                            }
                        })
                    })
                }

                function s() {
                    var e = document.getElementsByTagName("base")[0], t = window.location.href.split("#")[0],
                        i = e && e.href;
                    this.urlPrefix = i && i !== t ? t + u : u;
                    var s = new r;
                    s.sniff(), this.browser = s.browser, this.content = [], "ie" !== this.browser.name && i && window.addEventListener("spriteLoaderLocationUpdated", function (e) {
                        var t = this.urlPrefix, i = e.detail.newUrl.split(u)[0] + u;
                        o(this.svg, t, i), this.urlPrefix = i, ("firefox" === this.browser.name || "edge" === this.browser.name || "chrome" === this.browser.name && this.browser.version[0] >= 49) && n(document.querySelectorAll("use[*|href]")).forEach(function (e) {
                            var n = e.getAttribute(h);
                            n && 0 === n.indexOf(t) && e.setAttributeNS(p, h, i + n.split(u)[1])
                        })
                    }.bind(this))
                }

                var r = i(3),
                    a = ["clipPath", "colorProfile", "src", "cursor", "fill", "filter", "marker", "markerStart", "markerMid", "markerEnd", "mask", "stroke"],
                    l = "[" + a.join("],[") + "]", c = /^url\((.*)\)$/, d = function (e) {
                        for (var t = e.querySelector("defs"), i = e.querySelectorAll("symbol linearGradient, symbol radialGradient, symbol pattern"), n = 0, o = i.length; n < o; n++) t.appendChild(i[n])
                    }, u = "#", h = "xlink:href", p = "http://www.w3.org/1999/xlink",
                    f = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="' + p + '"';
                s.styles = ["position:absolute", "width:0", "height:0"], s.spriteTemplate = function () {
                    return f + ' style="' + s.styles.join(";") + '"><defs>{content}</defs></svg>'
                }, s.symbolTemplate = function () {
                    return f + ">{content}</svg>"
                }, s.prototype.content = null, s.prototype.add = function (e, t) {
                    return this.svg && this.appendSymbol(e), this.content.push(e), u + t
                }, s.prototype.wrapSVG = function (e, t) {
                    var i = t.replace("{content}", e), n = function (e) {
                        try {
                            if (document.importNode) return document.importNode(e, !0)
                        } catch (e) {
                        }
                        return e
                    }((new DOMParser).parseFromString(i, "image/svg+xml").documentElement);
                    return "ie" !== this.browser.name && this.urlPrefix && o(n, u, this.urlPrefix), n
                }, s.prototype.appendSymbol = function (e) {
                    var t = this.wrapSVG(e, s.symbolTemplate()).childNodes[0];
                    this.svg.querySelector("defs").appendChild(t), "firefox" === this.browser.name && d(this.svg)
                }, s.prototype.toString = function () {
                    var e = document.createElement("div");
                    return e.appendChild(this.render()), e.innerHTML
                }, s.prototype.render = function (e, t) {
                    e = e || null, t = "boolean" != typeof t || t;
                    var i = this.wrapSVG(this.content.join(""), s.spriteTemplate());
                    return "firefox" === this.browser.name && d(i), e && (t && e.childNodes[0] ? e.insertBefore(i, e.childNodes[0]) : e.appendChild(i)), this.svg = i, i
                }, e.exports = s
            }, function (e, t) {
                !function (t) {
                    function i() {
                        var e = this;
                        r.forEach(function (t) {
                            e[t] = {name: s, version: [], versionString: s}
                        })
                    }

                    function n(e, t, i) {
                        o[t].forEach(function (n) {
                            var o = n[0], r = n[1], a = i.match(o);
                            a && (e[t].name = r, a[2] ? (e[t].versionString = a[2], e[t].version = []) : a[1] ? (e[t].versionString = a[1].replace(/_/g, "."), e[t].version = function (e) {
                                return e.split(/[\._]/).map(function (e) {
                                    return parseInt(e)
                                })
                            }(a[1])) : (e[t].versionString = s, e[t].version = []))
                        })
                    }

                    var o = {
                        browser: [[/msie ([\.\_\d]+)/, "ie"], [/trident\/.*?rv:([\.\_\d]+)/, "ie"], [/firefox\/([\.\_\d]+)/, "firefox"], [/chrome\/([\.\_\d]+)/, "chrome"], [/version\/([\.\_\d]+).*?safari/, "safari"], [/mobile safari ([\.\_\d]+)/, "safari"], [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"], [/crios\/([\.\_\d]+).*?safari/, "chrome"], [/opera/, "opera"], [/opera\/([\.\_\d]+)/, "opera"], [/opera ([\.\_\d]+)/, "opera"], [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"], [/opios\/([a-z\.\_\d]+)/, "opera"], [/blackberry/, "blackberry"], [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"], [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"], [/rim.*?version\/([\.\_\d]+)/, "blackberry"], [/iceweasel\/([\.\_\d]+)/, "iceweasel"], [/edge\/([\.\d]+)/, "edge"]],
                        os: [[/linux ()([a-z\.\_\d]+)/, "linux"], [/mac os x/, "macos"], [/mac os x.*?([\.\_\d]+)/, "macos"], [/os ([\.\_\d]+) like mac os/, "ios"], [/openbsd ()([a-z\.\_\d]+)/, "openbsd"], [/android/, "android"], [/android ([a-z\.\_\d]+);/, "android"], [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"], [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"], [/windows phone.*?([\.\_\d]+)/, "windows.phone"], [/windows mobile/, "windows.mobile"], [/blackberry/, "blackberryos"], [/bb\d+/, "blackberryos"], [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]],
                        device: [[/ipad/, "ipad"], [/iphone/, "iphone"], [/lumia/, "lumia"], [/htc/, "htc"], [/nexus/, "nexus"], [/galaxy nexus/, "galaxy.nexus"], [/nokia/, "nokia"], [/ gt\-/, "galaxy"], [/ sm\-/, "galaxy"], [/xbox/, "xbox"], [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]]
                    }, s = "Unknown", r = Object.keys(o);
                    i.prototype.sniff = function (e) {
                        var t = this, i = (e || navigator.userAgent || "").toLowerCase();
                        r.forEach(function (e) {
                            n(t, e, i)
                        })
                    }, void 0 !== e && e.exports ? e.exports = i : (t.Sniffr = new i, t.Sniffr.sniff(navigator.userAgent))
                }(this)
            }, function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(6), o = i.n(n), s = i(7), r = i.n(s), a = {
                    props: {value: {type: Number, default: 0}}, data: function () {
                        return this.max = 5, this.icon = {starActived: o.a, starGray: r.a}, {}
                    }, computed: {
                        style: function () {
                            return {width: this.value / this.max * 100 + "%"}
                        }
                    }
                }, l = {
                    render: function () {
                        var e = this.$createElement, t = this._self._c || e;
                        return t("div", {class: this.$style.wrapper}, [t("div", {class: this.$style.gray}, [t("svg", [t("use", {attrs: {"xlink:href": this.icon.starGray}})])]), this._v(" "), t("div", {
                            class: this.$style.actived,
                            style: this.style
                        }, [t("svg", [t("use", {attrs: {"xlink:href": this.icon.starActived}})])])])
                    }, staticRenderFns: []
                }, c = i(1)(a, l, !1, function (e) {
                    this.$style = i(5)
                }, null, null).exports;
                t.default = c
            }, function (e, t) {
                e.exports = {
                    wrapper: "Rating-wrapper_TYbDrku_0",
                    gray: "Rating-gray_1kpffd5_0",
                    actived: "Rating-actived_GBtiHkB_0"
                }
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 60 10" id="star-actived.d4c54d1" ><defs><linearGradient id="star-actived.d4c54d1_a" x1="0%" y1="50%" y2="50%"><stop offset="0%" stop-color="#FFDE00"/><stop offset="100%" stop-color="#FFB000"/></linearGradient></defs><path fill="url(#star-actived.d4c54d1_a)" fill-rule="evenodd" d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z"/></symbol>', "star-actived.d4c54d1")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 60 10" id="star-gray.cc081b9" ><path fill="#EEE" fill-rule="evenodd" d="M54.017 8.072l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L53.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm-48 0L3.465 9.633c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L5.63.589c.213-.515.557-.523.774 0L7.55 3.352l2.982.237c.556.044.67.368.24.736L8.497 6.269l.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L17.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L29.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56zm12 0l-2.552 1.561c-.476.291-.758.096-.626-.455l.696-2.909-2.273-1.944c-.424-.362-.325-.691.239-.736l2.982-.237L41.63.589c.213-.515.557-.523.774 0l1.146 2.763 2.982.237c.556.044.67.368.24.736l-2.274 1.944.696 2.91c.13.542-.143.75-.626.454l-2.551-1.56z"/></symbol>', "star-gray.cc081b9")
            }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(4), o = {
                        props: {
                            shop: {type: Object, required: !0},
                            showCategoryQuantity: {type: Boolean, default: !0}
                        }, computed: {
                            statusTip: function () {
                                return {
                                    2: {text: "商家繁忙", bgColor: "#ff7667"},
                                    4: {text: "商家休息", bgColor: "#c0c0c0"},
                                    5: {text: this.shop.next_business_time + "开始配送", bgColor: "#54ce75"},
                                    8: {text: "商家休息", bgColor: "#c0c0c0"},
                                    9: {text: "即将休息", bgColor: "#ff7667"}
                                }[this.shop.status] || {text: "", bgColor: ""}
                            }
                        }
                    }, s = {
                        render: function () {
                            var e = this.$createElement, t = this._self._c || e;
                            return t("div", {class: this.$style.container}, [t("div", {class: this.$style.main}, [t("img", {
                                directives: [{
                                    name: "img",
                                    rawName: "v-img",
                                    value: {hash: this.shop.image_path, width: 130, height: 130},
                                    expression: "{ hash: shop.image_path, width: 130, height: 130 }"
                                }], class: this.$style.logo, attrs: {alt: this.shop.name}
                            }), this._v(" "), this.showCategoryQuantity && this.shop.cartQuantity > 0 ? t("span", {class: this.$style.categoryQuantity}, [this._v("\n      " + this._s(this.shop.cartQuantity) + "\n    ")]) : this._e(), this._v(" "), 1 !== this.shop.status ? t("span", {
                                class: [this.$style.statusTip, 5 === this.shop.status && this.$style.statusTipSmall],
                                style: {backgroundColor: this.statusTip.bgColor}
                            }, [t("span", {
                                class: this.$style.statusTipText,
                                attrs: {content: this.statusTip.text}
                            }, [this._v(this._s(this.statusTip.text))])]) : this._e()]), this._v(" "), this.shop.is_new ? t("div", {class: this.$style.newShop}, [t("span", [this._v("新店")])]) : this._e()])
                        }, staticRenderFns: []
                    }, r = i(1)(o, s, !1, function (e) {
                        this.$style = i(47)
                    }, null, null).exports, a = {props: {isPunctual: {type: Boolean}, isHollow: {type: Boolean}}}, l = {
                        render: function () {
                            var e = this.$createElement, t = this._self._c || e;
                            return this.isPunctual || this.isHollow ? t("div", {class: this.$style.delivery}, [this.isPunctual ? t("div", {
                                class: this.$style.iconDelivery,
                                attrs: {content: "准时达", alt: "准时达"}
                            }, [this._v("\n    准时达\n  ")]) : this._e(), this._v(" "), this.isHollow ? t("div", {
                                class: this.$style.iconHollow,
                                attrs: {content: "蜂鸟专送", alt: "蜂鸟专送"}
                            }, [this._v("\n    蜂鸟专送\n  ")]) : this._e()]) : this._e()
                        }, staticRenderFns: []
                    }, c = i(1)(a, l, !1, function (e) {
                        this.$style = i(48)
                    }, null, null).exports, d = i(49), u = i.n(d), h = i(50), p = i.n(h), f = i(51), m = i.n(f), g = i(52),
                    v = i.n(g), y = i(53), b = i.n(y), w = i(54), x = i.n(w), _ = i(55), I = i.n(_), A = i(56),
                    k = i.n(A), C = i(57), S = i.n(C), M = i(58), T = i.n(M),
                    N = /AlipayClient/.test(navigator.userAgent), j = {0: S.a, 1: b.a, 2: x.a, 3: I.a, 4: v.a, 5: k.a},
                    E = {
                        props: {
                            shop: {type: Object, required: !0},
                            link: {
                                type: Function, default: function () {
                                    window.location.href = "eleme://restaurant?restaurant_id=" + this.shop.id + "&animation_type=1"
                                }
                            },
                            showActivity: {type: Boolean, default: !0},
                            showCategoryQuantity: {type: Boolean, default: !0},
                            highlight: {
                                type: Object, default: function () {
                                    return {}
                                }
                            },
                            alidayTagAmount: {type: Number, default: 0}
                        }, components: {Rating: n.default, Logo: r, Delivery: c}, data: function () {
                            return this.icon = {
                                source: u.a,
                                more: p.a,
                                dashedLine: m.a,
                                alidayTag: j[this.alidayTagAmount],
                                alidayLucky: T.a
                            }, this.activities = this.shop.activities || [], this.nameTemplate = "", this.isAlidayTag = !1, this.isRecommend = !1, this.isAD = !1, {
                                openAct: !1,
                                activityTopNumber: 2
                            }
                        }, computed: {
                            isPunctual: function () {
                                return this.shop.supports.some(function (e) {
                                    return 9 === e.id
                                })
                            }, distance: function () {
                                var e = this.shop.distance;
                                return e >= 1e3 ? (e / 1e3).toFixed(2) + "km" : e + "m"
                            }
                        }, methods: {
                            toggleAct: function () {
                                this.openAct = !this.openAct
                            }, supportFilter: function (e) {
                                return 9 !== e.id
                            }
                        }, created: function () {
                            if (N && (this.activities = this.activities.filter(function (e) {
                                    return !e.description.match(/微信/)
                                })), this.highlight.keyword) {
                                var e = this.highlight, t = e.keyword, i = e.color, n = new RegExp(t, "g");
                                this.nameTemplate = this.shop.name.replace(n, '<span style="color: ' + (i || "#118dff") + '">' + t + "</span>")
                            }
                            var o = this.shop.tags;
                            o && (this.isAlidayTag = N && o.some(function (e) {
                                return -1 === e.id
                            })), this.isRecommend = this.shop.recommend && this.shop.recommend.reason, this.isAD = this.shop.recommend && this.shop.recommend.is_ad
                        }
                    }, O = {
                        render: function () {
                            var e = this, t = e.$createElement, i = e._self._c || t;
                            return i("section", {
                                class: e.$style.container, on: {
                                    click: function (t) {
                                        e.link(e.shop.id)
                                    }
                                }
                            }, [i("div", {class: e.$style.shopInfo}, [i("logo", {
                                attrs: {
                                    shop: e.shop,
                                    "show-category-quantity": e.showCategoryQuantity
                                }
                            }), e._v(" "), i("div", {class: e.$style.main}, [i("section", {class: e.$style.line}, [i("h3", {class: e.$style.shopname}, [e.shop.is_premium ? i("i", {
                                class: e.$style.premium,
                                attrs: {content: "品牌"}
                            }, [e._v("品牌")]) : e._e(), e._v(" "), e.nameTemplate ? i("span", {domProps: {innerHTML: e._s(e.nameTemplate)}}) : i("span", [e._v(e._s(e.shop.name))])]), e._v(" "), i("ul", {class: e.$style.supportWrap}, e._l(e.shop.supports, function (e) {
                                return i("li", {key: e.id, attrs: {content: e.icon_name}})
                            }))]), e._v(" "), i("section", {class: e.$style.line}, [i("div", {class: e.$style.rateWrap}, [e.shop.rating ? i("rating", {attrs: {value: e.shop.rating}}) : e._e(), e._v(" "), e.shop.rating ? i("span", {class: e.$style.rate}, [e._v(e._s(e.shop.rating))]) : e._e(), e._v(" "), i("span", [e._v("月售" + e._s(e.shop.recent_order_num) + "单")])], 1), e._v(" "), i("Delivery", {
                                attrs: {
                                    isPunctual: e.isPunctual,
                                    isHollow: e.shop.delivery_mode && 1 === e.shop.delivery_mode.id
                                }
                            })], 1), e._v(" "), i("section", {class: e.$style.line}, [i("div", {class: e.$style.moneylimit}, [i("span", [e._v("¥" + e._s(Math.ceil(e.shop.float_minimum_order_amount)) + "起送")]), e._v(" "), e.shop.piecewise_agent_fee.tips ? i("span", [e._v(e._s(e.shop.piecewise_agent_fee.tips))]) : e._e(), e._v(" "), e.shop.average_cost ? i("span", [e._v(e._s(e.shop.average_cost))]) : e._e()]), e._v(" "), i("div", {class: e.$style.timedistanceWrap}, [i("span", {class: e.$style.distanceWrap}, [e._v(e._s(e.distance))]), e._v(" "), e.shop.order_lead_time ? i("span", [e._v(e._s(e.shop.order_lead_time) + "分钟")]) : e._e()])])])], 1), e._v(" "), i("div", {class: e.$style.activityWrap}, [e.isRecommend || e.isAlidayTag ? i("section", {class: e.$style.tagLine}, [e.isAlidayTag ? i("span", {class: e.$style.alidayGroup}, [i("svg", {class: [e.$style.alidayTag, 0 === e.alidayTagAmount && e.$style.noneAmount]}, [i("use", {attrs: {"xlink:href": e.icon.alidayTag}})]), e._v(" "), i("svg", {class: [e.$style.alidayTag, e.$style.lucky]}, [i("use", {attrs: {"xlink:href": e.icon.alidayLucky}})]), e._v(" "), e.isAD ? i("span", {
                                class: e.$style.adLite,
                                attrs: {content: "广告"}
                            }, [e._v("广告")]) : e._e()]) : e.isRecommend ? i("span", {
                                class: e.$style.sourceTag,
                                style: {color: e.shop.recommend.color || "#666"}
                            }, [e.shop.recommend.image_hash ? i("img", {
                                directives: [{
                                    name: "img",
                                    rawName: "v-img",
                                    value: {hash: e.shop.recommend.image_hash, width: 60, height: 60},
                                    expression: "{ hash: shop.recommend.image_hash, width: 60, height: 60 }"
                                }]
                            }) : i("svg", [i("use", {attrs: {"xlink:href": e.icon.source}})]), e._v(" "), i("span", [e._v(e._s(e.shop.recommend.reason))])]) : e._e()]) : e._e(), e._v(" "), e.showActivity && e.activities.length ? i("span", [i("svg", {class: e.$style.dashedline}, [i("use", {attrs: {"xlink:href": e.icon.dashedLine}})])]) : e._e(), e._v(" "), e.showActivity && e.activities.length ? i("section", {class: e.$style.activities}, [i("div", {class: e.$style.activityList}, e._l(e.activities, function (t, n) {
                                return i("div", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: n < e.activityTopNumber || e.openAct,
                                        expression: "index < activityTopNumber || openAct"
                                    }], key: t.id, class: e.$style.actRow
                                }, [i("span", {class: e.$style.iconWrap}, [i("span", {
                                    class: e.$style.icon,
                                    style: {backgroundColor: "#" + t.icon_color}
                                }, [e._v("\n              " + e._s(t.icon_name) + "\n            ")])]), e._v(" "), i("span", {class: e.$style.desc}, [e._v(e._s(t.description))])])
                            })), e._v(" "), e.activities.length > e.activityTopNumber ? i("div", {
                                class: e.$style.activityBtn,
                                on: {
                                    click: function (t) {
                                        t.stopPropagation(), e.toggleAct(t)
                                    }
                                }
                            }, [e._v("\n        " + e._s(e.activities.length) + "个活动\n        "), i("svg", {class: (n = {}, n[e.$style.open] = e.openAct, n)}, [i("use", {attrs: {"xlink:href": e.icon.more}})])]) : e._e()]) : e._e()]), e._v(" "), e._t("extra")], 2);
                            var n
                        }, staticRenderFns: []
                    }, L = i(1)(E, O, !1, function (e) {
                        this.$style = i(46)
                    }, null, null).exports;
                t.default = L
            }, function (e, t) {
                e.exports = {
                    container: "index-container_10L_lQb",
                    shopInfo: "index-shopInfo_1RRTZ0d",
                    main: "index-main_N3FfcSz",
                    line: "index-line_2-iYR1A",
                    shopname: "index-shopname_39Y7e3U",
                    premium: "index-premium_39rl0v9",
                    rateWrap: "index-rateWrap_39dWx_g",
                    rate: "index-rate_WsK58g8",
                    moneylimit: "index-moneylimit_2fCq9W5",
                    activityWrap: "index-activityWrap_3mo1GyG",
                    tagLine: "index-tagLine_1rJw_lq",
                    activities: "index-activities_25AUDsx",
                    supportWrap: "index-supportWrap_2lTcxr2",
                    timedistanceWrap: "index-timedistanceWrap_2Dp_kzY",
                    distanceWrap: "index-distanceWrap_1EPAlti",
                    activityList: "index-activityList_1wvwwUY",
                    activityBtn: "index-activityBtn_tMk-e1C",
                    open: "index-open_33dKeGm",
                    sourceTag: "index-sourceTag_32NKya6",
                    dashedline: "index-dashedline_7B79b3W",
                    actRow: "index-actRow_2f_uNNA",
                    iconWrap: "index-iconWrap_1xJuKaY",
                    icon: "index-icon_1fBCxBk",
                    desc: "index-desc_JLha7Vr",
                    alidayTag: "index-alidayTag_1DfitFi",
                    noneAmount: "index-noneAmount_ooPu0d0",
                    lucky: "index-lucky_1Wrhoq8",
                    adLite: "index-adLite_35BlsGa",
                    alidayGroup: "index-alidayGroup_1RFyAef"
                }
            }, function (e, t) {
                e.exports = {
                    container: "logo-container_XoH2Vit_0",
                    main: "logo-main_21aInWJ_0",
                    logo: "logo-logo_3S1eSkn_0",
                    statusTip: "logo-statusTip_1CEG6F-_0",
                    statusTipText: "logo-statusTipText_1Dx4kZS_0",
                    statusTipSmall: "logo-statusTipSmall_3tjsgtJ_0",
                    newShop: "logo-newShop_PI2TWde_0",
                    categoryQuantity: "logo-categoryQuantity_uaoPHzl_0"
                }
            }, function (e, t) {
                e.exports = {
                    delivery: "delivery-delivery_3gyT50e_0",
                    "icon-delivery": "delivery-icon-delivery_2nSP7AC_0",
                    iconDelivery: "delivery-icon-delivery_2nSP7AC_0",
                    "icon-hollow": "delivery-icon-hollow_3q8_B5r_0",
                    iconHollow: "delivery-icon-hollow_3q8_B5r_0"
                }
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 7 9" id="source-tag.a6e03b8" ><path fill="#999" fill-rule="nonzero" d="M3.4 6.705a.364.364 0 0 0-.255 0L.727 7.61V1.227H3.92a.364.364 0 0 0 0-.727H.364C.163.5 0 .663 0 .864v7.272c0 .254.254.43.491.34l2.782-1.042 2.78 1.043a.364.364 0 0 0 .492-.341V.864a.364.364 0 1 0-.727 0V7.61L3.4 6.705z"/></symbol>', "source-tag.a6e03b8")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 12 6" id="activity-more.c46fec1" ><path fill-rule="evenodd" d="M4.577 5.423c.79.77 2.073.767 2.857 0l4.12-4.026C12.345.625 12.09 0 10.985 0H1.027C-.077 0-.33.63.457 1.397l4.12 4.026z"/></symbol>', "activity-more.c46fec1")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 280 1" id="dashed-line.3732003" ><path fill="none" fill-rule="evenodd" stroke="#CCC" stroke-dasharray="1" stroke-width=".5" d="M0 .25L280 0"/></symbol>', "dashed-line.3732003")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 224 32" id="aliday-tag.102e498" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="aliday-tag.102e498_a" d="M4 0h112v32H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"/></defs><g fill="none" fill-rule="evenodd"><path stroke="#FF4E39" d="M110.5.5v31H220a3.5 3.5 0 0 0 3.5-3.5V4A3.5 3.5 0 0 0 220 .5H110.5z"/><text fill="#FF4E39" font-family="PingFangSC-Semibold, PingFang SC" font-size="20" font-weight="500" letter-spacing=".526" transform="translate(110)"><tspan x="14" y="23">&#x7ACB;&#x51CF;4&#x5143;&#x8D77;</tspan></text><g><g><use fill="#FF5237" xlink:href="#aliday-tag.102e498_a"/><path stroke="#FF4E39" stroke-width="2" d="M115 31V1H4a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h111z"/></g><text fill="#FFF" font-family="PingFangSC-Semibold, PingFang SC" font-size="20" font-weight="500" letter-spacing=".526"><tspan x="7" y="23">&#x5916;&#x5356;&#x8282;&#x7EA2;&#x5305;</tspan></text></g></g></symbol>', "aliday-tag.102e498")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 224 32" id="aliday-tag-1.342aa63" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="aliday-tag-1.342aa63_a" d="M4 0h112v32H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"/></defs><g fill="none" fill-rule="evenodd"><path stroke="#FF4E39" d="M110.5.5v31H220a3.5 3.5 0 0 0 3.5-3.5V4A3.5 3.5 0 0 0 220 .5H110.5z"/><text fill="#FF4E39" font-family="PingFangSC-Semibold, PingFang SC" font-size="20" font-weight="500" letter-spacing=".526" transform="translate(110)"><tspan x="14" y="23">&#x7ACB;&#x51CF;1&#x5143;&#x8D77;</tspan></text><g><g><use fill="#FF5237" xlink:href="#aliday-tag-1.342aa63_a"/><path stroke="#FF4E39" stroke-width="2" d="M115 31V1H4a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h111z"/></g><text fill="#FFF" font-family="PingFangSC-Semibold, PingFang SC" font-size="20" font-weight="500" letter-spacing=".526"><tspan x="7" y="23">&#x5916;&#x5356;&#x8282;&#x7EA2;&#x5305;</tspan></text></g></g></symbol>', "aliday-tag-1.342aa63")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 224 32" id="aliday-tag-2.6237e98" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="aliday-tag-2.6237e98_a" d="M4 0h112v32H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"/></defs><g fill="none" fill-rule="evenodd"><path stroke="#FF4E39" d="M110.5.5v31H220a3.5 3.5 0 0 0 3.5-3.5V4A3.5 3.5 0 0 0 220 .5H110.5z"/><text fill="#FF4E39" font-family="PingFangSC-Semibold, PingFang SC" font-size="20" font-weight="500" letter-spacing=".526" transform="translate(110)"><tspan x="14" y="23">&#x7ACB;&#x51CF;2&#x5143;&#x8D77;</tspan></text><g><g><use fill="#FF5237" xlink:href="#aliday-tag-2.6237e98_a"/><path stroke="#FF4E39" stroke-width="2" d="M115 31V1H4a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h111z"/></g><text fill="#FFF" font-family="PingFangSC-Semibold, PingFang SC" font-size="20" font-weight="500" letter-spacing=".526"><tspan x="7" y="23">&#x5916;&#x5356;&#x8282;&#x7EA2;&#x5305;</tspan></text></g></g></symbol>', "aliday-tag-2.6237e98")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 224 32" id="aliday-tag-3.bb0d9ec" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="aliday-tag-3.bb0d9ec_a" d="M4 0h112v32H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"/></defs><g fill="none" fill-rule="evenodd"><path stroke="#FF4E39" d="M110.5.5v31H220a3.5 3.5 0 0 0 3.5-3.5V4A3.5 3.5 0 0 0 220 .5H110.5z"/><text fill="#FF4E39" font-family="PingFangSC-Semibold, PingFang SC" font-size="20" font-weight="500" letter-spacing=".526" transform="translate(110)"><tspan x="14" y="23">&#x7ACB;&#x51CF;3&#x5143;&#x8D77;</tspan></text><g><g><use fill="#FF5237" xlink:href="#aliday-tag-3.bb0d9ec_a"/><path stroke="#FF4E39" stroke-width="2" d="M115 31V1H4a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h111z"/></g><text fill="#FFF" font-family="PingFangSC-Semibold, PingFang SC" font-size="20" font-weight="500" letter-spacing=".526"><tspan x="7" y="23">&#x5916;&#x5356;&#x8282;&#x7EA2;&#x5305;</tspan></text></g></g></symbol>', "aliday-tag-3.bb0d9ec")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 224 32" id="aliday-tag-5.4358972" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="aliday-tag-5.4358972_a" d="M4 0h112v32H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"/></defs><g fill="none" fill-rule="evenodd"><path stroke="#FF4E39" d="M110.5.5v31H220a3.5 3.5 0 0 0 3.5-3.5V4A3.5 3.5 0 0 0 220 .5H110.5z"/><text fill="#FF4E39" font-family="PingFangSC-Semibold, PingFang SC" font-size="20" font-weight="500" letter-spacing=".526" transform="translate(110)"><tspan x="14" y="23">&#x7ACB;&#x51CF;5&#x5143;&#x8D77;</tspan></text><g><g><use fill="#FF5237" xlink:href="#aliday-tag-5.4358972_a"/><path stroke="#FF4E39" stroke-width="2" d="M115 31V1H4a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h111z"/></g><text fill="#FFF" font-family="PingFangSC-Semibold, PingFang SC" font-size="20" font-weight="500" letter-spacing=".526"><tspan x="7" y="23">&#x5916;&#x5356;&#x8282;&#x7EA2;&#x5305;</tspan></text></g></g></symbol>', "aliday-tag-5.4358972")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 116 32" id="aliday-tag-none-amount.760a6dd" ><g fill="none" fill-rule="evenodd"><rect width="116" height="32" fill="#FF5237" rx="4"/><text fill="#FFF" font-family="PingFangSC-Semibold, PingFang SC" font-size="20" font-weight="500" letter-spacing=".526"><tspan x="7" y="23">&#x5916;&#x5356;&#x8282;&#x7EA2;&#x5305;</tspan></text></g></symbol>', "aliday-tag-none-amount.760a6dd")
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 96 32" id="aliday-lucky.e1e36c7" ><g fill="none" fill-rule="evenodd"><rect width="95" height="31" x=".5" y=".5" stroke="#FF4E39" rx="4"/><text fill="#FF4E39" font-family="PingFangSC-Semibold, PingFang SC" font-size="20" font-weight="500" letter-spacing=".526"><tspan x="7" y="23">&#x968F;&#x673A;&#x514D;&#x5355;</tspan></text></g></symbol>', "aliday-lucky.e1e36c7")
            }])
        })
    }, 34: function (e, t, i) {
        "use strict";
        var n = i(19);
        const o = {
            getQuantity(e) {
                let t = n.a.get("CARTS_QUANTITY");
                if (!t || !t.length) return 0;
                let i = t.find(t => t.restaurant_id === "" + e);
                return i ? i.quantity : 0
            }, deleteQuantity(e) {
                let t = n.a.get("CARTS_QUANTITY");
                if (!t || !t.length) return;
                let i = t.filter(t => t.restaurant_id !== e + "");
                n.a.set("CARTS_QUANTITY", i)
            }, updatePosition(e) {
                let t = sessionStorage.getItem(e);
                return !!t && (window.scroll(0, t), sessionStorage.removeItem(e), !0)
            }, deleteSessionStorage(e) {
                sessionStorage.removeItem(e), sessionStorage.removeItem("MEMORY_SESSION")
            }
        };
        t.a = o
    }, 356: function (e, t, i) {
        "use strict";
        var n = i(454), o = i(28), s = i(455), r = i(173), a = i(300);
        i.d(t, "b", function () {
            return n.a
        }), i.d(t, "a", function () {
            return o.a
        }), i.d(t, "d", function () {
            return s.a
        }), i.d(t, "c", function () {
            return r.a
        }), i.d(t, "e", function () {
            return a.a
        })
    }, 37: function (e, t, i) {
        "use strict";
        var n = i(235), o = i.n(n), s = i(236), r = i.n(s), a = i(237), l = i.n(a), c = i(238), d = i.n(c), u = i(239),
            h = i.n(u), p = i(240), f = i.n(p), m = i(241), g = i.n(m), v = i(242), y = i.n(v), b = i(243), w = i.n(b),
            x = i(244), _ = i.n(x), I = i(245), A = i.n(I);
        t.a = Object.freeze({
            ArrowRight: o.a,
            ArrowLeft: r.a,
            Selectme: l.a,
            Edit: d.a,
            Clear: h.a,
            Time: f.a,
            Address: g.a,
            Tip: y.a,
            GreenLeaf: w.a,
            WhiteLeaf: _.a,
            WhiteLeafSmall: A.a
        })
    }, 41: function (e, t) {
        e.exports = function (e, t) {
            for (var i = [], n = {}, o = 0; o < t.length; o++) {
                var s = t[o], r = s[0], a = {id: e + ":" + o, css: s[1], media: s[2], sourceMap: s[3]};
                n[r] ? n[r].parts.push(a) : i.push(n[r] = {id: r, parts: [a]})
            }
            return i
        }
    }, 42: function (e, t, i) {
        "use strict";
        const n = document.createElement("div");
        n.style.cssText = ["position: fixed;", "left: 50%;", "bottom: 2rem;", "-webkit-transform: translateX(-50%);", "transform: translateX(-50%);", "color: #fff;", "background: rgba(0, 0, 0, .7);", "line-height: 1.2rem;", "border-radius: .6rem;", "padding: 0 .5rem;", "font-size: .4rem;", "z-index: 10001;", "opacity: 0;", "-webkit-transition: opacity .3s;", "transition: opacity .3s;", "white-space: pre;"].join(" ");
        t.a = ((e, t = 3e3) => {
            e && (n.textContent = e, document.body.appendChild(n), n.clientHeight, n.style.opacity = 1, setTimeout(() => {
                n.style.opacity = 0, setTimeout(() => {
                    try {
                        document.body.removeChild(n)
                    } catch (e) {
                    }
                }, 300)
            }, t))
        })
    }, 43: function (e, t) {
        e.exports = {
            modal: "modal-2c7v1_0",
            "close-bth": "modal-1uLBk_0",
            closeBth: "modal-1uLBk_0",
            close: "modal-EaTRF_0",
            icon: "modal-3o_qY_0"
        }
    }, 44: function (e, t, i) {
        "use strict";
        t.a = function () {
            return new Promise(e => {
                n.store.location ? u === n.store.location && h && p ? v({
                    cityId: h,
                    districtId: p,
                    resolve: e
                }) : (u = n.store.location, n.biz.geoHierarchy(n.store.location).then(t => {
                    const i = t.city.id;
                    let n;
                    t.district ? n = t.district.id : t.county && (n = t.county.id), v({
                        cityId: h = i,
                        districtId: p = n,
                        resolve: e
                    })
                })) : e(d)
            })
        };
        var n = i(4), o = i(30);
        const s = window.crayfish || {}, r = babelHelpers.extends({
            cities: [],
            ALIDAY: {hash: "e0900903d3c51e3e1765d532e9d4bb2apng", url: "/aliday/", limit: 1},
            ACTIVITY_LINKS_ALIDAY: {
                top: [{
                    title: "限量抢购",
                    content: "超值美味 9.9元起",
                    info: "正在抢 >",
                    imghash: "be10fa0ed514c093a7138b0b9a50d61fpng",
                    url: "/sales/#from=h5",
                    showAmount: !0
                }, {
                    title: "外卖节特惠",
                    content: "2亿红包瓜分中",
                    imghash: "0e673f392abf9e0962eee9fa7dd00729png",
                    bigImghash: "0e673f392abf9e0962eee9fa7dd00729png",
                    url: "/aliday/?from=h5",
                    class: "sales"
                }], bottom: []
            },
            floatHongbaoImage: "4a5cfbf733ce1c109bf1eb569820c7a3png",
            arrivalHongbaoHeader: "//fuss10.elemecdn.com/8/2b/db2c819bcd7439d99ea3f76f7c33cpng.png"
        }, s.alidayVOneConfig || {}), a = babelHelpers.extends({
            customizeHeader: !0,
            cities: [],
            ALIDAY: {hash: "93d525a61a616bf0632c3dec30d6c44fpng", url: "/aliday/", limit: 1},
            ACTIVITY_LINKS_ALIDAY: {
                top: [{
                    title: "限量抢购",
                    content: "超值美味 9.9元起",
                    info: "正在抢 >",
                    imghash: "be10fa0ed514c093a7138b0b9a50d61fpng",
                    url: "/sales/#from=h5",
                    showAmount: !0
                }, {
                    title: "十元圣诞餐",
                    content: "外卖节限时特惠",
                    imghash: "5d8b183ad3deb0650c0b95ca92932b71png",
                    bigImghash: "5d8b183ad3deb0650c0b95ca92932b71png",
                    url: "/aliday/?from=h5",
                    class: "sales"
                }], bottom: []
            },
            floatHongbaoImage: "abd95468ff892321197bc3cf31490f5fpng",
            arrivalHongbaoHeader: "//fuss10.elemecdn.com/c/a2/519467bb2476dff80f3b8bf3ece96png.png"
        }, s.alidayAdvConfig || {}), l = babelHelpers.extends({
            customizeHeader: !0,
            cities: [],
            ALIDAY: {hash: "572bd150110af1888a6c4a29fa00b93bpng", url: "/aliday/", limit: 1},
            ACTIVITY_LINKS_ALIDAY: {
                top: [{
                    title: "限量抢购",
                    content: "超值美味 9.9元起",
                    info: "正在抢 >",
                    imghash: "be10fa0ed514c093a7138b0b9a50d61fpng",
                    url: "/sales/#from=h5",
                    showAmount: !0
                }, {
                    title: "领红包再下单",
                    content: "10元圣诞餐/新餐",
                    info: "外卖节特供",
                    imghash: "5d8b183ad3deb0650c0b95ca92932b71png",
                    bigImghash: "5d8b183ad3deb0650c0b95ca92932b71png",
                    url: "/aliday/?from=h5",
                    class: "sales"
                }], bottom: []
            },
            floatHongbaoImage: "925dee1e236942a7eeb3a3cdfae452eepng",
            arrivalHongbaoHeader: "//fuss10.elemecdn.com/c/a2/519467bb2476dff80f3b8bf3ece96png.png"
        }, s.alidayDisAdvConfig || {}), c = babelHelpers.extends({
            cities: [],
            ALIDAY: {hash: "e0900903d3c51e3e1765d532e9d4bb2apng", url: "/aliday/", limit: 1},
            ACTIVITY_LINKS_ALIDAY: {
                top: [{
                    title: "限量抢购",
                    content: "超值美味 9.9元起",
                    info: "正在抢 >",
                    imghash: "be10fa0ed514c093a7138b0b9a50d61fpng",
                    url: "/sales/?from=h5",
                    showAmount: !0
                }, {
                    title: "外卖节特惠",
                    content: "2亿红包瓜分中",
                    imghash: "0e673f392abf9e0962eee9fa7dd00729png",
                    bigImghash: "0e673f392abf9e0962eee9fa7dd00729png",
                    url: "/aliday/#from=h5",
                    class: "sales"
                }], bottom: []
            },
            floatHongbaoImage: "4a5cfbf733ce1c109bf1eb569820c7a3png",
            arrivalHongbaoHeader: "//fuss10.elemecdn.com/8/2b/db2c819bcd7439d99ea3f76f7c33cpng.png"
        }, s.alidayOtherConfig || {}), d = {
            disabled: !0,
            ALIDAY: {hash: "aadc7455fceb16e7514d38b06ec2e97apng", url: "/aliday/", limit: 1},
            ACTIVITY_LINKS_ALIDAY: {top: [], bottom: []},
            floatHongbaoImage: "",
            arrivalHongbaoHeader: ""
        };
        let u, h, p, f;
        const m = {
                4: {
                    ALIDAY: {hash: "de9ab9b713b82f85c814494471b11140png", url: "/aliday/", limit: 1},
                    floatHongbaoImage: "adffea210229a25b786bdb987b69970dpng",
                    arrivalHongbaoHeader: "//fuss10.elemecdn.com/7/2f/0986d847730f6d00e20bf9e40d210png.png"
                },
                5: {
                    ALIDAY: {hash: "b5b93e56328a70f1124d198521696674png", url: "/aliday/", limit: 1},
                    floatHongbaoImage: "8117ff8f1ed3bc56d04882d63f87c962png",
                    arrivalHongbaoHeader: "//fuss10.elemecdn.com/e/68/ef73c1bb89219f32e66cd20c96c73png.png"
                },
                6: {
                    ALIDAY: {hash: "292bbc904974d2aefb94f0be1455afc3png", url: "/aliday/", limit: 1},
                    floatHongbaoImage: "a55cb8be047f49846337fccd9c3d391fpng",
                    arrivalHongbaoHeader: "//fuss10.elemecdn.com/7/e6/c63bd1005873619413f53f495a712png.png"
                }
            }, g = (e, t) => {
                if (e <= 3) return t(l);
                const i = Object.assign({}, l, m[e]);
                i.ACTIVITY_LINKS_ALIDAY.top[1] = {
                    title: `单单返${e}元`,
                    content: "外卖节限时活动",
                    info: `先领${e}元`,
                    imghash: "01a76b6e1b05bfce931429f791730fa8png",
                    bigImghash: "01a76b6e1b05bfce931429f791730fa8png",
                    url: "/aliday/?from=h5",
                    class: "sales"
                }, t(i)
            },
            v = ({cityId: e, districtId: t, resolve: i}) => c.cities.indexOf(t) > -1 || c.cities.indexOf(e) > -1 ? i(c) : a.cities.indexOf(t) > -1 || a.cities.indexOf(e) > -1 ? i(a) : l.cities.indexOf(t) > -1 || l.cities.indexOf(e) > -1 ? void 0 !== f ? g(f, i) : o.a.getBgsKVStorage({
                name: "aliday",
                location: {longitude: n.store.location.longitude, latitude: n.store.location.latitude}
            }).then(e => {
                f = e.aliday_hongbao_amount || 1, g(f, i)
            }).catch(() => {
                i(l)
            }) : i(r.cities.indexOf(t) > -1 || r.cities.indexOf(e) > -1 ? r : d)
    }, 452: function (e, t, i) {
        !function (t, i) {
            e.exports = i()
        }(0, function () {
            return function (e) {
                function t(n) {
                    if (i[n]) return i[n].exports;
                    var o = i[n] = {i: n, l: !1, exports: {}};
                    return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }

                var i = {};
                return t.m = e, t.c = i, t.d = function (e, i, n) {
                    t.o(e, i) || Object.defineProperty(e, i, {configurable: !1, enumerable: !0, get: n})
                }, t.n = function (e) {
                    var i = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(i, "a", i), i
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 8)
            }([function (e, t, i) {
                var n = new (i(2));
                document.body ? n.elem = n.render(document.body) : document.addEventListener("DOMContentLoaded", function () {
                    n.elem = n.render(document.body)
                }, !1), e.exports = n
            }, function (e, t) {
                e.exports = function (e, t, i, n, o, s) {
                    var r, a = e = e || {}, l = typeof e.default;
                    "object" !== l && "function" !== l || (r = e, a = e.default);
                    var c = "function" == typeof a ? a.options : a;
                    t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), i && (c.functional = !0), o && (c._scopeId = o);
                    var d;
                    if (s ? (d = function (e) {
                            (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
                        }, c._ssrRegister = d) : n && (d = n), d) {
                        var u = c.functional, h = u ? c.render : c.beforeCreate;
                        u ? (c._injectStyles = d, c.render = function (e, t) {
                            return d.call(t), h(e, t)
                        }) : c.beforeCreate = h ? [].concat(h, d) : [d]
                    }
                    return {esModule: r, exports: a, options: c}
                }
            }, function (e, t, i) {
                function n(e) {
                    return Array.prototype.slice.call(e, 0)
                }

                function o(e, t, i) {
                    var o = e.querySelectorAll(l);
                    o && n(o).forEach(function (e) {
                        e.attributes && n(e.attributes).forEach(function (n) {
                            var o = n.localName.toLowerCase();
                            if (-1 !== a.indexOf(o)) {
                                var s = c.exec(e.getAttribute(o));
                                if (s && 0 === s[1].indexOf(t)) {
                                    var r = function (e) {
                                        return e.replace(/\(|\)/g, "\\$&")
                                    }(i + s[1].split(t)[1]);
                                    e.setAttribute(o, "url(" + r + ")")
                                }
                            }
                        })
                    })
                }

                function s() {
                    var e = document.getElementsByTagName("base")[0], t = window.location.href.split("#")[0],
                        i = e && e.href;
                    this.urlPrefix = i && i !== t ? t + u : u;
                    var s = new r;
                    s.sniff(), this.browser = s.browser, this.content = [], "ie" !== this.browser.name && i && window.addEventListener("spriteLoaderLocationUpdated", function (e) {
                        var t = this.urlPrefix, i = e.detail.newUrl.split(u)[0] + u;
                        o(this.svg, t, i), this.urlPrefix = i, ("firefox" === this.browser.name || "edge" === this.browser.name || "chrome" === this.browser.name && this.browser.version[0] >= 49) && n(document.querySelectorAll("use[*|href]")).forEach(function (e) {
                            var n = e.getAttribute(h);
                            n && 0 === n.indexOf(t) && e.setAttributeNS(p, h, i + n.split(u)[1])
                        })
                    }.bind(this))
                }

                var r = i(3),
                    a = ["clipPath", "colorProfile", "src", "cursor", "fill", "filter", "marker", "markerStart", "markerMid", "markerEnd", "mask", "stroke"],
                    l = "[" + a.join("],[") + "]", c = /^url\((.*)\)$/, d = function (e) {
                        for (var t = e.querySelector("defs"), i = e.querySelectorAll("symbol linearGradient, symbol radialGradient, symbol pattern"), n = 0, o = i.length; n < o; n++) t.appendChild(i[n])
                    }, u = "#", h = "xlink:href", p = "http://www.w3.org/1999/xlink",
                    f = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="' + p + '"';
                s.styles = ["position:absolute", "width:0", "height:0"], s.spriteTemplate = function () {
                    return f + ' style="' + s.styles.join(";") + '"><defs>{content}</defs></svg>'
                }, s.symbolTemplate = function () {
                    return f + ">{content}</svg>"
                }, s.prototype.content = null, s.prototype.add = function (e, t) {
                    return this.svg && this.appendSymbol(e), this.content.push(e), u + t
                }, s.prototype.wrapSVG = function (e, t) {
                    var i = t.replace("{content}", e), n = function (e) {
                        try {
                            if (document.importNode) return document.importNode(e, !0)
                        } catch (e) {
                        }
                        return e
                    }((new DOMParser).parseFromString(i, "image/svg+xml").documentElement);
                    return "ie" !== this.browser.name && this.urlPrefix && o(n, u, this.urlPrefix), n
                }, s.prototype.appendSymbol = function (e) {
                    var t = this.wrapSVG(e, s.symbolTemplate()).childNodes[0];
                    this.svg.querySelector("defs").appendChild(t), "firefox" === this.browser.name && d(this.svg)
                }, s.prototype.toString = function () {
                    var e = document.createElement("div");
                    return e.appendChild(this.render()), e.innerHTML
                }, s.prototype.render = function (e, t) {
                    e = e || null, t = "boolean" != typeof t || t;
                    var i = this.wrapSVG(this.content.join(""), s.spriteTemplate());
                    return "firefox" === this.browser.name && d(i), e && (t && e.childNodes[0] ? e.insertBefore(i, e.childNodes[0]) : e.appendChild(i)), this.svg = i, i
                }, e.exports = s
            }, function (e, t) {
                !function (t) {
                    function i() {
                        var e = this;
                        r.forEach(function (t) {
                            e[t] = {name: s, version: [], versionString: s}
                        })
                    }

                    function n(e, t, i) {
                        o[t].forEach(function (n) {
                            var o = n[0], r = n[1], a = i.match(o);
                            a && (e[t].name = r, a[2] ? (e[t].versionString = a[2], e[t].version = []) : a[1] ? (e[t].versionString = a[1].replace(/_/g, "."), e[t].version = function (e) {
                                return e.split(/[\._]/).map(function (e) {
                                    return parseInt(e)
                                })
                            }(a[1])) : (e[t].versionString = s, e[t].version = []))
                        })
                    }

                    var o = {
                        browser: [[/msie ([\.\_\d]+)/, "ie"], [/trident\/.*?rv:([\.\_\d]+)/, "ie"], [/firefox\/([\.\_\d]+)/, "firefox"], [/chrome\/([\.\_\d]+)/, "chrome"], [/version\/([\.\_\d]+).*?safari/, "safari"], [/mobile safari ([\.\_\d]+)/, "safari"], [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"], [/crios\/([\.\_\d]+).*?safari/, "chrome"], [/opera/, "opera"], [/opera\/([\.\_\d]+)/, "opera"], [/opera ([\.\_\d]+)/, "opera"], [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"], [/opios\/([a-z\.\_\d]+)/, "opera"], [/blackberry/, "blackberry"], [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"], [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"], [/rim.*?version\/([\.\_\d]+)/, "blackberry"], [/iceweasel\/([\.\_\d]+)/, "iceweasel"], [/edge\/([\.\d]+)/, "edge"]],
                        os: [[/linux ()([a-z\.\_\d]+)/, "linux"], [/mac os x/, "macos"], [/mac os x.*?([\.\_\d]+)/, "macos"], [/os ([\.\_\d]+) like mac os/, "ios"], [/openbsd ()([a-z\.\_\d]+)/, "openbsd"], [/android/, "android"], [/android ([a-z\.\_\d]+);/, "android"], [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"], [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"], [/windows phone.*?([\.\_\d]+)/, "windows.phone"], [/windows mobile/, "windows.mobile"], [/blackberry/, "blackberryos"], [/bb\d+/, "blackberryos"], [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]],
                        device: [[/ipad/, "ipad"], [/iphone/, "iphone"], [/lumia/, "lumia"], [/htc/, "htc"], [/nexus/, "nexus"], [/galaxy nexus/, "galaxy.nexus"], [/nokia/, "nokia"], [/ gt\-/, "galaxy"], [/ sm\-/, "galaxy"], [/xbox/, "xbox"], [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]]
                    }, s = "Unknown", r = Object.keys(o);
                    i.prototype.sniff = function (e) {
                        var t = this, i = (e || navigator.userAgent || "").toLowerCase();
                        r.forEach(function (e) {
                            n(t, e, i)
                        })
                    }, void 0 !== e && e.exports ? e.exports = i : (t.Sniffr = new i, t.Sniffr.sniff(navigator.userAgent))
                }(this)
            }, , , , , function (e, t, i) {
                "use strict";
                Object.defineProperty(t, "__esModule", {value: !0});
                var n = i(10), o = i.n(n), s = {
                    props: {
                        activeHeight: {type: Number, default: document.documentElement.clientHeight / 2},
                        delay: {type: Number, default: 100},
                        iPhoneXMode: {type: Boolean, default: !1}
                    }, data: function () {
                        return {BackTopIcon: o.a, show: !1}
                    }, methods: {
                        back: function () {
                            this.show = !1, window.scroll(0, 0)
                        }, scrollEvent: function () {
                            var e = this;
                            this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function () {
                                e.show = !!(window.scrollY > e.activeHeight)
                            }, this.delay)
                        }
                    }, created: function () {
                        window.addEventListener("scroll", this.scrollEvent)
                    }, destroyed: function () {
                        this.timeout && clearTimeout(this.timeout), window.removeEventListener("scroll", this.scrollEvent)
                    }
                }, r = {
                    render: function () {
                        var e = this, t = e.$createElement, i = e._self._c || t;
                        return i("Transition", {
                            attrs: {
                                enterClass: e.$style.enter,
                                leaveActiveClass: e.$style.leaveActive
                            }
                        }, [i("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.show,
                                expression: "show"
                            }],
                            class: [e.$style.wrapper, e.iPhoneXMode && e.$style.iPhoneXMode],
                            on: {
                                click: function (t) {
                                    t.stopPropagation(), e.back(t)
                                }
                            }
                        }, [i("svg", {class: e.$style.icon}, [i("use", {attrs: {"xlink:href": e.BackTopIcon}})])])])
                    }, staticRenderFns: []
                }, a = i(1)(s, r, !1, function (e) {
                    this.$style = i(9)
                }, null, null).exports;
                t.default = a
            }, function (e, t) {
                e.exports = {
                    wrapper: "BackTop-wrapper_3XDbcaq",
                    iPhoneXMode: "BackTop-iPhoneXMode_BOTAtQM",
                    icon: "BackTop-icon_2Js4K94",
                    enter: "BackTop-enter_3k4vp_R",
                    "leave-active": "BackTop-leave-active_TK_GVwZ",
                    leaveActive: "BackTop-leave-active_TK_GVwZ"
                }
            }, function (e, t, i) {
                var n = i(0);
                e.exports = n.add('<symbol viewBox="0 0 138 128" id="back-top.f9a58c0" ><g fill="#757575" fill-rule="evenodd" transform="translate(18 11)"><rect width="98.522" height="8.917" x="2.239" rx="4.458"/><rect width="89.565" height="8.917" x="6.717" y="57.958" rx="4.458" transform="rotate(90 51.5 62.417)"/><rect width="71.652" height="8.917" x="-6.671" y="40.171" rx="4.458" transform="scale(-1 1) rotate(45 0 -25.757)"/><rect width="71.652" height="8.917" x="38.112" y="40.171" rx="4.458" transform="rotate(45 73.938 44.63)"/></g></symbol>', "back-top.f9a58c0")
            }])
        })
    }, 453: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(28);
        t.a = {
            data: () => ({userId: null, isNewUser: null}), created() {
                this.autoLogin || this._checkUser(), this.$on("ALI_LOGIN", () => {
                    this._checkUser()
                })
            }, methods: {
                _checkUser() {
                    n.biz.userId().then(e => {
                        this.userId = e, this._checkNewUser(e)
                    }).catch(() => {
                        this.userId = 0
                    })
                }, _checkNewUser(e) {
                    o.a.isNewUser(e).then(e => {
                        this.isNewUser = e, this.$emit("NEW_USER_CHECK", e)
                    }).catch(() => {
                    })
                }
            }
        }
    }, 454: function (e, t, i) {
        "use strict";
        t.a = {
            empty: {name: "list-empty", title: "附近没有外卖商家", content: "饿了么正在以光速来到你身边", img: "no-log"},
            locationFailed: {
                name: "location-failed", title: "定位失败", button: {
                    text: "手动选择地址", action: () => {
                    }
                }, img: "error-locate-gray"
            }
        }
    }, 455: function (e, t, i) {
        "use strict";
        const n = {
            set(e, t) {
                try {
                    return localStorage.setItem(e, JSON.stringify(t)), !0
                } catch (e) {
                    return
                }
            }, get(e) {
                try {
                    return JSON.parse(localStorage.getItem(e))
                } catch (e) {
                    return
                }
            }
        };
        t.a = n
    }, 456: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(457), o = i(462), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-74b7d9ee","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(301);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-74b7d9ee"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(301), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/components/miniCart/index.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 457: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(76), s = i(458), r = i.n(s), a = i(459), l = i.n(a), c = i(460), d = i.n(c), u = i(461),
            h = i.n(u);
        t.a = {
            props: ["from", "iPhoneXMode", "aliday"],
            data: () => ({platform: n.platform, showRedCart: !0}),
            computed: {
                cart() {
                    let e = {};
                    return e.style = "shop" === this.from ? "shop" : "default", "shop" === this.from ? e.img = d.a : this.showRedCart ? e.img = r.a : e.img = l.a, e
                }
            },
            mounted() {
                this.platform.isAlipay && "shop" === this.from && ap.setOptionButton({
                    items: [{icon: h.a}], onClick() {
                        ap.pushWindow("/msite/minicart/")
                    }
                }), this.showCartStatus();
                document.addEventListener("visibilitychange", () => {
                    "visible" === document.visibilityState && this.showCartStatus()
                })
            },
            methods: {
                goToCart() {
                    this.platform.isAlipay ? (ap.call("setSessionData", {data: {NOT_SHOW_RED_CART: "true"}}), ap.pushWindow("/msite/minicart/")) : (o.a.set("NOT_SHOW_RED_CART", !0), location.href = "/msite/minicart/")
                }, showCartStatus() {
                    let e = (n.store.get("CARTS_QUANTITY") || []).length;
                    if (e) if (this.platform.isAlipay) {
                        let t = this;
                        ap.getSessionData({keys: ["NOT_SHOW_RED_CART"]}, function (i) {
                            let n = i.data.NOT_SHOW_RED_CART;
                            t.showRedCart = e && !n
                        })
                    } else this.showRedCart = e && !o.a.get("NOT_SHOW_RED_CART"); else this.showRedCart = !1
                }
            }
        }
    }, 458: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 138 128" id="cart_red" ><g fill="none" fill-rule="evenodd"><path fill="#000" fill-opacity=".54" d="M27.148 92.856a4.016 4.016 0 0 0 3.836 2.811h49.947c14.88 0 27.63-10.598 30.291-25.18l6.712-36.772c.448-2.455-1.446-4.715-3.951-4.715H41.699a4.008 4.008 0 0 0-4.016 4c0 2.209 1.798 4 4.016 4h67.472l-5.852 32.057c-1.966 10.777-11.39 18.61-22.388 18.61H34.46l-8.884-61.933a3.989 3.989 0 0 0-.465-1.377l-6.694-12a4.025 4.025 0 0 0-5.46-1.553 3.991 3.991 0 0 0-1.56 5.439l6.332 11.354 9.266 64.6c.033.227.084.447.152.66zm2.497 17.478c0-3.683 2.996-6.667 6.694-6.667 3.697 0 6.693 2.984 6.693 6.667 0 3.682-2.996 6.666-6.693 6.666-3.698 0-6.694-2.984-6.694-6.666zm56.225 0c0-3.683 2.996-6.667 6.694-6.667 3.697 0 6.693 2.984 6.693 6.667 0 3.682-2.996 6.666-6.693 6.666-3.698 0-6.694-2.984-6.694-6.666z"/><path fill="#FF5339" d="M136 18c0 8.836-7.164 16-16 16s-16-7.164-16-16 7.164-16 16-16 16 7.164 16 16"/></g></symbol>', "cart_red")
    }, 459: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 128 128" id="cart" ><path fill="#000" fill-opacity=".54" fill-rule="evenodd" d="M26.846 93.189A4.002 4.002 0 0 0 30.666 96h49.747c14.822 0 27.521-10.599 30.17-25.18l6.686-36.774a4 4 0 0 0-3.936-4.715H41.34a4 4 0 1 0 0 8h67.202l-5.828 32.058C100.754 80.166 91.368 88 80.413 88H34.13l-8.848-61.935a4 4 0 0 0-.463-1.377l-6.667-12a4 4 0 1 0-6.993 3.885l6.308 11.354 9.229 64.602c.032.228.083.448.151.66zm2.487 17.478A6.666 6.666 0 0 1 36 104a6.666 6.666 0 0 1 6.667 6.667A6.666 6.666 0 0 1 36 117.333a6.666 6.666 0 0 1-6.667-6.666zm56 0A6.666 6.666 0 0 1 92 104a6.666 6.666 0 0 1 6.667 6.667A6.666 6.666 0 0 1 92 117.333a6.666 6.666 0 0 1-6.667-6.666z"/></symbol>', "cart")
    }, 46: function (e, t, i) {
        "use strict";
        var n = i(47), o = i(21);
        t.a = (e => {
            e.component("Link", n.a), e.prototype.$visit = o.a
        })
    }, 460: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 128 128" id="shop_cart" ><path fill="#FFF" fill-rule="evenodd" d="M26.846 93.189A4.002 4.002 0 0 0 30.666 96h49.747c14.822 0 27.521-10.599 30.17-25.18l6.686-36.774a4 4 0 0 0-3.936-4.715H41.34a4 4 0 1 0 0 8h67.202l-5.828 32.058C100.754 80.166 91.368 88 80.413 88H34.13l-8.848-61.935a4 4 0 0 0-.463-1.377l-6.667-12a4 4 0 1 0-6.993 3.885l6.308 11.354 9.229 64.602c.032.228.083.448.151.66zm2.487 17.478A6.666 6.666 0 0 1 36 104a6.666 6.666 0 0 1 6.667 6.667A6.666 6.666 0 0 1 36 117.333a6.666 6.666 0 0 1-6.667-6.666zm56 0A6.666 6.666 0 0 1 92 104a6.666 6.666 0 0 1 6.667 6.667A6.666 6.666 0 0 1 92 117.333a6.666 6.666 0 0 1-6.667-6.666z"/></symbol>', "shop_cart")
    }, 461: function (e, t) {
        e.exports = "data:image/png;base64,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"
    }, 462: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this.$createElement, t = this._self._c || e;
            return this.platform.isAlipay && "shop" === this.from ? this._e() : t("div", {
                class: [this.$style[this.cart.style], this.iPhoneXMode && this.$style.iPhoneXMode, this.aliday && this.$style.aliday],
                on: {click: this.goToCart}
            }, [t("svg", [t("use", {attrs: {"xlink:href": this.cart.img}})])])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 47: function (e, t, i) {
        "use strict";
        var n = i(21);
        const o = ["style", "staticStyle", "class", "staticClass"];
        t.a = {
            functional: !0, render(e, t) {
                const {props: i, data: s} = t, r = i.href, a = {};
                return o.forEach(e => {
                    s[e] && (a[e] = s[e])
                }), e("a", babelHelpers.extends({}, a, {
                    attrs: babelHelpers.extends({}, s.attrs, {href: "javascript:;"}),
                    on: {
                        click(e) {
                            e.stopPropagation(), Object(n.a)(r, {replace: void 0 !== i.replace})
                        }
                    }
                }), t.children)
            }
        }
    }, 48: function (e, t, i) {
        "use strict";
        const n = window.crayfish || {}, o = (n.toptoon && n.toptoon.hash, babelHelpers.extends({
            hash: "aadc7455fceb16e7514d38b06ec2e97apng",
            url: "/aliday/",
            limit: 1
        }, n.aliday || {}));
        t.c = o;
        const s = babelHelpers.extends({
            hash: "3c845b2ec2855ed55d90c45bf9b07abbpng",
            url: "/newuser/"
        }, n.newUserLink || {});
        t.d = s;
        const r = babelHelpers.extends({
            hash: "14f423cd895f75b33a0139470c435257png",
            url: "/newuser/"
        }, n.agentCityNewUser || {});
        t.b = r;
        const a = babelHelpers.extends({
            top: [{
                title: "限量抢购",
                content: "超值美味 9.9元起",
                info: "正在抢 >",
                imghash: "be10fa0ed514c093a7138b0b9a50d61fpng",
                class: "sales",
                url: "/sales/#from=h5",
                showAmount: !0
            }, {
                title: "热卖套餐",
                content: "销量最高，好评最多",
                info: "TOP 100 >",
                imghash: "dd416ff085900d62b8d60fa7e9c6b65dpng",
                bigImghash: "eeedf43e7e53f6e1346c3fda0609f1d3png",
                url: "/ranking/#banner=&restaurant_category_ids=None&type=hot_sale_combo&title=&from=h5"
            }]
        }, n.activityLinks || {});
        t.a = a;
        babelHelpers.extends({
            top: [{
                title: "限量抢购",
                content: "超值美味 9.9元起",
                info: "正在抢 >",
                imghash: "be10fa0ed514c093a7138b0b9a50d61fpng",
                url: "/sales/#from=h5",
                showAmount: !0
            }, {
                title: "外卖节特惠",
                content: "2亿红包瓜分中",
                imghash: "0e673f392abf9e0962eee9fa7dd00729png",
                bigImghash: "0e673f392abf9e0962eee9fa7dd00729png",
                url: "/aliday/#from=h5",
                class: "sales"
            }]
        }, n.activityLinksAliday || {})
    }, 5: function (e, t, i) {
        function n(e) {
            return Array.prototype.slice.call(e, 0)
        }

        function o(e, t, i) {
            var o = e.querySelectorAll(l);
            o && n(o).forEach(function (e) {
                e.attributes && n(e.attributes).forEach(function (n) {
                    var o = n.localName.toLowerCase();
                    if (-1 !== a.indexOf(o)) {
                        var s = c.exec(e.getAttribute(o));
                        if (s && 0 === s[1].indexOf(t)) {
                            var r = function (e) {
                                return e.replace(/\(|\)/g, "\\$&")
                            }(i + s[1].split(t)[1]);
                            e.setAttribute(o, "url(" + r + ")")
                        }
                    }
                })
            })
        }

        function s() {
            var e = document.getElementsByTagName("base")[0], t = window.location.href.split("#")[0], i = e && e.href;
            this.urlPrefix = i && i !== t ? t + u : u;
            var s = new r;
            s.sniff(), this.browser = s.browser, this.content = [], "ie" !== this.browser.name && i && window.addEventListener("spriteLoaderLocationUpdated", function (e) {
                var t = this.urlPrefix, i = e.detail.newUrl.split(u)[0] + u;
                if (o(this.svg, t, i), this.urlPrefix = i, "chrome" !== this.browser.name || this.browser.version[0] >= 49) {
                    n(document.querySelectorAll("use[*|href]")).forEach(function (e) {
                        var n = e.getAttribute(h);
                        n && 0 === n.indexOf(t) && e.setAttributeNS(p, h, i + n.split(u)[1])
                    })
                }
            }.bind(this))
        }

        var r = i(6),
            a = ["clipPath", "colorProfile", "src", "cursor", "fill", "filter", "marker", "markerStart", "markerMid", "markerEnd", "mask", "stroke"],
            l = "[" + a.join("],[") + "]", c = /^url\((.*)\)$/, d = function (e) {
                for (var t = e.querySelector("defs"), i = e.querySelectorAll("symbol linearGradient, symbol radialGradient, symbol pattern"), n = 0, o = i.length; n < o; n++) t.appendChild(i[n])
            }, u = "#", h = "xlink:href", p = "http://www.w3.org/1999/xlink",
            f = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="' + p + '"';
        s.styles = ["position:absolute", "width:0", "height:0"], s.spriteTemplate = function () {
            return f + ' style="' + s.styles.join(";") + '"><defs>{content}</defs></svg>'
        }, s.symbolTemplate = function () {
            return f + ">{content}</svg>"
        }, s.prototype.content = null, s.prototype.add = function (e, t) {
            return this.svg && this.appendSymbol(e), this.content.push(e), u + t
        }, s.prototype.wrapSVG = function (e, t) {
            var i = t.replace("{content}", e), n = function (e) {
                try {
                    if (document.importNode) return document.importNode(e, !0)
                } catch (e) {
                }
                return e
            }((new DOMParser).parseFromString(i, "image/svg+xml").documentElement);
            return "ie" !== this.browser.name && this.urlPrefix && o(n, u, this.urlPrefix), n
        }, s.prototype.appendSymbol = function (e) {
            var t = this.wrapSVG(e, s.symbolTemplate()).childNodes[0];
            this.svg.querySelector("defs").appendChild(t), "firefox" === this.browser.name && d(this.svg)
        }, s.prototype.toString = function () {
            var e = document.createElement("div");
            return e.appendChild(this.render()), e.innerHTML
        }, s.prototype.render = function (e, t) {
            e = e || null, t = "boolean" != typeof t || t;
            var i = this.wrapSVG(this.content.join(""), s.spriteTemplate());
            return "firefox" === this.browser.name && d(i), e && (t && e.childNodes[0] ? e.insertBefore(i, e.childNodes[0]) : e.appendChild(i)), this.svg = i, i
        }, e.exports = s
    }, 55: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(68), o = i(69), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-634b1898","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./modal.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(43);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-634b1898"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(43), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/components/Arrival/modal.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] modal.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 56: function (e, t) {
        e.exports = {tag: "mini-tag-1Lyw4_0", ghost: "mini-tag-1ezSQ_0"}
    }, 57: function (e, t, i) {
        "use strict";
        var n = i(4);
        const o = e => 200 === e.code ? e.data : Promise.reject("Error"), s = {
            receiveHongbao: (e, t) => Object(n.$fetch)(`/marketing/v1/users/${e}/alipay_startup_hongbaos`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({geohash: t})
            }),
            handleHongbao: (e, t, i) => Object(n.$fetch)("//openapi.ele.me/v2/koubei/hongbao/rain/", {
                method: "POST",
                credentials: "include",
                headers: {"content-type": "application/json; charset=utf-8"},
                body: JSON.stringify({
                    user_id: e,
                    geohash: t,
                    action: i,
                    is_upgraded: "pay_mt" === UParams().from ? 1 : void 0
                })
            }).then(o),
            rejectHongbao: e => Object(n.$fetch)(`/marketing/v1/users/${e}/alipay_startup_hongbaos/reject`, {
                credentials: "include",
                method: "POST"
            }),
            getHongbao: (e, t) => Object(n.$fetch)(`/marketing/v1/users/${e}/alipay_startup_hongbaos?geohash=${t}`),
            callbackHongbao: (e, t) => Object(n.$fetch)(`/marketing/users/${e}/startup_hongbao/callback`, {
                credentials: "include",
                method: "POST",
                body: JSON.stringify({hongbao_sns: t})
            }),
            crayfish: () => Object(n.$fetch)("https://crayfish.elemecdn.com/h5.ele.me@json/msite"),
            isNewUser: e => Object(n.$fetch)(`/eus/v1/users/${e}/new_user_check`)
        };
        t.a = s
    }, 58: function (e, t) {
        e.exports = {
            lottery: "index-1xhfx_0",
            content: "index-3FoUn_0",
            "hongbao-wrapper": "index-3hjwX_0",
            hongbaoWrapper: "index-3hjwX_0",
            header: "index-3Z-kd_0",
            aliday: "index-1ivj2_0",
            "btn-wrapper": "index-dwgZG_0",
            btnWrapper: "index-dwgZG_0",
            tip: "index-16uy3_0",
            btn: "index-5oyOG_0",
            cancel: "index-14J5K_0",
            accept: "index-2XaEi_0",
            enterActive: "index-2z0qa_0",
            showModal: "index-1bXMf_0"
        }
    }, 59: function (e, t, i) {
        "use strict";
        t.a = {
            useBtn: 101409,
            receiveBtn: 101408,
            closeBtn: 101409,
            appear: 101859,
            festivalAppear: 101859,
            festivalHeaderClick: 102061,
            festivalReceiveBtn: 102062,
            festivalCloseBtn: 102063,
            festivalUseBtn: 102064
        }
    }, 6: function (e, t) {
        !function (t) {
            function i() {
                var e = this;
                r.forEach(function (t) {
                    e[t] = {name: s, version: [], versionString: s}
                })
            }

            function n(e, t, i) {
                o[t].forEach(function (n) {
                    var o = n[0], r = n[1], a = i.match(o);
                    a && (e[t].name = r, a[2] ? (e[t].versionString = a[2], e[t].version = []) : a[1] ? (e[t].versionString = a[1].replace(/_/g, "."), e[t].version = function (e) {
                        return e.split(/[\._]/).map(function (e) {
                            return parseInt(e)
                        })
                    }(a[1])) : (e[t].versionString = s, e[t].version = []))
                })
            }

            var o = {
                browser: [[/msie ([\.\_\d]+)/, "ie"], [/trident\/.*?rv:([\.\_\d]+)/, "ie"], [/firefox\/([\.\_\d]+)/, "firefox"], [/chrome\/([\.\_\d]+)/, "chrome"], [/version\/([\.\_\d]+).*?safari/, "safari"], [/mobile safari ([\.\_\d]+)/, "safari"], [/android.*?version\/([\.\_\d]+).*?safari/, "com.android.browser"], [/crios\/([\.\_\d]+).*?safari/, "chrome"], [/opera/, "opera"], [/opera\/([\.\_\d]+)/, "opera"], [/opera ([\.\_\d]+)/, "opera"], [/opera mini.*?version\/([\.\_\d]+)/, "opera.mini"], [/opios\/([a-z\.\_\d]+)/, "opera"], [/blackberry/, "blackberry"], [/blackberry.*?version\/([\.\_\d]+)/, "blackberry"], [/bb\d+.*?version\/([\.\_\d]+)/, "blackberry"], [/rim.*?version\/([\.\_\d]+)/, "blackberry"], [/iceweasel\/([\.\_\d]+)/, "iceweasel"], [/edge\/([\.\d]+)/, "edge"]],
                os: [[/linux ()([a-z\.\_\d]+)/, "linux"], [/mac os x/, "macos"], [/mac os x.*?([\.\_\d]+)/, "macos"], [/os ([\.\_\d]+) like mac os/, "ios"], [/openbsd ()([a-z\.\_\d]+)/, "openbsd"], [/android/, "android"], [/android ([a-z\.\_\d]+);/, "android"], [/mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/, "firefoxos"], [/windows\s*(?:nt)?\s*([\.\_\d]+)/, "windows"], [/windows phone.*?([\.\_\d]+)/, "windows.phone"], [/windows mobile/, "windows.mobile"], [/blackberry/, "blackberryos"], [/bb\d+/, "blackberryos"], [/rim.*?os\s*([\.\_\d]+)/, "blackberryos"]],
                device: [[/ipad/, "ipad"], [/iphone/, "iphone"], [/lumia/, "lumia"], [/htc/, "htc"], [/nexus/, "nexus"], [/galaxy nexus/, "galaxy.nexus"], [/nokia/, "nokia"], [/ gt\-/, "galaxy"], [/ sm\-/, "galaxy"], [/xbox/, "xbox"], [/(?:bb\d+)|(?:blackberry)|(?: rim )/, "blackberry"]]
            }, s = "Unknown", r = Object.keys(o);
            i.prototype.sniff = function (e) {
                var t = this, i = (e || navigator.userAgent || "").toLowerCase();
                r.forEach(function (e) {
                    n(t, e, i)
                })
            }, void 0 !== e && e.exports ? e.exports = i : (t.Sniffr = new i, t.Sniffr.sniff(navigator.userAgent))
        }(this)
    }, 60: function (e, t) {
        e.exports = {
            hongbao: "hongbao-vbGOS_0",
            amount: "hongbao-1ch5T_0",
            sum: "hongbao-lFpkY_0",
            decimal: "hongbao-1v_Yk_0",
            description: "hongbao-3oC02_0",
            name: "hongbao-2-i-1_0",
            "tag-wrap": "hongbao-1Vf3n_0",
            tagWrap: "hongbao-1Vf3n_0",
            normal: "hongbao-2_CNE_0",
            cash: "hongbao-39TwM_0",
            "path-desc": "hongbao-Eh9An_0",
            pathDesc: "hongbao-Eh9An_0",
            operation: "hongbao-2L0fh_0",
            disabled: "hongbao-2z9II_0"
        }
    }, 63: function (e, t, i) {
        !function (t, i) {
            e.exports = i()
        }(0, function () {
            "use strict";
            var e = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }, t = Object.create(null), i = function (e, t) {
                return function (e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e
                }({}, t, String(!!e))
            };
            ["atomic", "busy", "grabbed", "haspopup", "multiselectable", "readonly", "required", "checked", "disabled", "expanded", "hidden", "invalid", "pressed", "selected"].forEach(function (e) {
                t[e] = i
            });
            var n = e(Object.create(null), t);
            return {
                install: function (t) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    !function (e) {
                        Array.isArray(e) && e.length && window.addEventListener("DOMContentLoaded", function () {
                            var t = document.body.childNodes;
                            Array.prototype.map.call(t, function (t) {
                                if ("string" == typeof t.tagName) {
                                    var i = t.tagName.toLowerCase();
                                    e.indexOf(i) >= 0 && t.setAttribute("aria-hidden", "true")
                                }
                            })
                        })
                    }(i.blacklist);
                    var o = i.rules || Object.create(null), s = e(Object.create(null), n, o);
                    t.directive("aria", function (e, t) {
                        var i = t.arg && s[t.arg];
                        if ("function" == typeof i) {
                            var n = i(t.value, t.arg);
                            Object.keys(n).forEach(function (t) {
                                e.setAttribute("aria-" + t, n[t])
                            })
                        }
                    })
                }
            }
        })
    }, 67: function (e, t, i) {
        var n = i(139);
        "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        i(18)("c5535bfa", n, !1)
    }, 68: function (e, t, i) {
        "use strict";
        t.a = {
            props: {showClose: {type: Boolean, default: !0}}, mounted() {
                document.body.classList.add("slide-penetration")
            }, methods: {
                closeModal() {
                    document.body.classList.remove("slide-penetration"), this.$emit("CLOSEMODAL")
                }
            }, destroyed() {
                document.body.classList.remove("slide-penetration")
            }
        }
    }, 69: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {
                class: e.$style.modal, on: {
                    touchmove: function (e) {
                        e.preventDefault(), e.stopPropagation()
                    }
                }
            }, [i("div", {class: e.$style.wrapper}, [e._t("default")], 2), e.showClose ? i("div", {
                class: e.$style.close,
                on: {
                    click: function (t) {
                        t.stopPropagation(), e.closeModal(t)
                    }
                }
            }, [i("svg", {
                class: e.$style.icon,
                attrs: {xmlns: "http://www.w3.org/2000/svg", width: "60", height: "60", viewBox: "0 0 60 60"}
            }, [i("g", {
                attrs: {
                    fill: "none",
                    "fill-rule": "evenodd",
                    opacity: ".8",
                    transform: "translate(3 3)"
                }
            }, [i("path", {
                attrs: {
                    fill: "#FFF",
                    d: "M27 25.384l9.697-9.698a1.143 1.143 0 1 1 1.617 1.617L28.616 27l9.698 9.697a1.143 1.143 0 1 1-1.617 1.617L27 28.616l-9.697 9.698a1.143 1.143 0 1 1-1.617-1.617L25.384 27l-9.698-9.697a1.143 1.143 0 1 1 1.617-1.617L27 25.384z"
                }
            }), i("circle", {
                attrs: {
                    cx: "27",
                    cy: "27",
                    r: "26.75",
                    stroke: "#FFF",
                    "stroke-width": ".5"
                }
            })])])]) : e._e()])
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 70: function (e, t, i) {
        var n = i(142);
        "string" == typeof n && (n = [[e.i, n, ""]]), n.locals && (e.exports = n.locals);
        i(18)("c1f44694", n, !1)
    }, 71: function (e, t) {
        e.exports = {
            hongbao: "hongbao-14H5P_0",
            amount: "hongbao-3006J_0",
            sum: "hongbao-1o0kY_0",
            decimal: "hongbao-3Nfu4_0",
            description: "hongbao-2NOzM_0",
            name: "hongbao-VZnAm_0",
            "tag-wrap": "hongbao-2Nhby_0",
            tagWrap: "hongbao-2Nhby_0",
            operation: "hongbao-xCp-V_0"
        }
    }, 76: function (e, t, i) {
        "use strict";
        t.a = {
            _getNSFromLocation: () => location.pathname.substr(1),
            get: e => JSON.parse(sessionStorage.getItem(e)),
            set(e, t) {
                sessionStorage.setItem(e, JSON.stringify(t))
            },
            restore() {
                return this.get(this._getNSFromLocation())
            },
            cache(e) {
                this.set(this._getNSFromLocation(), e)
            }
        }
    }, 787: function (e, t) {
        e.exports = {
            page: "poi-3TsQq_0",
            slide: "poi-1F-EI_0",
            header: "poi-2PxTv_0",
            title: "poi-2T3Ra_0",
            addAddress: "poi-3H0y8_0",
            arrow: "poi-1bd4J_0",
            form: "poi-3jipw_0",
            img: "poi-2wSRi_0",
            input: "poi-i4JjZ_0",
            section: "poi-3pogo_0",
            noDataTip: "poi-4wa7l_0",
            current: "poi-1GubY_0",
            relocate: "poi-sQrcT_0",
            reloading: "poi-3fu7L_0"
        }
    }, 788: function (e, t) {
        e.exports = {
            cell: "AddressCell-BfZ31_0",
            name: "AddressCell-3dWFD_0",
            sex: "AddressCell-o9QA5_0",
            phone: "AddressCell-2NFpU_0",
            address: "AddressCell-2WH1g_0"
        }
    }, 789: function (e, t) {
        e.exports = {
            container: "headerInfo-8HgnD_0",
            iPhoneXMode: "headerInfo-3f_qD_0",
            addressAndWeather: "headerInfo-3GeWT_0",
            addressContainer: "headerInfo-cyYks_0",
            addressIcon: "headerInfo-3RbCQ_0",
            addressExtraIcon: "headerInfo-Rm0Tf_0",
            addressText: "headerInfo-sePME_0",
            category: "headerInfo-1cHMk_0",
            categoryIcon: "headerInfo-2g03T_0",
            categoryText: "headerInfo-2IwrF_0",
            weather: "headerInfo-YHnnc_0",
            temperature: "headerInfo-VHRdi_0",
            description: "headerInfo-1qeH7_0",
            weatherDesc: "headerInfo-3iQyp_0",
            weatherIcon: "headerInfo-3JrQD_0"
        }
    }, 790: function (e, t, i) {
        "use strict";
        var n = i(4);
        t.a = {
            weather: ({latitude: e, longitude: t}) => Object(n.$fetch)(`/bgs/weather/current?latitude=${e}&longitude=${t}`),
            hotSearch: ({latitude: e, longitude: t}) => Object(n.$fetch)(`/shopping/v3/hot_search_words?latitude=${e}&longitude=${t}`)
        }
    }, 791: function (e, t) {
        e.exports = {
            "menu-wrapper": "keywords-2ZIwQ_0",
            menuWrapper: "keywords-2ZIwQ_0",
            "menu-container": "keywords-3SRWv_0",
            menuContainer: "keywords-3SRWv_0"
        }
    }, 792: function (e, t) {
        e.exports = {
            root: "index-1ECZ3_0",
            activity: "index-1y1Q5_0",
            toptoon: "index-1FcIJ_0",
            top: "index-3xB2N_0",
            bottom: "index-QE-ye_0",
            item: "index-Q3GS5_0",
            title: "index-1qvN6_0",
            content: "index-2W67h_0",
            info: "index-1DFa7_0",
            sales: "index-3OXhZ_0",
            onlyOne: "index-1xT5J_0",
            special: "index-3Dnrh_0",
            newUser: "index-CUiNS_0"
        }
    }, 793: function (e, t) {
        e.exports = {
            banner: "index-1LTSU_0",
            wrapper: "index-1hmZ6_0",
            description: "index-2NERp_0",
            amount: "index-V4Cdt_0",
            footer: "index-2tDjN_0",
            radio: "index-2hmYF_0",
            checked: "index-10xzF_0",
            "non-supervip": "index-1610w_0",
            nonSupervip: "index-1610w_0",
            tip: "index-2L44D_0",
            hint: "index-2Gbe3_0",
            crownLogo: "index-2UVhR_0"
        }
    }, 794: function (e, t) {
        e.exports = {
            wrapper: "index-2pa7H_0",
            iPhoneXMode: "index-Fz4WW_0",
            icon: "index-28tn3_0",
            enter: "index-nf2Po_0",
            "leave-active": "index-Q9MGL_0",
            leaveActive: "index-Q9MGL_0"
        }
    }, 795: function (e, t) {
        e.exports = {categories: "index-3yVNs_0", category: "index-vmSDz_0", categoryText: "index-12yQI_0"}
    }, 82: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(83), o = !1, s = {};
            e.hot && e.hot.accept(['!!../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-a8293bc8","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./mini-tag.vue'], function () {
                var e = s.$style;
                if (e) {
                    var t = i(56);
                    JSON.stringify(t) !== JSON.stringify(e) && (s.$style = t, i(1).rerender("data-v-a8293bc8"))
                }
            });
            var r = function (e) {
                o || (s.$style = i(56), Object.defineProperty(this, "$style", {
                    get: function () {
                        return s.$style
                    }
                }))
            }, a = i(0)(n.a, null, r, null, null);
            a.options.__file = "src/components/mushroom/mini-tag.vue", a.esModule && Object.keys(a.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), t.a = a.exports
        }).call(t, i(2)(e))
    }, 83: function (e, t, i) {
        "use strict";
        const n = ["style", "staticStyle", "class", "staticClass"];
        t.a = {
            functional: !0,
            props: {ghostClass: {type: String, required: !1}, ghostStyle: {type: Object, required: !1}},
            render(e, t) {
                if (!t.children[0] || !t.children[0].text) return null;
                const {data: i, props: o, $style: s} = t, r = t.children[0].text, a = {}, l = e("span", {
                    staticClass: o.ghostClass ? `${o.ghostClass} ${s.ghost}` : s.ghost,
                    style: o.ghostStyle
                }, r);
                return n.forEach(e => {
                    i[e] && (a[e] = i[e])
                }), a.staticClass = a.staticClass ? `${a.staticClass} ${s.tag}` : s.tag, e("span", babelHelpers.extends({}, a), [r, l])
            }
        }
    }, 84: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(85), o = i(92), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-9c56a786","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./index.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(58);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-9c56a786"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(58), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/components/Arrival/index.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 85: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(57), s = i(28), r = i(59), a = i(86), l = i(55), c = i(89), d = i(91), u = i(48), h = i(44);
        const p = UParams();
        t.a = {
            props: {geohash: {required: !0, type: String}}, data() {
                return this.ubtConfig = r.a, this.Icon = c.a, {
                    showModal: !1,
                    obtained: !1,
                    busy: !1,
                    hongbaoList: [],
                    isNewUser: !1,
                    festivalVersion: !1,
                    userId: 0,
                    timestampObj: {}
                }
            }, components: {Hongbao: a.a, Modal: l.a}, directives: {scrollfix: d.a}, mounted() {
                const e = UParams();
                e.auth_arr || -1 !== ["pay_antvip", "pay_living"].indexOf(e.from) || this.getHongbao()
            }, methods: {
                getHongbao() {
                    n.biz.userId().then(this.canAlertPop).then(() => Promise.all([o.a.handleHongbao(this.userId, this.geohash, 0), o.a.isNewUser(this.userId)])).then(([e, t]) => {
                        if (t && (this.isNewUser = t), 0 === e.length) throw new Error("EMPTY");
                        this.hongbaoList = e.sort((e, t) => e.hongbao_type - t.hongbao_type), this.checkAliday()
                    }).catch(() => {
                    })
                }, checkAliday() {
                    const e = new Image;
                    e.onload = (() => {
                        this.showModal = !0, this.$nextTick(() => {
                            this.$refs.header.style.backgroundImage = `url(${e.src})`
                        })
                    }), Promise.all([Object(h.a)(), s.a.showAlidayShop(u.c.limit, this.geohash)]).then(([t, i]) => {
                        i && !t.disabled ? (this.festivalVersion = !0, e.src = t.arrivalHongbaoHeader, UBT.send("EVENT", {
                            id: this.ubtConfig.festivalAppear,
                            params: {type: 16, user_type: this.isNewUser ? 0 : 1}
                        })) : (UBT.send("EVENT", {
                            id: this.ubtConfig.appear,
                            params: {type: this.type}
                        }), e.src = "//fuss10.elemecdn.com/0/57/4bcd89520c20a967d6bac520d96c2png.png")
                    }).catch(() => {
                    })
                }, setStorage() {
                    this.timestampObj[this.userId] = Date.now(), localStorage.setItem("ARRIVAL_STAMP", JSON.stringify(this.timestampObj))
                }, canAlertPop(e) {
                    this.userId = e, this.timestampObj = JSON.parse(localStorage.getItem("ARRIVAL_STAMP")) || {};
                    const t = this.timestampObj[this.userId];
                    if (t && new Date(t).setHours(0, 0, 0, 0) === (new Date).setHours(0, 0, 0, 0)) throw new Error("WAITING")
                }, closeModal() {
                    this.obtained || (o.a.handleHongbao(this.userId, this.geohash, 2).catch(() => {
                    }), this.festivalVersion ? UBT.send("EVENT", {
                        id: this.ubtConfig.festivalCloseBtn,
                        params: {type: 16, user_type: this.isNewUser ? 0 : 1}
                    }) : UBT.send("EVENT", {
                        id: this.ubtConfig.closeBtn,
                        params: {type: this.type}
                    })), document.body.classList.remove("slide-penetration"), this.setStorage(), this.showModal = !1
                }, acceptHandler() {
                    if (!this.busy) {
                        if (this.obtained) return this.closeModal();
                        this.busy = !0, o.a.handleHongbao(this.userId, this.geohash, 1).then(() => {
                            this.obtained = !0, this.setStorage()
                        }).catch(() => {
                        }).always(() => {
                            this.busy = !1, this.festivalVersion ? UBT.send("EVENT", {
                                id: this.ubtConfig.festivalReceiveBtn,
                                params: {type: 16, user_type: this.isNewUser ? 0 : 1}
                            }) : UBT.send("EVENT", {id: this.ubtConfig.receiveBtn, params: {type: this.type}})
                        })
                    }
                }, goFestival() {
                    this.festivalVersion && (UBT.send("EVENT", {
                        id: this.ubtConfig.festivalHeaderClick,
                        params: {type: 16, user_type: this.isNewUser ? 0 : 1}
                    }), ap.pushWindow(u.c.url))
                }, onModalClose() {
                    this.showModal = !1
                }
            }, computed: {
                btnText() {
                    return this.busy ? "领取中..." : this.obtained ? "立即使用" : this.hongbaoList.length > 1 ? "全部领取" : "立即领取"
                }, type() {
                    return "pay_success" === p.from ? this.isNewUser ? 0 : 1 : this.isNewUser ? 2 : 3
                }
            }
        }
    }, 86: function (e, t, i) {
        "use strict";
        (function (e) {
            var n = i(87), o = i(88), s = !1, r = {};
            e.hot && e.hot.accept(['!!../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"omit":1,"remove":true}!vue-style-loader!css-loader?{"minimize":true,"localIdentName":"[name]-[hash:base64:5]_0","camelCase":true,"modules":true,"importLoaders":true}!../../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-53e972bb","scoped":false,"hasInlineConfig":true}!../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./hongbao.vue'], function () {
                var e = r.$style;
                if (e) {
                    var t = i(60);
                    JSON.stringify(t) !== JSON.stringify(e) && (r.$style = t, i(1).rerender("data-v-53e972bb"))
                }
            });
            var a = function (e) {
                s || (r.$style = i(60), Object.defineProperty(this, "$style", {
                    get: function () {
                        return r.$style
                    }
                }))
            }, l = i(0)(n.a, o.a, a, null, null);
            l.options.__file = "src/components/Arrival/hongbao.vue", l.esModule && Object.keys(l.esModule).some(function (e) {
                return "default" !== e && "__" !== e.substr(0, 2)
            }) && console.error("named exports are not supported in *.vue files."), l.options.functional && console.error("[vue-loader] hongbao.vue: functional components are not supported with templates, they should use render functions."), t.a = l.exports
        }).call(t, i(2)(e))
    }, 87: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(48), s = i(59);
        t.a = {
            props: {
                hongbao: {type: Object, required: !0},
                obtained: {type: Boolean, default: !1},
                isNewUser: {type: Boolean, default: !1},
                festival: {type: Boolean, default: !1}
            }, computed: {
                amount() {
                    return String(this.hongbao.amount).split(".")
                }
            }, methods: {
                handleClick() {
                    this.hongbao.hongbao_name.indexOf("外卖节") > -1 && n.platform.isAlipay ? (UBT.send("EVENT", {
                        id: s.a.festivalUseBtn,
                        params: {type: 16, user_type: this.isNewUser ? 0 : 1, hongbao_type: 0}
                    }), ap.pushWindow(o.c.url)) : (this.festival ? UBT.send("EVENT", {
                        id: s.a.festivalUseBtn,
                        params: {type: 16, user_type: this.isNewUser ? 0 : 1, hongbao_type: 1}
                    }) : UBT.send("EVENT", {id: s.a.useBtn}), location.href = "//h5.ele.me")
                }
            }
        }
    }, 88: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("div", {class: e.$style.hongbao}, [i("div", {class: e.$style.amount}, [i("p", {class: e.$style.sum}, [i("small", {attrs: {"aria-hidden": "true"}}, [e._v("¥")]), i("span", [e._v(e._s(e.amount[0]))]), +e.amount[1] ? i("span", {class: e.$style.decimal}, [e._v("." + e._s(e.amount[1]))]) : e._e()]), e.hongbao.sum_condition_description ? i("p", [e._v(e._s(e.hongbao.sum_condition_description))]) : e._e()]), i("div", {class: [e.$style.description, (n = {}, n[e.$style.normal] = !e.obtained, n)]}, [i("h4", {class: [e.$style.name, (o = {}, o[e.$style.cash] = 0 === e.hongbao.hongbao_type, o)]}, [e._v(e._s(e.hongbao.hongbao_name))]), e.hongbao.tags && e.hongbao.tags.length > 0 ? i("div", {class: e.$style.tagWrap}, e._l(e.hongbao.tags, function (t) {
                return i("span", {
                    style: {
                        borderColor: "#" + t.color,
                        color: "#" + t.color
                    }
                }, [e._v("\n        " + e._s(t.name) + "\n      ")])
            })) : e._e(), e.hongbao.path_desc ? i("div", {class: [e.$style.tagWrap, e.$style.pathDesc]}, [e._v(e._s(e.hongbao.path_desc))]) : e._e()]), e.obtained && !e.hongbao.path_desc ? i("div", {class: e.$style.operation}, [e.hongbao.human_time_desc ? i("p", {class: (s = {}, s[e.$style.disabled] = !e.hongbao.scheme, s)}, [e._v("\n      " + e._s(e.hongbao.human_time_desc) + "\n    ")]) : e._e(), e.hongbao.scheme ? i("a", {
                attrs: {href: "javascript:;"},
                on: {touchstart: e.handleClick}
            }, [e._v("立即使用")]) : e._e()]) : e._e()]);
            var n, o, s
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 89: function (e, t, i) {
        "use strict";
        var n = i(90), o = i.n(n);
        t.a = {Success: o.a}
    }, 9: function (e, t, i) {
        !function (t, i) {
            e.exports = i()
        }(0, function () {
            return function (e) {
                function t(n) {
                    if (i[n]) return i[n].exports;
                    var o = i[n] = {i: n, l: !1, exports: {}};
                    return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
                }

                var i = {};
                return t.m = e, t.c = i, t.d = function (e, i, n) {
                    t.o(e, i) || Object.defineProperty(e, i, {configurable: !1, enumerable: !0, get: n})
                }, t.n = function (e) {
                    var i = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return t.d(i, "a", i), i
                }, t.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, t.p = "", t(t.s = 43)
            }({
                1: function (e, t) {
                    e.exports = function (e, t, i, n, o, s) {
                        var r, a = e = e || {}, l = typeof e.default;
                        "object" !== l && "function" !== l || (r = e, a = e.default);
                        var c = "function" == typeof a ? a.options : a;
                        t && (c.render = t.render, c.staticRenderFns = t.staticRenderFns, c._compiled = !0), i && (c.functional = !0), o && (c._scopeId = o);
                        var d;
                        if (s ? (d = function (e) {
                                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), n && n.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
                            }, c._ssrRegister = d) : n && (d = n), d) {
                            var u = c.functional, h = u ? c.render : c.beforeCreate;
                            u ? (c._injectStyles = d, c.render = function (e, t) {
                                return d.call(t), h(e, t)
                            }) : c.beforeCreate = h ? [].concat(h, d) : [d]
                        }
                        return {esModule: r, exports: a, options: c}
                    }
                }, 43: function (e, t, i) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {value: !0});
                    var n = {
                        "error-load": "//fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif",
                        "error-load-white": "//fuss10.elemecdn.com/9/8d/5b30d677a5671aea318a280c860d4gif.gif",
                        "no-log": "//fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif",
                        "no-log-white": "//fuss10.elemecdn.com/2/50/8019fbaebac2aaa76e2d9b5e5b407gif.gif",
                        "no-hongbao": "//fuss10.elemecdn.com/5/51/255490294be88d8a2fbb92c5ad1bcgif.gif",
                        "no-coupon": "//fuss10.elemecdn.com/d/7b/808900d6a7c79c906b2e0cace8538gif.gif",
                        "no-food": "//fuss10.elemecdn.com/2/50/8019fbaebac2aaa76e2d9b5e5b407gif.gif",
                        "no-shop": "//fuss10.elemecdn.com/2/50/8019fbaebac2aaa76e2d9b5e5b407gif.gif",
                        "error-locate": "//fuss10.elemecdn.com/2/67/64f199059800f254c47e16495442bgif.gif",
                        "error-locate-gray": "//fuss10.elemecdn.com/d/94/7b36a019a8ec504cde239a90d47f2gif.gif"
                    }, o = {
                        props: {
                            data: {
                                type: Object, default: function () {
                                    return {}
                                }
                            }, fixed: {default: !1}
                        }, computed: {
                            imgSrc: function () {
                                var e = this.data.img || "error-load";
                                return n[e] || n["error-load"]
                            }
                        }
                    }, s = {
                        render: function () {
                            var e = this.$createElement, t = this._self._c || e;
                            return t("section", {class: [this.$style.wrapper, (i = {}, i[this.$style.fixed] = this.fixed, i)]}, [t("img", {attrs: {src: this.imgSrc}}), this._v(" "), t("h3", [this._v(this._s(this.data.title || "没有结果"))]), this._v(" "), this.data.content ? t("p", [this._v(this._s(this.data.content))]) : this._e(), this._v(" "), this.data.button ? t("button", {on: {click: this.data.button.action}}, [this._v("\n    " + this._s(this.data.button.text) + "\n  ")]) : this._e()]);
                            var i
                        }, staticRenderFns: []
                    }, r = i(1)(o, s, !1, function (e) {
                        this.$style = i(44)
                    }, null, null).exports;
                    t.default = r
                }, 44: function (e, t) {
                    e.exports = {wrapper: "NoDataTip-wrapper_1Gwf0tm", fixed: "NoDataTip-fixed_3gTgcHC"}
                }
            })
        })
    }, 90: function (e, t, i) {
        var n = i(3);
        e.exports = n.add('<symbol viewBox="0 0 32 32" id="success" ><path fill="#FEF0CA" fill-rule="nonzero" d="M16 32C7.17 32 0 24.83 0 16S7.17 0 16 0s16 7.17 16 16-7.17 16-16 16zm-2.074-9.719c.533 0 1.067-.177 1.481-.592l7.941-7.94c.83-.83.83-2.134 0-2.964a2.075 2.075 0 0 0-2.963 0l-6.518 6.519-2.311-2.311c-.83-.83-2.134-.83-2.904 0-.83.83-.83 2.133 0 2.903l3.792 3.793c.415.415.949.592 1.482.592z"/></symbol>', "success")
    }, 91: function (e, t, i) {
        "use strict";
        let n, o;
        t.a = {
            bind(e) {
                let t = 0;
                n = (e => {
                    e.stopPropagation(), t = e.touches[0].pageY
                }), o = (i => {
                    i.stopPropagation();
                    const n = i.touches[0].pageY - t, {scrollHeight: o, clientHeight: s, scrollTop: r} = e;
                    (n > 0 && r <= 0 || n < 0 && o - s - r <= 0) && i.preventDefault()
                }), e.addEventListener("touchstart", n, !1), e.addEventListener("touchmove", o, !1)
            }, unbind(e) {
                e.removeEventListener("touchstart", n, !1), e.removeEventListener("touchmove", o, !1)
            }
        }
    }, 92: function (e, t, i) {
        "use strict";
        var n = function () {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return e.showModal ? i("Modal", {
                attrs: {showClose: e.obtained},
                on: {CLOSEMODAL: e.onModalClose}
            }, [i("transition", {
                attrs: {
                    appear: "",
                    "appear-active-class": e.$style.enterActive
                }
            }, [i("div", {class: e.$style.lottery}, [i("div", {
                ref: "header",
                class: [e.$style.header, e.festivalVersion && e.$style.aliday],
                on: {click: e.goFestival}
            }), i("div", {class: e.$style.content}, [i("div", {
                directives: [{
                    name: "scrollfix",
                    rawName: "v-scrollfix"
                }], class: e.$style.hongbaoWrapper
            }, e._l(e.hongbaoList, function (t) {
                return i("Hongbao", {
                    key: t.sn,
                    attrs: {hongbao: t, obtained: e.obtained, festival: e.festivalVersion, isNewUser: e.isNewUser}
                })
            })), i("div", {class: e.$style.btnWrapper}, [e.obtained ? i("p", {class: e.$style.tip}, [i("svg", [i("use", {attrs: {"xlink:href": e.Icon.Success}})]), i("span", [e._v("领取成功，快去使用吧!")])]) : e._e(), i("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.obtained,
                    expression: "!obtained"
                }], class: [e.$style.btn, e.$style.accept], attrs: {href: "javascript:;"}, on: {click: e.acceptHandler}
            }, [e._v(e._s(e.btnText))]), e.obtained ? e._e() : i("a", {
                class: [e.$style.btn, e.$style.cancel],
                attrs: {href: "javascript:;"},
                on: {click: e.closeModal}
            }, [e._v("有钱任性，不需要")])])])])])], 1) : e._e()
        };
        n._withStripped = !0;
        var o = {render: n, staticRenderFns: []};
        t.a = o
    }, 93: function (e, t, i) {
        "use strict";
        var n = i(4), o = i(94), s = i.n(o), r = i(95), a = i.n(r), l = i(96), c = i.n(l), d = i(97);
        t.a = {
            mounted() {
                n.platform.isAlipay && this.setOptionMenu()
            }, methods: {
                share() {
                    ap.call("setToolbarMenu", {
                        menus: [],
                        override: !0
                    }), ap.call("startShare", {onlySelectChannel: d.a.channels}, ({channelName: e}) => {
                        AlipayJSBridge.call("shareToChannel", d.a.shareParam(e), ({channelName: e, shareResult: t}) => {
                            ("Weixin" === e || t) && d.a.getShareCoin().then(({data: e}) => {
                                e.count && 5 === e.count && this.setOptionMenu(!1), e.coin ? ap.showToast(`分享成功，增加${e.coin}金币`) : this.setOptionMenu(!1)
                            }).catch(() => {
                                this.setOptionMenu(!1)
                            })
                        })
                    })
                }, setOptionMenu(e = !0) {
                    let t = [{icon: e ? c.a : a.a}], i = window.location.pathname;
                    "/msite/" !== i && "/" !== i && t.unshift({icon: s.a}), ap.setOptionButton({
                        items: t,
                        onClick: e => {
                            2 === t.length && 0 === e.index ? ap.pushWindow("/msite") : (UBT.send("EVENT", {
                                id: 102357,
                                params: {url: location.href}
                            }), this.share())
                        }
                    })
                }
            }
        }
    }, 94: function (e, t) {
        e.exports = "data:image/png;base64,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"
    }, 95: function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAFN++nkAAAAAXNSR0IArs4c6QAABnBJREFUaAXtWWuoFVUUPmWm2dNeVGSK11J7WEL0xqir9qM3VD8ioiizHxEUJFFRN8M0fxT4o18FSUIQEUFkWVqGZREVEqWYUOSNSnsb2Mse3zdnr3PXWbP3zJ45Z+beU3fBd/Z67rXXnpm998xpNKqg5a7Teb7Oz7fKvY1ikpKTnqyDsjdZcZC8q6zHXkrB/BcrmewiI8eJrcFJXobdqWNlYKLb5pgknzV+IV5srVHbWvysFqcYXesS6McqW6E6dVVJH9JzygCr9Lw/+AdURrJiS9S+YBq0nvwlibf50U5iug6MbyJavlFTKb3ZVge3enROz6L9yAZoeR8ncAKmA9LBMvB/A4cBExT2A18/cTRtpGtuM3gE+i7V+pibZAABrFvoOzAyN4muTRAv53SBk49zsjI3WV8wdYcrz5RPXs0colDb/UxlXrAESjsGzEwRigb3I/DGssESl7RFM0cHf9nm6RF0ZnspVnj821ScPdJrAHcY2WV2gD8E4HU+GuANMhWYAUwE6N+Q25O80G1g6ByiJ2HYGjLWoveNutPEMu9ciO4OdaYTcwWbHHJ0+nVo/8rxEbMMYA8U94hSWlk6Kd8kyox2ELYtyn4L+GlK9rHMcQ6wURt1YtGnHngxqPY08Nc6mdWwKqFjwdzuhNfRviIG3foSa7uPnwClJPUNkknfBF7yBYuuTOIrXPAz0olpfYMxLo1GmcSycsTcZPORca7L2jYg6SQ1oqoVIypxaweqsmpZrJmDK800YDbAo05oTeWZios1F/Q86oMDF3lSssA32UZDJ/4cyg+B8wAu9NwxuFNsBspSMLFeMnXn+0K4DxivlR3ybXd1h32NhsfPgL654qPCnvfCdCnwDbAz7NZ+V2f5xdp+geMpwKnAV8C3gJe6XTErZXIuQtw6BwF9xobYJP048bnVsvhI+wOY90XIac+F/XLn8wTaT62/JHoQBq5WefQoHFiVpssgcNHJotQzLNtiTNIf0bNOygPBQFa2LJskFp+1YF4VIaMdB9uAs/+G9iHgTyezoUwfUqpaKm1i6mKIHZM+AVYm3NDPYrCZSelaZj8+y+XgbmaT3gHdeGf3VupspRLLmesR6US1m2KS0qfMVMss8Waz9AYURC5JJ7mO3XaoOvECDHiJb9BlptrXT0h3fMhQdcWhvKXu6mBnRQz/34plw+axthaSqeZpgXRCs6n+VxK/rFL1Kd7Hvgfl8z5DEZ0k5ulCaKEwgfY56N8N2KLVkpgBq1XUMsVXwurE65HhV5eF+uVAzMnEhRRr5MyloxZDkD2V+p8BTu92gEvs2AxY+0XwJaX2Zl9iOvYDEkS5U0olHhPoka+sfJ/lu/BBACspO+2csQ3AKA3LDIQu8bAMxpN0OnS3AnMArnGypYAtR6GHqVxv3Y/iVxg+U0I8ya8CPhZF0XakF8x6zgCuMoXxI+rTwGajzxV7oWAp4mwwV4rgWhb+FBD6AunchhpbcD9M3doXtqEvfoH4ZyhdJsddeAowE+A/yLyVCVlnpJ8DobPj3gMdc30GZBL3G03dKpZ9TgG4l+0GfMRCuBhdCIzzORTQsY7rgYG8GFuw9d8IxVsAFwvOMFvNUxfSw+SlQ6G9GdD/TIvj72B4e/K71E/ALkD/6TEZ8tWAvcJroFsH5FJewbw63i9yuT2nHThIXoWTjIlnuJUAvwSGaBIMCwB9BqTvWiDm6xR9E8orWPw6bXn73gXw6grxbelx4A9ReNpjoFsI2GPeeuhWA4WproJ5C+ti+ai8EDFaHjr0Vd0A+cWIuKBLHQXPQvY+NYKvwccUy5D7Aa7YpO+bTWe/dRTMhUbTB1qI4LtSqOTh3lc1HWwScPXtFnEhPArgd/ooquMKRw2khNPpiLlGxfH78VIle9k6rrA3cReUehFkdxNj+uzlgmPqS/mMFpyakv+Ywl5h/imoKXr100EjmbcF81CgiYcG66PtPcfbYjaZCg6AzAN/J7TDBO80cq2ifc1ich7yjzCj4CAfA/SrmnGpXZyPjHNN1kVGTon2CtNhBbDbeB4JmZv6mUbfcyJf2yzxKr4NnAzwltZ0IgTOKidkUBuGgecLyVSTl/8eZJKvYAbwq8Y7wHZgNqBvffIzgHkAr/gugN+L+eWjTipVsC4ka7B8pm8A7LOdFTMcttxnOLZgPXjuzXMAXvmo86sOrpDnW9jDFfY/2nVPzMC/n6Hcq8ETcHcAAAAASUVORK5CYII="
    }, 96: function (e, t) {
        e.exports = "data:image/png;base64,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"
    }, 97: function (e, t, i) {
        "use strict";
        var n = i(4);
        const o = {
            shop: "这家店感觉超棒，分享给你看看",
            msite: "#饿了么#无论在哪，想要的美食外卖、超市生鲜，30分钟送到你手中，体验超赞！",
            others: `#${document.title}#我发现个好东西，推荐你也来试试！`
        }, s = {bizType: "COMMON_CONFIG", btn1: "取消", btn2: "立即查看", shareTitle: "饿了么"};
        t.a = {
            channels: ["Weibo", "ALPContact", "ALPTimeLine", "Weixin", "QQ", "DingTalkSession"],
            shareParam: e => {
                UBT.send("EVENT", {id: 102368, params: {url: location.href, source: e}});
                const t = `alipays://platformapi/startapp?appId=20000120&url=${encodeURIComponent(location.href)}`;
                let i = "美好生活，触手可得", n = location.pathname.match(/\/(.*)\/|$/)[1];
                -1 !== ["sales", "ranking", "bestquality"].indexOf(n) && (n = "others");
                let r = o[n || "msite"];
                return "Weixin" !== e && "QQ" !== e || (e = "Weixin", i = "您的吱口令已生成", r += "长按复制此消息#吱口令#打开支付宝立即查看"), {
                    name: e,
                    param: {
                        contentType: "url",
                        title: i,
                        content: r,
                        iconUrl: "https://fuss10.elemecdn.com/d/43/aebddb782b8107d7ce93d2d231db9png.png",
                        url: t,
                        otherParams: babelHelpers.extends({}, s, {btn2A: t, preContent: r})
                    }
                }
            },
            getShareCoin: () => Object(n.$fetch)("//openapi.ele.me/v2/koubei/share/gift/", {
                credentials: "include",
                method: "POST"
            })
        }
    }
}, [2444]);
