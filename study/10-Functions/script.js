'use strict';

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 6436547835778,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; // Chnaging parameter is a bad practice!
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 6436547835778) {
    console.log('Checked in!');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); //flightNum = flight --> copy with new memory address
console.log(jonas); // The function mutated the original value --> reference!

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

//JavaScript doesn't have pass by reference
//Passing arguments can cause malfunctions
newPassport(jonas); //this function changes the passport number
checkIn(flight, jonas); //Wrong passport!

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order functions receives other functions as parameter (or return other function)
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`); // functions are also objects, so they can have properties, even methods
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

//fn returns fn
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};

const greeterHey = greet('Hey');
const greeterHello = greet('Hello');

greeterHey('Jonas');
greeterHello('Steve');
greet('Hola')('Paulo'); //greet() is a fn that can be called immediately

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book('239', 'Jonas Schmedtmann');
lufthansa.book('145', 'Frida Louise');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sara Williams'); //first parameter is the object on we call the method
book.call(lufthansa, 113, 'John Smith');
console.log(eurowings.bookings);
console.log(lufthansa.bookings);

//.apply() is similar, but it works with an array of data
const flightData = [582, 'George Cooper'];
book.apply(eurowings, flightData);

//...but it is no longer used in modern JS, bec.:
book.call(lufthansa, ...flightData);

//The most popular way is the .bind() method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);

bookEW(23, 'Steven Williams');
bookLH(44, 'Brian Phillips');

console.log(lufthansa.bookings);
console.log(eurowings.bookings);
