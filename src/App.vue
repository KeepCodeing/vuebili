<template>
  <div id="app" style="height: 100%">
    <el-container>
    <!--   头部导航组件的容器，注意这个height: 90px，这是因为里面两个div的高度
       无法将header撑开-->
      <el-header height="90px">
        <NavHeader />
      </el-header>
      <el-main>
        111
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import NavHeader from "./components/common/NavHeader";
  export default {
    name: 'app',
    components: {
      NavHeader,
    }
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
