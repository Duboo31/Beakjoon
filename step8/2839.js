let n = require('fs').readFileSync('../example.txt').toString();

let sugar = +n;
let bag = 0;

while(true) {
    if(sugar % 5 === 0) {
        console.log(sugar / 5 + bag);
        break;
    } else if(sugar <= 0) {
        console.log(-1);
        break;
    } else {
        sugar -= 3;
        bag++;
    }
}