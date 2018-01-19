<template>
  <el-container>
    <el-header>
      <vheader></vheader>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <leftNav />
      </el-aside>
      <el-container>
        <el-main>
          <appmain />
        </el-main>
        <el-footer>
          <vfooter />
        </el-footer>
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

.el-main {
  background: #f5f7f9;
  min-height: 500px;
}
footer {
  padding: 0;
  background: #f5f7f9;
  text-align: center;
  color: #999;
}
</style>
