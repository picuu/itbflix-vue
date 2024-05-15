import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/films',
      name: 'films',
      component: () => import('../views/FilmsView.vue')
    },
    {
      path: '/shows',
      name: 'shows',
      component: () => import('../views/ShowsView.vue')
    },
    {
      path: '/crud',
      name: 'crud',
      component: () => import('../views/CrudView.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../views/SignUpView.vue')
    }
  ]
})

export default router
