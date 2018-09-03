import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Cascader from './cascader'

Vue.component('cs-button', Button);
Vue.component('cs-icon', Icon);
Vue.component('cs-button-group', ButtonGroup);
Vue.component('cs-cascader',Cascader);

new Vue({
    el: '#app',
    data: {
        source: [{
            name: '浙江',
            children: [
                {
                    name: '杭州',
                    children: [
                        {name: '上城'},
                        {name: '下城'},
                        {name: '江干'},
                    ]
                },
                {
                    name: '嘉兴',
                    children: [
                        {name: '南湖'},
                        {name: '秀洲'},
                        {name: '嘉善'},
                    ]
                },
            ]
        }, {
            name: '福建',
            children: [
                {
                    name: '福州',
                    children: [
                        {name: '鼓楼'},
                        {name: '台江'},
                        {name: '仓山'},
                    ]
                },
            ]
        }]
    }
});

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies);

const expect = chai.expect;

try {

    // 单元测试
    {
      const Constructor = Vue.extend(Button)
      const vm = new Constructor({
        propsData: {
          icon: 'settings'
        }
      })
      vm.$mount()
      let useElement = vm.$el.querySelector('use')
      let href = useElement.getAttribute('xlink:href')
      expect(href).to.eq('#i-settings')
      vm.$el.remove()
      vm.$destroy()
    }
    {
      const Constructor = Vue.extend(Button)
      const vm = new Constructor({
        propsData: {
          icon: 'settings',
          loading: true
        }
      })
      vm.$mount()
      let useElement = vm.$el.querySelector('use')
      let href = useElement.getAttribute('xlink:href')
      expect(href).to.eq('#i-loading')
      vm.$el.remove()
      vm.$destroy()
    }
    {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Button)
      const vm = new Constructor({
        propsData: {
          icon: 'settings'
        }
      })
      vm.$mount(div)
      let svg = vm.$el.querySelector('svg')
      let {order} = window.getComputedStyle(svg)
      expect(order).to.eq('1')
      vm.$el.remove()
      vm.$destroy()
    }
    {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Button)
      const vm = new Constructor({
        propsData: {
          icon: 'settings',
          iconPosition: 'right'
        }
      })
      vm.$mount(div)
      let svg = vm.$el.querySelector('svg')
      let {order} = window.getComputedStyle(svg)
      expect(order).to.eq('2')
      vm.$el.remove()
      vm.$destroy()
    }
    {
      const Constructor = Vue.extend(Button)
      const vm = new Constructor({
        propsData: {
          icon: 'settings',
        }
      })
      vm.$mount()
      let spy = chai.spy(function () {})
  
      vm.$on('click', spy)
      // 希望这个函数被执行
      let button = vm.$el
      button.click()
      expect(spy).to.have.been.called()
    }
  } catch (error) {
    window.errors = [error]
  } finally {
    window.errors&&window.errors.forEach((error) => {
      console.error(error.message)
    })
  }