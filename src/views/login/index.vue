<template>
  <div class="login">
    <el-container>
      <el-header height="80px">
        <div class="logo">
          <img src="../../assets/cheer-logo.jpg">
        </div>
      </el-header>
      <el-main>
        <div class="main">
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="登录" name="first">
              <div class="my-tab-margin">
                <div class="my-input">
                  <input sytle="none" type="text"  placeholder="用户名" v-model="username">
                </div>
                <div class="my-input">
                  <input sytle="none" type="text"  placeholder="密码" v-model="passport">
                </div>
                <el-button type="primary" @click="submit">登录</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="注册" >注册</el-tab-pane>
          </el-tabs>
          
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
      activeName2: "first",
      username: "",
      passport: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submit() {
      this.$cookies.set("logged", true);
      location.replace("/");
    }
  }
};
</script>
<style lang="scss" scoped>

.login {
  width: 100%;
  height: 100%;
  background: #f7fafc;
  background-image: url(../../assets/images/bg-plane.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .logo img {
    height: 53px;
  }
}
.el-container {
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  .main {
    margin-top: 120px;
    width: 300px;
    padding: 100px 50px;
    margin-left: 60%;
    background-color: #fff;
    box-shadow: #aaa;
    button {
      width: 100%;
      margin-top: 20px;
    }
    .my-tab-margin {
      input {
        border: none;
        outline: medium;
        margin: 5px 10px;
        line-height: 2;
        font-size: 14px;
        width: 100%;
      }
      .my-input {
        border: none;
        border-bottom: 1px solid #ddd;
        padding: 10px 0;
      }
    }
  }
  .el-footer {
    margin-top: 80px;
    margin-bottom: 15px;
    color: #333;
    text-align: center;
    line-height: 2;
    display: block;
    span {
      border-right: 1px solid #ddd;
      padding: 0 10px;
    }
    .my-last-span {
      border: none;
    }
  }
}
</style>
