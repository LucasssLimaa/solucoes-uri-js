var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var [numeroFuncionario, horasTrabalhadas] = lines.map(item => parseInt(item));

var salarioPorHora = lines[2];

var salario = parseFloat(salarioPorHora) * horasTrabalhadas;

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);