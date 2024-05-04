let heroName = "Légolas"; // <- Insira o nome do seu herói
let heroXP = 10390; // <- Coloque seu XP aqui
let nivel;

if (heroXP<1000){nivel = "Ferro"}
else if (heroXP>=1001 && heroXP<=2000){ nivel = "Bronze"}
else if (heroXP>=2001 && heroXP<=5000){ nivel = "Prata"}
else if (heroXP>=5001 && heroXP<=7000){ nivel = "Ouro"}
else if (heroXP>=7001 && heroXP<=8000){ nivel = "Platina"}
else if (heroXP>=8001 && heroXP<=9000){ nivel = "Ascendente"}
else if (heroXP>=9001 && heroXP<=10000){ nivel = "Immortal"}
else if (heroXP>10000){ nivel = "Radiante"};

console.log(`O herói de nome ${heroName} está no nível ${nivel}`);