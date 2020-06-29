var greetingsFactoryFunction = function(){

    var counter = 0;
    var language = "";
    var namesAdded = [];
    var userName = "";

    
    var greetBtnClicked = function (name, language) {
       userName = name;
       language = language;
       
        if (userName === "") {
          return
        }
        if (language === "") {
         return ("Please select your language")
        }
        if (language === "Shona") {
          return ("Hesi Kani " + userName);
          verifyNames();
        }
        if (language === "Ndebele") {
         return ("Sawubona " + userName);
          verifyNames();
        }
        if (language=== "English") {
          return ("Hello " + userName);
          verifyNames();
        }
      
      
      }

      var clearGreetInput = function (name) {
          userName = name;
        userName = "";
      }

    var namesCounter = function (namesEntered) {
       for(let i = 0; i < namesEntered.length; i++)
        if (namesEntered[i] === "") {
          return
        }
        else {
          counter++
          
        }
        return  ("total people greeted = " + counter);
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

var storeNames = function () {

    let allNames = {
      "name": userName,
    }
    namesAdded.push(allNames);
  
    localStorage.setItem("namesArray", JSON.stringify(namesAdded));
    localStorage.setItem("totalPeopleGreeted", JSON.stringify(counter));
  };
  










    return{

        greetBtnClicked,
        namesCounter,
        greetLanguage,
        verifyFunction,
        // theNamesArray,
        storeNames,
        clearGreetInput,
    }
}