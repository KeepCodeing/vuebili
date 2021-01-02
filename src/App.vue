<template>
  <div id="app" style="height: 100%">
    <el-container>
    <!--   头部导航组件的容器，注意这个height: 90px，这是因为里面两个div的高度
       无法将header撑开-->
      <el-header height="90px">
        <NavHeader />
      </el-header>
    <!--   轮播图及视频列表组件   -->
      <el-container>

        <el-header style="height: auto;">
          <Carousel />
        </el-header>

    <!--    视频列表组件    -->
        <el-main>
          <Videos />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import NavHeader from "./components/common/NavHeader";
  import Carousel from "./components/common/Carousel";
  import Videos from "./components/content/Videos";
  export default {
    name: 'app',
    components: {
      NavHeader,
      Carousel,
      Videos,
    },
  }
</script>

<style>
  @import "assets/css/base.css";
  .el-header {
    padding: 0 !important;
  }
  .el-main {
    padding: 0 !important;
  }
</style>
