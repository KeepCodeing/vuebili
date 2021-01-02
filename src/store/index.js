import Vue from 'vue'
import Vuex from 'vuex'
import home_store from './home'
import carousel_store from './carousel'
import videos_store from './video_list'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home_store,
    carousel_store,
    videos_store,
  }
});
