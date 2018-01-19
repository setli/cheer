import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  mode: 'history', //HTML5 history 模式
  routes: [
    {
      path: '/',
      name: 'home',
      component: dynamicImportPage('views/layout/index')
    },
    {
      path: '/home',
      name: 'home',
      component: dynamicImportPage('views/layout/index')
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
