// function hello() {
//   console.log( `Hello world`);
// }

// hello()


// function getHelloString(){
//   return `Hello world`;
// }

// console.log(getHelloString());

// function sum(a, b, c){
//   return a + b + c;
// }

// console.log(sum(10, 15, 20));

// function count(num) {
//   for(let i = 1; i <= num; i++){
//     console.log(i);
//   }
// } 
// count(20);

// function isAdult(age) {
//   if (age < 18) {
//     let noAdult = 18 - age;
//     return `the person is ${age} years old, after ${noAdult} years he/she will be an adult`;
//   } else {
//     return `the person is ${age} years old and he/she is an adult`;
//   }
// }

// console.log(isAdult(76));


// function builtTriangle(width) {
//   let tree = '';
//   for(let i = 0; i <= width; i++){
//     for(let j = 0; j <= i; j++){
//       tree += '*';
//     }
//     tree += `\n`;
//   }
//   return tree;
// }
// console.log(builtTriangle(5));


// function calculateArea(a, b){
//   return (a*b).toFixed(2);
// }

// console.log(calculateArea(2.456, 2.456));


// function sum(limit) {
//   let num=0;
//   for(i = 0; i <= limit; i++){
//     num += i;
//   }
//   return num;
// };
// console.log(sum(5));


function reverseString(str){
  let newString = '';
  for( let i = str.length - 1; i>= 0; i--){
    newString += str[i];
  }
  return newString;
}
console.log(reverseString('kjbui'));