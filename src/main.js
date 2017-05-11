import './../app/styles/index.scss'

import Vue from 'vue'
import VueMaterial from 'vue-material/src/'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'yellow',
  accent: 'black',
  warn: 'purple',
  background: 'white'
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