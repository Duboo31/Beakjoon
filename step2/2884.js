const data = require('fs').readFileSync('../example.txt').toString().trim().split(' ').map(Number);

let [a, b] = data;

b -= 45;

if(b < 0) {
    b += 60;
    a--;

    if(a === -1) {
        a = 23;
    }
}

console.log(a + ' ' + b);