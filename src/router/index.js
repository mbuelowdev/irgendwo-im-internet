import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "@/views/Login.vue";
import Notifications from "@/views/Notifications.vue";
import Cronjobs from "@/views/Cronjobs.vue";
import Accounts from "@/views/Accounts.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'notifications',
    component: Notifications
  },
  {
    path: '/cronjobs',
    name: 'cronjobs',
    component: Cronjobs
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: Accounts
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
