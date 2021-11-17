const data = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

let arr = data.map(el => el.split(' ').map(Number));
const len = arr.length;
let cnt = 0;

let answer = '';

while(cnt < len) {
    let a = arr[cnt][0];
    let b = arr[cnt][1];
    cnt++;

    if(a + b !== 0) {
        answer += a + b + '\n';
    }
}

console.log(answer);