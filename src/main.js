// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueCookies)

// register global progress.
const whiteList = ['/login'];// 不重定向白名单
router.beforeEach((to, from, next) => {
  console.log(1)
  let logged =  window.$cookies.get('logged')
  if (logged) { // 判断是否有token
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      next('/');
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login'); // 否则全部重定向到登录页
    }
  }
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
