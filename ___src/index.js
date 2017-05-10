import Vue from './vue';
//import VueMaterial from 'vue-material'
//import CSS from 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial);

var app = new Vue({
  delimiters: ['${', '}'],
  el: '#app',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
});
