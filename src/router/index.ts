import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/components/Layout/NotFound.vue'
import Login from '@/components/Authentication/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('../components/Home/HomePage.vue'), name: 'home' },
    {
      path: '/contact-us',
      component: () => import('../components/Home/Contact.vue'),
      name: 'contact',
    },
    { path: '/contact', redirect: { name: 'contact' } },
    { path: '/login', component: Login, name: 'login' },
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

router.beforeEach((to, from) => {
  console.log('Global Before Each Guard', from.fullPath, ' -> ', to.fullPath)

  const isAuthenticated = true // aquí deberíamos comprobar el estado de autenticación real, por ejemplo, consultando un store o una cookie

  if (to.name == 'home') {
    return true
  }
  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }

  return true
})

export default router
