import Vue from 'vue'
window.Vue = Vue;
import VueMaterial from 'vue-material/src/'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Collapse from 'vue-collapse'
//AIzaSyBBrn0a7rWAu93NAFSXQtV1Hkvjv_pIiHo

Vue.use(VueMaterial)
Vue.use(VueAwesomeSwiper)
Vue.use(Collapse)


Vue.material.registerTheme(window.themes);
Vue.material.setCurrentTheme(window.theme);


var app = new Vue({
    components: {Collapse},
    delimiters: ['${', '}'],
    el: '#app',
    data: {
        message: 'You loaded this page on ' + new Date(),
        show: false,
        loaded: false,
        fservice:[],
        fbranch:[]
    },
    created: function () {
        this.loaded = true;
        console.log('LOADED');
    },
    mounted: function () {
        //this.$refs.rightSidenav.open();
    },
    methods: {
        submenuClicked: function (tab) {
            console.log("TABB");
            window.location.href = tab;
        },
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
        //open: function (ref) {
        //    console.log('Opened: ' + ref);
        //},
        //close: function (ref) {
        //    console.log('Closed: ' + ref);
        //},
        openDialog: function (ref) {
            this.$refs[ref].open();
        },
        closeDialog: function (ref) {
            this.$refs[ref].close();
        }
    }
});


import './../app/styles/index.scss'



