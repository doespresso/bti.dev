import './../app/styles/index.scss'

import Vue from 'vue'
import VueMaterial from 'vue-material/src/'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'green',
  accent: 'white',
  warn: 'purple',
  background: 'white'
})


new Vue({
  el: '#app',
  data:{
    message:'hello'
  }
})