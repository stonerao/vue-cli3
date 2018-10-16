import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import http from './utils/axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import i18n from '@/lang/index.ts'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$http = http;
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
