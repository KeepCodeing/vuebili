import request from "../../network/request";
import {GET_NAV_DATA} from "../type";
import {LOAD_NAV_DATA} from "../type";

export default {
  [GET_NAV_DATA](context) {
    request({
      url: 'data/nav_menu.json'
    }).then(data => context.commit(LOAD_NAV_DATA, data.data.data));
  }
}