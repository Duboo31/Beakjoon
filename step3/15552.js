const [n, ...arr] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

const numArr = arr.map(el => el.split(' ').map(Number));

let sum = '';

for(let i=0; i<+n; i++) {
    sum += numArr[i][0] + numArr[i][1] + '\n';
}

console.log(sum);