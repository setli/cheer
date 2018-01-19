<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#495060" text-color="#fff" active-text-color="#ffd04b">
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

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {}
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
}
</style>
