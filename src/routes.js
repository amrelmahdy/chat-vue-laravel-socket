import Dashboard from './views/Dashboard.vue'
import Login from './views/Login.vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/', component: Login, name: 'login'
  },
  {
    path: '/dashboard', component: Dashboard, name: 'dashboard', meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export { router }
