"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

/* Part 1 */
let textPart1Line1 = "";
let textPart1Line2 = "";
for (let i = 1, j = 10; i <= 10; i++, j--) {
  textPart1Line1 += " " + i;
  textPart1Line2 += " " + j;
}
printOut(textPart1Line1);
printOut(textPart1Line2);
printOut(newLine);

/* Part 2 */
const part1GuessNumber = 45;
let part1Random = Math.floor(Math.random() * 60) + 1;
while (part1Random !== part1GuessNumber) {
  part1Random = Math.floor(Math.random() * 60) + 1;
}
printOut("Correct guess: " + part1Random);
printOut(newLine);

/* Part 3 */
const part3Time = Date.now();
const part3GuessNumber = 654321;
let part3Random;
let part3Count = 0;
do {
  part3Random = Math.floor(Math.random() * 1000000) + 1;
  part3Count++;
} while (part3Random !== part3GuessNumber);

printOut("Guesses: " + part3Count);
printOut("Time (ms): " + (Date.now() - part3Time));
printOut(newLine);

/* Part 4 */
let textPart4Primes = "";
for (let i = 2; i < 200; i++) {
  let j = i - 1;
  let isPrime = true;
  while (j > 1 && isPrime) {
    isPrime = i % j !== 0;
    j--;
  }
  if (isPrime) textPart4Primes += " " + i;
}
printOut(textPart4Primes);
printOut(newLine);

/* Part 5 */
let textPart5 = "";
for (let row = 1; row <= 7; row++) {
  let line = "";
  for (let col = 1; col <= 9; col++) {
    line += "K" + col + "R" + row + " ";
  }
  textPart5 += line + newLine;
}
printOut(textPart5);
printOut(newLine);

/* Part 6 */
const students = 5;
let grade1 = (Math.ceil(Math.random() * 236) / 236) * 100;
let grade2 = (Math.ceil(Math.random() * 236) / 236) * 100;
let grade3 = (Math.ceil(Math.random() * 236) / 236) * 100;
let grade4 = (Math.ceil(Math.random() * 236) / 236) * 100;
let grade5 = (Math.ceil(Math.random() * 236) / 236) * 100;

function printGrade(n, g) {
  let grade;
  if (g >= 89) grade = "A";
  else if (g >= 77) grade = "B";
  else if (g >= 65) grade = "C";
  else if (g >= 53) grade = "D";
  else if (g >= 41) grade = "E";
  else grade = "F";
  printOut(`Student ${n}: ${g.toFixed(2)}% - ${grade}`);
}

printGrade(1, grade1);
printGrade(2, grade2);
printGrade(3, grade3);
printGrade(4, grade4);
printGrade(5, grade5);
printOut(newLine);

/* Part 7 */
const solveWithStrings = true;

function matchNumber(a, b, c, d, e, f, n) {
  return [a, b, c, d, e, f].filter(x => x === n).length;
}

function matchString(str, n) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) === n) count++;
  }
  return count;
}

let throws = 0;
let fullStraight = false;
let yahtzee = false;
let tower = false;
let threePairs = false;

do {
  const d1 = Math.ceil(Math.random() * 6);
  const d2 = Math.ceil(Math.random() * 6);
  const d3 = Math.ceil(Math.random() * 6);
  const d4 = Math.ceil(Math.random() * 6);
  const d5 = Math.ceil(Math.random() * 6);
  const d6 = Math.ceil(Math.random() * 6);
  throws++;

  let c1, c2, c3, c4, c5, c6;
  if (solveWithStrings) {
    const s = "" + d1 + d2 + d3 + d4 + d5 + d6;
    c1 = matchString(s, 1);
    c2 = matchString(s, 2);
    c3 = matchString(s, 3);
    c4 = matchString(s, 4);
    c5 = matchString(s, 5);
    c6 = matchString(s, 6);
  } else {
    c1 = matchNumber(d1, d2, d3, d4, d5, d6, 1);
    c2 = matchNumber(d1, d2, d3, d4, d5, d6, 2);
    c3 = matchNumber(d1, d2, d3, d4, d5, d6, 3);
    c4 = matchNumber(d1, d2, d3, d4, d5, d6, 4);
    c5 = matchNumber(d1, d2, d3, d4, d5, d6, 5);
    c6 = matchNumber(d1, d2, d3, d4, d5, d6, 6);
  }

  const counts = "" + c1 + c2 + c3 + c4 + c5 + c6;
  if (!fullStraight && matchString(counts, 1) === 6) {
    fullStraight = true;
    printOut(`Full straight (${throws})`);
  }
  if (!yahtzee && matchString(counts, 6) === 1) {
    yahtzee = true;
    printOut(`Yahtzee (${throws})`);
  }
  if (!tower && matchString(counts, 4) === 1 && matchString(counts, 2) === 1) {
    tower = true;
    printOut(`Tower (${throws})`);
  }
  if (!threePairs && matchString(counts, 2) === 3) {
    threePairs = true;
    printOut(`Three pairs (${throws})`);
  }

} while (!fullStraight || !yahtzee || !tower || !threePairs);

printOut(newLine);
