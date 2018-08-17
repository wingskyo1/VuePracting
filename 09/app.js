new Vue({

    el:'#vue-app',
    data:{
        red : true,
        yellow : true,
    },
    methods:{
        reddo: function(){
            console.log('this is from red do method ')
            this.red = !this.red;
         
        },
        yellowdo: function(){
            console.log('this is from yellow do method ')
            this.yellow =!this.yellow;
        },
        show : function(){
            console.log('from show ')
            return this.red 
        }
    }




});