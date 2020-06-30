var theName = document.getElementById("theInputTag")
var greetbtn = document.getElementById("greetbtn");
var greetLabel = document.getElementById("theGreetLabel")
var counterLabel = document.getElementById("counterLabel")
var parentContainer = document.getElementsByClassName("container");
var languageLabels = document.getElementsByName("language");
var resetCounter = document.getElementById("resetCounterButton");

var greetingsFunctionInstance = greetingsFactoryFunction();

greetbtn.onclick = function() {

  greetingsFunctionInstance.clearGreetInput();
  greetingsFunctionInstance.pageRefreshedCount();
  greetingsFunctionInstance.pageRefreshedNames();
  greetingsFunctionInstance.theLanguageChosen();
  greetingsFunctionInstance.errorMessageUserName();
  verifyNames();
}

var pageRefreshedCount = function () {
  if (JSON.parse(localStorage.getItem("totalPeopleGreeted")) === null) {
    counter = 0;
  }
  else {
    counter = JSON.parse(localStorage.getItem("totalPeopleGreeted"))
  }
}

var pageRefreshedNames = function () {
  if (JSON.parse(localStorage.getItem("namesArray")) === null) {
    theNamesArray = []
  }
  else {
    theNamesArray = JSON.parse(localStorage.getItem("namesArray"))
  }
}

var theLanguageChosen = function () {
  let languageArray = Array.from(languageLabels);
  for (let i = 0; i < languageArray.length; i++) {
    if (languageArray[i].checked) {
      languageChosen = languageArray[i].value;
    }

  }
}

var verifyNames = function () {
  var namesInArray = JSON.parse(localStorage.getItem("namesArray"));
  if (namesInArray === null) {
    greetingsFunctionInstance.namesCounter();
    greetingsFunctionInstance.storeNames();
  }
  else if (namesInArray != null) {
    var nameExist = undefined;
    for (let i = 0; i < namesInArray.length; i++) {
      var eachName = Object.values(namesInArray[i]).toString();
      var userInput = theName.value;
      if (userInput.toUpperCase() === eachName.toUpperCase()) {
        nameExist = true;
        return;
      }
      else {
        nameExist = false;
        continue;
      }

    }

    if (nameExist === false) {
      greetingsFunctionInstance.namesCounter();
      greetingsFunctionInstance.storeNames();
    }
  }
}


var resetTheCounter = function () {
  localStorage.removeItem("totalPeopleGreeted");
  if (JSON.parse(localStorage.getItem("totalPeopleGreeted")) === null) {
    counter = 0;
  }
  else {
    counter = JSON.parse(localStorage.getItem("totalPeopleGreeted"))
  }
  return counterLabel.innerHTML = ("total people greeted = " + counter);
};

var clearLocalStorage = function () {
  localStorage.removeItem("namesArray");
  greetLabel.innerHTML = ("welcome!");

}

window.onload = function () {
  var allNamesInArray = JSON.parse(localStorage.getItem("namesArray"))
  if (JSON.parse(localStorage.getItem("totalPeopleGreeted")) != null) {
    counterLabel.innerHTML = ("total people greeted = " + allNamesInArray.length);
  }
  else { counterLabel.innerHTML = "counter" }
};

// greetbtn.addEventListener("click", pageRefreshedCount);
// greetbtn.addEventListener("click", pageRefreshedNames);
// greetbtn.addEventListener("click", theLanguageChosen);
greetbtn.addEventListener("click", clearGreetInput);
resetCounter.addEventListener("click", resetTheCounter);
resetCounter.addEventListener("click", clearLocalStorage);