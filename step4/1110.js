const input = Number(require('fs').readFileSync('../example.txt').toString());

let num = input;
let sum;
let cnt = 0;
let isSame = false;

while (!isSame) {
    cnt++;

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10; 

    if (input === num) {
	isSame = true
    } 
}

console.log(cnt);