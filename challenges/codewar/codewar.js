'use strict';

/**
 * DESCRIPTION:
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
 */

function countSheeps(arrayOfSheep) {
    let counter = 0;
    for (let i = 0; i < arrayOfSheep.length; i++){
      if (arrayOfSheep[i]) counter++;
  }
    return counter;
}


//Reverse an array withuot the built-in function
const reverse = function(array) {
    const arr = [];
    for (let i = array.length; i > -1; i--) {
        arr.push(array[i])
    }
    return arr;
  }
// Sum up n nubers
const summation = function (num) {
  let sum = 0;
  for(let i = 1; i <= num; i++){
    sum += i;
  }
      return sum;
}

console.log(summation(9));


//how many divisors n has?
const getDivisorsCnt = function (n){
  let numberOfDivisors = 0;
  for (let i = 0; i <= n; i++){
    if (n % i === 0){
      numberOfDivisors++;
    }
  } 
return numberOfDivisors;

}