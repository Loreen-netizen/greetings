var greetingsFactoryFunction = function () {

    var counter = 0;
    var language = "";
    var namesAdded = [];
    var userName = "";


    var greetBtnClicked = function (name, language) {
        userName = name;
        language = language;

        if (language === "Shona") {
            return ("Hesi Kani " + userName);
            verifyNames();
        }
        if (language === "Ndebele") {
            return ("Sawubona " + userName);
            verifyNames();
        }
        if (language === "English") {
            return ("Hello " + userName);
            verifyNames();
        }


    }

    var errorMessageLanguage = function ( theLanguage) {

        language = theLanguage;

        userName = name;
        if (language === "") {
            return ("Please select your language")
        }
        else {greetBtnClicked()}
       
    }

    var errorMessageUserName = function(name){
 userName = name;

 if (userName === "") {
    return ("Please enter userName")
}
else{
    greetBtnClicked()
}

    }

    var clearGreetInput = function (name) {
        userName = name;
        userName = "";
        return userName;
    }

    var namesCounter = function (namesEntered) {
        for (let i = 0; i < namesEntered.length; i++)
            if (namesEntered[i] === "") {
                return
            }
            else {
                counter++
                // errorMessageLanguage
            }
        return ("total people greeted = " + counter);
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

    var storeNames = function (name) {
        userName = name;
        let allNames = {
            "name": userName,
        }
        namesAdded.push(allNames);

        localStorage.setItem("namesArray", JSON.stringify(namesAdded));
        localStorage.setItem("totalPeopleGreeted", JSON.stringify(counter));
        return namesAdded;
    };


    var getNames = function (storedNames) {

        var namesRetrieved = localStorage.getItem("namesArray");
        return JSON.parse(namesRetrieved);
    }








    return {

        greetBtnClicked,
        namesCounter,
        greetLanguage,
        verifyFunction,
        // theNamesArray,
        storeNames,
        clearGreetInput,
        getNames,
        errorMessageUserName,
        errorMessageLanguage,
    }
}