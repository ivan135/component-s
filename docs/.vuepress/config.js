const path = require('path')

module.exports = {
    base: '/component-s/',
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
                ["/install/", "Hello World"]
              ]
            },
            {
              title: '组件',
              collapsable: false,
              children: [
                ["/components/button", "button"],
                ["/components/card", "card"],
                ["/components/tabs", "tabs"],
                ["/components/toast", "toast"],
                ["/components/input", "input"],
                ["/components/popover", "popover"]
                ]
        
            },
        ]
    },
    scss:{
        includePaths: [path.join(__dirname, '../../styles')]
      }
};