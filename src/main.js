import './../app/styles/index.scss'

import Vue from 'vue'
import VueMaterial from 'vue-material/src/'


Vue.use(VueMaterial)

new Vue({
  el: '#app',
  data:{
    message:'hello'
  }
})