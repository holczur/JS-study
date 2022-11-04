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
  orderDelevery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your pasta with ${ing1}, ${ing2} and ${ing3}`);
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

restaurant.orderDelevery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
//... spread operator can be used with all iterables (arrays, strings, maps, sets; NOT objects)

//const ingredients = [prompt('ing1'), prompt('ing2'), prompt('ing3')];
//restaurant.orderPasta(...ingredients);

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

//rest ...
const [one, two, ...others] = [1, 2, 3, 4, 5];

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

const x = [44, 12, 35];

add(2, 3);
add(7, 8, 12);
add(2, 2, 5, 7, 345, 776, 8);
add(...x);

//short circuitung with OR: return first truthy
console.log(3 || 'Norbert'); // 3
console.log(0 || 'Norbert'); // Norbert
console.log(0 || undefined); // undefined
console.log(undefined || 0 || '' || 'hello' || 2); // hello
console.log(undefined || null || '' || 0); // 0

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10 //doesn't work if the value is present, but it is falsy (restaurant.numGuests = 0)

//short circuitung with AND: return first falsy
console.log('hello' && 23 && null && 0 && true); // null --> returns the first falsy value
console.log('hello' && 23 && true); // true --> returns the last truthy, if there's no falsy value

if (restaurant.orderPasta) {
  restaurant.orderPasta('mushrooms', 'spinach', 'olives');
}

//restaurant.orderPasta is truthy, so it continues and returns the last value
restaurant.orderPasta &&
  restaurant.orderPasta('mushrooms', 'spinach', 'olives');

//The Nullish Coalescing Operator: return the first non-nullish (anything except: null or undefined) value
console.log('nullish coalescent: ', null ?? undefined ?? 0 ?? null); // 0
console.log('nullish coalescent: ', null ?? undefined ?? 'hi' ?? null); // hi

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests ?? 10;
console.log(guests3); // 0

//Logical assignment Operators

const rest1 = {
  name: "Olive's olives",
  numGuests: 10,
};
const rest2 = {
  name: 'Pizza Roma',
  owner: 'Giorgio Giovanni',
};

rest1.owner &&= '<ANONYMUS>'; // Nothing will happen, bec. there's no owner key in rest1
rest2.owner &&= '<ANONYMUS>'; // owner will be changed to <ANONYMUS>

rest1.numGuests ??= 30; // numGuests will be remain 10
rest2.numGuests ??= 30; // numGuests will be set to 30, because rest2 doesn't have a numGuest key

console.log(rest1);
console.log(rest2);
