import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/components/Layout/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../components/Home/HomePage.vue') },
    {
      path: '/contact-us',
      component: () => import('../components/Home/Contact.vue'),
      name: 'contact',
    },
    { path: '/contact', redirect: { name: 'contact' } },
    { path: '/productList', component: () => import('../components/Product/ProductList.vue') },
    {
      path: '/product/:productId/:categoryId?',
      component: () => import('../components/Product/ProductDetail.vue'),
      name: 'productDetails',
      props: true,
    },
    { path: '/products', component: () => import('../components/Product/ProductList.vue') },
    { path: '/:catchAll(.*)', component: NotFound },
  ],
})

export default router
