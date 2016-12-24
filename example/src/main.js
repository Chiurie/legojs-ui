import jQuery from 'jquery';
import Lego from 'lego-core';
import { Baseview } from '../../dist/common';
import '../../dist/css/legoui.css';
// import { Baseview } from 'lego-ui';
// import 'lego-ui/dist/css/pack.css';

// 注册通用基础组件
Lego.components({
	Baseview: Baseview
});
// 设置全局参数
Lego.init({
    alias: 'HBY', //框架实例别名
    version: '20161202', //版本号
    $: jQuery,
    pageEl: '#container', //页面渲染容器
    defaultApp: 'home', //默认应用
    rootUri: '/example/dist/', //根目录
});
// 启动应用
Lego.startApp('index');