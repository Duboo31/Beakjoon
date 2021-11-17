const n = require('fs').readFileSync('../example.txt').toString();

let answer = '';
let star = '';

for(let i=1; i<=+n; i++) {
    for(let j=0; j<i; j++) {
        star += '*';
    }
    answer += star.padStart(+n) + '\n';
    star = '';
}

console.log(answer)