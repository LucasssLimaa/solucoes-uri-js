var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(" ");

var [A, B] = lines.map(item => parseInt(item));

var soma = A + B;

//ou

/* 
var A = lines[0];
var B = lines[1];

var soma = parseInt(A) + parseInt(B);*/

// ou

/* var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

var soma = A + B; */

console.log("X = " + soma);

