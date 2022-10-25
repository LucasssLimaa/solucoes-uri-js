var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split(' ');

var [A, B, C] = lines.map(item => parseFloat(item));

areaTriangulo = (A * C) / 2;
areaCirculo = 3.14159 * Math.pow(C, 2);
areaTrapezio = ((A + B) * C) / 2;
areaQuadrado = Math.pow(B, 2);
areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);