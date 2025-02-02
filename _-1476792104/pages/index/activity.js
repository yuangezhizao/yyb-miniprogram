!function() {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    });
    var e = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), t = r(require("./../../npm/wepy/lib/wepy.js")), n = (r(require("./../../utils/api.js")), 
    r(require("./../../utils/environment.js")), r(require("./../../components/match-statusbar.js")));
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    var a = function(t) {
        function r() {
            var e, t, a;
            o(this, r);
            for (var u = arguments.length, s = Array(u), c = 0; c < u; c++) s[c] = arguments[c];
            return t = a = i(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [ this ].concat(s))), 
            a.config = {
                navigationBarTitleText: ""
            }, a.components = {
                statusbar: n.default
            }, a.mixins = [], a.data = {
                adUrl: ""
            }, a.computed = {}, a.methods = {}, a.events = {}, i(a, t);
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(r, t), e(r, [ {
            key: "onLoad",
            value: function(e) {
                this.adUrl = decodeURIComponent(e.url), wx.setNavigationBarTitle({
                    title: e.title.substring(0, 10)
                });
            }
        }, {
            key: "onShow",
            value: function() {}
        }, {
            key: "onShareAppMessage",
            value: function(e) {
                return {
                    title: "关注游艺宝，发现更多精彩",
                    path: "/pages/index/index",
                    imageUrl: "/assets/imgs/share.png",
                    success: function(e) {
                        console.log("转发成功！");
                    },
                    fail: function(e) {
                        return console.log(e.errMsg);
                    }
                };
            }
        } ]), r;
    }(t.default.page);
    Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(a, "pages/index/activity"));
}();