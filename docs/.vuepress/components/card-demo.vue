<template>
  <div>
    <h3>使用方法</h3>
    <h4>预览</h4>
    <cs-card class=" c1">
      <h4>Sample Card Title</h4>
      <p>He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
    </cs-card>
    <cs-card class="c2">
      <h4>Sample Card Title</h4>
      <p>He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
    </cs-card>
    <cs-card>
      <h4>Sample Card Title</h4>
      <p>He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
    </cs-card>
    <h4>代码</h4>
    <pre><code class="html">{{content}}</code></pre>
  </div>
</template>

<script>
import Card from "../../../src/card";
export default {
  components: {
    "cs-card": Card
  },
  data() {
    return {
      content: `
        <cs-card class="c1">
          <h4>Sample Card Title</h4>
           <p>He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
        </cs-card>
        <cs-card class="c2">
          <h4>Sample Card Title</h4>
           <p>He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
        </cs-card>
        <cs-card>
          <h4>Sample Card Title</h4>
           <p>He seems sinking under the evidence could not only grieve and a visit. The father is to bless and placed in his length hid...</p>
        </cs-card>
        <style>
            .c1 {
                background: pink;
            }
            .c2 {
                background: bisque;
            }
        </style>

    
    `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  }
};
</script>

<style scoped>
.Preview {
  padding: 20px;
}
.card {
  display: inline-block;
  width: 29%;
  margin: 0 2px;
}
code {
  font-weight: bold;
  overflow: unset;
}

.c1 {
  background: pink;
}
.c2 {
  background: bisque;
}
</style>
