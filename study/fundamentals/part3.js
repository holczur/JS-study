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
      return Math.max(...temps) - Math.min(...temps);
    }
  }
};
