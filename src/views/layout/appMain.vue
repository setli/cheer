<template>
  <div>
<div class="layout">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="layout-main">
      <router-view :key="key"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    }
  }
};
</script>

<style lang="scss" scoped>
.layout {
  padding: 2px;
  padding-bottom: 17px;
  width: 100%;
}
.layout-main {
  //border: 1px solid #dddee1;
  //border-color: #e9eaec;
  //padding: 15px;
  //background: #fff !important;
  //border-radius: 4px;
  font-size: 14px;
  position: relative;
  transition: all 0.2s ease-in-out;
  min-height: 200px;
}
</style>

