import Vue from 'vue';
import Vuex from 'vuex';
//vuex modules
// import citybox from './modules/citybox'
// import transbook from './modules/transbook'
// import userinfo from './modules/userinfo'

Vue.use(Vuex);


const state = {
  logined: false, //页面是否在加载中
}

// mutation 必须是同步函数
const mutations = {
  //设置登录状态
  UPDATE_LOGIN_VISIBLE(state, value) {
    state.loginVisible = value
  },
}

const getters = {
  logined: state => state.logined,
}

//  主要用于异步
const actions = {}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  //modules: {
  //  citybox,
  //  transbook,
  //  userinfo
  //},
});
