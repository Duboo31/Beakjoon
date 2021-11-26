let [a, b] = require('fs').readFileSync('../example.txt').toString().split(' ');

a = BigInt(a);
b = BigInt(b);

console.log(Stirng(a + b));