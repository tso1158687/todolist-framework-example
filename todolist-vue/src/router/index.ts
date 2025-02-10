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
      children: [
        {
          path: 'a',
          name: 'todo-a',
          component: () => import('../components/Testa.vue'),
        },
        {
          path: 'b',
          name: 'todo-b',
          component: () => import('../components/Testb.vue'),
        },
      ],
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
    },
  ],
})

// router.beforeEach( async(to, from, next) => {

//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   console.log(`[router] navigating to ${to.fullPath}`)
//   next()
// })

export default router
