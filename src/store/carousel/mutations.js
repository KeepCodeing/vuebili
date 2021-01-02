import {LOAD_CAROUSEL_DATA} from "../type";

export default {
  [LOAD_CAROUSEL_DATA](state, data) {
    state.data = data;
  }
}