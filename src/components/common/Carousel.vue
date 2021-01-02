<template>
<!-- 注意这里可以通过设置height属性的方式设定走马灯的高度，也可以通过设置header
 的高度加CSS样式设置-->
  <el-carousel height="150px" arrow="never">
    <el-carousel-item v-for="item in $store.state.carousel_store.data"
                      :key="item.id"
                      :style="{'backgroundImage': 'url(' + item.url + ')'}"
                      class="carousel-image">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  import {GET_CAROUSEL_DATA} from "../../store/type";

  export default {
    name: "Carousel",
    created() {
      this.$store.dispatch(GET_CAROUSEL_DATA);
    }
  }
</script>

<style>
  .el-carousel {
    margin: 7px;
    border-radius: 3px;
  }
  .carousel-image {
    background-position: center;
    background-size: cover;
  }
</style>