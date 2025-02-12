/*-------------------Fundamentals---------------------*/
console.log("Fundamentals:"); //title
console.log(""); //spacer

// Purpose: Print a banner to the console
function printBanner() {
  console.log("****************************************");
  console.log("Insert Banner Text Here");
  console.log("****************************************");
}

// Call the function
printBanner();

console.log(""); //spacer

function hello() {
  console.log("Hello!");
}

hello();

/*-------------------Parameters and arguments---------------------*/
console.log(" Parameters and arguments "); //title
console.log(""); //spacer

//Purpose: Take a name, and say hello to said name
function sayHello(name) {
  console.log(`Hello ${name}`);
}

// Call the function:
sayHello("Jim");
// Prints: 'Hello Jim'

sayHello("Emily");
// Prints: 'Hello Emily'

sayHello("Joe");
// Prints: 'Hello Joe'

console.log(""); //spacer

function improvedPrintBanner(text) {
  console.log("========================");
  console.log(text);
  console.log("========================");
}

improvedPrintBanner("We can make this banner say anything!");

console.log(""); //spacer

//Purpose: Summation
function sum(a, b) {
  console.log(a + b);
}

// Call the function:
sum(3, 4); // Prints: 7
sum(9, 1); // Prints: 10
sum(2, 2); // Prints: 4

console.log(""); //spacer

/*-------------------You do---------------------*/
console.log(" You do "); //title
console.log(""); //spacer

function planetHasWater(plant) {
  if (plant == "Earth") {
    console.log(true);
  } else if (plant == "Mars") {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Test values
planetHasWater("Earth"); // should print true
planetHasWater("Venus"); // should print false
planetHasWater("Mars"); // should print true
planetHasWater("Jupiter"); // should print false

console.log("");

/*----------------------- Return values -------------------------*/
//return statement
function addOne(num) {
  return num + 1;
}

const newNum = addOne(20) + 1;

console.log(newNum);

function addOneBroken(num) {
  num + 1;
  return;
}

console.log(addOneBroken(20));
// Prints: undefined----[Function: addOneBroken]

// Bring it all together
function calculateTax(subtotal) {
  //calculate a flat tax of 7%
  const taxDue = subtotal * 0.07;
  return taxDue;
}

function calculateTotal() {
  // normally, cartValue would be calculated elsewhere
  // we're hard coding it to simplify this example
  const cartValue = 45;

  // remember that we can pass variables like cartValue to functions

  // store the return value of the calculateTax function
  const taxAmmount = calculateTax(cartValue);

  // we can return the cart total plus the required tax
  return cartValue + taxAmmount;
}

console.log(calculateTotal());
// Prints: 48.15

console.log("");
//breaking up functrions

/*-------------------You do---------------------*/

function computeArea(width, height) {
  const area = width * height;
  const string = `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;

  return string;
}
console.log(computeArea(5, 25));
// Prints:
// The area of a rectangle with a width of 5
// and a height of 25 is 125 square units.

console.log("");
/*------------------- Expressions ---------------------*/
//syntax
const addition = function (a, b) {
  return a + b;
};

// called using the variable name:
console.log(addition(4, 2));

/*------------------- Arrow functions ---------------------*/
const sumTwoNumbers = (numA, numB) => {
  return numA + numB;
};

const values = sumTwoNumbers(5, 10);
console.log(values);

const emphasize = (str) => {
  return `${str} ${str}!`;
};

console.log(emphasize("really"));

/*------------------------- Advanced Arrow Functions -------------------------------*/
// Implicit return
const multiply = (numA, numB) => numA * numB;

console.log(multiply(3, 4));
// Prints: 12

console.log("");

// Single parameter
// note the lack of () around the num parameter!
const addTwo = (num) => {
  console.log(num + 2);
};

addOne(2);

console.log("");

// Combine the two
const double = (num) => num * 2;
console.log(double(5));

/*------------------- Default parameters ---------------------*/
const sayHi = (name = "friend") => {
  console.log(`Hi ${name}!`);
};

sayHi();
// Prints: 'Hi friend!'

/*------------------*/

sayHi("Joe");
// Prints: 'Hi Joe!'

/*------------------- Hoisting ---------------------*/
// This works!
declarationAdd(5, 10);

// This breaks!
// expressionAdd(5, 10);

function declarationAdd(a, b) {
  return a + b;
}

const expressionAdd = function (a, b) {
  return a + b;
};

/*------------------- Fewer Arguments than Parameters ---------------------*/
const add = (numA, numB, numC) => {
  return numA + numB + numC;
};

console.log(add(5, 2));
// Prints: NaN

/*------------------- Rest parameters ---------------------*/
// Each argument is condensed into a single array called scores
function calculateAverage(...scores) {
  let total = 0;
  // Loop over the scores array to tally up the total
  for (let i = 0; i < scores.length; i++) {
    total = total + score[i];
  }
  // Divide the total by the length of the array to find the average
  return total / scores.length;
}

calculateAverage(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // returns 5.5

/*------------------- Immediately Invoked Function Expressions IIFE  ---------------------*/
(() => {
  "use strict";

  // your code here
})();

/*------------------- Nesting Functions ---------------------*/
const title = "This is the title of my cool book";

const toTitleCase = (string) => {
  const capitalize = (word) => {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  };

  let strArr = string.split(" ");
  strArr.forEach((el, i) => (strArr[i] = capitalize(el)));
  return strArr.join(" ");
};

toTitleCase(title); // This Is The Title Of My Cool Book
