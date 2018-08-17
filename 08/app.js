new Vue({

    el:'#vue-app',
    data:{
        age:20,
        a:0,
        b:0
    },
    methods:{
        addToA_Method: function(){

            console.log('addToA_Method');
            return this.a +this.age;
        },
        addToB_Method: function(){
            console.log('addToB_Method');
            return this.b + this.age;
        }
    },
    computed:{
        addToA: function(){

            console.log('addToA');
            return this.a +this.age;
        },
        addToB: function(){
            console.log('addToB');
            return this.b + this.age;
        }
    }



});