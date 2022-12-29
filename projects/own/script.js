'use strict';

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
            - After a word is placed, the player has to draw as many letters from the sack as she used
            - Players can pass their turn if they cannot place any word (0 points)
            - Players can change their letters by drawing from the sack if they want to. If they do so, their turn is over with 0 points.
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

const sack = [
  {
    letter: 'a',
    quant: 6,
    value: 1,
  },
  {
    letter: 'á',
    quant: 4,
    value: 1,
  },
  {
    letter: 'b',
    quant: 3,
    value: 2,
  },
  {
    letter: 'c',
    quant: 1,
    value: 5,
  },
  {
    letter: 'cs',
    quant: 1,
    value: 7,
  },
  {
    letter: 'd',
    quant: 3,
    value: 2,
  },
  {
    letter: 'e',
    quant: 6,
    value: 1,
  },
  {
    letter: 'é',
    quant: 3,
    value: 4,
  },
  {
    letter: 'f',
    quant: 2,
    value: 4,
  },
  {
    letter: 'g',
    quant: 3,
    value: 2,
  },
  {
    letter: 'gy',
    quant: 2,
    value: 4,
  },
  {
    letter: 'h',
    quant: 2,
    value: 3,
  },
  {
    letter: 'i',
    quant: 3,
    value: 1,
  },
  {
    letter: 'í',
    quant: 1,
    value: 5,
  },
  {
    letter: 'j',
    quant: 2,
    value: 4,
  },
  {
    letter: 'k',
    quant: 6,
    value: 1,
  },
  {
    letter: 'l',
    quant: 4,
    value: 1,
  },
  {
    letter: 'ly',
    quant: 1,
    value: 8,
  },
  {
    letter: 'm',
    quant: 3,
    value: 1,
  },
  {
    letter: 'n',
    quant: 4,
    value: 1,
  },
  {
    letter: 'ny',
    quant: 1,
    value: 5,
  },
  {
    letter: 'o',
    quant: 3,
    value: 1,
  },
  {
    letter: 'ó',
    quant: 3,
    value: 2,
  },
  {
    letter: 'ö',
    quant: 2,
    value: 4,
  },
  {
    letter: 'ő',
    quant: 1,
    value: 7,
  },
  {
    letter: 'p',
    quant: 2,
    value: 4,
  },
  {
    letter: 'r',
    quant: 4,
    value: 1,
  },
  {
    letter: 's',
    quant: 3,
    value: 1,
  },
  {
    letter: 'sz',
    quant: 2,
    value: 3,
  },
  {
    letter: 't',
    quant: 5,
    value: 1,
  },
  {
    letter: 'ty',
    quant: 1,
    value: 10,
  },
  {
    letter: 'u',
    quant: 2,
    value: 4,
  },
  {
    letter: 'ú',
    quant: 1,
    value: 7,
  },
  {
    letter: 'ü',
    quant: 2,
    value: 4,
  },
  {
    letter: 'ű',
    quant: 1,
    value: 7,
  },
  {
    letter: 'v',
    quant: 2,
    value: 3,
  },
  {
    letter: 'z',
    quant: 2,
    value: 4,
  },
  {
    letter: 'zs',
    quant: 1,
    value: 8,
  },
  {
    letter: 'balnk',
    quant: 2,
    value: 0,
  },
];

/*
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
  */

//recount sackSize
let sackSize = 0;
const countSize = function () {
  sackSize = 0;
  for (let i = 0; i < sack.length; i++) {
    sackSize += sack[i].quant;
  }
};
countSize();

const random = function () {
  return Math.floor(Math.random() * sackSize + 1);
};

const randomDraw = function (pieces) {
  let index = random();
  console.log(`index is : ${index}`);
  let counter = 0;

  for (let j = 0; j < pieces; j++) {
    counter = 0;
    for (let i = 0; i < sack.length; i++) {
      if (sack[i].quant === 0) continue;
      if (counter >= index) {
        this.holder.push(Object.values(sack[i - 1]));
        sack[i - 1].quant--;
        break;
      } else {
        counter += sack[i].quant;
        console.log(counter);
        console.log(i);
      }
    }
  }

  for (const e of this.holder) {
    e[1] = 1;
  }
  console.log(this.holder);
};
//---------------- PLAYERS ----------------------

const players = [
  {
    name: 'Player1',
    holder: [],
    score: 0,
    temp: [],
    isInGame: true,
    isActive: true,
    randomDraw,
  },
  {
    name: 'Player2',
    holder: [],
    score: 0,
    temp: [],
    isInGame: true,
    isActive: false,
    randomDraw,
  },
  {
    name: 'Player3',
    holder: [],
    score: 0,
    temp: [],
    isInGame: true,
    isActive: false,
    randomDraw,
  },
  {
    name: 'Player4',
    holder: [],
    score: 0,
    temp: [],
    isInGame: false,
    isActive: false,
    randomDraw,
  },
];

