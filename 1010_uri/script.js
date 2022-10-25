var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

var [idPeca1, numeroPecas1, precoPeca1] = lines.shift().split(' ');
var [idPeca2, numeroPecas2, precoPeca2] = lines.shift().split(' ');

//ou

/* var [peca1, peca2] = lines.map(item => item.split(' '));

var [idPeca1, numeroPecas1] = peca1.map(item => parseInt(item));
var [idPeca2, numeroPecas2] = peca2.map(item => parseInt(item));

var precoPeca1 = peca1[2];
var precoPeca2 = peca2[2];*/

var precoTotal = (precoPeca1 * numeroPecas1) + (precoPeca2 * numeroPecas2);

console.log(`VALOR A PAGAR: R$ ${precoTotal.toFixed(2)}`);