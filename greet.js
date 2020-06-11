var theName = document.getElementById("theInputTag")
var greetbtn = document.getElementById("greetbtn");
var greetLabel = document.createElement("label")
var counterLabel = document.createElement("label")
var parentContainer = document.getElementsByClassName("container");
var namesArray = [];

var greetBtnClicked = function () {

  var containerDiv = document.createElement("containerDiv")
  containerDiv.className = "greetLabelDiv"
  greetLabel.id = "theGreetLabel"
  greetLabel.innerHTML = ("Hello " + theName.value);
  containerDiv.appendChild(greetLabel);
  document.body.appendChild(containerDiv);
}

var counter = function(){
  
  var secondContainerDiv = document.createElement("secondContainerDiv")
  secondContainerDiv.className = "greetLabelDiv"
  counterLabel.innerHTML = (namesArray.length);
  secondContainerDiv.appendChild(counterLabel);
  document.body.appendChild(secondContainerDiv);

}

var clearGreetInput = function () {
  theName.value = "";
}

var storeNames = function () {

  let allNames = {
    "name": theName.value,
  }
  namesArray.push(allNames);
}

localStorage.setItem("namesArray", JSON.stringify(namesArray));


greetbtn.addEventListener("click", greetBtnClicked);
greetbtn.addEventListener("click", storeNames);
greetbtn.addEventListener("click", counter);
greetbtn.addEventListener("click", clearGreetInput);