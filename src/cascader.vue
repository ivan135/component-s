<template>
     <div class="cascader">
         <div class="tigger">
             <slot></slot>
         </div>
         <div class="popover">
             <div v-for="item in source">
                 <cascader-item :sourceItem="item"></cascader-item>
             </div>
         </div>
     </div>
</template>

<script>
    import CascaderItem  from './cascader-item'
    export default {
        name:'componentCascader',
        components:{CascaderItem},
        props:{
            sourve:Array
        }
    }
</script>

<style lang="scss" scoped>
    @import "main";
    .cascader {
    }
</style>