(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{192:function(n,t,o){},193:function(n,t,o){},213:function(n,t,o){"use strict";var e=o(192);o.n(e).a},214:function(n,t,o){"use strict";var e=o(193);o.n(e).a},225:function(n,t,o){"use strict";o.r(t);o(19);var e=o(194),c=o(166);o(0).a.use(e.a);var s={components:{"cs-button":c.a},data:function(){return{content:"\n        <style>\n          .cs-toast {\n            z-index: 30;\n          }\n        </style>\n\n        <div>\n          <cs-button @click=\"onClickButton\">上方弹出</cs-button>\n        </div>\n\n        methods: {\n          onClickButton () {\n            this.$toast('你知道我在等你吗？', {\n              closeButton: {\n                text: '知道了',\n                callback: () => {\n                  console.log('他说知道了')\n                }\n              }\n            })\n          }\n        },\n    ".replace(/^ {8}/gm,"").trim()}},methods:{onClickButton:function(){this.$toast('<strong style="color:red;">加粗的提示</strong>',{enableHtml:!0})}}},i=(o(213),o(214),o(1)),a=Object(i.a)(s,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",{staticStyle:{"padding-top":"16px"}},[o("h2",[n._v("支持 HTML")]),n._v(" "),n._m(0),n._v(" "),o("div",[o("cs-button",{on:{click:n.onClickButton}},[n._v("上方弹出")])],1),n._v(" "),n._m(1),n._v(" "),o("pre",[o("code",[n._v(n._s(n.content))])])])},[function(){var n=this.$createElement,t=this._self._c||n;return t("p",[t("strong",[this._v("预览")])])},function(){var n=this.$createElement,t=this._self._c||n;return t("p",[t("strong",[this._v("代码")])])}],!1,null,"1a6ab7c2",null);t.default=a.exports}}]);