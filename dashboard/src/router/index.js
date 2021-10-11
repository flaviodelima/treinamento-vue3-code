import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Feedbacks = () => import('../views/Feedbacks/index.vue')
const Credentials = () => import('../views/Crerdentials/index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/credentials',
    name: 'Credentials',
    component: Credentials,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' },
    component: Credentials,
    meta: {
      hasAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
