<template>
    <div>
        <div style="padding: 20px;">
            <cs-cascader :source.sync="source" popover-height="200px"
                        :selected.sync="selected" :load-data="loadData"></cs-cascader>
        </div>
         <cs-button>默认按钮</cs-button>
        <cs-button icon="settings">默认按钮</cs-button>
        <cs-button :loading="true">默认按钮</cs-button>
        <cs-button disabled>默认按钮</cs-button>
    </div>
</template>
<script>
    import Button from "./button/button";
    import Cascader from "./cascader/cascader";
    import db from '../tests/fixtures/db';

    function ajax (parentId = 0) {
        return new Promise((success, fail) => {
            setTimeout(() => {
                let result = db.filter((item) => item.parent_id === parentId);
                result.forEach(node => {
                    if (db.filter(item => item.parent_id === node.id).length > 0) {
                        node.isLeaf = false
                    }else{
                        node.isLeaf = true
                    }
                });
                success(result)
            }, 300)
        })
    }
    export default {
        name: "demo",
        components: {
            "cs-button": Button,
            "cs-cascader": Cascader
        },
        data () {
            return {
                selected: [],
                source: []
            };
        },
        created () {
            ajax(0).then(result => {
                console.log(result);
                this.source = result
            })
        },
        methods: {
            loadData ({id}, updateSource) {
                ajax(id).then(result => {
                    updateSource(result) // 回调:把别人传给我的函数调用一下
                })
            },

        }
    };

</script>
<style>
    * {margin: 0; padding: 0; box-sizing: border-box;}
    img {max-width: 100%;}
</style>