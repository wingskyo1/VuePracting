new Vue({

    el:'#vue-app',
    data:{
        message:'test',
        name : 'Wing',
        job : 'Software Engineer',
        linktag : '<a href="http://www.google.com">google</a>'

    },
    methods:{
        greet : function(time){
            
            return "Good "+ time + this.name
        }


    }



});