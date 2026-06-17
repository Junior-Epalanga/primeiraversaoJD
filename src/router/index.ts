import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sobre',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/advisory',
      name: 'advisory',
      component: () => import('../views/AdvisoryView.vue')
    },
    {
      path: '/educacao-executiva',
      name: 'education',
      component: () => import('../views/EducationView.vue')
    },
    {
      path: '/livro',
      name: 'book',
      component: () => import('../views/BookView.vue')
    },
    {
      path: '/insights',
      name: 'insights',
      component: () => import('../views/InsightsView.vue')
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
