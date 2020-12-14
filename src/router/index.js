import Vue from 'vue'
import VueRouter from 'vue-router'
// 注意点： 通过 import xxx  from xx  的方式加载组件，无论组件有没有被用到，都会被加载进来
// import Recommend from '../views/Recommend.vue'
// import Singer from '../views/Singer.vue'
// import Rank from '../views/Rank.vue'
// import Search from '../views/Search.vue'

// 实现Vue组件的按需加载
const Recommend = (resolve) => {
  import('../views/Recommend.vue').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('../views/Singer.vue').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('../views/Rank.vue').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('../views/Search.vue').then((module) => {
    resolve(module)
  })
}
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/recommend' },
  { path: '/recommend', component: Recommend },
  { path: '/singer', component: Singer },
  { path: '/rank', component: Rank },
  { path: '/search', component: Search }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
