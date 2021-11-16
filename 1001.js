const fs = require('fs');
const data = fs.readFileSync("example.txt").toString().split(" ");

const a = data[0];
const b = data[1]

console.log(a - b);