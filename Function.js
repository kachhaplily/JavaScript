//1.Basic Function
function greet() {
  console.log("Hello!");
}
greet();

//2.function Perameter

function greetParam(name) {
  console.log("Hello, " + name + "!");
}

greetParam("Alice");

//3.Function Return
function add(a, b) {
  return a + b;
}

let result = add(3, 5);
console.log(result);

//4.Anonymous Functions
let greetAns = function (name) {
  console.log("Hello, " + name + "!");
};

greetAns("Bob");

//5. Arrow function
let addArrow = (a, b) => {
  return a + b;
};
console.log(addArrow(3, 4));

let addArrow2 = (a, b) => a + b; //implicit return
console.log(addArrow2(4, 7));

/**
 * One key difference between arrow functions and traditional functions is how they handle the this keyword.

In traditional functions, the value of this is determined by how the function is called.
In arrow functions, the value of this is lexically bound to the surrounding context at the time the function is defined. This means that arrow functions do not have their own this context and instead inherit it from the enclosing scope
 */

// function Person() {
//     this.age = 0;

//     setInterval(function growUp() {
//         this.age++;
//         console.log(this.age); // Output: NaN
//     }, 10000);
// }

// let person = new Person();

function PersonFirst() {
  this.age = 0;

  let intervalId = setInterval(() => {
    // `this` here refers to the `Person` object
    this.age++;
    console.log(this.age); // Output: 1, 2, 3, ...
    if (this.age >= 3) {
      clearInterval(intervalId); // Clear the interval timer
      console.log("Loop stopped");
    }
  }, 1000);
}

let person2 = new PersonFirst();

/** 6
 * Higher order function
 * Higher-order functions are functions that can take other functions as arguments or return functions as their result. In JavaScript,
 * functions are first-class citizens,
 *  which means they can be treated like any other value, such as numbers, strings, or objects. This allows functions to be passed around as arguments to other functions or returned as values from other functions.
 */

// Higher-order function that takes another function as an argument
const higherOrderFunction = (callback) => {
  console.log("Before callback");

  callback();

  console.log("After callback");
};

const callbackFunction = () => {
  console.log("Inside callback");
};

higherOrderFunction(callbackFunction);

// Higher-order function that takes a function call as an argument
const higherOrderFunction2 = (callbackResult) => {
  // Perform some operations
  console.log("Before callback");

  // Call the callback function result
  callbackResult();

  // Perform some operations after the callback
  console.log("After callback");
};

// Callback function that returns a function
const callbackFunction2 = (name, age) => {
  // Return a function that logs the name and age
  return () => {
    console.log(`Name: ${name}, Age: ${age}`);
  };
};

// Calling the higher-order function with the result of callbackFunction('lily', 21) as an argument
higherOrderFunction2(callbackFunction2("lily", 23));

/**
 * Closures: A closure is the combination of a function bundled together 
 * (enclosed) with references to its surrounding state (the lexical environment).
 * 
 * 
 * Bundled together (enclosed): A closure "encloses" or captures the environment in which it was created. This means it has access to its own scope, as well as the variables and parameters of its outer function(s).
References to its surrounding state (the lexical environment): The closure keeps references to the variables and parameters of its outer function(s), even after the outer function has finished executing. This allows the closure to access and manipulate those variables later, 
even when the outer function is no longer running.
 * 
 */


