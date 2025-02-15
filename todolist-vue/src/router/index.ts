import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },

    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/TodoView.vue'),
    },

    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue'),
    },
    {
      path: '/list/:id',
      name: 'todo-detail',
      component: () => import('../views/TodoDetailView.vue'),
    },
    // no match
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'welcome' },
    }
  ],
})

export default router
