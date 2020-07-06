var greetingsFactoryFunction = function () {

    var greetingsCounter = 0;
    var language = undefined;
    var namesGreeted = [];
    var theName = "";


    var verifyNames = function (name,namesArray) {
        theName = name.toUpperCase();
        if (namesArray.includes(theName)) {
            alreadyGreeted();
        }
        else{
            namesGreeted.push(theName);
            numberOfPeopleGreeted(namesGreeted);
        }

    };

    var alreadyGreeted = function(theName,getNames) {
        if (getNames.includes(theName.toUpperCase())) {
            return "you have already been greeted"

        }

    };
    var greetLanguage = function (language, name) {

        if (language === "Shona") {
            return ("Hesi Kani " + name)
        }
        if (language === "Ndebele") {
            return ("Sawubona " + name)
        }
        if (language === "English") {
            return ("Hello " + name)
        }
    }


    var errorMessageLanguage = function (language) {
        if (language === undefined) {
            return "Please select language"
        }

    };


    var getName = function () {
        return namesGreeted

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
        getName,
        alreadyGreeted ,
    }
};