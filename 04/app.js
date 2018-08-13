new Vue({

    el:'#vue-app',
    data:{
        age:25,
        x:0,
        y:0,

    },
    methods:{
        greet : function(time){
            
            return "Good "+ time + this.name
        },

        add : function(number){

            this.age+=number;
        },
        sub :function(number){

            this.age-=number;
        },
        updateXY: function(event){

            this.x = event.offsetX;
            this.y = event.offsetY;
        }


    }



});