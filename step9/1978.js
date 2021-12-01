let [n, ...arr] = require('fs').readFileSync('../example.txt').toString().split('\n');

arr = arr[0].split(' ').map(Number);

let cnt = 0;

const isPrime = (n) => {
    if(n < 2) {
        return;
    }

    for(let i=2; i<n; i++) {
        if(n % i === 0) {
            return;
        }
    }
    cnt++;
}

for(let i=0; i<+n; i++) {
    isPrime(arr[i]);
}

console.log(cnt);