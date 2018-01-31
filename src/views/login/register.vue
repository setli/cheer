<template>
  <div class="main">
    <div class="SignFlowHeader">
      <div class="logo"></div>
      <div class="info">简洁而不简单的物流工具</div>
    </div>
    <div class="my-tab-margin">
      <div class="SignContainer-inner">
        <!-- 注册 -->
        <div class="register-content" >
          <div class="my-input">
            <input sytle="none" type="text" placeholder="手机号" v-model="username">
          </div>
          <div class="my-input">
            <input sytle="none" type="text" placeholder="输入6位短信验证吗" v-model="passport">
            <a class="SignFlow-smsInputButton" href="#">获取短信验证码</a>
          </div>
          <el-button type="primary" @click="submit">注册</el-button>
          <p class="Register-declaration">
            <span>注册即代表你同意</span>
            <a href="#">《用户协议》</a>
          </p>
        </div>
      </div>
      <div class="goto-another">
        <p class="goto-login">
          <span>已有简运账号？</span>
          <router-link to="/login/index">点击登录</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      passport: ""
    };
  },
  methods:{
      submit(){
          
      }
  }
};
</script>

<style>

</style>
