let [a, b] = require('fs').readFileSync('../example.txt').toString().split(' ');

a = BigInt(a);
b = BigInt(b);

let answer = a + b;

console.log(answer.toString())