var greetingsFactoryFunction = function(){

    var counter = 0;
    var language = "";
    var namesAdded = [];
    var greet = function(name){
        namesAdded.push(name);
        return ("Hello " + name)
    };

    var theNamesArray = function(){
        return namesAdded;
    }

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