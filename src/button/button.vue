<template>
    <button class="cs-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <cs-icon class="icon" v-if="icon && !loading" :name="icon"></cs-icon>
        <cs-icon class="loading icon" v-if="loading" name="loading"></cs-icon>
        <div class="cs-button-content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import Vue from 'vue'
import Icon from '../icon'
Vue.component('cs-icon',Icon)
    export default {
        props: {
            icon:{},
            loading: {
             type: Boolean,
             default: false
              },
            iconPosition:{
            type:String,
             default:'left',
                validator(value){
                 return value==='left'||value==='right'
                }
            }}
    }
</script>

<style lang="scss" scoped>
    @import "main";
    .cs-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }
        >.cs-button-content{
            order:2;
        }
        >.icon{
            order: 1;
            margin-right: .1em;
        }
        &.icon-right{
            >.cs-button-content{order: 1;}
            >.icon{order:2;margin-right: 0;margin-left: .1em;}
        }
        .loading{
            @include spin
        }
    }
</style>