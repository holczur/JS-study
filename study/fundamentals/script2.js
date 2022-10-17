'use strict';

//---------------- FUNCTIONS ---------------------

function logger() {
    console.log('lollylogger');
  }
  
  logger(); //calling, running or invoking function
  logger();
  logger();
  
  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }
  
  const appleJuice = fruitProcessor(3, 5); //to capture returned value from the function
  console.log(appleJuice);
  
  console.log(fruitProcessor(1, 3)); //to simply use it's returned value
  
  // Function declaration
  function calcAge1(birthYear) {
    return 2022 - birthYear;
  }
  const age = calcAge1(1976);
  console.log(age);
  
  //Function expression
  const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
  };
  
  let age2 = calcAge2(1991);
  console.log(age2);
  
  //Arrow function
  const calcAge3 = birthYear => 2022 - birthYear; // oneliner that automatically returns value
  let age3 = calcAge3(1972);
  console.log(age3);
  
  const yearsUntilRetirement = birthYear => { // need {} for code block
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    return retirement;
  };
  
  let retirement = yearsUntilRetirement(1986);
  console.log(`You have to wait another ${retirement} years until retirement`);
    
  // in case of multiple parameters, we have to use a ()
  const ret2 = (birthYear, firstName) => `${firstName}, you have ${65 - (2022 - birthYear)} years until retirement.`
  console.log(ret2(1972, 'Joe'));
  
  // Functions calling other functions
  function cutFruitPieces (fruit) {
    return fruit * 4;
  }
  
  const fruitPlate = function (apples, oranges) {
    const applePieces = cutFruitPieces(apples); //call the other function with parameters given to this function
    const orangePieces = cutFruitPieces(oranges);
  
    const plate = `On your plate there are ${applePieces} apple pieces and ${orangePieces} slice of oranges`;
    return plate;
  }
  
  console.log(fruitPlate(2, 3));
  
   //---------------- ARRAYS ---------------------
  
   const friends = ['Joe', 'Michael', 'Peter']
  console.log(friends[0]);
  
  console.log(friends[1][2]);
  console.log(friends.length);
  
  friends[2] = 'Jay'; //Arrays are not primitive values so they can be mutated
  console.log(friends);
    //friends = ['Bob', 'Alice'] --> will produce error. The whole array takes a place in the memory, that cannot be changed.
  

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends] // it can hold any type of data, as well as datastructures

const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge1(years[0]);
console.log(age1);

const ages = [calcAge1(years[0]), calcAge1(years[1])];
console.log(ages);

// Array methods are functions dedicated to an array

friends.push('Lee', 'Bob', ['Marta', 'Frank']); //insert item(s) to end
console.log(friends);
console.log(friends.push('Lee', 'Bob', ['Marta', 'Frank']));// executes function and returns value --> array's new length
console.log(friends); // items were inserted even throuh console.log() 

friends.unshift('Lucy'); //insert to start
console.log(friends);

friends.pop();// delete last
console.log(friends);
console.log(friends.pop()); //returns value --> deleted item
console.log(friends);

friends.shift(); // delete first
console.log(friends);

console.log(friends.indexOf('Bob')); // returns position
console.log(friends.indexOf('Béla')); // returns -1 if item is not present

console.log(friends.includes('Bob')); // returns boolean
friends.push(23);
console.log(friends.includes('23')); // it uses strict equality
console.log(friends.includes(23)); // it uses strict equality

//---------------- OBJECTS ---------------------

const jack = {
    firstName: 'Jack',
    lastName: 'Reacher',
    age: 2022-1980,
    job: 'private detective',
    friends: ['Peter', 'Joseph', 'Benedek']
}

console.log(jack.age); // dot notation

const nameKey = 'Name';
console.log(jack['first' + nameKey]); // bracket notation --> can use calculation (expression)

const interestedIn = prompt('What do you want to know about Jack? Choose between: firstName, lastName, age, job, friends')
if(jack[interestedIn]) {
    console.log(jack[interestedIn])
} else {
    console.log('Wrong request! Choose between: firstName, lastName, age, job, friends')
}

//add item to object
jack.location = 'unknown';
jack['twitter'] = '@jackreacher';
console.log(jack);

console.log(`${jack.firstName} has ${jack.friends.length} friends, and his best friend is ${jack.friends[0]}`)

// function inside object

const bob = {
    firstName: 'Bob',
    lastName: 'Ross',
    birthYear: 1970,
    job: 'artist',
    friends: ['Peter', 'Joseph', 'Benedek'],
    hasDriversLicense: false,
    //calcAge: function(birthYear) {return 2022 - birthYear}
    calcAge: function() {
        this.age = 2022-this.birthYear;
        return this.age //return is not necessary, but a good practice
    }, //'this' keyword refers to the object in which we use it.

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he ${this.hasDriversLicense ? 'has' : "doesn't have" + ' a drivers license'}`
    }
}

//bob.age = bob.calcAge(bob.birthYear) : avoid hardcoding by using'this.'
//console.log(bob.age); --> 52
console.log(bob.calcAge());
console.log(bob.getSummary());

//---------------- ITERATION ---------------------
// keeps running until the condition is true
for(let i = 1; i <= 10; i++) {
    console.log(i); 
}

//looping arrays
const arr = [1, 3, 5, 7, 11];

for (let i = 1; i<= arr.length; i++){
    console.log(arr[i])
}