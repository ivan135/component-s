import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('cs-button', Button);
Vue.component('cs-icon',Icon);

new Vue({
    el: '#app',
});