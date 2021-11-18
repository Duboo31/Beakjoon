let arr = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

let sortedArr = arr.map(Number).sort((a, b) => a - b);
arr = arr.map(Number);

console.log(`${sortedArr[sortedArr.length - 1]}\n${arr.indexOf(sortedArr[sortedArr.length - 1]) + 1}`);