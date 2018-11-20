import Vue from 'vue'

import App from './App.vue'
import router from './router/index'
import store from './store/index'
import http from './utils/axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/lang/index.ts'
import './components/public/defalut.js'
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = http;

/**
 * development 开发环境
 * production 生产环境
*/
const NODE_ENV: string = "development"
if (NODE_ENV === "development") {

} else {

}
/* router.beforeEach((to, from, next) => {
  console.log(to,from)
  next()
}) */
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
