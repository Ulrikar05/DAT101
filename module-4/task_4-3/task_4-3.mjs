"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = [
  "Anne","Inger","Kari","Marit","Ingrid","Liv","Eva","Berit","Astrid",
  "Bjørg","Hilde","Anna","Solveig","Marianne","Randi","Ida","Nina",
  "Maria","Elisabeth","Kristin"
];

const MovieGenre = [
  "Action","Adventure","Animation","Biography","Comedy","Crime",
  "Documentary","Drama","Family","Fantasy","Film Noir","History",
  "Horror","Music","Musical","Mystery","Romance","Sci-Fi","Short",
  "Sport","Superhero","Thriller","War","Western"
];

/* Part 1 */
function cmbTask1CalculateClick() {
  const txtTask1Output = document.getElementById("txtTask1Output");
  const width = parseInt(document.getElementById("txtRectWidth").value);
  const height = parseInt(document.getElementById("txtRectHeight").value);
  const area = width * height;
  const perimeter = 2 * (width + height);
  txtTask1Output.innerHTML =
    `width: ${width}, height: ${height}<br/>Circumference = ${perimeter}, Area = ${area}`;
}
document.getElementById("cmbTask1Calculate").onclick = cmbTask1CalculateClick;

/* Part 2 */
const task2Words = [];
const txtTask2Word = document.getElementById("txtTask2Word");
const txtTask2Output = document.getElementById("txtTask2Output");

function txtTask2WordKeyPress(e) {
  if (e.key === "Enter") {
    task2Words.push(txtTask2Word.value);
    txtTask2Output.innerHTML =
      `You have entered ${task2Words.length} words:<br/>` +
      task2Words.join(", ");
    txtTask2Word.value = "";
  }
}
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);

/* Part 3 */
const chkTask3 = document.getElementsByName("chkTask3");
const txtTask3Output = document.getElementById("txtTask3Output");

function cmbTask3CheckAnswerClick() {
  txtTask3Output.innerHTML = "";
  for (let i = 0; i < chkTask3.length; i++) {
    txtTask3Output.innerHTML +=
      `chkTask3[${i}].checked = ${chkTask3[i].checked}<br/>`;
  }
}
document
  .getElementById("cmbTask3CheckAnswer")
  .addEventListener("click", cmbTask3CheckAnswerClick);

/* Part 4 */
const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

function rdbCarNameSelect(e) {
  txtTask4Output.innerHTML =
    `User select car type number: ${e.target.value}`;
}

for (let i = 0; i < CarTypes.length; i++) {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "rdbCarName";
  radio.value = CarTypes[i].value;
  radio.addEventListener("change", rdbCarNameSelect);

  const label = document.createElement("label");
  label.appendChild(document.createTextNode(CarTypes[i].caption));

  divTask4Cars.appendChild(radio);
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br"));
}

/* Part 5 */
const selectTask5Animals = document.getElementById("selectTask5Animals");
const txtTask5Output = document.getElementById("txtTask5Output");

selectTask5Animals.addEventListener("change", () => {
  txtTask5Output.innerHTML =
    "User selected animal num:#" + selectTask5Animals.value;
});

/* Part 6 */
const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

for (let i = 0; i < GirlsNames.length; i++) {
  const option = document.createElement("option");
  option.value = i.toString();
  option.textContent = GirlsNames[i];
  selectTask6Girls.appendChild(option);
}

selectTask6Girls.addEventListener("change", () => {
  const index = parseInt(selectTask6Girls.value);
  txtTask6Output.innerHTML =
    `You selected: ${index}, ${GirlsNames[index]}`;
});

/* Part 7 */
const txtMovieTitle = document.getElementById("txtMovieTitle");
const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMoviesBody =
  document.getElementById("tblMovies").getElementsByTagName("tbody")[0];

for (let i = 0; i < MovieGenre.length; i++) {
  const option = document.createElement("option");
  option.value = i.toString();
  option.textContent = MovieGenre[i];
  selectMovieGenre.appendChild(option);
}

function cmbAddMovieClick() {
  const row = tblMoviesBody.insertRow();
  row.insertCell().innerHTML = txtMovieTitle.value;
  row.insertCell().innerHTML =
    MovieGenre[parseInt(selectMovieGenre.value)];
  row.insertCell().innerHTML = txtMovieDirector.value;
  row.insertCell().innerHTML = txtMovieRate.value;

  txtMovieTitle.value = "";
  selectMovieGenre.value = "0";
  txtMovieDirector.value = "";
  txtMovieRate.value = "";
}

cmbAddMovie.addEventListener("click", cmbAddMovieClick);
