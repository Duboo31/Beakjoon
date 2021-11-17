const [n, ...arr] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

let numArr = arr.map(el => el.split(' ').map(Number));

let answer = '';

for(let i=0; i<+n; i++) {
    answer += `Case #${i + 1}: ${numArr[i][0] + numArr[i][1]}${'\n'}`;
}
console.log(answer);