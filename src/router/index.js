import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/index',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/index.vue')
  },{
    path: '/head',
    name: 'Head',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/head.vue')
  },{
    path: '/circular',
    name: 'Circular',
    component: () => import(/* webpackChunkName: "about" */ '../views/circular.vue')
  },{
    path: '/region',
    name: 'Region',
    component: () => import(/* webpackChunkName: "about" */ '../views/region.vue')
  },{
    path: '/casualties',
    name: 'Casualties',
    component: () => import(/* webpackChunkName: "about" */ '../views/casualties.vue')
  },
  {
    path: '/policesituation',
    name: 'Policesituation',
    component: () => import(/* webpackChunkName: "about" */ '../views/policesituation.vue')
  },{
    path: '/quantity',
    name: 'Quantity',
    component: () => import(/* webpackChunkName: "about" */ '../views/quantity.vue')
  },{
    path: '/today',
    name: 'Today',
    component: () => import(/* webpackChunkName: "about" */ '../views/today.vue')
  },{
    path: '/frequency',
    name: 'Frequency',
    component: () => import(/* webpackChunkName: "about" */ '../views/frequency.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import(/* webpackChunkName: "about" */ '../views/map.vue')
  },
  {
    path: '/selector',
    name: 'Selector',
    component: () => import(/* webpackChunkName: "about" */ '../views/selector.vue')
  },
  {
    path: '/top',
    name: 'Top',
    component: () => import(/* webpackChunkName: "about" */ '../views/weixin/top.vue')
  },
]

const router = new VueRouter({
  base: '/VUE',
  routes
})

export default router
