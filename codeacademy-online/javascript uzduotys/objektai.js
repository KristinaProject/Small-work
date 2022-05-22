// let car = {
//   doors: 2,
//   color: "white",
//   brand: "new",
// }

// console.log(car.brand);

// Sukuriame formą su dviem input - name ir surname. 
//Pateikus formą, JS turi pasiimti vardą ir pavardę ir sukurti objektą pavadinimu 'person'. 
//Šis objektas turės du parametrus - name ir surname. 
//Kai tik objektas susikuria (t.y. dar addEventListener funkcijoje) - 
//atsispausdink objektą ir pažiūrėk ar viskas gerai veikia. 
//Hint: už funkcijos ribų negali atspausdinti objekto, 
//nes const person = {} yra limituotas konkrečiame bloke (šiuo atveju - funkcijoje). 
//Už jos ribų jis neegzistuoja.

document.querySelector("form").addEventListener("submit", (e) => {
  const person = {
    name: document.querySelector("input").value,
    surname: document.querySelector("input:nth-of-type(2)").value,
  }
 

});


