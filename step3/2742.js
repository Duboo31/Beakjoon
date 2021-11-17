const n = require('fs').readFileSync('../example.txt').toString();

let answer = '';

for(let i=+n; i>0; i--) {
    answer += i + `\n`;
}

console.log(answer);