import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import http from './utils/axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/lang/index.ts'

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = http;

const { state: { NODE_ENV } } = store;
//开发模式 or 生产模式 
if (NODE_ENV === "development") {

} else {

}


router.beforeEach((to, from, next) => {
  next()
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
