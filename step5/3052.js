let arr = require('fs').readFileSync('../example.txt').toString().trim().split('\n').map(Number);

let answer = arr.map(el => el % 42);

const len = answer.length;
let cnt = [];

for(let i=0; i<len; i++) {
    if(!cnt.includes(answer[i])) {
        cnt.push(answer[i]);
    }
}

console.log(cnt.length)