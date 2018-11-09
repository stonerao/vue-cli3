import Vue from 'vue'
import Router from 'vue-router' 

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
    },
    {
      path: '/configur',
      name: 'configur',
      component: () => import('./views/Configur.vue')
    }
  ]
})
