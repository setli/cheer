<template>
  <div>
    <!-- 第一行 -->
    <el-row :gutter="20">
      <!-- 左侧 -->
      <el-col :md="24" :lg="8">
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-row>
        <el-row>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>卡片名称</span>
              <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-row>
      </el-col>
      <!-- 右侧 -->
      <el-col :md="24" :lg="16">
        <!-- 右侧上 -->
        <el-row :gutter="20">
          <el-col v-for="(item,index) in items" :key="index" :xs="24" :sm="12" :md="6">
            <el-card >
              <div class="infor-card">
              <div class="infor-card-left">icon</div>
              <div class="infor-card-content">
                <p class="num" v-text="item.count"></p>
                <p class="info"  v-text="item.name"></p>
              </div>
            </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 右侧下 -->
        <el-row :gutter="20">
          <el-col :span="12">
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
          <el-col :span="12">
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
        </el-row>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row :gutter="20">
      <el-col>
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
      
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "今日新增用户",
          count: 500
        },
        {
          name: "今日流量",
          count: "3K+"
        },
        {
          name: "今日新增用户",
          count: 500
        },
        {
          name: "今日流量",
          count: "3K+"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.el-row{
  margin-bottom: 20px;
}
.infor-card{
  height: 68px;
  .infor-card-left{
    width: 50px;
    position: absolute;
  }
  .infor-card-content{
    padding-left: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    .info {
      font-size: 12px;
      font-weight: 500;
      color: #C8C8C8;
    }
  }
}
</style>
