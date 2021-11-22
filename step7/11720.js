let [n, nums] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

let sum = 0;

for(let i=0; i<+n; i++) {
    sum += Number(nums[i]);
}

console.log(sum);