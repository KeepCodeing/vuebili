import {LOAD_VIDEOS_DATA} from "../type";

export default {
  [LOAD_VIDEOS_DATA](state, data) {
    state.data = data.data;
    state.stat = data.stat;
  }
}