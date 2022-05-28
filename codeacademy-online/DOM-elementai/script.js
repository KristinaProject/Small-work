
// let h1 = document.querySelector("h1");


// h1.addEventListener("click", function(){
//   h1.style.fontSize = "100px";
//   h1.style.textAlign = "center";
//   h1.style.color = "red";
// });
// let button = document.querySelector("button");
// button.style.cssText = `position:absolute; top:0; left:0;`;
// let itsOriginal = true;
// function changePosition() {
//  button.style.cssText = itsOriginal ? `position:absolute; bottom:0; right:0;` : `position:absolute; top:0; left:0;`;
// itsOriginal = !itsOriginal;
// }
// button.addEventListener(`click`, changePosition);


//----------------NNEPAVYKO:(--------------------------
 
// const cornerStyles = ['position:absolute; top:0; right:0;', 'position:absolute; bottom:0; right:0;', 'position:absolute; bottom:0; left:0;', 'position:absolute; top:0; left:0;'];
// function changePosition(button) {
//   let corner = 0;
//   if (corner < cornerStyles.length) {
//     button.style.cssText = cornerStyles[corner];
//     corner++;
//   }
//   if (corner === cornerStyles.length) {
//     corner = 0;
//   }
// }

// button.addEventListener('click', changePosition);
// -----------------nepavyko:(------------------------------

let vardas = document.getElementById("text");
vardas.addEventListener('input', function(){
  if(vardas.length > 3){
    return document.body.style.backgroundColor = "green";
  } else {
    return  document.body.style.backgroundColor = "red";
  };
});
//-----------------------------------------------------

// let changeB = document.getElementById("change");
// // let spalva = ["red", "green", "blue", "yellow"];
// // changeB.addEventListener("click", function(){
// //   const randomIndex = Math.round(Math.random() * 4);
// //   changeB.style.backgroundColor = spalva[randomIndex];
// // });


// function generateRandomColor() {
//   const randomBetween = function (min, max) { 
//     return min + Math.floor(Math.random() * (max-min + 1));
//   }
//   const r = randomBetween(0, 255);
//   const g = randomBetween(0, 255);
//   const b = randomBetween(0, 255);
//   return `rgb(${r},${g},${b})`;
// }
// changeB.addEventListener("click", function(){
//   changeB.style.backgroundColor = generateRandomColor();
// });