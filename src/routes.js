import Login from './views/Login.vue'
import VueRouter from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Chat from './views/Chat.vue'

const routes = [
  {
    path: '/', component: Login, name: 'login'
  },
  {
    path: '/dashboard', component: Dashboard, name: 'dashboard', meta: {requiresAuth: true}
  },
  {
    path: '/chat', component: Chat, name: 'chat', meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const authUser = JSON.parse(window.localStorage.getItem('authUser'))
  if (to.meta.requiresAuth) {
    if (authUser && authUser.access_token) {
      next()
    } else {
      next({name: 'login'})
    }
  }
  next()
})

export { router }
