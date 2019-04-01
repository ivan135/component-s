<template>
  <div class="host card">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "cs-card"
};
</script>

<style scoped>
.host {
  display: inline-block;
  position: relative;
  padding: 5px;
  box-shadow: 0 0.46875rem 2.1875rem rgba(90,97,105,.1), 
              0 0.9375rem 1.40625rem rgba(90,97,105,.1), 
              0 0.25rem 0.53125rem rgba(90,97,105,.12), 
              0 0.125rem 0.1875rem rgba(90,97,105,.1);
}
</style>