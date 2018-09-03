<template>
    <div class="cascaderItem">
        {{sourceItem.name}}
        <component-cascader-item
                v-if="souItem,child"
                v-for="item in sourceItem.children"
                :sourceItem="Item">
        </component-cascader-item>
    </div>
</template>

<script>
    export default{
        name:'componentCascaderItem',
        props:{
            sourceItem:{
                type:Object
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cascaderItem {
        border: 1px solid red;
        margin: 10px;
    }
</style>