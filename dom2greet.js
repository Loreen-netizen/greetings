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

var theLanguageChosen = function(){
  let languageArray = Array.from(languageLabels);
  for (let i = 0; i < languageArray.length; i++) {
    if (languageArray[i].checked) {
       languageChosen = languageArray[i].value;
      greetBtnClicked(languageChosen);
      // greetingsFunctionInstance.greetLanguage(String(languageChosen), String(theName.value));
      return languageChosen;
    }
    else{
      continue
    }
   
  }
  
}

var greetBtnClicked = function () {

  if (languageChosen === undefined) {
    greetLabel.innerHTML = greetingsFunctionInstance.errorMessageLanguage()
  }
  else {
    greetLabel.innerHTML = greetingsFunctionInstance.greetLanguage(String(languageChosen), String(theName.value));
    greetingsFunctionInstance.verifyNames(String(theName.value))
  };

};
greetbtn.onclick = function () {
  storeNames();
  pageRefreshedCount();
  pageRefreshedNames();
  theLanguageChosen();
  greetBtnClicked();
  clearGreetInput();
  namesCounter();

}



// var verifyNames = function () {
//   var namesInArray = JSON.parse(localStorage.getItem("namesArray"));
//   if (namesInArray === null) {
//     namesCounter();
//     storeNames();
//   }
//   else if (namesInArray != null) {
//     var nameExist = undefined;
//     for (let i = 0; i < namesInArray.length; i++) {
//       var eachName = Object.values(namesInArray[i]).toString();
//       var userInput = theName.value;
//       if (userInput.toUpperCase() === eachName.toUpperCase()) {
//         nameExist = true;
//         return;
//       }
//       else {
//         nameExist = false;
//         continue;
//       }

//     }

//     if (nameExist === false) {
//       namesCounter();
//       storeNames();
//     }
//   }
// }

var namesCounter = function () {
  var numberOfGreetings = greetingsFunctionInstance.numberOfPeopleGreeted();
  counterLabel.innerHTML = ("Total people greeted = " + numberOfGreetings);
  // if (theName.value === "") {
  //   return
  // }
  // else {
  //   counter++

  //   return counterLabel.innerHTML = ("total people greeted = " + counter);
  // }
}

var clearGreetInput = function () {
  theName.value = "";
}

var storeNames = function () {

  // let allNames = {
  //   "name": theName.value,
  // }
  // theNamesArray.push(allNames);

  localStorage.setItem("namesArray", JSON.stringify(greetingsFunctionInstance.getName()));
  localStorage.setItem("totalPeopleGreeted", JSON.stringify(greetingsFunctionInstance.numberOfPeopleGreeted()));
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


resetCounter.addEventListener("click", resetTheCounter);
resetCounter.addEventListener("click", clearLocalStorage);