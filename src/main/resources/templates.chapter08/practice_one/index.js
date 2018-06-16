/**
 * Created by Rivers on 2018/6/16.
 */
var app = new Vue({
    el: '#app',
    data: {
        show: 'false'
    },
    methods: {
        handleClose: function() {
            this.show = false;
        }
    }
});