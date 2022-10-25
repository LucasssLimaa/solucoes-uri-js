var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var N = parseInt(lines.shift());

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(N);

for (let nota of notas) {
    var quanidadeNotas = Math.floor(N / nota);
    console.log(`${quanidadeNotas} nota(s) de R$ ${nota},00`);
    N = N % nota;
}
