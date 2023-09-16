/* Basics */

// ----------- Variables --------------
// VAR - Function scoped
function example() {
  var x = 10;
  if (true) {
    var y = 20;
  }
  console.log(x); // Output: 10
  console.log(y); // Output: 20
}

// LET - Block scoped
function example() {
  let x = 10;
  if (true) {
    let y = 20;
  }
  console.log(x); // Output: 10
  console.log(y); // Error: y is not defined (because it's block-scoped)
}

// CONST - immutable variables
const pi = 3.14159;
pi = 3; // Error: Cannot reassign a constant variable

// ----------- Operators --------------

// Arithmetic
let x = 10;
let y = 5;

let sum = x + y; // 15
let difference = x - y; // 5
let product = x * y; // 50
let quotient = x / y; // 2
let remainder = x % y; // 0

// Comparison
let a = 5;
let b = 10;

console.log(a === b); // false
console.log(a < b); // true

// Logical
let isTrue = true;
let isFalse = false;

let resultAnd = isTrue && isFalse; // false
let resultOr = isTrue || isFalse; // true
let resultNot = !isTrue; // false

// Assignment
let z = 5;
z += 3; // Equivalent to x = x + 3; (x is now 8)

// Uniary
let count = 10;
count++; // Increment count by 1 (count is now 11)

// Ternary
let age = 20;
let isAdult = age >= 18 ? "Yes" : "No"; // "Yes"

// typeof
const person = "John";
console.log(typeof person); // "string"

// ----------- Control flow --------------

// If-else
function controlFlow() {
  let x = 10;

  if (x < 5) {
    console.log("x is less than 5");
  } else if (x < 10) {
    console.log("x is less than 10 but not less than 5");
  } else {
    console.log("x is 10 or greater");
  }
}

// Loops
function looping() {
  const iterations = 10;
  for (let i = 0; i < iterations; i++) {
    console.log("For loop iterations: ", i + 1);
  }

  let j = 0;
  while (j < iterations) {
    console.log("While loop iteration: ", j + 1);
    j++;
  }

  let k = 0;
  do {
    if (k == 0) {
      console.log("Executes before checking the condition");
    } else {
      console.log("Do-while loop iteration: ", k);
    }
  } while (k < iterations);
}

// ----------- Asynchronous programming --------------

// TASK: Read a file

// Simple code - utilizes a callback function and displays the content of the file.

// needed for callback to process properly
function readFile(filename, callback) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

readFile("file.txt", function (err, data) {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("File content:", data);
  }
});

// needed for further code
function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Promises - more structured and readable way to work with asynchronous code
readFile("file.txt")
  .then((data) => {
    console.log("File content:", data);
  })
  .then(() => {
    console.log("Hi");
  })
  .catch((err) => {
    console.error("Error:", err);
  });

// Async/await - another method to work with asynchronous code. This is better readible as everything is written in-line.
async function readAndLogFile() {
  try {
    const data = await readFile("file.txt");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

// ----------- Intermediate Level --------------

// Higher-order functions
// accepts functions as input
function mapArray(arr, fn) {
  const result = [];
  for (const item of arr) {
    result.push(fn(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];

// Using mapArray as a higher-order function
const doubled = mapArray(numbers, function (x) {
  return x * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// returns functions as output
function power(exponent) {
  return function (base) {
    return Math.pow(base, exponent);
  };
}

const square = power(2);
const cube = power(3);

console.log(square(4)); // Output: 16 (4^2)
console.log(cube(3)); // Output: 27 (3^3)

// Understand lexical environment

// Closures
function outerFunction() {
  const outerVar = "I am from outerFunction";

  function innerFunction() {
    console.log(outerVar); // innerFunction has access to outerVar
  }

  return innerFunction; // Return the inner function
}

const closure = outerFunction(); // outerFunction is invoked, and closure now references innerFunction

closure(); // When closure is invoked, it still has access to outerVar
