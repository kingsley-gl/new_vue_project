import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import HomePage from '../components/home/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
