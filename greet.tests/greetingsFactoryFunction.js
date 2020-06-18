var greetingsFactoryFunction = function(){

    var counter = 0;

    var greet = function(name){
        return ("Hello " + name)
    };

    var numberOfPeopleGreeted = function(){
       if (greet() != "") {
           counter++
       }
      return counter;
    }
 











    return{

        greet,
        numberOfPeopleGreeted,

    }
}