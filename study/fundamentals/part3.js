"use strict";

//--------------------------------PROBLEM SOLVING

//problem: we work for a company building a smmart home thermometer. Our most recen task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
/*
    What is temperature amplitude? --> The dif. between the highest and lowest temp.
    What's a sensor error, and what to do? -- Ignore error
     */
// 2) Breaking up into sub-problems
/*
    ✔ How to ignore errors? -- arr.splice(index, how many)
    ✔ Find max value -- Math.max()
    ✔ Find min value -- Math.min()
        ✔ Math function doesn't accept array as argument -- ""..." spread operator will unpack items from array
    ✔ substract min from max and return it
*/
const calcTempAmpl = function (temps) {
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") {
      temps.splice(i, 1);
    }
  }
  return Math.max(...temps) - Math.min(...temps);
};

//Problem 2: The project manager finds out that the function has to accept two arrays of temp.
/*
    1) Understanding the problem
            Should the functionality run once on each array? --> No, it should merge the arrays
    2) Breaking up into sub-problems
            ✔ How to merge two arrays? --> arr.push(...arr2) //(for example)
*/

const temperatures2 = [8, 9, 11, 17, 21, "error", 27, 32, 30, 28];
const calcTempAmpl2 = function (temps1, temps2) {
  temps1.push(...temps2);
  for (let i = 0; i < temps1.length; i++) {
    if (typeof temps1[i] !== "number") {
      temps1.splice(i, 1);
    }
  }
  return Math.max(...temps1) - Math.min(...temps1);
};
