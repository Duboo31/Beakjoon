const fs = require('fs');
const data = fs.readFileSync('example.txt').toString().split(`\n`);

const [a, b] = data;

console.log(Number(a) * Number(b[b.length - 1]));
console.log(Number(a) * Number(b[b.length - 2]));
console.log(Number(a) * Number(b[b.length - 3]));
console.log(Number(a) * Number(b));