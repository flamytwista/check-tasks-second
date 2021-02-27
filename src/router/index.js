import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NoteAddOrEdit from '@/views/NoteAddOrEdit.vue'
import LibraryRoutes from '@/my-own-library/router/index.js'

Vue.use(VueRouter)

const routes = [
  ...LibraryRoutes,
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add-note',
    name: 'noteAdd',
    component: NoteAddOrEdit
  },
  {
    path: '/edit-note/:noteId',
    name: 'noteEdit',
    component: NoteAddOrEdit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
