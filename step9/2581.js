let [a, b] = require('fs').readFileSync('../example.txt').toString().split('\n');

const isPrime = (n) => {
    if(n < 2) {
        return false;
    }
    for(let i=2; i<n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

let primeArr = [];
let sumPrimeNum = 0;

for(let i=+a; i<=+b; i++) {
    if(isPrime(i)) {
        sumPrimeNum += i;
        primeArr.push(i);
    } 
}

if(primeArr.length === 0) {
    console.log(-1);
} else {
    console.log(sumPrimeNum);
    console.log(primeArr[0]);
}