// function greet () {
//   console.log('Labas');
// }

// greet();

// function greetName(name) {
//   console.log(`Labas ${name}`);
// }

// greetName('vardas');


// function sum(a, b) {
//   c = a + b;
//   console.log(`Suma: ${c}`);
// }
// sum(10, 5);
// sum(5, 9);

const namai = {
  zidinys: true,
  sviesa: function() {
      console.log(`sviesa ijungta`);
  },
  langai: function sviesu(a) {
    if (a > 4){
      console.log(`Namuose yra: ${a} langai`)
    } else { 
      console.log(`Namie tamsu`);
    }
  }
}

console.log(namai.zidinys);
namai.sviesa();
namai.langai(6);