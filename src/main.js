import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import Toasted from 'vue-toasted'
import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueExpandableImage from 'vue-expandable-image'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

Vue.use(Toasted, {
  duration: 3000,
  action: {
    text: 'close',
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
  }
})

Vue.use(VueExpandableImage)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
