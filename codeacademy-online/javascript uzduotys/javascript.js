/*let vardas = "Kristina";*/
// for(let i = 10; i > 0; i--){
//   console.log( i , "Kristina");
// }

// Su while ciklu pasirašykite, kad Jūsų vardą išvestų į console 3 kartus.
// Sukurkite kintamąjį (let combo = ""). Kiekvieną kartą paleidus ciklą į combo prisirašo Jūsų vardas (t.y. while ciklo viduje darytų combo += "Petras" ).
// Sukurkite programą, kur bus kintamasis (let times = 5), kuris nurodys kiek kartų į combo kintamąjį turėtų būti pridėtas Jūsų vardas.
// Jei times skaičius 0 arba mažiau - vis tiek bent vieną kartą įvyks ciklas ir Jūsų vardą įrašys į combo.
// Pvz:
// times = 0; combo = "Petras"
// times = 1; combo = "Petras"
// times = 2; combo = "PetrasPetras"
// times = 3; combo = "PetrasPetrasPetras"

// let combo = '';
// let times = 5;
// const name = 'Kristina';
// do {
//   combo += name;
//   times--;

// } while
//   (times > 0);
//   console.log(combo);

// Suskaičiuok su JS koks bus cos(0) (t.y. cos, kai kampas 0 radians).
// Sukurk random skaičių tarp 1 ir 5 (įskaitant abu).
// Sukurk random skaičių tarp 5 ir 12 (įskaitant abu).
// Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar jis laimėjo bilietą ar ne. Tikimybė laimėti - viena iš penkių. (Hint: čia reikės if-else su math random).

// let kampas = Math.cos(0)* 1; --> Math.cos(0);
// console.log(kampas);

// let betKoks = Math.floor(Math.random() * 5) + 1); <== pataisyta eilute, nebuvo skliaustelio po 5.
// if (betKoks === 3) {
//   alert('Sveikiname!');
// } else {
//   console.log('Nieko nelaimejote.')
// }

// Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).
//pataisytas kodas, length nuemiau skliaustelius + air b pervadinti i name ir surname.
// function ilgis(name, surname) {
//   return name.length + surname.length;

// }

// console.log(ilgis("labas", "rytas"));

// Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę
//(pvz. 0 => A; 1 => B; 2 => C ir t.t.).
//Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]),
//o funkcija paims pagal indeksą atitinkamą raidę.

//taisytas kodas, pinai surasyta funkcija, liko gerai parasytas array.

// function getByIndex (index){
//   let raide = ["a", "b", "c", "d", "e", "f", "g", "h"];
// return raide[index];
// }
// console.log(getByIndex(5));


// Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator).
//Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti).
// n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...).
//Hint: Reikės funkcijoje naudoti if-else arba switch.

// VEIKIA
// function answer(n1, n2, operator) {
//   if (operator === "-"){
//     console.log(n1 - n2);
//   } else if (operator === "+") {
//     console.log( n1 + n2);
//   } else if (operator === "*"){
//     console.log(n1*n2);
//   } else if ( operator === "/") {
//     console.log(n1/n2);
//   } else {
//     console.log(`nothing happening`)
//   }
// }

// answer(2, 1, "-");
// answer(4, 2, "/");
// answer(3456, 5, "*")


//Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), 
//kita - gautą skaičių pakelia kvadratu. 
//Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).
//VEIKIA!
// veike is karto, kad graziau skaitytusi pakeiciau return skaicius**2 ==>   return Math.pow(skaicius, 2);


// let skaicius = Math.floor(Math.random() * 10 + 1);
// function kvadratu(skaicius) {
//   return Math.pow(skaicius, 2);
// }

// console.log(`Skaicius ${skaicius} pakeltas kvadratu yr ${kvadratu(skaicius)}`);

//////

//Pasirašykite variable isLegalAge, kurį priskirkite true arba false. 
//Console.log'e atvaizduokite šį variable. Sukurkite antrą console.log, kuriame atvaizduokite šį variable su toString() metodu. 
//Turėtų skirtis spalva teksto.

// let isLegalAge = true;
// console.log(isLegalAge);
// console.log(isLegalAge.toString());




//Sukurk variable 'milkPrice'. Su JS patikrink ir informuok vartotoją alert() ar jam reikės centų, ar nereikės (t.y. ar skaičius sveikas).
//Pakoreguok pirmą pratimą, kad alert taip pat ir išmestų kainą - su dviem skaičias po kablelio (t.y. 3.00 Eur).



// let milkPrice = 5.4444;

// if (Number.isInteger(milkPrice)) {
//   alert(`nereikes centu, kaina: ${milkPrice.toFixed(2)}`);
// } else {
//   alert(`reikes centu ${milkPrice.toFixed(2)}`);
// }

//Sukurk programą degalinei - bus du input laukeliai (kuriame su HTML): viename įvedame kainą su trim skaičias po kablelio,
// antrame - degalų kiekį, su vienu skaičiu po kablelio (HTML naudojame step="0.1" atributą pasakyti kiek skaičių po kablelio vartotojas gali paduoti). 
//Pavyzdžiui: 1.399Eur x 5.1L. Pateikus duomenis - vartotojui apačioje turi išmesti kainą h1 laukelyje (sukuriame su JS), su dviem skaičiais po kablelio (pvz. 7.13 Eur).
///daryta su pavyzdziu

// document.querySelector("form").addEventListener("submit", e =>{
//   e.preventDefault();
//   const price = Number(document.getElementById("price").value);
//   const quant = Number(document.getElementById("quant").value);
//   const total = price * quant;
//   const priceDisplay = document.createElement("h1");
//   priceDisplay.textContent = total.toFixed(2);
//   document.body.append(priceDisplay);
// });




//Susikurkite konstruktorių car, kuris priims brand, model, 
//engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.
//Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. 
//basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. 
//Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

//veikia



// function Car (b, m, e, bp) {
//   this.brand = b;
//   this.model = m;
//   this.engine = e;
//   this.basePrice = bp;
//   this.turnOn = function () {
//     alert(`vrooom!`);
//   };
//   this.getPrice = function() {
//     if (this.engine === 'electric'){
//       return this.basePrice + 10000;
//     } else if (this.engine === 'diesel'){
//       return this.basePrice + 5000;
//     } else {
//       return this.basePrice
//     }
//   };
// };
// const Reno = new Car("renault", "scenic", "petrol", 5700);
// console.log(Reno.getPrice());

// const bmw = new Car("bmw", "o6", "diesel", 6000);
// console.log(bmw.getPrice());

// const audi = new Car("audi", "627", "electric", 3000);
// console.log(audi.getPrice());