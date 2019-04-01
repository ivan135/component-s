# Hello World
## 前言
- PL-UI的代码尚未完全完工，**请不要在生产环境中使用本 UI 框架，** 欢迎讨论交流。
- 在使用PL-UI之前，我们已默认你用Vue做过项目并且掌握[Vue组件](https://cn.vuejs.org/v2/guide/components.html)和[单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)

## 安装
::: warning 注意
- 请确保你的 Node.js 版本 >= 8。
:::
```bash
npm install pencil-vue -S
```
或者
```bash
yarn add pointline-ui
```


## 按需引入部分组件

```javascript
import Vue from "vue";
import { Button } from "pointline-ui";
import "pointline-ui/dist/index.css";

new Vue({
  el: "#app",
  components: {
    "cs-button": Button
  }
});
```
