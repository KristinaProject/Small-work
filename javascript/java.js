/* geras kodas
const mass = 60;
const height = 1.68;

const kmi = mass/(height*height);

console.log(`KMI: ${kmi.toFixed(2)}`);

let name = 'Kristina'
let interest = 'reading'
let hobby = 'watchingmovies'
console.log(`Hi, my name is ${name}, my interest is ${interest} and my hobby ${hobby}`)


const bill = 10.25 + 3.99 + 7.15;
const tip = bill* 0.15;
const total = bill + tip;
console.log(`$${bill}`)
console.log(`$${tip.toFixed(2)}`)
console.log(`$${total.toFixed(2)}`)




*/
/*let a = 20;
let b = 10;

console.log(`${a}+${b}=${a+b}`)
console.log(`${a}-${b}=${a-b}`)
console.log(`${a}*${b}=${a*b}`)
console.log(`${a}/${b}=${a/b}`) */

/*
let userName = "Akmuo";
let password = "12345";
const input_userName = prompt("Iveskite prisijungimo varda:")
const input_password = prompt("Iveskite slaptazodi:")

const is_username_valid = userName.toLowerCase() === input_userName.toLowerCase();
const is_password_valid = password === input_password;

if (is_username_valid && is_password_valid) {
  alert("Sveiki prisijunge!");
} else if (is_username_valid || is_password_valid ){
  alert("bandykite dar karta! Kazkas negerai!");
} else {
  alert("Bandykite dar karta!");
} */

/* geri kodai
let numbers = ["vienas", "du", "trys", "keturi", "penki"];
console.log(numbers[2]); 

let months = ["Sausis","Vasaris","Kovas","Balandis","Geguze","Birzelis","Liepa","Rugpjutis","Rugsejis","Spalis","Lapkritis","Gruodis"];
for(const year of months) {
  console.log(year);
}
*/

/* GOOD ONE

let  numbers = [1, 2, 3, 4, 5, 6, 7];

for (i = 0; i < numbers.length; i++) {
  numbers[i] += 5;
  console.log(numbers);
}
console.log(numbers);*/
/* taisyti
let  numbers = [1, 2, 3, 4, 5, 6, 7];
for(number of numbers){
  console.log(numbers += 5);
}*/

/* taisyti
let numbers = [1, 2, 2, 4, 6];
let sum = 0;
for(number of numbers){
  sum = number + numbers;
  console.log(sum)
}
*/
/* geras kodas
const legalAge = 20;
let clientAge = 20;
if (clientAge >= legalAge ) {
  alert("sveiki prisijunge!");
} else {
  alert("Prisijungti negalima!");
}*/
/* geras kodas
const vardas = "Kristina";
 if ( vardas.length >= 6) {
   console.log("Ilgas vardas");
 }
 else {
   console.log("trumpas vardas")
 }*/

/* geras kodas
 const myage = 29;
 if( myage > 100 || myage < 0) {
   console.log("Invalid age");
 } else if (myage >= 1 && myage <= 18) {
   console.log("Child");
 } else if ( myage > 18 && myage <= 99) {
   console.log ("Adult");
 }*/
/* geras kodas
 const car = "BMW";
 if (car === "VW" || car === "Audi" || car === "Bentley" || car === "Bugati" || car === "Lamborgini" || car === "Porshe") {
   console.log("VW group")
 } else if ( car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
   console.log("BMW group")
 } else {
   console.log("neither")
 }*/
/* geras kodas
 const car = "Audi";
 switch(car) {
  case "VW":
  case "Audi":
  case "Bentley":
  case "Bugatti":
  case "Lamborgini":
  case "Porshe":
    console.log("VW group");
    break;
  case "BMW":
  case "Mini":
  case "Rolls-Royce":
    console.log("BMW group");
    break;
  default:
    console.log("niekam nepriklauso");

 }*/

/* Geras kodas
 const sakinys = "cia yra paprastas sakinys";
 const words = sakinys.split(' ');
 for(const word of words){
   console.log(word);
 }*/
/* geras kodas
 const words = ["labas", "geras", "naktis", "diena"];
 const sakinys = words.join(" ");
 console.log(sakinys) */

 /* nepavyko
 const numbers = [];
 while(numbers.length < 10 ){
   numbers.push("1");
   console.log(numbers);
 } */
/* geras kodas
let userInput = "Obuolys";
switch(userInput) {
  case "Morka":
  case "Svogunas":
  case "Bulve":
  case "Cesnakas":
  case "Burokas":
    console.log("darzove");
    break;
  case "Kriause":
  case "Obuolys":
  case "Persikas":
  case "Ananasas":
  case "bananas":
    console.log("Vaisius");
    break;
  default: 
    console.log("uoga")
} */
/* geras kodas
let weekDay = "5";
switch(weekDay) {
  case "0":
    console.log("Pirmadienis");
    break;
  case "1":
    console.log("Antradienis");
    break;
  case "2":
    console.log("Treciadienis");
    break;
  case "3":
    console.log("Ketvirtadienis");
    break;
  case "4":
    console.log("Penktadienis");
    break;
  case "5":
    console.log("Sestadienis");
    break;
  default:
    console.log("Sekmadienis");
} */

