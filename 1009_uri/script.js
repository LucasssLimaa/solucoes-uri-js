var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var nome = lines.shift();

var [salario, vendas] = lines.map(item => parseFloat(item));

var bonus = vendas * 0.15;

var total = salario + bonus; 

console.log(`TOTAL = R$ ${total.toFixed(2)}`);