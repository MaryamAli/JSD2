//Our greeting function

var greeting = function(name) {
  console.log(name);
  return 'Hello ' + name;
};

//Grab my Elements

var nameInput =document.querySelector('#your-name');
var greetBtn= document.querySelector('#greetme');
var helloElem=document.querySelector('#greeting');

//Varaible Declarations
var fullName, greetingText;


//Function to perform the greeting

var greetMe = function (event) {
  
  fullName= nameInput.value;
  greetingText = greeting(fullName);
  helloElem.textContent = greetingText;
};

//Button Click

//the blank function below is a anonymous function

greetBtn.addEventListener ('click', greetMe);




//Grab My Name Element

// var nameElem=document.querySelector('#my-name');
// var nameText=nameElem.textContent;

// greeting(nameText);