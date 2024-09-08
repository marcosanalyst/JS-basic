// Exercício const e let + desafio IMC

/* Criar um código que reflita: 
Marcos Antonio Silva tem 32 anos,
pesa 80 kg, tem 1.80 de altura e seu IMC é de: x.
*/


const nome = 'Marcos Antonio';
const sobrenome = 'Silva';
const idade = 32;
const peso = 80;
const alturaEmMetros = 1.80; 


console.log(nome, sobrenome, 'tem',idade, 'anos pesa', peso, 'kg tem', alturaEmMetros, 'M de altura e seu IMC é de:');

// cálculo IMC: peso em kg dividido pela altura ao quadrado (em metros) | imc = peso (altura * altura)

const imc = peso / (alturaEmMetros * alturaEmMetros);

console.log('O IMC de', nome, 'é de:', imc);

// template string

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg tem ${alturaEmMetros} M de altura e seu IMC é de: ${imc} `);// uso de crase `