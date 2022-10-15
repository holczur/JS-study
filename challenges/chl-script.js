/*
Coding Challenge #1-1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK � 
*/
const heightMark1 = 1.69;
const massMark1 = 78;

const heightMark2 = 1.88;
const massMark2 = 95;

const heightJohn1 = 1.95;
const massJohn1 = 92;

const heightJohn2 = 1.76;
const massJohn2 = 85;

//BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
const bmiM1 = massMark1 / heightMark1 ** 2;
const bmiM2 = massMark2 / heightMark2 ** 2;
const bmiJ1 = massJohn1 / heightJohn1 ** 2;
const bmiJ2 = massJohn2 / heightJohn2 ** 2;
console.log(bmiM1);

const markHigherBMI1 = bmiM1 > bmiJ1;
const markHigherBMI2 = bmiM2 > bmiJ2;

console.log(markHigherBMI1, markHigherBMI2);

//----------------------------------------------------------------------
/*
Coding Challenge #1-2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � 
*/

if (bmiM1 > bmiJ1) {
  console.log(`Mark's BMI (${bmiM1}) is higher than John's (${bmiJ1})`);
} else {
  console.log(`John's BMI (${bmiJ1}) is higher than Mark's (${bmiM1})`);
}

//----------------------------------------------------------------------

/*
Coding Challenge #1-3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK �
*/

const avgDolphins = (96 + 108 + 89) / 3;
const avgKoalas = (88 + 91 + 110) / 3;

const avgDolphins2 = (97 + 112 + 101) / 3;
const avgKoalas2 = (109 + 95 + 123) / 3;

const avgDolphins3 = (97 + 100 + 101) / 3;
const avgKoalas3 = (105 + 95 + 98) / 3;

if (avgDolphins === avgKoalas) {
  console.log("It's a draw!");
} else if (avgDolphins > avgKoalas) {
  console.log('Dolphins won!');
} else {
  console.log('Koalas won!');
}

if (avgDolphins2 === avgKoalas2) {
  console.log("It's a draw!");
} else if (avgDolphins2 > avgKoalas2 && avgDolphins2 >= 100) {
  console.log('Dolphins won!');
} else {
  console.log('Koalas won!');
}

if (avgDolphins2 === avgKoalas2 && avgDolphins3 + avgKoalas3 >= 200) {
  console.log("It's a draw!");
} else if (avgDolphins3 > avgKoalas2 && avgDolphins3 >= 100) {
  console.log('Dolphins won!');
} else if (avgDolphins3 < avgKoalas2 && avgKoalas3 >= 100) {
  console.log('Koalas won!');
} else {
  console.log('No team has reached the minimum score');
}

console.log(avgKoalas, avgDolphins);
console.log(avgKoalas2, avgDolphins2);
console.log(avgKoalas3, avgDolphins3);

/*
Coding Challenge #1-4
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 �
GOOD LUCK �
*/

const bill1 = 275;
const bill2 = 40;
const bill3 = 430;
const tip = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;
console.log(
  `The bill was ${bill3}, the tip was ${tip} and the total value is ${
    bill1 + tip
  }.`
);

/*
Coding Challenge #2-1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores �
GOOD LUCK 
*/

const calcAverage = (scr1, scr2, scr3) => (scr1 + scr2 + scr3) / 3;

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (scoreA, scoreB) {
  if (scoreA > scoreB * 2){
    console.log(`Dolphins win (${scoreA} vs. ${scoreB})`)
  } else if (scoreB > scoreA * 2){
    console.log(`Koalas win (${scoreB} vs. ${scoreA})`)
    } else {
      console.log(`There's no winner (${scoreKoalas} vs. ${scoreDolphins})`)
    }
}

checkWinner(scoreDolphins, scoreKoalas);
