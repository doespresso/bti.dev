

import Vue from 'vue'
import VueMaterial from 'vue-material/src/'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueMaterial)
Vue.use(VueAwesomeSwiper)

Vue.material.registerTheme('default', {
  primary: 'red',
  accent: 'black',
  warn: 'black',
  background: 'white',
})


var app = new Vue({
  delimiters: ['${', '}'],
  el: '#app',
  data: {
    message: 'You loaded this page on ' + new Date(),
    show:false
  },
  methods: {
    toggleLeftSidenav: function () {
      this.$refs.leftSidenav.toggle();
    },
    toggleRightSidenav: function () {
      this.$refs.rightSidenav.toggle();
      this.$refs.leftSidenav.close();
    },
    closeRightSidenav: function () {
      this.$refs.rightSidenav.close();
    },
    open: function (ref) {
      console.log('Opened: ' + ref);
    },
    close: function (ref) {
      console.log('Closed: ' + ref);
    }
  }
});

import './../app/styles/index.scss'