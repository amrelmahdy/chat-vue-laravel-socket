// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

import { router } from './routes'
import store from './store'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.component('app', App)

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

new Vue({
  router,
  store
}).$mount('#app')
