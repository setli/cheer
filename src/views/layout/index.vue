<template>
  <div>
    <el-container>
      <el-header>
        <vheader></vheader>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <leftNav></leftNav>
        </el-aside>
        <el-main>
          <appmain></appmain>
        </el-main>
        <el-footer><vfooter></vfooter></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import vheader from "views/layout/header";
  import leftNav from "views/layout/leftNav";
  import vfooter from "views/layout/footer";
  import appmain from "views/layout/appMain";
  export default {
    data() {
      return {};
    },
    components: {
      vheader,
      leftNav,
      vfooter,
      appmain
    },
    computed: {
      key() {
        return this.$route.name !== undefined ?
          this.$route.name + +new Date() :
          this.$route + +new Date();
      }
    }
  };

</script>

<style>


</style>
