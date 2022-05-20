/*let countries = [
  ["Peru", 31826018,1285216],
  ["Filipinai", 103796832, 300000],
  ["Portugalija", 10260000, 92212],
  ["Lietuva", 2814696, 65300],
  ["Meksika", 130222815, 1972550]
]*/

/* geras
for (let item of countries){
  const salis = countries[0];
  const gyventojai = countries[1]/1000000).toFixed(2);
  const plotas = countries[1];
  const plotasGyventojui = (plotas / countries[1] *1000).toFixed(2);
  const atsakymas = ``
  console.log (atsakymas)
}
*/
//beveik
// let doors = {
//   color:'yellow',
//   isOpen: true,
//   open: function() {
//     if (doors.isOpen) {
//       return 'Door are open';
//     } else {doors.isOpen = true;
//    }
//   },
//   close: function() {
//     if (doors.isOpen === false) {
//       return `closing doors`;
//     } else {
//       doors.isOpen = false;
//     }
//   }
// }

// console.log(doors.open());
// console.log(doors.close());
// console.log(doors.close());


//GERAS KODAS !!!!
let savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      let verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      } else {
        console.log(`You cant withdraw that much $${amount}`)
      }
  },
  printAccountSummary: function printAccountSummary() {
      const msg = `Welcome!\nYour balance is currently $${savingsAccount.balance} and your interest rate is ${savingsAccount.interestRatePercent}%`
      console.log(msg);
  }
}
savingsAccount.printAccountSummary;
console.log(savingsAccount.balance);
savingsAccount.withdraw(100);
console.log(savingsAccount.balance);
savingsAccount.withdraw(1000);
console.log(savingsAccount.balance);




// const facebookProfile = {
//   name: 'vardas',
//   friends: 0,
//   messages: [], 
//   postMessage: function(message) {
//     facebookProfile.messages.push(message);

//   },
//   deleteMessage : function(index) {
//     facebookProfile.messages.splice();
//   }, 
//   addFriends: function () {
//     facebookProfile.friends += 1;
//   }, 
//   addFriends: function () {
//     facebookProfile.friends -= 1;
//   }
// }

// console.log(facebookProfile.messages);
// facebookProfile.postMessage("tekstas");
// console.log(facebookProfile.messages);
// facebookProfile.postMessage("labas");
// console.log(facebookProfile.messages);
// facebookProfile.postMessage("ate ");


// facebookProfile.deleteMessage(2);
// console.log(facebookProfile.messages);

// console.log('Friends:', facebookProfile.friends);
// facebookProfile.addFriends();
// facebookProfile.addFriends();
// facebookProfile.addFriends();



// const cars = [
//   { type: "BMW", price: '30.000'},
//   { type: "MERCEDES", price: '35.000'},
//   { type: "HONDA", price: '18.000'},
//   { type: "VOLVO", price: '25.000'},
//   {cars.forEach(function (sakinys))
//       {
//       return (`${cars.type} car price ${cars.price}`);
//     }
//   }
// ];
