const data = require('fs').readFileSync('../example.txt').toString().trim();

let sum = 0;

for(let i=1; i<=+data; i++) {
    sum += i;
}

console.log(sum);