/**
 * 
 */
import Vue from 'vue'
import store from '@/store/state'
import VueI18n from 'vue-i18n'
import ZH from './zh'
import EN from './en'
Vue.use(VueI18n);
const messages = {
    zh: ZH,
    en: EN
}
const i18n = new VueI18n({
    locale: store.lang,
    messages
})
export default i18n;