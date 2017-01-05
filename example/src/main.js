import jQuery from 'jquery';
import Lego from 'lego-core';
import lo from 'lodash';
import "../ux/util/util";
import { Baseview } from '../../dist/Common';
import '../../dist/css/legoui.css';
// import { Baseview } from 'lego-ui/dist/Common';
// import 'lego-ui/dist/css/legoui.css';
import showdown from 'showdown';
window.markdown = new showdown.Converter();
markdown.setFlavor('github');

import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/atom-one-light.css';
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
window.hljs = hljs;
window._ = lo;
window.$ = window.jQuery = jQuery;

// 设置全局参数
Lego.init({
    alias: 'HBY', //框架实例别名
    version: '2016' || _.now(), //版本号
    $: jQuery,
    pageEl: '#page-container', //页面渲染容器
    defaultApp: 'home', //默认应用
    rootUri: '/example/dist/', //根目录
});
// 启动应用
Lego.startApp('index');