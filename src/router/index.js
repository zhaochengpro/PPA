import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../views/HomePage.vue'),
    },
    {
      name: 'roadmap',
      path: '/roadmap',
      component: () => import('../views/Roadmap.vue'),
    },
    {
      name: 'team',
      path: '/team',
      component: () => import('../views/Team.vue'),
    },
    {
      name: 'fqa',
      path: '/fqa',
      component: () => import('../views/FqaPage.vue'),
    },
    {
      name: 'mint',
      path: '/mint',
      component: () => import('../views/MintPage.vue'),
    },
  ],
});
export default router;
