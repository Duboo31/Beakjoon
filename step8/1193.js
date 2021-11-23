let n = require('fs').readFileSync('../example.txt').toString().trim();

n = +n;

let cnt = 0;
let temp1 = [];
let temp2 = [];

while(n > 0) {
    cnt++;
    n -= cnt;
}

for(let i=1; i<=cnt; i++) {
    temp1.push(i);
    temp2.push(cnt + 1 - i);
}

console.log(cnt % 2 ? `${temp2[cnt + n - 1]}/${temp1[cnt + n - 1]}` : `${temp1[cnt + n - 1]}/${temp2[cnt + n - 1]}`)