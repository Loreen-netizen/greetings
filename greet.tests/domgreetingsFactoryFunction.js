var greetingsFactoryFunction = function () {

    var greetingsCounter = 0;
    var language = "";
    var namesGreeted = [];
    var tName = "";


    var greet = function (name) {
        greetingsCounter++;
        return ("Hello " + name)
    }


    var verifyNames = function (name) {
        if (namesGreeted.includes(name)) {
            return namesGreeted;
        }
        else {
            namesGreeted.push(name);
            return namesGreeted;
        }

    }

    var numberOfPeopleGreeted = function () {
        return namesGreeted.length;
    }

    var storeNames = function () {
        (localStorage.setItem("namesGreeted", JSON.stringify(namesGreeted)));
        return (localStorage.getItem("namesGreeted"));

    }

    var getNames = function () {

        return JSON.parse(localStorage.getItem("namesGreeted"));

    }


    var greetLanguage = function (theLanguage) {
        language = theLanguage;
        if (language === "Shona") {
            return ("Hesi Kani ")
        }
        if (language === "Ndebele") {
            return ("Sawubona ")
        }
        if (language === "English") {
            return ("Hello ")
        }
    }

    var theNamesArray = function () {
        return namesAdded;
    }

    var verifyFunction = function (array) {
        var name = "Rose";
        for (let i = 0; i < array.length; i++) {
            if (array[i] === name) {
                return "you have already been counted"
            }
            else {
                continue
            }
        }

    }

    var clearGreetInput = function (name) {
        tName = name;
        return tName = "";

    }

    var errorMessageLanguage = function (languageSelected) {
        language = languageSelected;
        if (language === "") {
            return "Please select language"
        }
        else if (language === "Shona") {
            return ("Hesi Kani ")
        }
        else if (language === "Ndebele") {
            return ("Sawubona ")
        }
        else if (language === "English") {
            return ("Hello ")
        }
    };

    var errorMessageUserName = function (name) {
        tName = name;
        if (tName === "") {
            return "Please enter userName"
        }
        else return
    }

    return {

        greet,
        numberOfPeopleGreeted,
        greetLanguage,
        storeNames,
        getNames,
        verifyFunction,
        theNamesArray,
        verifyNames,
        clearGreetInput,
        errorMessageLanguage,
        errorMessageUserName,
    }
};