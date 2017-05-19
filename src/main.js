import Vue from 'vue'
window.Vue = Vue;
import VueMaterial from 'vue-material/src/'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueMaterial)
Vue.use(VueAwesomeSwiper)

Vue.material.registerTheme(window.themes);
Vue.material.setCurrentTheme(window.theme);

var app = new Vue({
    delimiters: ['${', '}'],
    el: '#app',
    data: {
        message: 'You loaded this page on ' + new Date(),
        show: false,
        loaded:false,
    },
    created: function () {
        this.loaded=true;
        console.log('LOADED');
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



