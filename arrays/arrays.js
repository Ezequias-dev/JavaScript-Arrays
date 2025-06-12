// const cars = ["BMW", "Volvo", "Audi"];
const cars = [
  "BMW",
  "Volvo",
  "Audi"
];
/*
const cars = [];
cars[0] = "BMW";
cars[1] = "Volvo";
cars[2] = "Audi";
*/
// const cars = new Array("BMW", "Volvo", "Audi");
console.log(cars);

document.getElementById("root").innerHTML = cars;

const favoriteCar = cars[0];

console.log(favoriteCar);

document.getElementById("root2").innerHTML =
  `Meu carro favorito: ${favoriteCar}`;

cars[1] = "Mercedes";

console.log(cars);

const fruits =
  ["Banana", "Apple", "Orange", "Strawberry"];
document.getElementById("root3").innerHTML = fruits.toString();

console.log(fruits.length);

const firstFruit = fruits[0];

console.log(firstFruit);

const lastFruit = fruits[fruits.length - 1];
console.log(lastFruit);

const fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

document.getElementById("root4").innerHTML = text;

function myFunction(value) {
  text2 += `<li> ${value} </li>`;
}

let text2 = "<ul>";
fruits.forEach(myFunction);
text2 += "</ul>"

document.getElementById("root5").innerHTML = text2;

const cll = ["Samsumg", "Apple", "Xiaome"];

console.log(cll);

cll.push("Motorola");

console.log(cll);

cll[cll.length] = "Multi";

console.log(cll);

console.log(Array.isArray(cll));

console.log(cll instanceof Array);

let x = "";
const myObj = {
  name: "Ezequias",
  age: 17,
  cars: [
    {name: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
    {name: "BMW", models: ["320", "X3", "X5"]},
    {name: "Fiat", models: ["500", "Panda"]}
  ]
};

for (const a in myObj.cars) {
  x += `<h2> ${myObj.cars[a].name} </h2>`;
  for (const b in myObj.cars[a].models) {
    x += myObj.cars[a].models[b] + "<br>";
  }
}

document.getElementById("root6").innerHTML = x;

let text1 = "";
for (const carro of myObj.cars) {
  text1 += `<h2> ${carro.name} </h2>`;
  for (const modelos of carro.models) {
    text1 += `${modelos} <br>`;
  }
}

document.getElementById("cars").innerHTML = text1;