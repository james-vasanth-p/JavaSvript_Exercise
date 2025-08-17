// Functions
// Functions are pieces of code that we can reuse again and again in our code

// Function Declaration - JavaScript Hoisting
/* A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. */

// Calling the function

// Function Parameters and Arguments
/*Functions can take parameters, which act as placeholders for the values 
that will be passed to the function.The passing value is called an argument.*/
printer('james');
function printer(name = 'jade'){
 console.log(`Hi, ${name}. Do you want 2 copies` );
 }

 
// Default Parameter

// Function with Return Type
function add (a,b){
    return a+b;
}
let sum =add(5, 10);
console.log(`the sum of two no is: ${sum}`);
///////////////////////////////////////////////////////////////////////

// Function Expression
/* A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.*/

// With Argument
const squareofnum = function(num){
    return num * num;
}

const arrownum = (num) => num * num;
console.log(`the square of 5 is: ${arrownum(5)}`);
// Function Expression with Return Type

///////////////////////////////////////////////////////////////////////

// Arrow Function
// Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.

// With Argument

// Arrow Function with Return Type

// Shorter Way

//Function Calling Other Function

//Anonymous Functions: Later on Course on Arrays

/**
Scope of variables will on functions and loops
var: Function scoped.
let: Block scoped.
const: Block scoped.
 */


// ...existing code...

// Function Declaration - JavaScript Hoisting
function greet() {
  console.log("Hello from a function declaration!");
}
greet(); // You can call this before or after its definition

// ...existing code...

// Function Parameters and Arguments
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Output: 5

// ...existing code...

// Default Parameter
function sayHello(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
sayHello(); // Output: Hello, Guest!
sayHello("Alice"); // Output: Hello, Alice!

// ...existing code...

// Function with Return Type
function multiply(x, y) {
  return x * y;
}
let result = multiply(4, 5);
console.log(result); // Output: 20

// ...existing code...

// Function Expression
const showMessage = function() {
  console.log("Hello from a function expression!");
};
showMessage();

// ...existing code...

// With Argument
const square = function(num) {
  return num * num;
};
console.log(square(6)); // Output: 36

// ...existing code...

// Function Expression with Return Type
const getGreeting = function(name) {
  return `Hello, ${name}!`;
};
console.log(getGreeting("Bob")); // Output: Hello, Bob!

// ...existing code...

// Arrow Function
const sayHi = () => {
  console.log("Hi from arrow function!");
};
sayHi();

// ...existing code...

// With Argument
const double = (n) => n * 2;
console.log(double(7)); // Output: 14

// ...existing code...

// Arrow Function with Return Type
const getAgeMessage = (age) => `You are ${age} years old.`;
console.log(getAgeMessage(25)); // Output: You are 25 years old.

// ...existing code...

// Shorter Way
const triple = n => n * 3;
console.log(triple(3)); // Output: 9

// ...existing code...

// Function Calling Other Function
function outer() {
  function inner() {
    console.log("Inner function called!");
  }
  inner();
}
outer(); // Output: Inner function called!

// ...existing code...

//Anonymous Functions: Later on Course on Arrays
// Example: setTimeout(function() { console.log("Anonymous!"); }, 1000);