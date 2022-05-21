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



