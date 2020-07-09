var theName = document.getElementById("userName")
var greetbtn = document.getElementById("greetbtn");
var greetLabel = document.getElementById("theGreetLabel")
var counterLabel = document.getElementById("counterLabel")
var parentContainer = document.getElementsByClassName("container");
var languageLabels = document.getElementsByName("language");
var resetCounter = document.getElementById("resetCounterButton");
var getNames;
if (localStorage['namesGreeted']) {
  getNames = JSON.parse(localStorage.getItem("namesGreeted"));

}
var greetingsFunctionInstance = greetingsFactoryFunction(getNames);


window.onload = function () {
  counterLabel.innerHTML = greetingsFunctionInstance.numberOfPeopleGreeted()

};



var greetBtnClicked = function () {
  var checkedRadioBtn = document.querySelector("input[name='language']:checked");
var  nameStr = String(theName.value);
  if (checkedRadioBtn && theName.value !== "") {
    var lang = checkedRadioBtn.value
    greetingsFunctionInstance.verifyNames(nameStr)
    counterLabel.innerHTML = greetingsFunctionInstance.numberOfPeopleGreeted()

    localStorage.setItem("namesGreeted", JSON.stringify(greetingsFunctionInstance.getName()));

    greetLabel.innerHTML = greetingsFunctionInstance.greetLanguage(nameStr, lang)

  }
  else if (theName.value === "") {
    greetLabel.innerHTML = greetingsFunctionInstance.errorMessageUserName(nameStr)
  }
  else if (checkedRadioBtn === null) {
    greetLabel.innerHTML = greetingsFunctionInstance.errorMessageLanguage()
  }
}

var clearGreetInput = function () {
  theName.value = "";
 };


var clearLocalStorage = function () {
  localStorage.clear()
  location.reload();
}

// setTimeout(function(){
//   // var checkedRadioBtn = document.querySelector("input[name='language']:checked");
//   // var lang = checkedRadioBtn.value
//   greetLabel.innerHTML = greetingsFunctionInstance.errorMessageUserName(theName.value)
//   greetLabel.innerHTML = greetingsFunctionInstance.errorMessageLanguage( lang)
// }, 5000);

resetCounter.addEventListener('click', clearLocalStorage)
greetbtn.addEventListener('click', greetBtnClicked);
greetbtn.addEventListener("click", clearGreetInput);
