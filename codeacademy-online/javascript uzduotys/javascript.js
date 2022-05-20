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

// let betKoks = Math.floor(Math.random() * 5 + 1);
// if (betKoks === 3) {
//   alert('Sveikiname!');
// } else {
//   console.log('Nieko nelaimejote.')
// }



// Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

