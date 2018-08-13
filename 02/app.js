new Vue({

    el:'#vue-app',
    data:{
        message:'test',
        name : 'Wing',
        job : 'Software Engineer'

    },
    methods:{
        greet : function(time){
            return "Good "+ time
        }


    }



});