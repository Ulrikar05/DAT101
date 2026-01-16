"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("=== Task 3.2 – Loops ===");
printOut(newLine);

/* ---------------- Part 1: Counting up and down ---------------- */
printOut("--- Part 1: Counting ---");

let up = "";
let down = "";

for (let i = 1; i <= 10; i++) {
  up += i + " ";
}

for (let i = 10; i >= 1; i--) {
  down += i + " ";
}

printOut(up);
printOut(down);
printOut(newLine);

/* ---------------- Part 2: Number Guessing Game ---------------- */
printOut("--- Part 2: Guessing Game ---");

const secretNumber = 45;
let guess;
let attempts = 0;

while (guess !== secretNumber) {
  guess = Math.floor(Math.random() * 60) + 1;
  attempts++;
}

printOut("Guessed number: " + guess);
printOut("Number of attempts: " + attempts);
printOut(newLine);

/* ---------------- Part 3: Guessing Game Level Up ---------------- */
printOut("--- Part 3: Guessing Game (1 to 1 000 000) ---");

const secretBigNumber = 123456; // valgfritt tall mellom 1 og 1 000 000
let bigGuess;
let bigAttempts = 0;

const startTime = Date.now();

while (bigGuess !== secretBigNumber) {
  bigGuess = Math.floor(Math.random() * 1_000_000) + 1;
  bigAttempts++;
}

const endTime = Date.now();
const timeUsed = endTime - startTime;

printOut("Guessed number: " + bigGuess);
printOut("Number of attempts: " + bigAttempts);
printOut("Time used (ms): " + timeUsed);
printOut(newLine);

/* ---------------- Part 4: Prime Number Hunter ---------------- */
printOut("--- Part 4: Prime Numbers (< 200) ---");

for (let number = 2; number < 200; number++) {
  let isPrime = true;
  let divisor = 2;

  while (divisor <= Math.sqrt(number)) {
    if (number % divisor === 0) {
      isPrime = false;
      break;
    }
    divisor++;
  }

  if (isPrime) {
    printOut(number);
  }
}

printOut(newLine);

/* ---------------- Part 5: Nested Loops & Patterns ---------------- */
printOut("--- Part 5: Nested Loops Pattern ---");

for (let row = 1; row <= 7; row++) {
  let line = "";

  for (let col = 1; col <= 9; col++) {
    line += "K" + col + "R" + row + " ";
  }

  printOut(line.trim());
}

printOut(newLine);

/* ---------------- Part 6: Grade Simulator ---------------- */
printOut("--- Part 6: Grade Simulator ---");

for (let i = 1; i <= 5; i++) {
  const points = Math.floor(Math.random() * 236) + 1;
  const percent = (points / 236) * 100;
  let grade;

  if (percent >= 89) {
    grade = "A";
  } else if (percent >= 77) {
    grade = "B";
  } else if (percent >= 65) {
    grade = "C";
  } else if (percent >= 53) {
    grade = "D";
  } else if (percent >= 41) {
    grade = "E";
  } else {
    grade = "F";
  }

  printOut(
    "Student " + i +
    ": " + points + " points (" +
    percent.toFixed(1) + "%) → Grade " + grade
  );
}

printOut(newLine);

/* ---------------- Part 7: Dice Rolling Extravaganza ---------------- */
printOut("--- Part 7: Dice Rolling Extravaganza ---");

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function countDice(dice) {
  const counts = {};
  for (const d of dice) {
    counts[d] = (counts[d] || 0) + 1;
  }
  return Object.values(counts);
}

/* Full straight: 1 2 3 4 5 6 */
let straightAttempts = 0;
let dice;

do {
  dice = [];
  for (let i = 0; i < 6; i++) dice.push(rollDice());
  straightAttempts++;
} while (![1,2,3,4,5,6].every(n => dice.includes(n)));

printOut("Full straight after " + straightAttempts + " throws");

/* 3 pairs */
let pairAttempts = 0;
do {
  dice = [];
  for (let i = 0; i < 6; i++) dice.push(rollDice());
  pairAttempts++;
} while (countDice(dice).filter(c => c === 2).length !== 3);

printOut("3 pairs after " + pairAttempts + " throws");

/* Tower: 2 of a kind + 4 of a kind */
let towerAttempts = 0;
do {
  dice = [];
  for (let i = 0; i < 6; i++) dice.push(rollDice());
  towerAttempts++;
} while (!(countDice(dice).includes(4) && countDice(dice).includes(2)));

printOut("Tower (2 + 4) after " + towerAttempts + " throws");

/* Yahtzee: all the same */
let yahtzeeAttempts = 0;
do {
  dice = [];
  for (let i = 0; i < 6; i++) dice.push(rollDice());
  yahtzeeAttempts++;
} while (!countDice(dice).includes(6));

printOut("Yahtzee after " + yahtzeeAttempts + " throws");
printOut(newLine);
