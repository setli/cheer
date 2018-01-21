import Vue from 'vue'
import VueRouter from 'vue-router'
import {routers, otherRouter, appRouter} from './router';

Vue.use(VueRouter)

export const router =  new VueRouter({
  mode: 'history', //HTML5 history
  routes: routers
})


router.beforeEach((to, from, next) => {
  let logged =  window.$cookies.get('logged')
  if (!logged && to.path === '/login') {
      next({ path: '/login' });
  } else if(logged && to.name === 'login') {
    next('/');
  }else{
    next();
  }
});

router.afterEach((to) => {

});
