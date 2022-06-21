import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import * as echarts from 'echarts';
// import chinas from './assets/js/china'

Vue.prototype.$echarts = echarts //挂载在原型，组件内使用直接this.$echarts调用

Vue.use(ElementUI);
Vue.config.productionTip = false

// 设置访问根路径
axios.defaults.baseURL = "/api"
// 使用地址请求，解决cookie丢失问题
axios.defaults.withCredentials = true;
// 挂载axios
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
