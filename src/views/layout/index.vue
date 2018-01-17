<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import header from '/layout/header'
import leftNav from '/layout/leftNav'
import footer from '/layout/footer'

  export default {
      data(){
        return{

        }
      },
      components:{
        header,
        leftNav,
        footer
      }
  };

</script>

<style>


</style>
