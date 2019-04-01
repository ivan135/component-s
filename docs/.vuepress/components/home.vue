<template>
  <div class="content custom">
    <div class="container">

    <pc-button elevation="4" class="btn" @click="go">快速上手 →</pc-button>
    <hr>
    <cs-card class="card c1">
      <h2>简明优先</h2>
      <p>用法简单,构建声明式UI框架</p>
    </cs-card>
    <cs-card class="card c2">
      <h2>Vue 驱动</h2>
      <p>使用  Vue + webpack 开发环境</p>
    </cs-card>
    <cs-card class="card">
      <h2>说明文档</h2>
      <p>文档简单通俗，容易理解看懂</p>
    </cs-card>
    <div class="footer">MIT Licensed | Copyright © 2018-present Mrlgm</div>
  </div>
  </div>
</template>

<script>
import Card from "../../../src/card";
import Button from "../../../src/button/button";
export default {
  components: {
    "cs-card": Card,
    "pc-button": Button
  },
  mounted() {
  },
  data() {
    return {
      link: "/install/"
    };
  },
  methods: {
    go() {
      if (/^http/.test(this.link)) {
        window.open(this.link);
      } else {
        this.$router.push(this.link);
      }
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}
.btn {
  display: inline-block;
  box-sizing: content-box;
  padding: 0.8em 1.5em;
  margin: 25px 0;
  font-weight: bold;
  color: #fff;
  border-radius: 3px;
  border: none;
  background: #46bd87;
  box-shadow:0 0.5rem 1.25rem 0 rgba(218,224,235,.6);
}
.btn:hover {
  box-shadow:0 0.5rem 2rem 0 #dae0eb;
}

.btn .content{
  padding: 1rem 1.5rem;
}

.card {
  text-align: left;
  display: inline-block;
  padding: 13px;
  margin: 30px;
  line-height: 1.7px;
  background-image: url(https://image.weilanwl.com/color2.0/cardBg.png);
  background-size: cover;
  background-position: center;
  background-color: #46bd87;
  color: #fff;
  border-radius: 12px;
}
.card::after {
  content: "";
  position: absolute;
  z-index: -1;
  background-color: inherit;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: -10%;
  border-radius: 10px;
  opacity: 0.2;
  transform: scale(0.9, 0.9);
}

.card h2,
.card p {
  color: #ffffff;
}
@media (max-width: 970px) {
  .card {
    display: block;
  }
}
.footer {
  margin-top: 1rem;
  padding: 2.5rem;
  border-top: 1px solid #eaecef;
  text-align: center;
  color: #4e6e8e;
}
</style>
