import { createRouter, createWebHistory } from 'vue-router'
import Product from '../views/Product.vue'
import Products from '../views/Products.vue'

const routes = [
  {
    path: '/',
    name: 'Product',
    props:true,
    component: Product
  },
  {
    path: '/products/:id',
    name: 'Products',
    component: Products
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
