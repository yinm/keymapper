import Vue from 'vue'
import Option from '../components/Option.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { Option },
  template: '<Option/>',
})
