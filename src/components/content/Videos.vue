<template>
  <div>
    <el-row>
      <el-col :span="12" v-for="i in 16">
        <div class="video_box">
          <el-card shadow="never"
                   :style="{'backgroundImage': 'url(' + './images/v' + (i % 3 + 1) +'.jpg' + ')'}">
            <div class="icon_box">
              <i class="el-icon-video-play"><span>114万</span></i>
              <i class="el-icon-s-comment"><span>514万</span></i>
            </div>
          </el-card>
          <p >屑站爆破就要实现</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {GET_VIDEOS_DATA} from "../../store/type";
  export default {
    name: "Videos",
    created() {
      this.$store.dispatch(GET_VIDEOS_DATA);
    }
  }
</script>

<style>
  .el-card {
    border: none;
    /*margin: 5px 10px;*/
    height: 100px;
    width: 170px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  /*这里用一个div把背景卡片和标题都包裹住，然后将原来的外边距改成大div的内边距就能实现背景和标题对齐了*/
  .video_box {
    padding: 5px 10px;
    margin: 5px 0;
  }
  .el-card__body {
    height: 100% !important;
    width: 100% !important;
    display: flex;
    align-items: flex-end;
    padding: 0 !important;
  }
  .icon_box {
    width: 100%;
    justify-content: space-between;
    color: white;
    display: flex;
    padding: 5px;
    font-size: 13px;
  }
  .icon_box > i > span{
    margin: 3px;
  }
</style>