const [a, b] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

let arr1 = a.split(' ').map(Number);
let arr2 = b.split(' ').map(Number);

let answer = arr2.filter(el => el < arr1[1]);
console.log(answer.join(' '));