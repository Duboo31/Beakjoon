const n = require('fs').readFileSync('../example.txt').toString();

let answer = '';

for(let i=1; i<=+n; i++) {
    answer += + i + '\n';
}

console.log(answer);