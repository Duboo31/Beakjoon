let [a, b, c] = require('fs').readFileSync('../example.txt').toString().trim().split(' ');

const fixedCost = Number(a);
const variableCost = Number(b);
const salesCost = Number(c);

const plusCost = salesCost - variableCost;
const BEP = Math.floor(fixedCost / plusCost);

if(plusCost > 0) {
    console.log(BEP + 1);
} else {
    console.log(-1);
}