// VARIABLES - containers that store data


//WAYS TO DECLARE VARIABLES

// let -can be changed later (use this most of the time)
let name = "john";


name = "sara";  // changed
console.log(name); // "sara"

// const - cannot be changed (use for values that stay the same)
const PI = 3.14159;
console.log(PI);

// PI = 5;
// console.log(PI);
// PI = 5; // ERROR- cannot reassign const

// var - old way, avoid using it (has scoping issues)
var oldway = "don't use this";


//WHY NOT VAR?
//var is function scoped, let and const are block scoped

if (true) {
    var leaked = "I leak out"; // accesible outside the block
    let stayed = "I stay in"; // only inside this block
}

console.log(leaked); // works (bad - var leaks)
// console.log(stayed); // ERROR (good - let stays in block)


//DATA TYPES

// string - text (use quotes)
let greeting = "Hello'World";
let single = 'single quotes" work too';
let backtick = `backticks allow ${name} inside ; // template literal`
console.log(backtick); // "backticks allow sara inside"

// number - integers and decimals
let age = 25;
let price = 99.99;
let negative = -10;

// boolean - true or false;
let isLoggedIn = true;
let isAdmin = false;

// undefined - declared but no value assigned
let x;
console.log(x); // undefined

// null - intentinally empty
let emptyvalue = null;
console.log(emptyvalue); // null

// typeof - check the type of a value
console.log(typeof greeting);  // "string"
console.log(typeof age);       //"number"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof x);          // "undefined"
console.log(typeof null);       // "object" (known JS bug)


// NAMING RULES
// - must start with letter, $ or _
// - cannot start with a number
// - case senstive (name and Name are different)
// - use camelCase for mutiple words

let firstName = "John";   // came1case (recommended)
let last_name = "Doe";    // snake_case (works but not common in JS)
let $price = 100;         // starts with $
let _temp = "temporary";  // starts with _
// let 1name = "error";   // ERROR - cannot start with number


//TYPE CONVERSION

//string to number
let str = "42";
let num = Number(str);
console.log(num);       // 42
console.log(typeof num); // "number"

let parsed = parseInt("100px"); // extracts number from start
console.log(parsed); // 100

let decimal = parseFloat("3.14abc");
console.log(decimal); // 3.14

// number to string
let n = 50;
let s = String(n);
console.log(s);       // "50"
console.log(typeof s); // "string"

let s2 = n.toString();
console.log(s2); // "50"

// to boolean
console.log(Boolean(1));      // true
console.log(Boolean(0));      // false
console.log(Boolean("hi"));   // true
console.log(Boolean(""));     // false
console.log(Boolean(null));   // false


// TEMPLATE LITERALS (backticks)
let user = "Ali";
let userAge = 25;

// old way - concatenation
console.log("Hello " + user + ", you are" + userAge);

// new way - template literals (easier to read)
console.log(`Hello ${user}, you are ${userAge}`);

// mutiline strings
let message = `
Hello ${user},
You are ${userAge} years old.
Welcome!
`;
console.log(message);


// CONST WITH OBJECTS AND ARRAYS
// const prevents reassignment, but object/array contents can change


