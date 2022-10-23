"use strict";

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
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) counter++;
  }
  return counter;
}

//Reverse an array withuot the built-in function
const reverse = function (array) {
  const arr = [];
  for (let i = array.length; i > -1; i--) {
    arr.push(array[i]);
  }
  return arr;
};
// Sum up n nubers
const summation = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

console.log(summation(9));

//how many divisors n has?
const getDivisorsCnt = function (n) {
  let numberOfDivisors = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      numberOfDivisors++;
    }
  }
  return numberOfDivisors;
};

// Prime factorization

const primeFactorizer = function (n) {
  let divisors = [];

  for (let i = 2; i < 20000; i++) {
    if (n % i === 0) {
      divisors.push(i);
      n /= i;
      console.log(n);
      i = 1;
      continue;
    }
  }
  return divisors;
};

//divide two factorials
const factorial = function (a) {
  for (let i = a - 1; i > 0; i--) {
    a *= i;
  }
  return a;
};

const factorialDivision = (n, d) => factorial(n) / factorial(d);

/**
 DESCRIPTION:
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
------------------------------------------------------------------------
1) Understanding the problem
    I need a function that
      - accepts an array as argument (only positive one digit integers are allowed)
      - checks if the argument is valid
      - add one to number --> Logic?
        ✔ Should I use some method(s) that can result a number from array, and vice versa?
       ❌ Shoul I manipulate each item separately and build up logic to increase them if needed? 
      - returns the numbers as an argument like array

2) Sub-problems
✔ - Check if argument is valid
if typeof arr[i] != number && >9 || <0 return null
✔ - Number interpretation logic
        1. create string from array
        2. remove ","
        3. convert string to number
        4. add one to that number
        5. convert the number to string
        6. push each letter to array
        ✔ - Return new array
        */

const upArray = function (arr) {
  const isOnlyNine = (currentValue) => currentValue === 9;
  //validation
  if (arr.length === 0) return null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 9 || arr[i] < 0 || typeof arr[i] !== "number") {
      return null;
    } else continue;
  }
  // if all numbers are 9
  if (arr.every(isOnlyNine)) {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
  }

  //define how many 9s are following eachother
  let counter = 0;
  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i] === 9) {
      counter += 1;
    } else if (arr[i] !== 9) break;
  }

  //modify values
  for (let i = arr.length - 1; i > arr.length - counter - 1; i--) {
    arr[i] = 0;
  }
  arr[arr.length - counter - 1] += 1;
  return arr;
};
/* That will not work with long arrays (will result bigInt)

let num = parseInt(arr.join().replaceAll(",", ""));
  num += 1;
  let str = num.toString();
  let r = [];
  for (let i = 0; i < str.length; i++) {
    r.push(str[i]);
    r[i] = parseInt(r[i]);
  }
  return r;
};
*/
