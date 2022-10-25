var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var raio = lines.shift();

var volume = (4 / 3) * 3.14159 * (Math.pow(raio, 3));

console.log(`VOLUME = ${volume.toFixed(3)}`);