var greetingsFactoryFunction = function () {

    var greetingsCounter = 0;
    var language = undefined;
    var namesGreeted = [];
    var tName = "";

   
    var verifyNames = function (name) {
        if (!namesGreeted.includes(name)) {
            namesGreeted.push(name);

        }

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
    return namesGreeted

    };


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
        verifyNames,
        errorMessageLanguage,
        errorMessageUserName,
        getName ,
    }
};