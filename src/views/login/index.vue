<template>
  <div class="login">
    <!-- <div class="bg-draw">
      <div class="draw1 parallelogram absolute flex1 shadow"></div>
      <div class="draw2 parallelogram absolute flex1"></div>
      <div class="draw3 triangle-up absolute flex1"></div>
      <div class="draw4 triangle-topright absolute flex1"></div>
    </div> -->
    <el-container>
      <!-- <el-header>简运slogan</el-header> -->
      <el-main>
        <div class="main">
          <div class="SignFlowHeader">
            <div class="logo"></div>
            <div class="info">简洁而不简单的物流工具</div>
          </div>
          <div class="my-tab-margin">
            <div class="SignContainer-inner">
              <!-- 登录 -->
              <div class="login-content" v-if="mode == 0">
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
              <!-- 注册 -->
              <div class="register-content" v-if="mode == 1">
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
              <p class="goto-register" v-if="mode == 0">
                <span>没有简运账号？</span>
                <a href="#" @click="mode=1">点击注册</a>
              </p>
              <p class="goto-login" v-if="mode == 1">
                <span>已有简运账号？</span>
                <a href="#" @click="mode=0">点击登录</a>
              </p>
            </div>
          </div>
        </div>
        <div class="download">
          <el-button type="primary" plain>下载桌面版</el-button>
        </div>
      </el-main>
      <el-footer>
        <p>联系我们</p>
        <p>
          <span>前台</span>
          <span>前台</span>
          <span>前台</span>
          <span class="my-last-span">前台</span>
        </p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 0, //0:登录 1:注册
      activeName2: "first",
      username: "",
      passport: ""
    };
  },
  methods: {
  
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-image: url(../../assets/images/bg.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%; //用css画背景
  a{
    color:#099cbc;
  }
}

.el-container {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  z-index: 999;
  .el-main {
    min-height: 688px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .main {
    margin: 0 auto;
    background-color: #fff;
    box-shadow: #aaa;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    box-sizing: border-box;
    width: 432px;
    button {
      width: 100%;
      margin-top: 20px;
      line-height: 1.5;
      font-size: 16px;
      background-color: #099cbc;
    }
    .SignFlowHeader {
      padding-top: 50px;
      text-align: center;
      .logo {
        width: 174px;
        height: 76px;
        background-image: url("../../assets/images/cheer-logo2.png");
        background-size: contain;
        background-repeat: no-repeat;
        margin: 0 auto;
      }
      .info {
        margin-top: 10px;
        color: #06667b;
        font-size: 16px;
      }
    }
    .my-tab-margin {
      text-align: center;
      .SignContainer-inner {
        padding: 0 50px 80px 50px;
        margin-top: 10px;
        .register-content {
        }
        .login-content {
        }
      }
      input {
        color: #8590a6;
        border: none;
        outline: medium;
        margin: 5px 10px;
        font-size: 16px;
        width: 100%;
      }
      .my-input {
        border: none;
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
        position: relative;
        .SignFlow-smsInputButton {
          position: absolute;
          right: 0;
          top: 6px;
        }
      }
    }
    .SignFlow-smsInputButton {
      line-height: 3;
      float: left;
    }
    .SignFlow-fogetPSW {
      line-height: 3;
      float: right;
      color: #888;
    }
    .Register-declaration {
      line-height: 3;
      text-align: left;
      color: #888;
      a {
        color: #888;
      }
    }
    .goto-another {
      background-color: #eee;
      line-height: 3;
      text-align: center;
      font-size: 16px;
      .goto-login {
      }
      .goto-register {
      }
    }
  }
  .el-footer {
    display: block;
    position: static;
    bottom: 0;
    width: 100%;
    text-align: center;
    line-height: 2;
    display: block;
    font-size: 12px;
    color: #8590a6;
    span {
      border-right: 1px solid #ddd;
      padding: 0 10px;
    }
    .my-last-span {
      border: none;
    }
  }
}
.download {
  padding: 15px;
  width: 432px;
  margin: 0 auto;
  button {
    width: 100%;
    line-height: 25px;
    font-size: 14px;
    color: #099cbc;
    border-color: #9cddeb;
  }
  button:hover{
    background-color: #099cbc;
  }
}
</style>
