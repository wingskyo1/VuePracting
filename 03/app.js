new Vue({

    el:'#vue-app',
    data:{
        message:'test',
        name : 'Wing',
        job : 'Software Engineer',
        website :'http://www.google.com',
        linkhtml :'<a href="http://www.google.com">Link Html</a>'

    },
    methods:{
        greet : function(time){
            
            return "Good "+ time + this.name
        }


    }



});