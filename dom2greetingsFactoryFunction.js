var greetingsFactoryFunction = function () {

    var greetingsCounter = 0;
    var language = undefined;
    var namesGreeted = [];
    var tName = "";

   
    var verifyNames = function (name) {
        if (!namesGreeted.includes(name)) {
            namesGreeted.push(name);

        }
        else { return "you have already been greeted"}

    };
    var greetLanguage = function (language, name) {
        
        if (language === "Shona") {
            return ("Hesi Kani "+ name)
        }
        if (language === "Ndebele") {
            return ("Sawubona " + name)
        }
        if (language === "English") {
            return ("Hello " + name)
        }
    }

    var getName = function(){
        console.log(namesGreeted);
return namesGreeted

    };

    // var verifyFunction = function (array) {
    //     var name = "Rose";
    //     for (let i = 0; i < array.length; i++) {
    //         if (array[i] === name) {
    //             return "you have already been counted"
    //         }
    //         else {
    //             continue
    //         }
    //     }

    // }

    // var clearGreetInput = function (name) {
    //     tName = name;
    //     return tName = "";

    // }

    var errorMessageLanguage = function (language) {
        if (language === undefined){
           return "Please select language"
          }
         
        };

    var errorMessageUserName = function (name) {
        tName = name;
        if (tName === "") {
            return "Please enter userName"
        }
        else return
    }
    var numberOfPeopleGreeted = function () {
        return namesGreeted.length;
    }

    return {

      
        numberOfPeopleGreeted,
        greetLanguage,
        storeNames,
        // verifyFunction,
        // theNamesArray,
        verifyNames,
        clearGreetInput,
        errorMessageLanguage,
        errorMessageUserName,
        getName ,
    }
};