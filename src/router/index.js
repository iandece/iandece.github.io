import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/layout.vue'

import Home from '@/pages/home.vue'
import Work from '@/pages/work.vue'

import Error404 from '@/pages/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '',
      component: Layout,
      redirect: {
        name: 'home',
      },
      children: [
        {
          path: '',
          component: Home,
          name: 'home',
        },
        {
          path: '/work',
          component: Work,
          name: 'work',
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: Error404,
    },
  ],
})

export default router
