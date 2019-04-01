const path = require('path')

module.exports = {
    // base: '/',
    title: 'PL-UI',
    description: '一个不错的组件库',
    head: [["link", { rel: "icon", href: "/logo.png" }]],
    themeConfig: {
        logo: "/logo.gif",
        repo: "ivan135/component-s", // 添加 github 链接
        nav: [
            {text: 'Home', link: '/'},
        ],
        sidebar: [
            {
              title: '入门',
              collapsable: false,
              children: [
                '/install/',
              ]
            },
            {
              title: '组件',
              collapsable: false,
              children: [
                ["/components/button", "button"],
                ["/components/input", "input"],
                ["/components/card", "card"],
                ["/components/tabs", "tabs"],
                ["/components/popover", "popover"],
                ["/components/toast", "toast"]
                ]
        
            },
        ]
    },
    scss:{
        includePaths: [path.join(__dirname, '../../styles')]
      }
};