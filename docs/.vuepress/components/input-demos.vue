<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <cs-input value="data"></cs-input>
    <cs-input value="data" disabled></cs-input>
    <cs-input value="data" readonly></cs-input>
    <h4>代码</h4>
    <pre><code class="html">{{content}}</code></pre>
    
    <hr>
    <h4>双向绑定</h4>
    <cs-input v-model="value"></cs-input>
   <div>
      value: {{value}}
    </div>
    <h4>代码</h4>
    <pre><code class="html">{{content2}}</code></pre>
    
  </div>
</template>

<script>
import Input from "../../../src/input";
export default {
  
  components: {
    "cs-input": Input
  },
  data() {
    return {
      value: "1",
      content: `
        <cs-input value="data"></cs-input>
        <cs-input value="data" disabled></cs-input>
        <cs-input value="data" readonly></cs-input>
    `
        .replace(/^ {8}/gm, "")
        .trim(),
        content2:`
        data:{
          value: '1'
        }

        <cs-input v-model="value"></cs-input><div>{{'数据：'+value}}</div>
        `.replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>

<style scoped>
.Preview {
  padding: 20px;
}
.code {
  font-weight: bold;
}
</style>
