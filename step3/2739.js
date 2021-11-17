const data = require('fs').readFileSync('../example.txt').toString().trim();

const num = +data

for(let i=1; i<10; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
}
