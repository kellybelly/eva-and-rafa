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
    {
      path: '/index_de.html',
      redirect: '/?co=de'
    },
    {
      path: '/index_pt.html',
      redirect: '/?co=br'
    },
    {
      path: '/index.html',
      redirect: '/?co=us'
    },
    {
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
      path: '/rsvp',
      name: 'rsvp',
      component: () => import('./views/RSVP.vue')
    }
  ]
})
