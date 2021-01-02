import {LOAD_VIDEOS_DATA, GET_VIDEOS_DATA} from "../type";
import request from "../../network/request";

export default {
  [GET_VIDEOS_DATA](context) {
    request({
      url: 'data/videos_list.json',
    }).then(data => context.commit(LOAD_VIDEOS_DATA, {
      data: data.data.data,
      stat: data.data.stat,
    }));
  }
}