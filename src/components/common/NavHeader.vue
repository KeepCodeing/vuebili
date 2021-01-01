<template>
  <div>
<!--  logo，搜索按钮，头像，下载按钮  -->
    <div class="header_info">
      <div class="header_logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="header_other">
        <ul>
          <li>
            <el-button type="info" circle class="search_button"><i class="el-icon-search" style="color: gray" /></el-button>
          </li>
          <li>
            <img src="../../assets/images/avatar.jpg" alt="">
          </li>
          <li>
            <el-button class="download_button">下载APP</el-button>
          </li>
        </ul>
      </div>
    </div>
<!--  导航菜单  -->
    <div class="header_menu">
      <el-scrollbar>
        <el-menu mode="horizontal"
                 active-text-color="#fb7299"
                 background-color="#FFFFFF"
                 default-active="1"
                 router>
          <el-menu-item v-for="item in $store.state.home_store.data"
                        :key="item.id"
                        :index="item.url">{{item.name}}</el-menu-item>

        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  import {GET_NAV_DATA} from '../../store/type'
  export default {
    name: "NavHeader",
    created() {
      this.$store.dispatch(GET_NAV_DATA);
    }
  }
</script>

<style>
  .header_info {
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .header_logo {
    margin: 7px;
    width: 10%;
  }
  .header_logo > img {
    height: 100%;
  }
  .header_other {
    width: 200px;
  }
  .header_other > ul {
    list-style: none;
    display: flex;
    justify-content: left;
    height: 100%;
  }
  .header_other > ul > li {
    width: 75px;
    height: 100%;
    margin: 0 0 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header_other > ul > li > img {
    height: 38px;
    width: 38px;
    border-radius: 50%;
  }
  .header_other > ul > li > .el-button {
    border: none;
  }
  .search_button {
    background: none !important;
    border: none;
  }
  .download_button {
    background: rgb(251, 114, 153) !important;
    font-size: 10px !important;
    text-align: center !important;
    padding: 10px !important;
    color: white !important;
    margin: 5px 20px 5px 5px !important;
  }

  .header_menu {
    height: 40px;
    width: 100%;
    background: black;
  }
  .el-menu-item {
    height: 40px !important;
    line-height: 40px !important;
    margin: 0;
    background: white;
    border: 0;
    box-sizing: unset;
  }
  .is-horizontal {
    height: 0 !important;
    left: 0 !important;
  }
  .el-menu {
    width: 100%;
    /*不知道为什么这里设置成40px会显示成41px...*/
    height: 39px;
    display: flex;
  }
  .el-scrollbar {
    height: 40px;
  }
</style>