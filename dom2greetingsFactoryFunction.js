var greetingsFactoryFunction = function(names) {

    // var greetingsCounter = 0;
     var language = undefined;
    var namesGreeted = names || [];
    // var theName = "";

    var verifyNames = function(name) {
      var  theName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      
      if(theName){
        if (!namesGreeted.includes(theName)) {
            namesGreeted.push(theName)
        }
    }
    };

    // var alreadyGreeted = function(theName,getNames) {
    //     if (getNames.includes(theName.toUpperCase())) {
    //         return "you have already been greeted"

    //     }

    // };

    var greetLanguage = function (name, language) {
       var caseName =  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        if (language === "Shona") {
            return ("Hesi Kani " + caseName + "!")
        }
        if (language === "Ndebele") {
            return ("Sawubona " + caseName + "!")
        }
        if (language === "English") {
            return ("Hello " + caseName + "!")
        }
        else if(language === undefined || language === null){
          return "Please select language!"
        }
    }


    var errorMessageLanguage = function () {
        if (language === null || language === undefined) {
            return "Please select language"
        }

    };

    var getName = function () {
        return namesGreeted;
    };

    var errorMessageUserName = function (name) {
        tName = name;
        if (tName === "") {
            return "Please enter userName"
        }
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
        getName,
        // alreadyGreeted ,
    }
};