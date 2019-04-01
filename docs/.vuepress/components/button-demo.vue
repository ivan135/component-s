<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <cs-button>默认按钮</cs-button>
        <cs-button icon="settings">默认按钮</cs-button>
        <cs-button :loading="true">默认按钮</cs-button>
        <cs-button disabled>默认按钮</cs-button>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button/button'

    export default {
        components: {
            'cs-button': Button
        },
        data () {
            return {
             content: `
            <cs-button>默认按钮</cs-button>
            <cs-button icon="settings">默认按钮</cs-button>
            <cs-button :loading="true">默认按钮</cs-button>
            <cs-button disabled>默认按钮</cs-button>
      `.replace(/^ {8}/gm, '').trim()
            }
        }
    }
</script>