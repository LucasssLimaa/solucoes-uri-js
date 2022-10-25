var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var valor = parseFloat(lines.shift()) + 0.001;

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
var resultado = [];

console.log("NOTAS:");

for(let nota of notas) {
    resultado.push(Math.floor(valor / nota));
    valor %= nota;
    console.log(`${resultado} nota(s) de R$ ${nota.toFixed(2)}`);
    resultado.shift();
}

console.log("MOEDAS:");

for (let moeda of moedas) {
    resultado.push(Math.floor(valor / moeda));
    valor %= moeda;
    console.log(`${resultado} moeda(s) de R$ ${moeda.toFixed(2)}`);
    resultado.shift();
}