let [n, ...arr] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');
arr = arr[0].split(' ').map(Number);

const maxNum = Math.max(...arr);

let newNum = arr.map(el => el/maxNum * 100);

console.log(newNum.reduce((acc, cur) => acc + cur) / n)


