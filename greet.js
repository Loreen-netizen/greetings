var theName = document.getElementById("theInputTag")
var greetbtn = document.getElementById("greetbtn");
var greetLabel = document.createElement("label")
var parentContainer = document.getElementsByClassName("container");
var greetBtnClicked = function(){

  var containerDiv = document.createElement("containerDiv")
  containerDiv.className = "greetLabelDiv"
  greetLabel.id = "theGreetLabel"
  greetLabel.innerHTML = ("Hello " + theName.value);
  containerDiv.appendChild(greetLabel);
  // document.parentContainer.appendChild(containerDiv);

  document.body.appendChild(containerDiv);
}
var clearGreetInput = function(){
theName.value = "";
}



greetbtn.addEventListener("click", greetBtnClicked);
greetbtn.addEventListener("click", clearGreetInput);