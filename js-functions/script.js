// declaring functions
// they have 3 elements
// function functionName(parameters-optional) {
// action to perform;
// }
// write a function to say 'ello guv'nor in the console

function sayEllo() {
  console.log("'ello guv'nor");
}
//we need to call or envoke our function to perform our task
sayEllo();
//I want to say hello to a specific user

function sayhelloToUser(username) {
  // wwe are concatenating strings here
  // console.log("hello " + username + " you reprebate! Now get some work done!");
  // we are using string literals here using a ` instead of "
  console.log(`Hello ${username} you reprebate! Now get some work done!`);
}
// we are going tyo call thge function and give and argument ( a value) to the parameter (variable)
sayhelloToUser("Nicky");
sayhelloToUser("Charlotte");
sayhelloToUser("Zachary");
sayhelloToUser("John Cena");
//we need to write the arguments to match the order of our parameters

// I want to have a function that adds numbers
// the coer we write is only availiable for that function
// if we want an element in the function to be availiable outside the function we need to return it
function addNumbers(number1, Number2, number3) {
  return number1 + Number2 + number3;
}
console.log(addNumbers(4, 6, 27));
// we chave a function that creates images
//function createImage(imageSrc, imagelt {
//const newImage = document.createElement("img");
// newImage = document.createElement("img")
// newImage.src = imageSrc;
// newImage.alt = imageAlt;
//}
// createImage("link", "beautiful image" );
function add(a, b) {
  return a + b;
}

const result = add(1, 5);
console.log("The result is", result);
const anotherResult = add(2, 10);
console.log("Another result is", anotherResult);

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function calculate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}
console.log(calculate(12, 32, "*"));
console.log(calculate(156, 32, "/"));
console.log(calculate(125, 1560, "-"));
console.log(calculate(125, 1897, "+"));
