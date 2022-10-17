'use strict'; //strict mode activated;
//---------------- DATA TYPES ---------------------
/* There are 7 data types:
    - Number
    - String
    - Boolian
    - Null
    - Undefined
    - Symbol (ES2015)
    - BigInt

    We can declare variables to store them
    for example:
    */


let myNumber = 12233;
let myString = 'this is a string';
let myBoolean = true;
let year; //undefined
let myBigInt = 1e45;

//Variables can be declared several ways
let modifyMe = 100;
modifyMe = 200; //reassign
console.log(modifyMe);

const leaveMealone = 'You cannot change me!';
/*
leaveMealone = 'Are you sure';
console.log(leaveMealone); --> TypeError

Allways use 'const' if you now the variable should'nt change
and only use 'let' to create variable that you want to change later
*/

var globalVar =
  "doesn't matter where did you declare me, I'am allways in the global scope";

//---------------- MATH OPERATORS ---------------------
modifyMe = modifyMe + 200;
console.log(modifyMe); //400

modifyMe += 200;
console.log(modifyMe); //600

modifyMe *= 2;
console.log(modifyMe); //1200

modifyMe++;
console.log(modifyMe); //1201

//addition sign can be used to concatenate strings
const firstName = 'Norbert';
const lastName = 'Holcz';
console.log(firstName + ' ' + lastName);

//---------------- COMPARISON OPERATORS ---------------------
console.log(modifyMe > 1202); //false
console.log(modifyMe > 1201); //false
console.log(modifyMe >= 1201); //true

const ageSarah = 21;
const isFullAge = ageSarah >= 18;
console.log(isFullAge); //true

/* Js calculates both values first, then it makes the comparison
check the operator precedence at here: https://www.w3schools.com/js/js_precedence.asp
*/

const now = 2022;
console.log(now - 1991 > now - 2018); //true

//---------------- STRING LITERALS ---------------------
const job = 'programmer';
const birthYear = 1986;
let age = now - birthYear;

const norbert = `I'm ${firstName}, a ${age} years old \n ${job}`; // \n for new line
console.log(norbert);

//---------------- TYPE COVERSION AND COERCION ---------------------

const inputYear = '1991';
console.log(inputYear + 19); //199119
console.log(Number(inputYear) + 19); //2010
console.log(Number('Norbert')); //NaN

//coercion is made automatically
console.log('23' / '2'); // 11.5
console.log('23' * '2'); // 46
console.log('23' + '2' + 5); //with addition it becomes a concatenation --> '2325'

let n = '1' + 1; // '11'
n = n - 1; // 10

//---------------- IF ELSE STATEMENTS ---------------------

if (age >= 40) {
  console.log('You are old enough');
} else {
  const yearsLeft = 40 - age;
  console.log(`You are too young. Wait another ${yearsLeft} years 🤡`);
}

let century;
if (birthYear <= 2000) {
  century = 20; //variables declared inside an 'if block' will be unavailable outside the the block
} else {
  century = 21;
}

console.log(century);

// Truthy and falsy values ---------------------
/*
    Falsy:
        0;
        '';
        undefined;
        null;
        NaN
    */

const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log('You should have a job');
}

// Equality

const loose = '18';

if (loose == 18) {
  console.log('coerced value is accepted');
}
if (loose === 18) {
  console.log('coerced value is accepted');
} else {
  console.log('"===" means a strict equaliti: type also has to match');
} // HINT: allways use strict equality

const favoriteNum = Number(prompt("What's your favorite number?"));
if (favoriteNum === 23) {
  console.log('Cool, my number is also 23!');
} else if (favoriteNum < 23) {
  console.log('My number is bigger than yours');
} else {
  console.log('My number is smaller than yours');
}

if (favoriteNum !== 23) {
  console.log('Why not 23?');
}

// Boolean logic
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;

console.log(hasDriversLicense && hasGoodVision); //true
console.log(hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense); //false

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
console.log(shouldDrive); //false

// Switch statement

const day = prompt('What day is it?');
switch (day) {
  case 'monday': //day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend');
    break;
  default:
    console.log('Not a valid day!');
}
/* same as this:

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day!');
}

*/

// Trenary operator
age >= 18 ? console.log('I am an adult') : console.log('I am a minor'); //To return a single value

const drink = age >= 18 ? 'wine 🍷' : 'milk 🍼'; // To declare variable depending on value
console.log(drink);

age = 17;
console.log(`I'd like to drink ${age >= 18 ? 'wine 🍷' : 'milk 🍼'}`); //Since it is an expression, it can be used in string template literal
//HINT: Use trenary operator for a simple decesion. For biger code blocks, use the if statement

