import axios from 'axios'

const instance = axios.create({
  baseURL: './',
  timeout: 5000
});

export default function (config) {

  instance.interceptors.request.use(config => {
    return config;
  }, error => {
    return error;
  });

  instance.interceptors.response.use(res => {
    return res.data;
  }, error => {
    return error;
  });

  return instance(config);
}