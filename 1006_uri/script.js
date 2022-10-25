var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var [A, B, C] = lines.map(item => parseFloat(item));

var media = ((A * 2) + (B * 3) + (C * 5)) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);
