import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入基本样式，全局样式
import './assets/css/base.scss'

// 解决移动端100~300ms延迟问题
import fastclick from 'fastclick'
fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
