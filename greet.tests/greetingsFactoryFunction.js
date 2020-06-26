var greetingsFactoryFunction = function(){

    var counter = 0;
    var language = "";

    var greet = function(name){
        return ("Hello " + name)
    };

    var numberOfPeopleGreeted = function(){
       if (greet() != "") {
           counter++
       }
      return counter;
    }
 
var greetLanguage = function(theLanguage){
   language = theLanguage;
   if (language === "Shona"){
       return ("Hesi Kani ")
   }
   if (language === "Ndebele"){
    return ("Sawubona ")
}
if (language === "English"){
    return ("Hello ")
}
}










    return{

        greet,
        numberOfPeopleGreeted,
        greetLanguage,
    }
}