const path = require('path')

module.exports = {
    base: '/component-s/',
    title: 'PL-UI',
    description: '一个不错的组件库',
    head: [["link", { rel: "icon", href: "https://note.youdao.com/yws/api/personal/file/WEB42ab0be8ec96d9393c06494b1b7b603b?method=download&shareKey=21a1a1c74e2ba0085166e93dfd131d42" }]],
    themeConfig: {
        logo: "https://note.youdao.com/yws/api/personal/file/WEB6064a913ebb55733bb3ef86d599b625c?method=download&shareKey=999fcdda3a49070dcfc11013cf9ab327",
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