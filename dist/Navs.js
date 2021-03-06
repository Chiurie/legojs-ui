/**
 * navs.js v0.3.1
 * (c) 2017 Ronghui Yu
 * @license MIT
 */
"use strict";

var _createClass$1 = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _templateObject$1 = _taggedTemplateLiteral$1([ '<li class="divider"></li>' ], [ '<li class="divider"></li>' ]);

var _templateObject2$1 = _taggedTemplateLiteral$1([ '\n                    <li>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ], [ '\n                    <li>\n                    <a id="', '" class="', " ", '" href="', '">', "</a>\n                    </li>" ]);

var _templateObject3 = _taggedTemplateLiteral$1([ '\n            <li class="dropdown">\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="dropdown">\n                <a id="', '" class="', " ", ' dropdown-toggle" href="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject4 = _taggedTemplateLiteral$1([ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ], [ '\n                <ul class="dropdown-menu">\n                    ', "\n                </ul>\n                " ]);

var _templateObject5 = _taggedTemplateLiteral$1([ '\n        <ul class="dropdown-menu scrollbar ', '" style="display:', '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="dropdown-menu scrollbar ', '" style="display:', '">\n            ', "\n        </ul>\n        " ]);

function _taggedTemplateLiteral$1(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn$1(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Dropdown = function(_Lego$UI$Baseview) {
    _inherits$1(Dropdown, _Lego$UI$Baseview);
    function Dropdown() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck$1(this, Dropdown);
        var options = {
            events: {
                "click li:not(.dropdown)": "clickItem"
            },
            disabled: false,
            eventName: "click",
            container: "",
            direction: "",
            activeKey: "",
            clickAndClose: true,
            open: false,
            onChange: function onChange() {},
            data: []
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn$1(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, options));
    }
    _createClass$1(Dropdown, [ {
        key: "render",
        value: function render() {
            var options = this.options || {};
            function itemNav(item) {
                if (item.divider) {
                    return hx(_templateObject$1);
                } else {
                    if (!item.children) {
                        return hx(_templateObject2$1, val(item.key), item.disabled || item.selected ? "disabled" : "", item.active ? "active" : "", item.href ? item.href : "javascript:;", val(item.value));
                    } else {
                        return loopNav(item);
                    }
                }
            }
            function loopNav(item) {
                return hx(_templateObject3, val(item.key), item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.href ? item.href : "javascript:;", val(item.value), item.children ? hx(_templateObject4, item.children.map(function(item) {
                    return itemNav(item);
                })) : "");
            }
            var vDom = hx(_templateObject5, options.direction ? "drop" + options.direction : "", options.open ? "block" : "none", options.data.map(function(item) {
                return itemNav(item);
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this, _eventName = "click.dropdown-" + this.options.vid;
            this.container = this.options.container instanceof $ ? this.options.container : $(this.options.container);
            if (!this.options.disabled) {
                var handler = function handler(event) {
                    that.$el.slideToggle("fast");
                };
                if (this.options.eventName == "click") {
                    $("body, .modal-body").off(_eventName).on(_eventName, function(event) {
                        if (event.originalEvent) {
                            var index_a = event.originalEvent.path.indexOf(event.target), index_b = event.originalEvent.path.indexOf(that.container[0]);
                            if (index_a <= index_b) {} else {
                                that.close();
                            }
                        }
                    });
                    this.container.off(_eventName).on(_eventName, handler);
                } else {
                    this.container.mouseenter(handler).mouseleave(function() {
                        that.close();
                    });
                }
            }
        }
    }, {
        key: "_getAlign",
        value: function _getAlign(parent, el) {
            var _X = parent.offset().left, _Y = parent.offset().top - el.height(), windowWidth = $(window).width() - 20, elWidth = el.width();
            if (windowWidth > _X + elWidth) {
                return "left";
            } else {
                return "right";
            }
        }
    }, {
        key: "show",
        value: function show() {
            this.$el.slideDown("fast");
        }
    }, {
        key: "close",
        value: function close() {
            this.$el.slideUp("fast");
        }
    }, {
        key: "clickItem",
        value: function clickItem(event) {
            event.stopPropagation();
            var target = $(event.currentTarget);
            var model = this.options.data.find(function(Item) {
                return Item.key == target.children("a").attr("id");
            });
            if (model) this.options.onChange(this, model, event);
            if (this.options.clickAndClose) {
                this.close();
            } else {
                this.refresh();
            }
        }
    } ]);
    return Dropdown;
}(Lego.UI.Baseview);

Lego.components("dropdown", Dropdown);

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _templateObject = _taggedTemplateLiteral([ '\n            <li class="nav-item ', " ", '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ], [ '\n            <li class="nav-item ', " ", '">\n                <a class="nav-link ', " ", " ", '" href="', '" id="', '">', "</a>\n                ", "\n            </li>\n            " ]);

var _templateObject2 = _taggedTemplateLiteral([ '\n        <ul class="lego-nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ], [ '\n        <ul class="lego-nav ', "\n        ", '">\n            ', "\n        </ul>\n        " ]);

function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Navs = function(_Lego$UI$Baseview) {
    _inherits(Navs, _Lego$UI$Baseview);
    function Navs() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Navs);
        var options = {
            events: {
                "mouseover .nav-item.dropdown": "overItem",
                "click .dropdown > a": "clickNav",
                "click .dropdown-menu a:not(.disabled)": "clickSubItem",
                "click .nav-item:not(.dropdown) > a": "clickItem"
            },
            eventName: "click",
            type: "base",
            activeKey: "",
            activeValue: "",
            direction: "",
            closeAllAble: true,
            onClick: function onClick() {},
            data: []
        };
        Object.assign(options, opts);
        return _possibleConstructorReturn(this, (Navs.__proto__ || Object.getPrototypeOf(Navs)).call(this, options));
    }
    _createClass(Navs, [ {
        key: "render",
        value: function render() {
            var options = this.options;
            function makeItem(item, i) {
                var itemDom = hx(_templateObject, item.children ? "dropdown" : "", item.open ? "open" : "", item.key === options.activeKey ? "active" : "", item.disabled ? "disabled" : "", item.children ? "dropdown-toggle" : "", item.href ? item.href : "javascript:;", item.key ? item.key : "nav-item-" + i, val(item.value), Array.isArray(item.children) ? Lego.create(Dropdown, {
                    direction: options.direction,
                    open: item.open,
                    data: item.children
                }).render() : "");
                return itemDom;
            }
            var vDom = hx(_templateObject2, options.type === "inline" ? "nav-inline" : options.type === "tabs" ? "nav-tabs" : options.type === "pills" ? "nav-pills" : "", options.type === "pills-stacked" ? "nav-pills nav-stacked" : "", options.data.map(function(item, i) {
                return makeItem(item, i);
            }));
            return vDom;
        }
    }, {
        key: "renderAfter",
        value: function renderAfter() {
            var that = this;
            if (this.options.closeAllAble) {
                $("body").click(function() {
                    that.closeAll();
                });
            }
        }
    }, {
        key: "showAll",
        value: function showAll() {
            this.$(".dropdown-menu").slideDown("fast");
        }
    }, {
        key: "closeAll",
        value: function closeAll() {
            this.$(".dropdown-menu").slideUp("fast", function() {
                $(this).parent().removeClass("open");
            });
        }
    }, {
        key: "overItem",
        value: function overItem(event, target) {
            var targetEl = $(event.currentTarget), key = targetEl.children("a").attr("id");
            this.activeKey = key;
        }
    }, {
        key: "clickNav",
        value: function clickNav(event, target) {
            event.stopPropagation();
            var targetEl = $(event.currentTarget);
            var dropdownEl = targetEl.next(".dropdown-menu");
            var directionResp = Lego.UI.Util.getDirection(targetEl, dropdownEl);
            this.options.direction = directionResp._y || "bottom";
            dropdownEl.slideToggle("fast", function() {
                if ($(this).css("display") == "none") {
                    $(this).parent().removeClass("open");
                } else {
                    $(this).parent().addClass("open");
                }
            });
            if (!targetEl.hasClass("dropdown-toggle")) {
                this.clickItem(event);
            }
        }
    }, {
        key: "clickItem",
        value: function clickItem(event, target) {
            event.stopPropagation();
            var targetEl = $(event.currentTarget), key = targetEl.attr("id");
            if (!targetEl.hasClass("disabled")) {
                this.options.activeKey = key;
                var model = this.options.data.find(function(item) {
                    return item.key === key;
                });
                if (typeof this.options.onClick === "function") {
                    this.options.onClick(this, model || {});
                }
            }
        }
    }, {
        key: "clickSubItem",
        value: function clickSubItem(event, target) {
            var _this2 = this;
            event.stopPropagation();
            this.options.activeKey = this.activeKey || this.options.activeKey;
            var targetEl = $(event.currentTarget), key = targetEl.attr("id"), model = this.options.data.find(function(item) {
                return item.key === _this2.options.activeKey;
            });
            var subModel = {};
            if (model) {
                if (model.children) {
                    (function() {
                        var findModel = function findModel(data) {
                            var result = data.find(function(item) {
                                return item.key === key;
                            });
                            if (!result) {
                                data.forEach(function(item) {
                                    if (item.children) {
                                        result = findModel(item.children);
                                    }
                                });
                            }
                            return result || {};
                        };
                        subModel = findModel(model.children);
                    })();
                }
            }
            this.$(".dropdown-menu a").removeClass("active");
            this.$("#" + key).addClass("active");
            if (typeof this.options.onClick === "function") this.options.onClick(this, subModel);
        }
    } ]);
    return Navs;
}(Lego.UI.Baseview);

Lego.components("navs", Navs);

module.exports = Navs;
