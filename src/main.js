import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import Loading from 'vue3-loading-overlay'
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import $httpMessageState from '@/methods/pushMessageState'
import App from './App.vue'
import router from './router'
import { date, currency } from './methods/filters'

const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}
app.config.globalProperties.$httpMessageState = $httpMessageState
app.use(router)
app.use(VueAxios, axios)
// app.component('Loading', Loading)
app.mount('#app')
