import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage'
import LoginPage from '@/views/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ],
  mode: 'history'
})
