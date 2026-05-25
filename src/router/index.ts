import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home/HomePage.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/Home/Contact.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../components/Product/ProductList.vue'),
    },
    {
      path: '/product/:productId/:categoryId?',
      name: 'productDetail',
      component: () => import('../components/Product/ProductDetail.vue'),
    },
  ],
})

export default router
