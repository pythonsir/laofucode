(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{510:function(a,t,s){"use strict";s.r(t);var e=s(6),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("目前微信小程序的开发者大概有几百万的样子（老夫没有数过），在这几百万当中，有的是使用原生小程序语法开发的，有的是使用第三方的转编译框架进行开发的，比如 mpvue(某团)，taro(某东)，其它的一些不知名的框架就不列举了，据说某滴也开源了一款感兴趣的童鞋可以去了解一下。")]),a._v(" "),s("p",[a._v("上面说的都不是重点，重点是老夫一直是使用原生小程序语法进行开发。所以写这篇教程的时候，不知道是谁给老夫的勇气，大概是梁静茹吧！希望能支撑老夫将整个开发的过程完美呈现给各位童鞋面前。")]),a._v(" "),s("h2",{attrs:{id:"为什么选择taro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择taro"}},[a._v("#")]),a._v(" 为什么选择Taro？")]),a._v(" "),s("p",[a._v("因为老夫第一次接触的MVVM框架就是 React.js ，所以有一种莫名的亲切感，这只是其中一原因。")]),a._v(" "),s("p",[a._v("另一个原因是老夫看中 Taro 的多终端处理能力，请看以下官方介绍。")]),a._v(" "),s("p",[a._v("Taro 是一套遵循 React 语法规范的 多端开发 解决方案。现如今市面上端的形态多种多样，Web、React-Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。")]),a._v(" "),s("p",[a._v("使用 Taro，我们可以只书写一套代码，再通过 Taro 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动小程序、H5、React-Native 等）运行的代码。")]),a._v(" "),s("p",[a._v("不管官方吹嘘的有多牛逼，是骡子是马拉出来遛一遛！")]),a._v(" "),s("h3",{attrs:{id:"_01-项目结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_01-项目结构"}},[a._v("#")]),a._v(" 01 项目结构")]),a._v(" "),s("p",[a._v("微信小程序的开发其实就是典型的前后端分离的具体表现，现在前端已经选择了 React.js (Taro)，那么后端我们采用 PHP 提供 API接口。")]),a._v(" "),s("p",[a._v("这里API接口我们采用 Phalapi 提供接口数据服务，其实老夫更擅长的是 YII2 。\n一般的小程序采用上述的项目结构基本上已经能够满足了，当然一些大数据量、有高并发场景的小程序，后端服务是相当复杂的，这里就不说了。")]),a._v(" "),s("h3",{attrs:{id:"_02-开发工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_02-开发工具"}},[a._v("#")]),a._v(" 02 开发工具")]),a._v(" "),s("p",[a._v("工欲善其事必先利其器！这里老夫使用 vscode 进行小程序的开发，使用 phpstorm 进行 php 的开发。\n###03 环境搭建\n首先是 Taro 的环境的搭建，现在前端的很多项目都是基于 node.js 的 npm 进行包管理的，所以前提是安装 node.js，并且运行 npm 命令没有问题，由于一些众所周知的原因，一些开发包下载很慢，老夫一般使用 cnpm 进行包的安装，不懂的自行百度！")]),a._v(" "),s("h4",{attrs:{id:"安装及使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装及使用"}},[a._v("#")]),a._v(" 安装及使用")]),a._v(" "),s("p",[a._v("安装 Taro 开发工具 @tarojs/cli\n使用 npm 或者 yarn 全局安装，或者直接使用npx")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -g @tarojs/cli\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" @tarojs/cli\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("####使用\n使用命令创建模板项目")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ taro init myApp\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"微信小程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序"}},[a._v("#")]),a._v(" 微信小程序")]),a._v(" "),s("p",[a._v("选择微信小程序模式，需要自行下载并打开微信开发者工具，然后选择项目根目录进行预览。\n微信小程序编译预览及打包（去掉 --watch 将不会监听文件修改，并会对代码进行压缩打包）")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# npm script\n$ npm run dev:weapp\n$ npm run build:weapp\n# 仅限全局安装\n$ taro build --type weapp --watch\n$ taro build --type weapp\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[a._v("项目实际代码如下：\n"),s("img",{attrs:{src:"/uploads/20200130/01191c4840f5d10273cf1c5345cd0837.png",alt:"码农之家",title:"在这里输入图片标题"}}),a._v("\n通过"),s("code",[a._v("taro")]),a._v(" 命令创建好项目后，用 "),s("code",[a._v("vscode")]),a._v(" 打开项目 "),s("code",[a._v("Miai")]),a._v(","),s("code",[a._v("vscode")]),a._v("的终端下面运行命令 "),s("code",[a._v("npm run dev:weapp")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/uploads/20200130/ae14631624fc6edd07e326d65c3396f0.png",alt:"码农之家",title:"在这里输入图片标题"}}),a._v("\n当项目跑起来后，通过微信的开发工具打开 "),s("code",[a._v("Miai")]),a._v("，就能看到小程序跑起来了。")]),a._v(" "),s("p",[s("strong",[a._v("搜索微信公众号：老夫撸代码  回复数字 "),s("code",[a._v("1001")]),a._v("  获取完整教程以及代码仓库地址")])]),a._v(" "),s("p",[s("strong",[a._v("关注微信公众号：老夫撸代码")])]),a._v(" "),s("p",[s("img",{attrs:{src:"/uploads/20200202/d7738bb673b081967caaa3dead6a777d.jpeg",alt:"码农之家",title:"老夫撸代码"}}),a._v(" "),s("Vssue",{attrs:{title:a.$title}})],1)])}),[],!1,null,null,null);t.default=n.exports}}]);