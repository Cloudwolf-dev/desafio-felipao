let heroName = "Légolas";
let heroXP = 10390;
let nivel

if (heroXP<1000){nivel = "Ferro"}
else if (heroXP>=1001 && heroXP<=2000){ nivel = "Bronze"}
else if (heroXP>=2001 && heroXP<=5000){ nivel = "Prata"}
else if (heroXP>=5001 && heroXP<=7000){ nivel = "Ouro"}
else if (heroXP>=7001 && heroXP<=8000){ nivel = "Platina"}
else if (heroXP>=8001 && heroXP<=9000){ nivel = "Ascendente"}
else if (heroXP>=9001 && heroXP<=10000){ nivel = "Immortal"}
else if (heroXP>10000){ nivel = "Radiante"}

console.log(`O herói de nome ${heroName} está no nível ${nivel}`)
const readline = require('readline');
let name

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});

rl.question()