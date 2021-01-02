// 不知道为什么用了封装过的加了拦截器的axios会导致一些奇怪的问题，比如请求轮播图会导致请求
// 视频列表返回undefined，不知道是不是自己写错了，总之因此受到的改动就是3个actions里传递
// 数据变成了data.data.data（从config里取出data，再从data里取出真正的元素）
import axios from 'axios'

const instance = axios.create({
  baseURL: './',
  timeout: 5000
});

export default function (config) {

  // instance.interceptors.request.use(config => {
  //   return config;
  // }, error => {
  //   return error;
  // });
  //
  // instance.interceptors.response.use(res => {
  //   return res.data;
  // }, error => {
  //   return error;
  // });

  return instance(config);
}