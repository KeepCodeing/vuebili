import {LOAD_NAV_DATA} from "../type";

export default {
  [LOAD_NAV_DATA](state, data) {
    state.data = data;
  }
}