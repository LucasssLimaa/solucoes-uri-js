var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var dias = parseInt(lines.shift());

var valores = [365, 30, 1];
var resultado = [];

for (let valor of valores) {
    resultado.push(Math.floor(dias / valor));
    dias %= valor;
}

console.log(`${resultado[0]} ano(s)`);
console.log(`${resultado[1]} mes(es)`);
console.log(`${resultado[2]} dia(s)`);


