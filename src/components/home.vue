<template>
  <el-container>
    <!-- 顶部区域 -->
    <div class="top">
      <div>
        <img src="../assets/img/title.png" alt="" />
        <span>数据异常检测分析工具</span>
      </div>
      <div>
        <i class="el-icon-user"></i>
        <span>李惠</span>
      </div>
    </div>
    <!-- 头部区域 -->
    <el-header>
      <el-menu
        mode="horizontal"
        background-color="#517FD3"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">数据接入</template>
          <el-menu-item index="1-1">文件数据</el-menu-item>
          <el-menu-item index="1-2">数据集管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">模型训练</template>
          <el-menu-item index="2-1">数据清洗</el-menu-item>
          <el-menu-item index="2-2">特征选取</el-menu-item>
          <el-menu-item index="2-3">模型训练</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">模型部署验证</template>
          <el-menu-item index="3-1">模型管理</el-menu-item>
          <el-menu-item index="3-2">模型验证</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">配置</template>
          <el-menu-item index="4-1">配置1</el-menu-item>
          <el-menu-item index="4-2">配置2</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-container class="secondContainer">
      <!-- 侧边栏区域 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <el-menu
          mode="vertical"
          background-color="#ffffff"
          text-color="#000000"
          active-text-color="#517FD3"
          router
        >
          <!-- 这个折叠菜单栏功能没实现，感觉改变collapse的值menu不相应呢？？ -->
          <!-- <div class="toggleButton" @click="toggleCollapse">|||</div> -->
          <!-- 为啥用这种方式绑定渲染不出来呢？？ -->
          <!-- <el-submenu :index="item.id + ''" v-for="item in menuList" :key="item.id">
        <template>
          <i class=""></i>
          <span>{{item.navTitle}}</span>
        </template>
        <el-menu-item :index="item.id + ''" v-for="subitem in item.children" :key="subitem.id">
          <template>
            <i class=""></i>
          <span>{{subitem.navTitle}}</span>
          </template>
        </el-menu-item>
      </el-submenu> -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-unfold"></i>
              <span>数据接入</span>
            </template>
            <el-menu-item index="fileData">
              <i class="el-icon-menu"></i>
              <span>文件数据</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-data-line"></i>
              <span>模型训练</span>
            </template>
            <el-menu-item index="featureSelection">
              <i class="el-icon-menu"></i>
              <span>特征选取</span>
            </el-menu-item>
            <el-menu-item index="modelTraining">
              <i class="el-icon-menu"></i>
              <span>模型训练</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-magic-stick"></i>
              <span>模型部署验证</span>
            </template>
            <el-menu-item index="modelValidation">
              <i class="el-icon-menu"></i>
              <span>模型验证</span>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>配置</span>
            </template>
            <el-menu-item index="configOne">
              <i class="el-icon-menu"></i>
              <span>配置1</span>
            </el-menu-item>
            <el-menu-item index="configTwo">
              <i class="el-icon-menu"></i>
              <span>配置2</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 页面主体区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      //   menuList: [
      //     {
      //       id: 1,
      //       navTitle: '数据接入',
      //       children: [
      //         {
      //           id: 1-1,
      //           navTitle: 文件数据
      //         },
      //         {
      //           id: 1-2,
      //           navTitle: 数据集管理
      //         }
      //       ]
      //     },
      //     {
      //       id: 2,
      //       navTitle: '模型训练',
      //       children: [
      //         {
      //           id: 2-1,
      //           navTitle: 数据清洗
      //         },
      //         {
      //           id: 2-2,
      //           navTitle: 特征选取
      //         },
      //         {
      //           id: 2-3,
      //           navTitle: 模型训练
      //         }
      //       ]
      //     },
      //     {
      //       id: 3,
      //       navTitle: '模型部署验证',
      //       children: [
      //         {
      //           id: 3-1,
      //           navTitle: 模型管理
      //         },
      //         {
      //           id: 4-2,
      //           navTitle: 模型验证
      //         }
      //       ]
      //     },
      //     {
      //       id: 4,
      //       navTitle: '配置',
      //       children: [
      //         {
      //           id: 4-1,
      //           navTitle: 配置1
      //         },
      //         {
      //           id: 4-2,
      //           navTitle: 配置2
      //         }
      //       ]
      //     }
      //   ],
      isCollapse: false,
      activePath: "",
    };
  },
  methods: {
    // toggleCollapse() {
    //   this.isCollapse = ! this.isCollapse
  },
};
</script>

<style lang="less" scoped>
.top {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  font-size: 20px;
  padding-left: 0px;
  padding-right: 0px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
      margin-right: 15px;
    }
  }
}
</style>
