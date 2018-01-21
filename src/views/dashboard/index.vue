<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="4">
        <div class="infor-card-con">
            <div class="infor-card-icon-con ivu-col ivu-col-span-8" style="background-color: rgb(45, 140, 240); color: white; padding-left: 5px; padding-right: 5px;">
                <div class="height-100 ivu-row-flex ivu-row-flex-middle ivu-row-flex-center">
                <i class="ivu-icon ivu-icon-android-person-add" style="font-size: 40px;"></i>
                </div>
            </div>
            <div class="height-100 ivu-col ivu-col-span-16"><div class="height-100 ivu-row-flex ivu-row-flex-middle ivu-row-flex-center"><div class="infor-card-count user-created-count"><p style="text-align: center; color: rgb(45, 140, 240); font-size: 30px; font-weight: 700;"><span id="user_created_count">496</span><span></span></p> <p class="infor-intro-text">今日新增用户</p></div></div></div>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {}
  };

</script>

<style lang="scss" scoped>


</style>
