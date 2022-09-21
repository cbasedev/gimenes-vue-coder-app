import Vue from 'vue'
import App from './App.vue'
import jquery from 'jquery'
import bootstrap from 'bootstrap'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(
  jquery,  
  bootstrap
)
