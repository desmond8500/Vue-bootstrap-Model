import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    children: [
      { path: 'tab1', component: () => import('../components/subtab') },
      { path: 'tab2', component: () => import('../components/subtab2') },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
