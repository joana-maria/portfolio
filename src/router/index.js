import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/works/:id',
      name: 'works',
      component: Works,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
