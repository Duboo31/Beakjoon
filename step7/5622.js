let str = require('fs').readFileSync('../example.txt').toString().trim().split('');

const alpha = [3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10];
const len = str.length;

let answer = 0;

for(let i=0; i<len; i++) {
    answer += alpha[str[i].charCodeAt() - 65]; 
}

console.log(answer); 