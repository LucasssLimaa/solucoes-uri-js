var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');

var [a, b] = lines.map(item => parseInt(item));

var produto = a * b;

console.log(`PROD = ${produto}`);