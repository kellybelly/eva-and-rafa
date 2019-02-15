import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // route level code-splitting
    // this generates a separate chunk (e.g. about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /*{
      path: '/details',
      name: 'details',
      component: () => import('./views/Details.vue')
    },
    {
      path: '/travel',
      name: 'travel',
      component: () => import('./views/Travel.vue')
    },
    {
      path: '/tips',
      name: 'tips',
      component: () => import('./views/Tips.vue')
    },
    {
      path: '*',
      component: () => import('./views/404.vue')
    }*/
  ]
})
