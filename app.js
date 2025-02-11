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
    if (plant == 'Earth') {
        console.log(true)
    }
    else if(plant == 'Mars'){
        console.log(true)
    }
    else {
        console.log(false)
    }

}

// Test values
planetHasWater('Earth');   // should print true
planetHasWater('Venus');   // should print false
planetHasWater('Mars');    // should print true
planetHasWater('Jupiter'); // should print false

console.log("")

/*----------------------- Return values -------------------------*/
//return statement
function addOne (num){
    return num + 1;
}

const newNum = addOne(20) + 1

console.log(newNum);

function addOneBroken(num){
    num + 1;
    return
}

console.log(addOneBroken(20))
// Prints: undefined----[Function: addOneBroken]


// Bring it all together
function calculateTax(subtotal){
    //calculate a flat tax of 7%
    const taxDue = subtotal * 0.07;
    return taxDue;
}

function calculateTotal(){
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

function computeArea(width, height){
    const area = width * height;
    const string = `The area of a rectangle with a width of ${width } and a height of ${ height } is ${ area } square units.`
    
    return string;
}
console.log(computeArea(5, 25))
// Prints: 
// The area of a rectangle with a width of 5 
// and a height of 25 is 125 square units.


console.log("");
/*------------------- Expressions ---------------------*/
//syntax
