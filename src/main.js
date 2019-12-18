import Vue from 'vue'
import App from './App.vue'
import axiosConfig from '../src/config/axiosConfig'

Vue.use(axiosConfig)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')