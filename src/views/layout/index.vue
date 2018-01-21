<template>
  <el-container>
    <el-header>
      <vheader></vheader>
    </el-header>
    <el-container class="layout-content">
      <el-aside width="200px">
        <leftNav></leftNav>
      </el-aside>
      <el-container>
        <el-main>
          <appmain></appmain>
        </el-main>
        <!-- <el-footer>
          <vfooter></vfooter>
        </el-footer> -->
      </el-container>
    </el-container>
  </el-container>

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
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
    }
  }
};
</script>

<style lang="scss" scoped>


.layout-content {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  background: #f5f7f9;
  z-index: 0;
  overflow: hidden;
  word-break: break-all;
  margin-top: 61px;
}
.el-main {
  background: #f5f7f9;
  width: 100%;
  //min-height: 500px;
}
footer {
  padding: 0;
  background: #f5f7f9;
  text-align: center;
  color: #999;
  line-height: 45px;
}
</style>
