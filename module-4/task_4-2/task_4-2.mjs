"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

/* ---------- Part 1 ---------- */
printOut("--- Part 1 ---");

const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
printOut("Lengde = " + part1Array.length + ", Verdi = " + part1Array[part1Array.length - 1]);

let part1Text = "";
for (let i = 0; i < part1Array.length; i++) {
  part1Text += (i === part1Array.length - 1)
    ? part1Array[i] + "."
    : part1Array[i] + ", ";
}
printOut(part1Text);
printOut(newLine);

/* ---------- Part 2 ---------- */
printOut("--- Part 2 ---");
printOut(part1Array.join(", "));
printOut(newLine);

/* ---------- Part 3 ---------- */
printOut("--- Part 3 ---");

const part3Greeting = "Hello there, how are you?";
const greetingArray = part3Greeting.split(" ");
let part3Text = "";

for (let i = 0; i < greetingArray.length; i++) {
  part3Text += "Index: " + i + " = " + greetingArray[i] + newLine;
}
printOut(part3Text);
printOut(newLine);

/* ---------- Part 4 ---------- */
printOut("--- Part 4 ---");

const girls = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

function removeNameFromArray(aArray, aName) {
  const index = aArray.indexOf(aName);
  if (index >= 0) {
    printOut(aName + " is found, and deleted.");
    aArray.splice(index, 1);
  } else {
    printOut(aName + " is not found!");
  }
}

removeNameFromArray(girls, "Hilde");
printOut(girls);
printOut(newLine);

/* ---------- Part 5 ---------- */
printOut("--- Part 5 ---");

const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const allNames = girls.concat(boys);

printOut(allNames);
printOut(newLine);

/* ---------- Part 6 ---------- */
printOut("--- Part 6 ---");

class TBook {
  #title;
  #author;
  #isbn;

  constructor(aTitle, aAuthor, aISBN) {
    this.#title = aTitle;
    this.#author = aAuthor;
    this.#isbn = aISBN;
  }

  toString() {
    return `Title: ${this.#title}, Author: ${this.#author}, ISBN: ${this.#isbn}`;
  }
}

const bookArray = [
  new TBook("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"),
  new TBook("To Kill a Mockingbird", "Harper Lee", "9780061120084"),
  new TBook("1984", "George Orwell", "9780451524935")
];

let part6Text = "";
for (const book of bookArray) {
  part6Text += book.toString() + "<br>";
}
printOut(part6Text);
printOut(newLine);

/* ---------- Part 7 ---------- */
printOut("--- Part 7 ---");

const EWeekDays = {
  WeekDay1: { value: 0x01, name: "Mandag" },
  WeekDay2: { value: 0x02, name: "Tirsdag" },
  WeekDay3: { value: 0x04, name: "Onsdag" },
  WeekDay4: { value: 0x08, name: "Torsdag" },
  WeekDay5: { value: 0x10, name: "Fredag" },
  WeekDay6: { value: 0x20, name: "Lørdag" },
  WeekDay7: { value: 0x40, name: "Søndag" },
  Workdays: { value: 0x1F, name: "Arbeidsdager" },
  Weekends: { value: 0x60, name: "Helg" }
};

const weekDayKeys = Object.keys(EWeekDays);
let part7Text = "";

for (const key of weekDayKeys) {
  part7Text += `${key}: ${EWeekDays[key].value}, ${EWeekDays[key].name}` + newLine;
}
printOut(part7Text);
printOut(newLine);

/* ---------- Part 8 ---------- */
printOut("--- Part 8 ---");

const randomNumbers = [];
for (let i = 0; i < 35; i++) {
  randomNumbers.push(Math.floor(Math.random() * 20) + 1);
}

const ascendingNumbers = [...randomNumbers].sort((a, b) => a - b);
const descendingNumbers = [...randomNumbers].sort((a, b) => b - a);

printOut("Original: " + randomNumbers.join(", "));
printOut("Ascending: " + ascendingNumbers.join(", "));
printOut("Descending: " + descendingNumbers.join(", "));
printOut(newLine);

/* ---------- Part 9 ---------- */
printOut("--- Part 9 ---");

const frequency = {};
for (const num of randomNumbers) {
  frequency[num] = (frequency[num] || 0) + 1;
}

let freqText = "";
const keys = Object.keys(frequency).sort((a, b) => {
  if (frequency[b] === frequency[a]) return a - b;
  return frequency[b] - frequency[a];
});

for (const key of keys) {
  freqText += `Number ${key} occurs ${frequency[key]} times.` + newLine;
}
printOut(freqText);
printOut(newLine);

/* ---------- Part 10 ---------- */
printOut("--- Part 10 ---");

const rows = 5;
const cols = 9;
const matrix = [];

for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < cols; j++) {
    row.push(`Row ${i + 1}, Col ${j + 1}`);
  }
  matrix.push(row);
}

let part10Text = "";
for (const row of matrix) {
  part10Text += row.join(" | ") + newLine;
}
printOut(part10Text);
printOut(newLine);
