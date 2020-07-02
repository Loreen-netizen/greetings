var theName = document.getElementById("theInputTag")
var greetbtn = document.getElementById("greetbtn");
var greetLabel = document.getElementById("theGreetLabel")
var counterLabel = document.getElementById("counterLabel")
var parentContainer = document.getElementsByClassName("container");
var languageLabels = document.getElementsByName("language");
var resetCounter = document.getElementById("resetCounterButton");
var languageChosen = "";
var greetingsFunctionInstance = greetingsFactoryFunction();

var theLanguageChosen = function(){
  let languageArray = Array.from(languageLabels);
  for (let i = 0; i < languageArray.length; i++) {
    if (languageArray[i].checked) {
       languageChosen = languageArray[i].value;
      greetBtnClicked(languageChosen);
      return languageChosen;
    }
    else{
      continue
    }
   
  }
  
}

var greetBtnClicked = function () {

  if (languageChosen === undefined || languageChosen === "") {
    greetLabel.innerHTML = greetingsFunctionInstance.errorMessageLanguage()
  }
  else {
    greetLabel.innerHTML = greetingsFunctionInstance.greetLanguage(String(languageChosen), String(theName.value));
    greetingsFunctionInstance.verifyNames(String(theName.value))
  };

};
greetbtn.onclick = function () {
  storeNames();
  theLanguageChosen();
  greetBtnClicked();
  clearGreetInput();
  namesCounter();

}

var namesCounter = function () {
  var numberOfGreetings = greetingsFunctionInstance.numberOfPeopleGreeted();
  counterLabel.innerHTML = ("Total people greeted = " + numberOfGreetings);
}

var clearGreetInput = function () {
  theName.value = "";
}

var storeNames = function () {

  localStorage.setItem("namesGreeted", JSON.stringify(greetingsFunctionInstance.getName()));
  localStorage.setItem("numberOfPeopleGreeted", JSON.stringify(greetingsFunctionInstance.numberOfPeopleGreeted()));
};

var resetTheCounter = function () {
  localStorage.removeItem("namesGreeted");
  var counter = greetingsFunctionInstance.numberOfPeopleGreeted()
  if (JSON.parse(localStorage.getItem("namesGreeted")) === null) {
    counter = 0;
  }
  else {
    counter = JSON.parse(localStorage.getItem("namesGreeted"))
  }
  return counterLabel.innerHTML = ("total people greeted = " + counter);
};

var clearLocalStorage = function () {
  localStorage.removeItem("numberOfPeopleGreeted");
  greetLabel.innerHTML = ("welcome!");

}

window.onload = function () {
  var allNamesInArray = JSON.parse(localStorage.getItem("namesArray"))
  if (JSON.parse(localStorage.getItem("totalPeopleGreeted")) != null) {
    counterLabel.innerHTML = ("total people greeted = " + allNamesInArray.length);
  }
  else { counterLabel.innerHTML = "counter" }
};


resetCounter.addEventListener("click", resetTheCounter);
resetCounter.addEventListener("click", clearLocalStorage);