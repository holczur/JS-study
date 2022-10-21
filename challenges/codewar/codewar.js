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
      - interpret array as a number --> Logic?                                  
      - add one to that number
      - returns the numbers as an argument like array

2) Sub-problems
   ✔ - Check if argument is valid
          if typeof arr[i] != number && >9 || <0 return null
    - Number interpretation logic  
        check last digit is 9? last digit = 0
          if next digit = 9 repeate, else next digit += 1
        check if all digit is 9? all digit = 0, new digit unshift to array = 1
        else: last digit += 1
    - Return modified array
*/

const addOne = function (arr) {
  //validation
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] >= 0 && arr[i] < 9) {
      continue;
    } else {
      return null;
    }
  }
};
