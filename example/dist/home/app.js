(function(e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var o = t[n] = {
            exports: {},
            id: n,
            loaded: false
        };
        e[n].call(o.exports, o, o.exports, r);
        o.loaded = true;
        return o.exports;
    }
    r.m = e;
    r.c = t;
    r.p = "./dist/";
    return r(0);
})({
    0: function(e, t, r) {
        "use strict";
        var n = r(136);
        var o = l(n);
        var a = r(137);
        var i = l(a);
        var u = r(138);
        var f = l(u);
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        HBY.components("home", o.default);
        HBY.router({
            "/home": function e() {
                HBY.create(i.default, {
                    el: HBY.config.pageEl,
                    dataSource: {
                        api: [ "test", "ok" ],
                        server: f.default
                    },
                    onAfter: function e(t) {
                        var r = 0;
                        HBY.setTimer("theTime", setInterval(function() {
                            t.options.data[0].last = r;
                            t.refresh();
                            r++;
                        }, 3e3));
                    },
                    components: [ {
                        el: "#test",
                        dataSource: {
                            api: [ "ok" ],
                            server: f.default
                        }
                    } ]
                });
            },
            "/home/list": function e() {
                HBY.create(i.default, {
                    el: HBY.config.pageEl,
                    data: {
                        list: [ {
                            first: "home",
                            last: "Bond"
                        }, {
                            first: "test",
                            last: "bbbb"
                        } ]
                    },
                    components: [ {
                        el: "#home",
                        data: [ {
                            first: "home2",
                            last: "Bond2"
                        }, {
                            first: "test2",
                            last: "bbbb2"
                        } ]
                    }, {
                        el: "#test",
                        data: [ {
                            first: "home3",
                            last: "Bond3"
                        }, {
                            first: "test3",
                            last: "bbbb3"
                        } ]
                    } ]
                });
            },
            "/home/detail/:id": function e(t) {
                console.warn("pppppppppp");
            }
        });
    },
    136: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t;
            };
        }();
        var n = a([ "<div>\n          ", "\n        </div>" ], [ "<div>\n          ", "\n        </div>" ]), o = a([ '<a href="#/home" style="display:block;">', "</a>\n" ], [ '<a href="#/home" style="display:block;">', "</a>\\n" ]);
        function a(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function i(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function u(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e;
        }
        function f(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
        }
        var l = function(e) {
            f(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                i(this, t);
                var r = {
                    events: {
                        "click #400": "theClick"
                    }
                };
                Object.assign(r, e);
                return u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
            }
            r(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options.data || [];
                    var r = hx(n, t.map(function(e, t) {
                        return hx(o, e.first);
                    }));
                    return r;
                }
            }, {
                key: "theClick",
                value: function e(t) {
                    t.stopPropagation();
                    HBY.trigger("data_update", {
                        aa: 1
                    });
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        t.default = l;
    },
    137: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t;
            };
        }();
        var n = a([ "<div>\n          <h1>hello world!</h1>\n          ", '\n          <home id="test"></home>\n        </div>' ], [ "<div>\n          <h1>hello world!</h1>\n          ", '\n          <home id="test"></home>\n        </div>' ]), o = a([ '<a href="#/home/list" style="display:block;">', "</a>\n" ], [ '<a href="#/home/list" style="display:block;">', "</a>\\n" ]);
        function a(e, t) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }));
        }
        function i(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function u(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e;
        }
        function f(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
        }
        var l = function(e) {
            f(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                i(this, t);
                var r = {
                    events: {
                        "click #test": "theClick"
                    },
                    listen: {
                        data_update: function e(t) {
                            debug.warn("ttttttttttt", t);
                        }
                    }
                };
                Object.assign(r, e);
                return u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
            }
            r(t, [ {
                key: "render",
                value: function e() {
                    var t = this.options.data || [];
                    debug.warn("更新了视图", t);
                    var r = hx(n, t.map(function(e, t) {
                        return hx(o, e.last);
                    }));
                    return r;
                }
            }, {
                key: "theClick",
                value: function e(t) {
                    t.stopPropagation();
                    debug.warn("66666666666");
                }
            } ]);
            return t;
        }(Lego.UI.Baseview);
        t.default = l;
    },
    138: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var r = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || false;
                    n.configurable = true;
                    if ("value" in n) n.writable = true;
                    Object.defineProperty(e, n.key, n);
                }
            }
            return function(t, r, n) {
                if (r) e(t.prototype, r);
                if (n) e(t, n);
                return t;
            };
        }();
        function n(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function o(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e;
        }
        function a(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t) Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t;
        }
        var i = function(e) {
            a(t, e);
            function t() {
                var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                n(this, t);
                var r = {
                    test: {
                        url: "./content.json",
                        listTarget: "data",
                        model: {
                            first: "",
                            last: "",
                            id: 0
                        }
                    },
                    ok: {
                        url: "./content.json"
                    }
                };
                $.extend(true, r, e);
                return o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, r));
            }
            r(t, [ {
                key: "parse",
                value: function e(t) {
                    return t[0].data;
                }
            } ]);
            return t;
        }(HBY.Data);
        t.default = new i();
    }
});