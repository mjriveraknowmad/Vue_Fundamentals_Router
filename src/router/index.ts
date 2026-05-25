import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/components/Layout/NotFound.vue'
import Login from '@/components/Authentication/Login.vue'
import NotAccess from '@/components/Layout/NotAccess.vue'

function isAdmin(to: any, from: any) {
  console.log('[Guard] Route Before Enter Guard', from.fullPath, ' -> ', to.fullPath)
  const isAdmin = true // aquí deberíamos comprobar el estado de admin real, por ejemplo, consultando un store o una cookie.
  if (isAdmin) {
    return true
  }

  return { name: 'noaccess' }
}

function isAuthenticated() {
  const isAuthenticated = true
  if (isAuthenticated) {
    return true
  }

  return false
}

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
    { path: '/noaccess', component: NotAccess, name: 'noaccess' },
    {
      path: '/productList',
      component: () => import('../components/Product/ProductList.vue'),
      beforeEnter: [isAdmin, isAuthenticated],
    },
    {
      path: '/product/:productId/:categoryId?',
      component: () => import('../components/Product/ProductDetail.vue'),
      name: 'productDetails',
      props: true,
    },
    {
      path: '/products',
      component: () => import('../components/Product/ProductList.vue'),
      beforeEnter: [isAdmin, isAuthenticated],
    },
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
