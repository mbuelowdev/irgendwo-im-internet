import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/login', // TODO(michael): lazy load EVERY PAGE BUT /LOGIN
    name: 'login',
    component: Login
  },
  /*{
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" '../views/Login.vue')
  }*/

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router