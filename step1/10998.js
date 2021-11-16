const fs = require('fs');
const data = fs.readFileSync("example.txt").toString().split(" ");

const [a, b] = data;

console.log(a * b);