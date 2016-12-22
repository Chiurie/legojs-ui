/**
 * alert.js v0.1.2
 * (c) 2016 Ronghui Yu
 * @license MIT
 */
"use strict";

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

var _templateObject = _taggedTemplateLiteral([ '\n        <div class="alert alert-', " ", '">\n            <i class="anticon ', ' lego-alert-icon"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ], [ '\n        <div class="alert alert-', " ", '">\n            <i class="anticon ', ' lego-alert-icon"></i>\n            <span class="lego-alert-message">', "</span>\n            ", "\n            ", "\n        </div>\n        " ]);

var _templateObject2 = _taggedTemplateLiteral([ '<span class="lego-alert-description">', "</span>" ], [ '<span class="lego-alert-description">', "</span>" ]);

var _templateObject3 = _taggedTemplateLiteral([ '<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>' ], [ '<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>' ]);

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

var Alert = function(_Lego$UI$Baseview) {
    _inherits(Alert, _Lego$UI$Baseview);
    function Alert() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Alert);
        var options = {
            events: {
                "click .lego-alert-close-icon": "onClose"
            },
            data: {
                type: "info",
                closable: false,
                closeText: "",
                message: "",
                description: "",
                onClose: function onClose() {},
                showIcon: false,
                banner: false
            }
        };
        $.extend(true, options, opts);
        return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, options));
    }
    _createClass(Alert, [ {
        key: "render",
        value: function render() {
            var data = this.data || {};
            var iconName = "";
            switch (data.type) {
              case "success":
                iconName = "check";
                break;

              case "info":
                iconName = "info";
                break;

              case "warning":
                iconName = "exclamation";
                break;

              case "error":
                iconName = "cross";
                break;
            }
            var vDom = hx(_templateObject, data.type, data.description ? "ant-alert-with-description" : "", data.description ? "anticon-" + iconName + "-circle-o" : "anticon-" + iconName + "-circle", data.message, data.description ? hx(_templateObject2, data.description) : "", data.closable ? hx(_templateObject3) : "");
            return vDom;
        }
    }, {
        key: "onClose",
        value: function onClose(event) {
            event.stopPropagation();
            this.remove();
            if (typeof this.data.onClose === "function") this.data.onClose();
        }
    } ]);
    return Alert;
}(Lego.UI.Baseview);

module.exports = Alert;