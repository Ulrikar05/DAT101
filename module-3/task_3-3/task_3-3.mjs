"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

/* ---------- Part 1 ---------- */
printOut("----- Part 1 -----");
function part1() {
  const today = new Date();
  printOut(
    today.toLocaleDateString("no-NB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );
}
part1();
printOut(newLine);

/* ---------- Part 2 ---------- */
printOut("----- Part 2 -----");
function part2() {
  const today = new Date();
  const release = new Date("2025-05-14");
  const days = Math.floor((release - today) / (1000 * 60 * 60 * 24));

  printOut(
    today.toLocaleDateString("no-NB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );
  printOut(`It is ${days} days to release of Sony Playstation 5`);
}
part2();
printOut(newLine);

/* ---------- Part 3 ---------- */
printOut("----- Part 3 -----");
function part3(radius) {
  printOut(`Diameter is ${radius * 2}`);
  printOut(`Circumference is ${(2 * Math.PI * radius).toFixed(2)}`);
  printOut(`Area is ${(Math.PI * radius * radius).toFixed(2)}`);
}
part3(5);
printOut(newLine);

/* ---------- Part 4 ---------- */
printOut("----- Part 4 -----");
function part4(rect) {
  printOut(`Rectangle width: ${rect.width}, height: ${rect.height}`);
  printOut(`Circumference is ${(2 * (rect.width + rect.height)).toFixed(2)}`);
  printOut(`Area is ${(rect.width * rect.height).toFixed(2)}`);
}
part4({ width: 4, height: 3 });
printOut(newLine);

/* ---------- Part 5 ---------- */
printOut("----- Part 5 -----");
function convertTemp(value, type) {
  let c, f, k;

  if (type === "Celsius") {
    c = value;
    f = value * 9 / 5 + 32;
    k = value + 273.15;
  } else if (type === "Fahrenheit") {
    f = value;
    c = (value - 32) * 5 / 9;
    k = c + 273.15;
  } else if (type === "Kelvin") {
    k = value;
    c = value - 273.15;
    f = c * 9 / 5 + 32;
  }

  printOut(`Convert ${value} ${type}`);
  printOut(`Celsius = ${Math.round(c)}`);
  printOut(`Fahrenheit = ${Math.round(f)}`);
  printOut(`Kelvin = ${Math.round(k)}`);
  printOut("");
}

convertTemp(47, "Celsius");
convertTemp(100, "Fahrenheit");
convertTemp(300, "Kelvin");

/* ---------- Part 6 ---------- */
printOut("----- Part 6 -----");
function netPrice(gross, group) {
  const rates = {
    normal: 25,
    food: 15,
    hotel: 10,
    transport: 10,
    cinema: 10,
  };

  const vat = rates[group.toLowerCase()];
  if (vat === undefined) {
    printOut(`${group} is unknown tax-group!`);
    return NaN;
  }

  const net = (100 * gross) / (100 + vat);
  printOut(`${gross} is ${net.toFixed(2)} without tax`);
  return net;
}

netPrice(100, "normal");
netPrice(150, "food");
netPrice(50, "cinema");
netPrice(100, "Textile");
printOut(newLine);

/* ---------- Part 7 ---------- */
printOut("----- Part 7 -----");
function speedCalc(distance, time, speed) {
  const s = speed ?? (distance !== null && time !== null ? distance / time : undefined);
  const d = distance ?? (speed !== null && time !== null ? speed * time : undefined);
  const t = time ?? (speed !== null && distance !== null ? distance / speed : NaN);

  printOut(`Speed = ${s !== undefined ? s : "undefined"} km/h`);
  printOut(`Distance = ${d !== undefined ? d : "undefined"} km`);
  printOut(`Time = ${isNaN(t) ? "NaN" : t.toFixed(2)} h`);
  printOut("");
}

speedCalc(50, 0.67, 75);
speedCalc(120, 2, 60);
speedCalc(105, 1.5, 70);
speedCalc(50, null, undefined);

/* ---------- Part 8 ---------- */
printOut("----- Part 8 -----");
function padText(text, maxLength, char, atEnd) {
  while (text.length < maxLength) {
    text = atEnd ? text + char : char + text;
  }
  printOut(`"${text}"`);
}

padText("This is a text", 30, " ", true);
padText("This is a text", 30, " ", false);
printOut(newLine);

/* ---------- Part 9 ---------- */
printOut("----- Part 9 -----");
function mathTest(lines) {
  let n = 1;
  for (let i = 1; i <= lines; i++) {
    let left = [];
    let right = [];

    for (let a = 0; a < i + 1; a++) left.push(n++);
    for (let b = 0; b < i; b++) right.push(n++);

    printOut(`${left.join(" ")} = ${right.join(" ")}`);
  }
  printOut("Mathematics is fun!");
}
mathTest(7);
printOut(newLine);

/* ---------- Part 10 ---------- */
printOut("----- Part 10 -----");
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
printOut(`factorial(9) is ${factorial(9)}`);
