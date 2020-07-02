var greetingsFactoryFunction = function(){

    var greetingsCounter = 0;
    var language = "";
    var namesAdded = [];
    var namesGreeted = {};

    var greet = function(name){
        if (namesGreeted[userName] === undefined){
             greetingsCounter++;
             namesGreeted.push(userName);
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

    var theNamesArray = function(){
        return namesAdded;
    }

    
 

var verifyFunction = function(array){
 var name = "Rose";
    for(let i = 0; i < array.length; i++){
       if( array[i] === name){
           return "you have already been counted"
       }
       else{
           continue
       }
    }

}










    return{

        greet,
        numberOfPeopleGreeted,
        greetLanguage,
        verifyFunction,
        theNamesArray,
    }
}