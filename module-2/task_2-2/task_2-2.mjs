"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const originalExpression = 2 + 3 * 2 - 4 * 6;
const modifiedExpression = 2 + 3 * (2 - 4) * 6;
printOut("Original expression 2 + 3 * 2 - 4 * 6 = " + originalExpression);
printOut("Modified expression 2 + 3 * (2 - 4) * 6 = " + modifiedExpression);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const millimeters = 25000 + 340;
const inchPrMillimeters = 25.4;
let sumPart2 = (millimeters / inchPrMillimeters).toFixed(2);
printOut(`25 metres and 34 centimeters is ${sumPart2} inches`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const part3Days = 3, part3Hours = 14, part3Minutes = 14, part3Seconds = 34;
let part3Answer =
  (part3Days * 24 * 60) +
  (part3Hours * 60) +
  part3Minutes +
  (part3Seconds / 60);
printOut("3 days, 12 hours, 14 minutes, and 45 seconds is " + part3Answer.toFixed(2) + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const part4Minutes = 6322.52;
let part4Rest = part4Minutes / (24 * 60);
const part4Days = Math.floor(part4Rest);
part4Rest = (part4Rest - part4Days) * 24;
const part4Hours = Math.floor(part4Rest);
part4Rest = (part4Rest - part4Hours) * 60;
const part4Minute = Math.floor(part4Rest);
const part4Seconds = Math.floor((part4Rest - part4Minute) * 60);

printOut(
  "6,322.52 minutes is " +
  part4Days + " days, " +
  part4Hours + " hours, " +
  part4Minute + " minutes, " +
  part4Seconds + " seconds"
);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const NOKRate = 76 / 8.6;
let USD = 54;
let NOK = USD * NOKRate;
printOut("USD -> NOK = " + NOK.toFixed(2));
const USDRate = 8.6 / 76;
USD = NOK * USDRate;
printOut("NOK -> USD = " + USD.toFixed(2));
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
const part6Text = "There is much between heaven and earth that we do not understand.";
printOut(part6Text);
printOut("Number of characters: " + part6Text.length);
printOut("Character at position 19: " + part6Text.charAt(19));
printOut("Characters from position 35, 8 characters forward: " + part6Text.substring(35, 43));
printOut("Index at which 'earth' starts: " + part6Text.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
printOut(`Is 5 greater than 3? : ${5 > 3}`);
printOut(`Is 7 greater than or equal to 7? : ${7 >= 7}`);
printOut(`Is "a" greater than "b"? : ${"a" > "b"}`);
printOut(`Is "1" less than "a"? : ${"1" < "a"}`);
printOut(`Is "2500" less than "abcd"? : ${"2500" < "abcd"}`);
printOut(`"arne" is not equal to "thomas". : ${"arne" != "thomas"}`);
printOut(`(2 equals 5) is this statement true? : ${(2 === 5) === true}`);
printOut(`("abcd" is greater than "bcd") is this statement false? : ${("abcd" > "bcd") === false}`);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
printOut(`From text "254" to a number: ${Number("254")}`);
printOut(`From text "57.23" to a number: ${Number("57.23")}`);
printOut(`From text "25 kroner" to a number: ${Number("25 kroner")}`);
printOut(`From text "254" to a number: ${parseInt("254")}`);
printOut(`From text "57.23" to a number: ${parseFloat("57.23")}`);
printOut(`From text "25 kroner" to a number: ${parseInt("25 kroner")}`);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
let r = Math.floor(Math.random() * 360) + 1;
printOut("Random number between 1 and 360: " + r);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const days = totalDays % 7;
printOut("131 days is " + weeks + " weeks and " + days + " days.");
printOut(newLine);
