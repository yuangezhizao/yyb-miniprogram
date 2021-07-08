function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
    };
}(), _wepy = require("./../npm/wepy/lib/wepy.js"), _wepy2 = _interopRequireDefault(_wepy), ScanBtn = function(e) {
    function t() {
        var e, n, o, r;
        _classCallCheck(this, t);
        for (var a = arguments.length, i = Array(a), c = 0; c < a; c++) i[c] = arguments[c];
        return n = o = _possibleConstructorReturn(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(i))), 
        o.props = {}, o.data = {}, o.components = {}, o.methods = {
            scan: function() {
                wx.showLoading({
                    title: "加载中...",
                    mask: !0
                }), wx.scanCode({
                    onlyFromCamera: !0,
                    success: function(e) {
                        console.log(e);
                        var t = wx.getStorageSync("Authorization"), n = wx.getStorageSync("token");
                        _wepy2.default.request({
                            url: e.result,
                            method: "GET",
                            header: {
                                "Content-Type": "application/json",
                                Authorization: t || "",
                                token: n || "4WtEbIVbhCNV86nSdAcXIAenm6swEaj5OyXH0C6IEVzS2V86ySVO3dV4HNzLJMjy",
                                clientType: "weapp",
                                appType: "YouYiBao"
                            }
                        }).then(function(e) {
                            wx.hideLoading(), console.log(e), wx.navigateTo({
                                url: "/" + e.data
                            });
                        }).catch(function(e) {
                            wx.hideLoading();
                        });
                    },
                    complete: function() {
                        wx.hideLoading();
                    }
                });
            }
        }, o.events = {}, o.watch = {}, o.computed = {}, r = n, _possibleConstructorReturn(o, r);
    }
    return _inherits(t, e), _createClass(t, [ {
        key: "onLoad",
        value: function() {}
    }, {
        key: "onShow",
        value: function() {}
    } ]), t;
}(_wepy2.default.component);

exports.default = ScanBtn;