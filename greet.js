var theName = document.getElementById("theInputTag")
var greetbtn = document.getElementById("greetbtn");
var greetLabel = document.getElementById("theGreetLabel")
var counterLabel = document.getElementById("counterLabel")
var parentContainer = document.getElementsByClassName("container");
var theNamesArray = [];
var counter= 0;

var pageRefreshedCount = function(){
  if (JSON.parse(localStorage.getItem("totalPeopleGreeted"))=== null){
     counter = 0;
  }
  else 

  {
     counter = JSON.parse(localStorage.getItem("totalPeopleGreeted"))
}
}

var pageRefreshedNames = function(){
  if (JSON.parse(localStorage.getItem("namesArray")) === null){
    theNamesArray = []
  }
  else{
    theNamesArray = JSON.parse(localStorage.getItem("namesArray"))
  }
}

var greetBtnClicked = function () {
  if(theName.value === ""){
    return
  } 
 else{greetLabel.innerHTML = ("Hello " + theName.value);
}

}

var namesCounter = function(){
  if(theName.value === ""){
    return
  } 
  else{ counter++
    
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

greetbtn.addEventListener("click", pageRefreshedCount)
greetbtn.addEventListener("click", pageRefreshedNames)
greetbtn.addEventListener("click", greetBtnClicked);
greetbtn.addEventListener("click", namesCounter);
greetbtn.addEventListener("click", storeNames);

greetbtn.addEventListener("click", clearGreetInput);
