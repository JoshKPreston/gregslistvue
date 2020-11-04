import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Cars from '../views/CarsPage.vue'
import Houses from '../views/HousesPage.vue'
import Jerbs from '../views/JerbsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cars',
    name: 'Cars',
    component: Cars
  },
  {
    path: '/houses',
    name: 'Houses',
    component: Houses
  },
  {
    path: '/jerbs',
    name: 'Jerbs',
    component: Jerbs
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
