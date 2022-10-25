const input = require('fs').readFileSync('stdin', 'utf-8');
const lines = input.split(' ');

var [A, B] = lines.map(item => parseInt(item));

soma = A + B;

// ou

/*var A = parseInt(lines[0]);
var B = parseInt(lines[1]);

var soma = A + B;*/

console.log(`SOMA = ${soma}`);