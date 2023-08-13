(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{529:function(s,t,n){"use strict";n.r(t);var a=n(6),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"仿腾讯客服功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#仿腾讯客服功能"}},[s._v("#")]),s._v(" 仿腾讯客服功能")]),s._v(" "),n("p",[s._v("先上最终要实现的效果：\n"),n("img",{attrs:{src:"/uploads/20210125/WechatIMG118.png",alt:"WechatIMG118.png"}}),s._v(" "),n("img",{attrs:{src:"/uploads/20210125/WechatIMG118.png",alt:"WechatIMG119.png"}}),n("br"),s._v("\n通过分析上述的功能，我们发现如下几点：")]),s._v(" "),n("ol",[n("li",[s._v("交互功能，采用一问一答的形式。")]),s._v(" "),n("li",[s._v("每个回答的内容里面又会嵌套新的问题内容。")]),s._v(" "),n("li",[s._v("通过3到4轮的问答形式最终解决问题。")])]),s._v(" "),n("h2",{attrs:{id:"应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),n("p",[s._v("上述功能适用的场景有很多，比如保险咨询、教学咨询、咨询办理等等，只要是涉及到人与人之间沟通的内容，都能够以微信公众号为载体，通过在线客服的形式对外提供咨询服务，而且通过在线客服的形式引导用户完成某项业务。")]),s._v(" "),n("h2",{attrs:{id:"代码实战"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码实战"}},[s._v("#")]),s._v(" 代码实战")]),s._v(" "),n("p",[s._v("对于微信公众号的开发，老夫一般都使用"),n("code",[s._v("PHP")]),s._v("来实现，这里我们使用框架"),n("code",[s._v("YII2")]),s._v("来进行测试开发。")]),s._v(" "),n("h3",{attrs:{id:"_1-申请微信服务号或者订阅号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-申请微信服务号或者订阅号"}},[s._v("#")]),s._v(" 1. 申请微信服务号或者订阅号")]),s._v(" "),n("p",[s._v("微信服务号的主体是企业、政府机构以及一些组织机构可以申请。\n微信订阅号的主体可以是个人。")]),s._v(" "),n("h3",{attrs:{id:"_2-yii2框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-yii2框架"}},[s._v("#")]),s._v(" 2. YII2框架")]),s._v(" "),n("ol",[n("li",[s._v("浏览器访问如下地址："),n("strong",[s._v("https://www.yiichina.com/download")]),s._v("。")]),s._v(" "),n("li",[s._v("下载 "),n("strong",[s._v("Yii2 的基本应用程序模板")]),s._v(" 并解压。"),n("br"),s._v(" "),n("img",{attrs:{src:"/uploads/20210125/QQ20190319-233309.png",alt:"QQ20190319-233309.png"}})]),s._v(" "),n("li",[s._v("下载安装 "),n("strong",[s._v("Apache")]),s._v(" ,并将目录指向 "),n("strong",[s._v("~/basic/web")]),s._v("。如：D:\\basic\\web")]),s._v(" "),n("li",[s._v("新增 "),n("strong",[s._v("basic/config/web.php")]),s._v(" 中的 "),n("strong",[s._v("cookieValidationKey")]),s._v(",该值可以是任何字符。")]),s._v(" "),n("li",[s._v("此时通过浏览器输入 "),n("strong",[s._v("http://localhost")]),s._v(" ,如出现如下界面，则表示YII2框架安装成功了。\n"),n("img",{attrs:{src:"/uploads/20210125/QQ20190319-235816.png",alt:"QQ20190319-235816.png"}})])]),s._v(" "),n("h3",{attrs:{id:"_3-安装-easywechat"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装-easywechat"}},[s._v("#")]),s._v(" 3. 安装 easywechat")]),s._v(" "),n("p",[s._v("EasyWeChat 是一个开源的 微信 非官方 SDK。\nEasyWeChat 的安装非常简单，因为它是一个标准的 Composer 包，这意味着任何满足下列安装条件的 PHP 项目支持 Composer 都可以使用它。\n环境需求")]),s._v(" "),n("ol",[n("li",[s._v("PHP >= 7.0")]),s._v(" "),n("li",[s._v("PHP cURL 扩展")]),s._v(" "),n("li",[s._v("PHP OpenSSL 扩展")]),s._v(" "),n("li",[s._v("PHP SimpleXML 扩展")]),s._v(" "),n("li",[s._v("PHP fileinfo 拓展\n我们使用"),n("strong",[s._v("PhpStorm")]),s._v("打开"),n("strong",[s._v("basic")]),s._v("项目，然后在终端"),n("strong",[s._v("Terminal")]),s._v("中输入如下命令：")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("composer")]),s._v(" require jianyan74/yii2-easy-wechat\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果"),n("strong",[s._v("composer")]),s._v("命令无效，请百度搜索安装。\n安装完成后，我们还需要设置以下几处配置：")]),s._v(" "),n("ol",[n("li",[s._v("添加 SDK 到Yii2的 config/main.php 的 component:")])]),s._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'components'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'wechat'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'class'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'jianyan\\easywechat\\Wechat'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'userOptions'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 用户身份类参数")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'sessionParam'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'wechatUser'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 微信用户信息将存储在会话在这个密钥")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'returnUrlParam'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'_wechatReturnUrl'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// returnUrl 存储在会话中")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("设置基础配置信息到 config/params.php:")])]),s._v(" "),n("div",{staticClass:"language-PHP line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token php language-php"}},[n("span",{pre:!0,attrs:{class:"token delimiter important"}},[s._v("<?php")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'wechatConfig'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'app_id'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'secret'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'token'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'weixin'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'aes_key'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 指定 API 调用返回结果的类型：array(default)/collection/object/raw/自定义类名")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'response_type'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'array'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'log'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'default'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'dev'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认使用的 channel，生产环境可以改为下面的 prod")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'channels'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 测试环境")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'dev'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'driver'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'single'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'path'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'D:\\basic\\runtime\\easywechat.log'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'level'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'debug'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生产环境")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'prod'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'driver'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'daily'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'path'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'/tmp/easywechat.log'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'level'")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[s._v("'info'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])]),n("p",[s._v("此时配置已经完成"),n("br"),s._v("\n3. "),n("strong",[s._v("natapp")]),s._v("内网穿透\n因为微信公众号的开发必须要有外网服务器以及备案域名，但是我们本地开发肯定是不具备上述条件的，所以我们通过外网穿透的形式，将已经备案的域名解析到我们的本机"),n("strong",[s._v("localhost")]),s._v("上即可."),n("br"),s._v("\n浏览器访问链接："),n("strong",[s._v("https://natapp.cn")]),n("br"),s._v("\n大家在购买隧道的时候，在 优惠码一栏,输入 "),n("strong",[s._v("10A7707C")]),s._v(" 可以得到九折优惠。"),n("br"),s._v("\n我们按照官方教程安装配置好后，启动 natapp,会看到如下界面："),n("br"),s._v(" "),n("img",{attrs:{src:"/uploads/20210125/QQ20190320-000355.png",alt:"QQ20190320-000355.png"}}),n("br"),s._v("\n为了验证是否内网穿透成功，我们在浏览器中输入上图中映射的域名："),n("strong",[s._v("http://g3rn7v.natappfree.cc")]),n("br"),s._v("\n我们看到浏览器中网页和 localhost 访问的页面是一样的，此时内网穿透配置成功。")]),s._v(" "),n("p",[n("strong",[s._v("由于篇幅有限，关注微信公众号：老夫撸代码  回复数字 "),n("code",[s._v("1011")]),s._v("  查看完整教程")]),n("br"),s._v(" "),n("img",{attrs:{src:"/uploads/20200202/d7738bb673b081967caaa3dead6a777d.jpeg",alt:"老夫撸代码"}})]),s._v(" "),n("hr"),s._v(" "),n("Vssue",{attrs:{title:s.$title}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);