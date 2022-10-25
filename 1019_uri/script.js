var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

const valores = [3600, 60, 1];
const resultado = [];

var segundos = parseInt(lines.shift());

/*for(let i = 0; i < valores.length; i++){
    console.log(valores[i]);
}*/

//ou

for(let valor of valores) {
    resultado.push(Math.floor(segundos / valor));
    segundos %= valor;
}

console.log(resultado.join(':'));