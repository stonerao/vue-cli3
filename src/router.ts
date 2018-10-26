import Vue from 'vue'
import Router from 'vue-router'
import Indexs from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('./views/Edit.vue')
    }
  ]
})
