let data = require('fs').readFileSync('../example.txt').toString().trim().split(' ');
let serchWord = data.map(el => el !== '');

let cnt = 0;

for(let i=0; i<serchWord.length; i++) {
    if(serchWord[i]) {
        cnt++;
    }
}

console.log(cnt);