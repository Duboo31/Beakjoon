const data = require('fs').readFileSync("../example.txt").toString();
const num = Number(data);

if(num % 4 === 0 && num % 100 !== 0) {
    console.log(1);
} else if(num % 100 === 0 && num % 400 !== 0) {
    console.log(0);
} else if(num % 400 === 0) {
    console.log(1);
} else {
    console.log(0);
}