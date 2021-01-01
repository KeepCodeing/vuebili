# Vuebili
> 随时弃坑（另外偷懒没有起路径别名）
# 技术栈
Vue + Vuex + Vue-router + axios + element-ui
# API接口
API接口采用本地数据的形式。
## 本地接口

本地数据均存放在public/data文件下
## B站接口
[B站首页数据接口](https://api.bilibili.com/x/web-interface/wx/hot?ps=100)

# 思路和踩坑记录
## 首页
首先可以发现页面顶部的logo，搜索框还有菜单那块是固定的，不管什么页面都有，因此可以把这一部分抽离成一个公共组件。\
其次是下面的轮播图和视频列表，这两个东西也可以拆分成两个组件，用一个header+main布局