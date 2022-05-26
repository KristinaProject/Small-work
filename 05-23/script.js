// čia rašykite užduoties kodą
const button = document.querySelector("button");
button.style.color = "blue";

// const container = document.querySelectorAll(".content p");
// const secondP = container[1];
// secondP.innerHTML = "pakeistas tekstas";

// const Pragraph = document.createElement("p");
// const content = document.querySelector(".content");
// Pragraph.innerHTML = "naujas paragrafas";
// content.append(Pragraph);

// const img = document.querySelector("img");
// img.addEventListener("click", function () {
//   img.src = ("src", "https://fileinfo.com/img/ss/sm/png_79.png");
// });

// const visas = document.querySelectorAll(".content p");
// for (let visa of visas){
//   visa.style.backgroundColor = "black";
//   visa.style.color = "white"; 
// }

const newB = document.createElement("button");
newB.innerHTML = "button";
newB.classList.add('button');
const bcont = document.querySelector(".button__container");
bcont.append(newB);
// document.querySelector(".button__container").append(newB);



button.addEventListener("click", function() {
  button.innerHTML = ("Mygtukas");
});

newB.addEventListener("click", function(){
  newB.innerHTML = ("mygtukas")
})