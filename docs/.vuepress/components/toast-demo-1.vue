<template>
  <div style="padding-top: 16px;">
    <h2>this.$toast</h2>
    <p>
      <strong>预览</strong>
    </p>

    <div>
      <cs-button @click="$toast('点击弹出提示')">上方弹出</cs-button>
      <cs-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</cs-button>
      <cs-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</cs-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
  .cs-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }

</style>
<script>
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button/button'
  import Vue from 'vue'

  Vue.use(plugin)

  export default {
    components: {"cs-button":Button},
    data () {
      return {
        content: `
          <style>
            .cs-toast {
              z-index: 30;
            }
          </style>
          <cs-button @click="$toast('点击弹出提示')">上方弹出</cs-button>
          <cs-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</cs-button>
          <cs-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</cs-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>