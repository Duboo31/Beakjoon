let word = require('fs').readFileSync('../example.txt').toString().trim();

let answer = '';

for(let i=97; i<=122; i++) {
    let alpha = String.fromCharCode(i);

    answer += word.indexOf(alpha) + ' ';
}

console.log(answer);