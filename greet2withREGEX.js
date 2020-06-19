
var theName = document.getElementById("theInputTag")
var greetbtn = document.getElementById("greetbtn");
var greetLabel = document.getElementById("theGreetLabel")
var counterLabel = document.getElementById("counterLabel")
var parentContainer = document.getElementsByClassName("container");
var languageLabels = document.getElementsByName("language");
var resetCounter = document.getElementById("resetCounterButton")

var theNamesArray = [];
var counter = 0;
var languageChosen = "";



var validateUserInput = function(){

  if (JSON.parse(localStorage.getItem("namesArray")) === null) {
    resetCounter.addEventListener("click", resetTheCounter);
    greetbtn.addEventListener("click", pageRefreshedCount);
    greetbtn.addEventListener("click", pageRefreshedNames);
    greetbtn.addEventListener("click", theLanguageChosen);
    greetbtn.addEventListener("click", greetBtnClicked);
    greetbtn.addEventListener("click", namesCounter);
    greetbtn.addEventListener("click", storeNames);
    greetbtn.addEventListener("click", clearGreetInput);
  }

  else if (JSON.parse(localStorage.getItem("namesArray"))!= null){
  var userName = theName.value
  var allNamesArray = JSON.parse(localStorage.getItem("namesArray"));
  RegExp = /^userName$/i;
  for(let i = 0; i < allNamesArray.length; i++)
  if (RegExp.test(allNamesArray[i]))
  {
    resetCounter.addEventListener("click", resetTheCounter);
    greetbtn.addEventListener("click", pageRefreshedCount);
    greetbtn.addEventListener("click", pageRefreshedNames);
    greetbtn.addEventListener("click", theLanguageChosen);
    greetbtn.addEventListener("click", greetBtnClicked);
    greetbtn.addEventListener("click", namesCounter);
    greetbtn.addEventListener("click", storeNames);
    greetbtn.addEventListener("click", clearGreetInput);
    
  }
}
  else{
    greetLabel.innerHTML = ( "sorry you have already been greeted");
   
  }
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
      // alert(languageArray[i].value)
      languageChosen = languageArray[i].value;
    }

  }
}

var greetBtnClicked = function () {
  if (theName.value === "") {
    return
  }
  if (languageChosen === "Shona") {
    greetLabel.innerHTML = ("Hesi Kani " + theName.value);
  }
  if (languageChosen === "Ndebele") {
    greetLabel.innerHTML = ("Sawubona " + theName.value);
  }
  if (languageChosen === "English") {
    greetLabel.innerHTML = ("Hello " + theName.value);
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



greetbtn.addEventListener("click", validateUserInput);

  // resetCounter.addEventListener("click", namesCounter);