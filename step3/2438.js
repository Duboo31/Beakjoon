const n = require('fs').readFileSync('../example.txt').toString();

let star = '';

for(let i=1; i<=+n; i++) {
    star += '*'.repeat(i) + '\n';
}

console.log(star);