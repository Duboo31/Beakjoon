let [a, b] = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
a = a.split('').reverse().join('');
b = b.split('').reverse().join('');

console.log(+a > +b ? a : b);