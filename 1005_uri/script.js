var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');

/* var nota1;
var nota2;

var [notas] = [nota1, nota2];

notas = lines.map(item => parseFloat(item));

media = ((notas[0] * 3.5) + (notas[1] * 7.5)) / 11; */

// ou

[nota1, nota2] = lines.map(item => parseFloat(item));

media = ((nota1 * 3.5) + (nota2 * 7.5)) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);