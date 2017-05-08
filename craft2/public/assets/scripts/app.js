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

