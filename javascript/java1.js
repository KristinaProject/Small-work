/*const mass = 60;
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
}