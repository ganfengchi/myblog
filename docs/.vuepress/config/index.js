// const navbar = require('../config/navbar.js')
// const sidebar = require('../config/sidebar.js')

// module.exports = {
//   navbar,
//   sidebar
// }
module.exports = {
    navbar: [
        // {
        //     text: '前端学习',
        //     children: [

        //     ],
        // },
    ],
    sidebar: [
        {
            text: 'I want to say',
            link: '/view/sidebar/myinfo'
        },
        {
            text: 'typescript',
            link: '/view/sidebar/typescript',
        },
      
        {
            text: '一些经验重要...',
            collapsible:true,
            children: [
                {
                    text: 'event事件与 vue修饰符',
                    link: '/view/sidebar/myExperience/domDefaultEvent',
                },
                {
                    text: 'postMessage 跨源通信',
                    link: '/view/sidebar/myExperience/postMessage',
                },
                {
                    text: 'vue 动态渲染组件 子组件调用父组件的方法实现复用',
                    link: '/view/sidebar/myExperience/reactiveComponent',
                },
                {
                    text: 'webWorker 多线程',
                    link: '/view/sidebar/myExperience/webWorker',
                },
                {
                    text: '动态渲染表头',
                    link: '/view/sidebar/myExperience/reactiveRender',
                },
                {
                    text: '组件刷新',
                    link: '/view/sidebar/myExperience/componentRefresh',
                },
                {
                    text: 'vue2 render函数',
                    link: '/view/sidebar/myExperience/vueRender',
                },
                {
                    text: 'js终止代码执行',
                    link: '/view/sidebar/myExperience/endCodeExecution',
                },
                {
                    text: 'typeScript DOM 类型',
                    link: '/view/sidebar/myExperience/typeScriptDOM',
                },
                {
                    text: 'FileReader',
                    link: '/view/sidebar/myExperience/fileReader',
                },
                {
                    text: 'Blob',
                    link: '/view/sidebar/myExperience/blob',
                },
                {
                    text: 'MobileAdaptation',
                    link: '/view/sidebar/myExperience/MobileAdaptation',
                },
                {
                    text: '判断数据类型的几种方法 ',
                    link: '/view/sidebar/myExperience/typeOf',
                },
                {
                    text: 'promise 和async await的区别',
                    link: '/view/sidebar/myExperience/promiseAndAsyncAwait',
                },
                {
                    text: 'try catch',
                    link: '/view/sidebar/myExperience/tryCatch',
                },
                {
                    text: 'gitlab 自动化构建',
                    link: '/view/sidebar/myExperience/gitlab',
                },
                {
                    text: 'async await 要优雅',
                    link: '/view/sidebar/myExperience/async_await',
                },
                {
                    text: 'websocket',
                    link: '/view/sidebar/myExperience/websocket',
                },
                {
                    text: '最少代码实现一个outside',
                    link: '/view/sidebar/myExperience/outside',
                },
                {
                    text: '文件流下载',
                    link: '/view/sidebar/myExperience/fileDownload',
                },
                {
                    text: '文件上传',
                    link: '/view/sidebar/myExperience/fileUpload',
                },
                {
                    text: '双向MAP映射',
                    link: '/view/sidebar/myExperience/mapPing',
                },
                {
                    text: 'IntersectionObserver 交叉观察器',
                    link: '/view/sidebar/myExperience/IntersectionObserver',
                },
                {
                    text: 'axios 封装 统一管理接口',
                    link: '/view/sidebar/myExperience/axios',
                },
                {
                    text: 'currentTarget和target的区别',
                    link: '/view/sidebar/myExperience/eventTarget',
                },
                {
                    text: '什么是optipn请求',
                    link: '/view/sidebar/myExperience/optionRequest',
                },
                {
                    text: 'scrollWidth,clientWidth,offsetWidth等等的区别',
                    link: '/view/sidebar/myExperience/clientWidth',
                },
                {
                    text: 'vue2动态组件注册',
                    link: '/view/sidebar/myExperience/dynamicComponents',
                },
                {
                    text: '浏览器缓存',
                    link: '/view/sidebar/myExperience/browserCache',
                },
                {
                    text: 'promise 知识1 ',
                    link: '/view/sidebar/myExperience/promise1',
                },
                {
                    text: 'Proxy ',
                    link: '/view/sidebar/myExperience/proxy',
                },
                {
                    text: '浏览器数据持久化 ',
                    link: '/view/sidebar/myExperience/browserContinuousStore',
                },
                {
                    text: 'vuex 数据持久化 ',
                    link: '/view/sidebar/myExperience/vuexContinuousStore',
                },
                {
                    text: 'sort排序',
                    link: '/view/sidebar/myExperience/sort',
                },
                {
                    text: 'vue.config.js 的完整配置（超详细）！',
                    link: '/view/sidebar/myExperience/vueconfigjs',
                },
                {
                    text: '前端常用的js函数方法',
                    link: '/view/sidebar/myExperience/jsOftenUsehandle',
                },
                {
                    text: '获取url 参数的几种办法',
                    link: '/view/sidebar/myExperience/getUrlParams',
                },
                {
                    text: 'JavaScript Array 奇技淫巧',
                    link: '/view/sidebar/myExperience/jsArrayCode',
                },
                {
                    text: '前端分页',
                    link: '/view/sidebar/myExperience/pagination',
                },
                {
                    text: '你不知道的html标签之marquee',
                    link: '/view/sidebar/myExperience/marqueeTag',
                },
                {
                    text: '你不了解的的promise/async await',
                    link: '/view/sidebar/myExperience/promise_Asnyc',
                },
                {
                    text: '使用grid轻松实现各种布局',
                    link: '/view/sidebar/myExperience/gridLayout',
                },
                {
                    text: '最强大的 CSS 布局 —— Grid 布局',
                    link: '/view/sidebar/myExperience/gridLayout2',
                },
                {
                    text: 'svg 标签的用法',
                    link: '/view/sidebar/myExperience/svg',
                },
                {
                    text: '你不知道的 flex  flex-grow、flex-shrink、flex-basis',
                    link: '/view/sidebar/myExperience/cssFlex',
                },
            ]
        },
        {
            text: 'vue3',
            collapsible:true,
            children:[
                {
                    text: 'vue3简介',
                    link: '/view/sidebar/vue3/home',
                },
                {
                    text: '响应性API',
                    link: '/view/sidebar/vue3/reactiveApi',
                },
                {
                    text: 'composition Api（组合式api）',
                    link: '/view/sidebar/vue3/compositionApi',
                },
                {
                    text: 'vue3中使用jsx',
                    link: '/view/sidebar/vue3/vue3_jsx',
                },
                {
                    text: 'vue3大菠萝（pinia）',
                    link: '/view/sidebar/vue3/pinia',
                },
            ]
        },
        {
            text: 'react',
            collapsible:true,
            children:[
                {
                    text: 'react',
                    link: '/view/sidebar/react/react_study',
                },
                {
                    text: 'react Native',
                    link: '/view/sidebar/react/react_native',
                },
                {
                    text: 'react hook',
                    link: '/view/sidebar/react/react_hook',
                },
                {
                    text: 'react Redux ',
                    link: '/view/sidebar/react/react_redux',
                },
               
            ]
        },
        {
            text: 'angular',
            link: '/view/sidebar/angular.md',
        },
        {
            text: 'nodejs',
            collapsible:true,
            children:[
                {
                    text: 'nodejs 概念及其内置 API',
                    link: '/view/sidebar/node/01',
                },
                {
                    text: '模块加载 相关知识',
                    link: '/view/sidebar/node/02',
                },
                {
                    text: 'Express 相关知识',
                    link: '/view/sidebar/node/03',
                },
            ]
        },
        {
            text: 'baseData (mysql数据库)',
            collapsible:true,
            children:[
                {
                    text: '数据库 相关知识',
                    link: '/view/sidebar/baseData/01',
                },
                {
                    text: 'MySql 相关知识',
                    link: '/view/sidebar/baseData/02',
                },
                {
                    text: 'MySql Sql 相关知识',
                    link: '/view/sidebar/baseData/03',
                },
            ]
        },
        {
            text: 'H5新特性（features）',
            collapsible:true,
            children:[
                {
                    text: 'h5_01 相关知识',
                    link: '/view/sidebar/h5NewFeatures/h5_01',
                },
                {
                    text: 'h5_02 相关知识',
                    link: '/view/sidebar/h5NewFeatures/h5_02',
                },
                {
                    text: 'h5_03 相关知识',
                    link: '/view/sidebar/h5NewFeatures/h5_03',
                },
                {
                    text: 'h5_04 相关知识',
                    link: '/view/sidebar/h5NewFeatures/h5_04',
                },
                {
                    text: 'h5_05 相关知识',
                    link: '/view/sidebar/h5NewFeatures/h5_05',
                },
                {
                    text: 'h5_06 相关知识',
                    link: '/view/sidebar/h5NewFeatures/h5_06',
                },
                 {
                    text: 'h5_07 相关知识',
                    link: '/view/sidebar/h5NewFeatures/h5_07',
                },
             
            ]
        },
        {
            text: '转载好文',
            collapsible:true,
            children:[
                {
                    text: '火爆全网的 Evil.js 源码解读',
                    link: '/view/sidebar/rePrint/rePrint_01',
                },
            ]
        },
        {
            text: 'RegExp(正则)',
            link: '/view/sidebar/regExp.md',
        },
        {
            text: '一些笔试题',
            link: '/view/sidebar/writtenTest',
        },
        {
            text: 'git 常用命令',
            link: '/view/sidebar/git',
        },


    ]
}