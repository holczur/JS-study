"use strict";

/* ----------------------------- SCRBBLE --------------------------------
    Table: 15x15
    letters: 100
    language: hu
    max plyers: 4

    Rules:
        General:
            - Only valid words, that are appropriate for the language are accepted
            - The first word has to be in contact with the center square
            - Words have to be connect to eachother
            - With each connection all involved words have to be valid
            - A word can be placed vertical or diagonal only
            - Only one word can be placed per turn, but that can create multiple other words wth the connections
        
        Gameplay:
            - After a word is placed, the player has to pull as many letters from the sack as she used
            - Players can pass their turn if they cannot place any word (0 points)
            - Players can change their letters by pulling from the sack if they want to. If they do so, their turn is over with 0 points.
            - The game ends if a player had placed all of her letters and the sack is also empty OR
                All players pass their turn
            
        Scores:
            - Each letter has a point value. A word is worth the sum of teir letters' value.
            - The first word worth double as its letters' value
            - There are two blank tiles that can replace any letter, but they have no point values
            Special areas:
            - There are five types of special ares that affects the score:
                Light blue: double letter point
                Dark blue: triple letter point
                Yellow: double word score
                Red: triple word score
            - Each special area counts only for the first time
            - If multiple special areas are covered by a word all newly covered areas count in the following order: 1.letter points multipliers 2.word scores multipliers
            - If a special area is covered for the first time, but with two words, then the area's effect is applied to both letters/words
            - If a player uses all of his seven letters to create a word she receives +50 bonus scores, that is applied after all bonus area modifiers
        
        Final scores:
            - After the game ends, all players' remaining letters are count as minus from their score.
            - If the game has ended because a player had placed all of her letters, that player receives all the points the others had lost
            - The winner is that player, who has the highest score.
            */

const holder = [];
const sack = {
  a: [6, 1],
  á: [4, 1],
  b: [3, 2],
  c: [1, 5],
  cs: [1, 7],
  d: [3, 2],
  e: [6, 1],
  é: [3, 3],
  f: [2, 4],
  g: [3, 2],
  gy: [2, 4],
  h: [2, 3],
  i: [3, 1],
  í: [1, 5],
  j: [2, 4],
  k: [6, 1],
  l: [4, 1],
  ly: [1, 8],
  m: [3, 1],
  n: [4, 1],
  ny: [1, 5],
  o: [3, 1],
  ó: [3, 2],
  ö: [2, 4],
  ő: [1, 7],
  p: [2, 4],
  r: [4, 1],
  s: [3, 1],
  sz: [2, 3],
  t: [5, 1],
  ty: [1, 10],
  u: [2, 4],
  ú: [1, 7],
  ü: [2, 4],
  ű: [1, 7],
  v: [2, 3],
  z: [2, 4],
  zs: [1, 8],
  blank: [2, 0],
};

//---------------- SACK ------------------
let sackSize = 100;

//recount sackSize
const countSize = function () {
  sackSize = 0;
  for (const [num] of Object.values(sack)) sackSize += num;
};
const temp = [];

const randomPull = function (pieces) {
  /* 
  Hhow many letters to pull = pieces
  With every pull:
    1. generate new random number based on sackSize
    2. find the nth letter in the sack
    3. collect letters in a temp array, when filled push items to active player's holder
    4. decrease sackSize
    5. decrease nth letter quantity
    6. if quantity is 0, delete key
    */
  const random = function () {
    return Math.floor(Math.random() * sackSize + 1);
  };
  let counter = 0;
  let index = 0;
  let key, quantity, value;

  for (let i = 0; i < pieces; i++) {
    index = random(); //genereate new random number based on new sackSize

    // find random letter and store in temp
    for ([key, [quantity, value]] of Object.entries(sack)) {
      if (counter < index) {
        counter += quantity;
        temp.push(key);
      }
    }

    // decrease letter quant., if 0, delete key
    sack[temp.slice(-1)][0]--;
    if (sack[temp.slice(-1)][0] <= 0) {
      delete sack[temp.slice(-1)];
    }

    this.holder.push(temp.pop()); //push from temp to players holder
    sackSize--; // decrease sackSize
    counter = 0; //reset counter
    temp.length = 0; //reset temp
  }

  console.log(`p1Holder: ${this.holder}`);
};

//---------------- PLAYERS ----------------------

const players = [
  {
    name: "Player1",
    holder: [],
    score: 0,
    isInGame: true,
    isActive: true,
    randomPull,
  },
  {
    name: "Player2",
    holder: [],
    score: 0,
    isInGame: true,
    isActive: false,
    randomPull,
  },
  {
    name: "Player3",
    holder: [],
    score: 0,
    isInGame: true,
    isActive: false,
    randomPull,
  },
  {
    name: "Player4",
    holder: [],
    score: 0,
    isInGame: false,
    isActive: false,
    randomPull,
  },
];

//to fill up each player's holder at game start
const fillUp = function () {
  players.forEach((element) => {
    console.log(element.isInGame);
    if (element.isInGame) element.randomPull(7);
  });
};
