<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#495060" text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item class="logo">
        <div>logo</div>
      </el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <a>订单管理</a>
      </el-menu-item>
    </el-menu>
    <div class="avatar">
      <el-dropdown>
        <a class="el-dropdown-link">
          管理员
          <i class="el-icon-arrow-down el-icon--right"></i>
        </a>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>我的信息</el-dropdown-item>
          <el-dropdown-item>系统设置</el-dropdown-item>
          <el-dropdown-item divided @click="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>
        <img src="https://avatars3.githubusercontent.com/u/19206807?s=40&v=4" />
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: "1"
      };
    },
    methods: {
      logout(){
        window.$cookies.remove('logged',false);
      }
    }
  };

</script>

<style lang="scss">

  .el-header {
    .logo {
      width: 200px;
      text-align: center;
      div {
        width: 100px;
        height: 30px;
        background: #5b6270;
        text-align: center;
        line-height: 30px;
        vertical-align: middle;
        display: inline-block;
      }
    }
    padding: inherit !important;
    .avatar {
      color: #fff;
      position: absolute;
      right: 0;
      top: 0;
      line-height: 60px;
      .el-dropdown{
        padding: 0 15px;
      }
      .el-dropdown:hover{
        background: rgba(58, 64, 77, 1)
      }
      .el-dropdown-link {
        color: #fff;
      }
      img {
        margin-right: 20px;
        border-radius: 50%;
        box-sizing: border-box;
      }
    }
  }

</style>
