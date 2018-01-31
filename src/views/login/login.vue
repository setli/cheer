<template>
  <div>


    <div class="main">
      <div class="SignFlowHeader">
        <div class="logo"></div>
        <div class="info">简洁而不简单的物流工具</div>
      </div>
      <div class="my-tab-margin">
        <div class="SignContainer-inner">
          <!-- 登录 -->
          <div class="login-content" >
            <div class="my-input">
              <input sytle="none" type="text" placeholder="手机号或邮箱" v-model="username">
            </div>
            <div class="my-input">
              <input sytle="none" type="text" placeholder="密码" v-model="passport">
            </div>
            <p>
              <a class="SignFlow-smsInputButton" href="#">手机验证码登录</a>
              <a class="SignFlow-fogetPSW" href="#">忘记密码</a>
            </p>
            <el-button type="primary" @click="submit">登录</el-button>
          </div>
        </div>
        <div class="goto-another">
          <p class="goto-register">
            <span>没有简运账号？</span>
            <router-link to="/login/register">前往注册</router-link>
          </p>
        </div>
      </div>
    </div>
    <div class="download">
      <el-button type="primary" plain>下载桌面版</el-button>
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
  methods: {
    submit() {

    }
  }
};
</script>

<style lang="scss" scoped>

</style>
