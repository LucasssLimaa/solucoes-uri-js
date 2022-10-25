var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var [tempo, velocidade] = lines.map(item => parseInt(item));

distancia = (tempo * velocidade);
consumo = distancia / 12;

console.log(consumo.toFixed(3));