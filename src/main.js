import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'

//Vue.config.productionTip = false
Vue.use(VueFire);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
