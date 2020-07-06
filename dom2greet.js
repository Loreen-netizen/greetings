var theName = document.getElementById("theInputTag")
var greetbtn = document.getElementById("greetbtn");
var greetLabel = document.getElementById("theGreetLabel")
var counterLabel = document.getElementById("counterLabel")
var parentContainer = document.getElementsByClassName("container");
var languageLabels = document.getElementsByName("language");
var resetCounter = document.getElementById("resetCounterButton");
var languageChosen = "";
var greetingsFunctionInstance = greetingsFactoryFunction();


var pageRefreshedCount = function () {
  var getNames =JSON.parse(localStorage.getItem("namesGreeted"));
  if( Array.from(getNames) === null) {
    greetingsFunctionInstance.verifyNames(theName.value, Array.from(getNames));
  }
  else {
    counterLabel.innerHTML = greetingsFunctionInstance.numberOfPeopleGreeted();
    greetingsFunctionInstance.alreadyGreeted(theName.value, Array.from(getNames));
  }
}

var pageRefreshedNames = function () {
  if (JSON.parse(localStorage.getItem("namesGreeted")) === null) {
    namesGreeted = []
  }
  else {
    namesGreeted = JSON.parse(localStorage.getItem("namesGreeted"))
    greetingsFactoryFunction(namesGreeted);
  }
}

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
  var getNames =JSON.parse(localStorage.getItem("namesGreeted"));
  if (languageChosen === undefined || languageChosen === "") {
    greetLabel.innerHTML = greetingsFunctionInstance.errorMessageLanguage();
  }
  else if(greetingsFunctionInstance.alreadyGreeted(theName.value, Array.from(getNames))=== true){
   return greetLabel.innerHTML = greetingsFunctionInstance.alreadyGreeted((theName.value, Array.from(getNames)));
  }

  else {
    greetLabel.innerHTML = greetingsFunctionInstance.greetLanguage(String(languageChosen), String(theName.value));
   return greetingsFunctionInstance.verifyNames(theName.value, Array.from(getNames));
  };

};
greetbtn.onclick = function () {
  theLanguageChosen();
  storeNames();
  pageRefreshedCount();
  pageRefreshedNames();
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