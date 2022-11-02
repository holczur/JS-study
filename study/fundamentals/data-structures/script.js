'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//destructuring arrays
const [starter, main] = restaurant.order(2, 0);
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
const [k = 1, , [l = 1, m = 1], n = 1] = nested;

//destructuring objects
const {
  name: restaurantName,
  openingHours,
  categories: tags,
  menu: dishes = [],
} = restaurant;

//reassign value to variable trough deconstructing object
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); //wrap into (), because with {} the engine thinks this is a code block, and we will get an aerror

// nested object, new variable name, [] as default value, if data is not present
const {
  fri: { open: o = [], close: c = [] },
} = openingHours;
