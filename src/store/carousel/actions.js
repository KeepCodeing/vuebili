import request from "../../network/request";
import {GET_CAROUSEL_DATA} from '../type'
import {LOAD_CAROUSEL_DATA} from "../type";

export default {
  [GET_CAROUSEL_DATA](context) {
    request({
      url: 'data/carousels.json'
    }).then(data => context.commit(LOAD_CAROUSEL_DATA, data.data.data));
  }
}