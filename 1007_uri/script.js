var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var [A, B, C, D] = lines.map(item => parseInt(item));

diferenca = (A * B) - (C * D);

console.log(`DIFERENCA = ${diferenca}`);