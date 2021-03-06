var theName = document.getElementById("theInputTag")
var greetbtn = document.getElementById("greetbtn");
var greetLabel = document.getElementById("theGreetLabel")
var counterLabel = document.getElementById("counterLabel")
var parentContainer = document.getElementsByClassName("container");
var languageLabels = document.getElementsByName("language");
var resetCounter = document.getElementById("resetCounterButton");



var theNamesArray = [];
var counter = 0;
var languageChosen = "";




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

var greetBtnClicked = function () {
  if (theName.value === "") {
    return
  }
  if (languageChosen === "") {
    greetLabel.innerHTML = ("Please select your language")
  }
  if (languageChosen === "Shona") {
    greetLabel.innerHTML = ("Hesi Kani " + theName.value);
    verifyNames();
  }
  if (languageChosen === "Ndebele") {
    greetLabel.innerHTML = ("Sawubona " + theName.value);
    verifyNames();
  }
  if (languageChosen === "English") {
    greetLabel.innerHTML = ("Hello " + theName.value);
    verifyNames();
  }


}

var verifyNames = function () {
  var namesInArray = JSON.parse(localStorage.getItem("namesArray"));
  if (namesInArray === null) {
    namesCounter();
    storeNames();
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
      namesCounter();
      storeNames();
    }
  }
}

var namesCounter = function () {
  if (theName.value === "") {
    return
  }
  else {
    counter++

    return counterLabel.innerHTML = ("total people greeted = " + counter);
  }
}

var clearGreetInput = function () {
  theName.value = "";
}

var storeNames = function () {

  let allNames = {
    "name": theName.value,
  }
  theNamesArray.push(allNames);

  localStorage.setItem("namesArray", JSON.stringify(theNamesArray));
  localStorage.setItem("totalPeopleGreeted", JSON.stringify(counter));
};

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

greetbtn.addEventListener("click", pageRefreshedCount);
greetbtn.addEventListener("click", pageRefreshedNames);
greetbtn.addEventListener("click", theLanguageChosen);
greetbtn.addEventListener("click", greetBtnClicked);
greetbtn.addEventListener("click", clearGreetInput);
resetCounter.addEventListener("click", resetTheCounter);
resetCounter.addEventListener("click", clearLocalStorage);