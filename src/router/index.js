import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    }
  ]
})
