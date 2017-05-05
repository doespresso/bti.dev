//import Vue from './vm';
//import VueMaterial from './vm';

Vue.use(VueMaterial);

Vue.material.registerTheme({
    app: {
        primary: 'cyan'
    },
    about: {
        primary: 'indigo'
    },
    contact: {
        primary: 'teal'
    }
});
var app = new Vue({
    delimiters: ['${', '}'],
    el: '#app',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
});

