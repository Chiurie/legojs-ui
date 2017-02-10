/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(236);

	var _index2 = _interopRequireDefault(_index);

	var _home = __webpack_require__(237);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var navsRouter = function () {
	    function navsRouter() {
	        _classCallCheck(this, navsRouter);

	        return {
	            '/navs': [this.index, this.tabs],
	            '/navs/:tabs': [this.index, this.tabs]
	        };
	    }

	    _createClass(navsRouter, [{
	        key: 'index',
	        value: function index() {
	            this.viewObj = Lego.create(_index2.default, {
	                el: Lego.config.pageEl,
	                scrollbar: {},
	                currentTab: 0
	            });
	        }
	    }, {
	        key: 'tabs',
	        value: function tabs() {
	            var _tabs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	            this.viewObj.options.currentTab = _tabs || 0;
	            var appArray = [_home2.default];
	            Lego.create(appArray[_tabs], { el: '#pageContent' });
	        }
	    }]);

	    return navsRouter;
	}();

	Lego.router(new navsRouter());

/***/ },

/***/ 236:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/navs/0" class="', '">Navs \u5BFC\u822A\u83DC\u5355</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        '], ['\n        <div class="page-container" id="page-container">\n            <h1 class="page-title">\n                <a href="#/navs/0" class="', '">Navs \u5BFC\u822A\u83DC\u5355</a>\n            </h1>\n            <div class="page-panel">\n                <div class="page-content page-panel-bg scrollbar">\n                    <div id="pageContent"></div>\n                </div>\n            </div>\n        </div>\n        ']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IndexView = function (_Lego$UI$Baseview) {
	    _inherits(IndexView, _Lego$UI$Baseview);

	    function IndexView() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, IndexView);

	        var options = {
	            currentTab: 0
	        };
	        Object.assign(options, opts);
	        return _possibleConstructorReturn(this, (IndexView.__proto__ || Object.getPrototypeOf(IndexView)).call(this, options));
	    }

	    _createClass(IndexView, [{
	        key: 'render',
	        value: function render() {
	            var options = this.options;
	            var vDom = hx(_templateObject, options.currentTab == 0 ? 'active' : '');
	            return vDom;
	        }
	    }]);

	    return IndexView;
	}(Lego.UI.Baseview);

	exports.default = IndexView;

/***/ },

/***/ 237:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _templateObject = _taggedTemplateLiteral(['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <navs id="navs1"></navs>\n            </div>\n            <div class="col-sm-6">\n              <navs id="navs2"></navs>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <navs id="navs3"></navs>\n            </div>\n            <div class="col-sm-6">\n              <navs id="navs4"></navs>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <navs id="navs5"></navs>\n            </div>\n            <div class="col-sm-6">\n              <tabs id="tabs6"></tabs>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <btngroup id="btngroup7"></btngroup>\n            </div>\n            <div class="col-sm-6">\n              <btngroup id="btngroup8"></btngroup>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <dropdownbtn id="dropdownbtn9"></dropdownbtn>\n            </div>\n            <div class="col-sm-6">\n              <dropdownbtn id="dropdownbtn10"></dropdownbtn>\n            </div>\n          </div>\n        </div>\n        '], ['\n        <div id="pageContent" class="container">\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <navs id="navs1"></navs>\n            </div>\n            <div class="col-sm-6">\n              <navs id="navs2"></navs>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <navs id="navs3"></navs>\n            </div>\n            <div class="col-sm-6">\n              <navs id="navs4"></navs>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <navs id="navs5"></navs>\n            </div>\n            <div class="col-sm-6">\n              <tabs id="tabs6"></tabs>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <btngroup id="btngroup7"></btngroup>\n            </div>\n            <div class="col-sm-6">\n              <btngroup id="btngroup8"></btngroup>\n            </div>\n          </div>\n          <div class="row" style="margin-bottom: 20px;">\n            <div class="col-sm-6">\n              <dropdownbtn id="dropdownbtn9"></dropdownbtn>\n            </div>\n            <div class="col-sm-6">\n              <dropdownbtn id="dropdownbtn10"></dropdownbtn>\n            </div>\n          </div>\n        </div>\n        ']);

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import Navs from '../../../../dist/navs';
	// import Tabs from '../../../../dist/tabs';

	var HomeView = function (_Lego$UI$Baseview) {
	    _inherits(HomeView, _Lego$UI$Baseview);

	    function HomeView() {
	        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	        _classCallCheck(this, HomeView);

	        var data = [{
	            key: 'nav1',
	            value: '菜单一',
	            content: 'Raw denim you probably haven heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.'
	        }, {
	            key: 'nav2',
	            value: '菜单二',
	            content: 'ood truck fixie locavore, accusamus mcsweeneys marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scen'
	        }, {
	            key: 'nav3',
	            value: '菜单三',
	            children: [{
	                key: 'subnav1',
	                value: '子菜单一',
	                content: 'ccccccc'
	            }, {
	                key: 'subnav2',
	                value: '子菜单二'
	            }, {
	                divider: true
	            }, {
	                key: 'subnav3',
	                value: '子菜单三'
	            }]
	        }, {
	            key: 'nav4',
	            value: '菜单四',
	            disabled: true
	        }];
	        var options = {
	            components: [{
	                el: '#navs1',
	                type: 'base',
	                activeKey: 'nav1',
	                onClick: function onClick(self, item) {
	                    console.warn('点击了菜单1', item);
	                },

	                data: data
	            }, {
	                el: '#navs2',
	                type: 'inline',
	                activeKey: 'nav2',
	                onClick: function onClick(self, item) {
	                    console.warn('点击了菜单2', item);
	                },

	                data: data
	            }, {
	                el: '#navs3',
	                type: 'tabs',
	                activeKey: 'nav2',
	                onClick: function onClick(self, item) {
	                    console.warn('点击了菜单3', item);
	                },

	                data: data
	            }, {
	                el: '#navs4',
	                type: 'pills',
	                activeKey: 'nav1',
	                onClick: function onClick(self, item) {
	                    console.warn('点击了菜单4', item);
	                },

	                data: data
	            }, {
	                el: '#navs5',
	                type: 'pills-stacked',
	                activeKey: 'nav2',
	                onClick: function onClick(self, item) {
	                    console.warn('点击了菜单5', item);
	                },

	                data: data
	            }, {
	                el: '#tabs6',
	                type: 'tabs',
	                activeKey: 'nav2',
	                animate: 'fade',
	                data: data
	            }, {
	                el: '#btngroup7',
	                onClick: function onClick(self, item, event) {
	                    console.warn('点击了按钮组7', item);
	                },

	                data: [{
	                    text: '按钮一'
	                }, {
	                    text: '按钮二'
	                }, {
	                    text: '按钮三'
	                }]
	            }, {
	                el: '#btngroup8',
	                size: 'small',
	                onClick: function onClick(self, item, event) {
	                    console.warn('点击了按钮组8', item);
	                },

	                data: [{
	                    text: '按钮一',
	                    type: 'primary'
	                }, {
	                    text: '按钮二',
	                    type: 'primary'
	                }, {
	                    text: '按钮三',
	                    type: 'primary'
	                }]
	            }, {
	                el: '#dropdownbtn9',
	                btnType: 'primary',
	                onClick: function onClick(self, item, event) {
	                    console.warn('点击了下拉按钮组9', item);
	                },

	                data: [{
	                    key: 'a1',
	                    value: '按钮一'
	                }, {
	                    key: 'a2',
	                    value: '按钮二'
	                }, {
	                    key: 'a3',
	                    value: '按钮三'
	                }]
	            }]
	        };
	        Object.assign(options, opts);
	        return _possibleConstructorReturn(this, (HomeView.__proto__ || Object.getPrototypeOf(HomeView)).call(this, options));
	    }

	    _createClass(HomeView, [{
	        key: 'render',
	        value: function render() {
	            var vDom = hx(_templateObject);
	            return vDom;
	        }
	    }]);

	    return HomeView;
	}(Lego.UI.Baseview);

	exports.default = HomeView;

/***/ }

/******/ });