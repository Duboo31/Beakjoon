let word = require('fs').readFileSync('../example.txt').toString().trim().toUpperCase();

const alphaObj = {};

for(const alpha of word) {
    alphaObj[alpha] ? alphaObj[alpha]++ : alphaObj[alpha] = 1; 
}

const maxNum = Math.max(...Object.values(alphaObj));

let cnt = 0;
let maxAlpha = '';

for(let alpha in alphaObj) {
    if(maxNum === alphaObj[alpha]) {
        cnt++;
        maxAlpha = alpha;
    }
}

cnt > 1 ? console.log('?') : console.log(maxAlpha);