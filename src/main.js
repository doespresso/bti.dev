import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import './../app/styles/index.scss'

Vue.use(VueMaterial)

new Vue({
  el: '#app',
  data:{
    message:'hello'
  }
})