import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contacts from '../views/Contacts.vue'
import Lego from '../components/Lego.vue'
import Cars from '../components/Cars.vue'
import Amazon from '../components/Amazon.vue'
import NotFound from '../views/NotFound.vue'
import Sudan from '../components/Sudan.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/lego',
    name: 'lego',
    component: Lego
  },
  {
    path: '/cars',
    name: 'cars',
    component: Cars
  },
  {
    path: '/amazon',
    name: 'amazon',
    component: Amazon
  },
  {
    path: '/sudan',
    name: 'sudan',
    component: Sudan
  },
  {
    path: "/:notFound",
    name: '404',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
