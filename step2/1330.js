const data = require('fs').readFileSync('../example.txt').toString().trim().split(' ').map(el => +el);

const [a, b] = data;

if(a < b) {
    console.log("<");
} else if(a > b) {
    console.log(">");
} else if(a === b) {
    console.log("==");
}