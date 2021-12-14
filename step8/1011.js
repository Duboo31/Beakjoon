let [n, ...arr] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

for (let i = 0; i < +n; i++) {
  let [a, b] = arr[i].split(' ');
  let len = +b - +a;

  let sqrtN = Math.floor(Math.sqrt(len));

  let cnt = (sqrtN * 2) - 1;

  let remainLen = len - sqrtN * sqrtN;

  if (remainLen !== 0) {
    remainLen <= sqrtN ? cnt += 1 : cnt += 2; 
  }
  console.log(cnt);
}