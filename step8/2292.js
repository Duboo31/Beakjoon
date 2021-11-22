let n = require('fs').readFileSync('../example.txt').toString().trim();

let sum = 1;
let cnt = 1;

while(sum < +n) {
    sum +=  cnt++ * 6;
}
console.log(cnt);