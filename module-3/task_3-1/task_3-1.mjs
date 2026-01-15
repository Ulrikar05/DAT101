"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

/* ---------------- Part 1 ---------------- */
printOut("--- Part 1 ---");

let wakeUpTime = 7;

if (wakeUpTime === 7) {
    printOut("If I wake up at exactly 7 o'clock then I can catch the bus to school.");
}

printOut(newLine);

/* ---------------- Part 2 ---------------- */
printOut("--- Part 2 ---");

wakeUpTime = 6;

if (wakeUpTime === 7) {
    printOut("If I wake up at exactly 7 o'clock, I can take the bus to school.");
} else {
    printOut("Otherwise I have to take the car to school.");
}

printOut(newLine);

/* ---------------- Part 3 ---------------- */
printOut("--- Part 3 ---");

wakeUpTime = 8;

if (wakeUpTime === 7) {
    printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
    printOut("I can take the train to school.");
} else {
    printOut("I have to take the car to school.");
}

printOut(newLine);

/* ---------------- Part 4 ---------------- */
printOut("--- Part 4 ---");

let number = -5;

if (number > 0) {
    printOut("Positive");
} else {
    printOut("Negative");
}

printOut(newLine);

/* ---------------- Part 5 ---------------- */
printOut("--- Part 5 ---");

number = 0;

if (number > 0) {
    printOut("Positive");
} else if (number < 0) {
    printOut("Negative");
} else {
    printOut("Zero");
}

printOut(newLine);

/* ---------------- Part 6 ---------------- */
printOut("--- Part 6 ---");

let imageSize = Math.floor(Math.random() * 8) + 1;
printOut("Image size: " + imageSize + " MP");

if (imageSize >= 4) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}

printOut(newLine);

/* ---------------- Part 7 ---------------- */
printOut("--- Part 7 ---");

if (imageSize >= 6) {
    printOut("Image is too large");
} else if (imageSize >= 4) {
    printOut("Thank you");
} else {
    printOut("The image is too small");
}

printOut(newLine);

/* ---------------- Part 8 ---------------- */
printOut("--- Part 8 ---");

const monthList = [
    "January", "February", "Mars", "April", "Mai",
    "Jun", "Juli", "August", "September", "October", "November", "December"
];

const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut("Month: " + monthName);

if (monthName.includes("r")) {
    printOut("You must take vitamin D");
} else {
    printOut("You do not need to take vitamin D");
}

printOut(newLine);

/* ---------------- Part 9 ---------------- */
printOut("--- Part 9 ---");

let daysInMonth;

if (monthName === "April" || monthName === "Jun" || monthName === "September" || monthName === "November") {
    daysInMonth = 30;
} else if (monthName === "February") {
    daysInMonth = 28;
} else {
    daysInMonth = 31;
}

printOut(monthName + " has " + daysInMonth + " days");

printOut(newLine);

/* ---------------- Part 10 ---------------- */
printOut("--- Part 10 ---");

if (monthName === "April") {
    printOut("Gallery is open in temporary premises.");
} else if (monthName === "Mars" || monthName === "Mai") {
    printOut("Gallery is closed for refurbishment.");
} else {
    printOut("Gallery is open.");
}

printOut(newLine);
