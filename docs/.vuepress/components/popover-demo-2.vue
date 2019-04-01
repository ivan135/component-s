<template>
  <div style="padding-top: 16px;">
    <h2>将触发方式改为 hover</h2>
    <p>
      <strong>预览</strong>
    </p>

    <cs-popover trigger="hover">
      <cs-button>上方弹出</cs-button>
      <template slot="content">
        弹出内容
      </template>
    </cs-popover>
    <cs-popover position="bottom" trigger="hover">
      <cs-button>下方弹出</cs-button>
      <template slot="content">
        弹出内容
      </template>
    </cs-popover>
    <cs-popover position="left" trigger="hover">
      <cs-button>左边弹出</cs-button>
      <template slot="content">
        弹出内容
      </template>
    </cs-popover>
    <cs-popover position="right" trigger="hover">
      <cs-button>右边弹出</cs-button>
      <template slot="content">
        弹出内容
      </template>
    </cs-popover>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
  import Button from '../../../src/button/button'
  import Popover from '../../../src/popover'

  export default {
    components: {
      "cs-button":Button, 
      "cs-popover":Popover},
    data () {
      return {
        content: `
          <cs-popover trigger="hover">
            <cs-button>上方弹出</cs-button>
            <template slot="content">
              弹出内容
            </template>
          </cs-popover>
          <cs-popover position="bottom" trigger="hover">
            <cs-button>下方弹出</cs-button>
            <template slot="content">
              弹出内容
            </template>
          </cs-popover>
          <cs-popover position="left" trigger="hover">
            <cs-button>左边弹出</cs-button>
            <template slot="content">
              弹出内容
            </template>
          </cs-popover>
          <cs-popover position="right" trigger="hover">
            <cs-button>右边弹出</cs-button>
            <template slot="content">
              弹出内容
            </template>
          </cs-popover>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    methods: {
      onClickButton () {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true
        })
      }
    },
  }
</script>