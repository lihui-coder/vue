// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
import echarts from 'echarts'


import axios from 'axios'
// 配置请求根路径，以后把后端跟路径写在这里
axios.defaults.baseURL = ''
// 设置请求拦截器（每次请求之前都先自动执行一个回调函数 把token字段添加到请求头以后再去请求
// 因为有的有权限的api要求你必须携带token令牌我才让你请求）
axios.interceptors.request.use(config => {
  // 这个Authorization好像是根据后端不同的要求确定的，具体情况具体分析
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // render: h => h(App)
})
