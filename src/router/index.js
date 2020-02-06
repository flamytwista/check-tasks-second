import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import LibraryRoutes from '@/my-own-library/router/index.js'

Vue.use(VueRouter)

const routes = [
  ...LibraryRoutes,
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
