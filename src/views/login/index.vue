<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <div class="main">
          <el-input placeholder="用户名" v-model="username">
          </el-input>
          <el-input placeholder="密码" v-model="passport">
          </el-input>
          <el-button type="primary" @click="submit">登录</el-button>
        </div>
      </el-main>
      <el-footer>
        <p>底部显示文本</p>
      </el-footer>
    </el-container>
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
      this.$cookies.set("logged", true)
    }
  }
};
</script>
<style lang="scss" scoped>

.main {
  width: 400px;
  padding: 200px;
  button{
    width: 100%;
  }
}
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
