let [a, b, v] = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
let A = +a;
let B = +b;
let V = +v;

console.log((Math.ceil((V - A) / (A - B))) + 1);