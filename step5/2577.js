let arr = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

arr = arr.map(Number).reduce((acc, cur) => acc * cur);

let len = arr.toString().length;

let cnt0 = 0;
let cnt1 = 0;
let cnt2 = 0;
let cnt3 = 0;
let cnt4 = 0;
let cnt5 = 0;
let cnt6 = 0;
let cnt7 = 0;
let cnt8 = 0;
let cnt9 = 0;

for(let i=0; i<len; i++) {
    if(arr.toString()[i] === "0") {
        cnt0++;
    } else if(arr.toString()[i] === "1") {
        cnt1++;
    } else if(arr.toString()[i] === "2") {
        cnt2++;
    } else if(arr.toString()[i] === "3") {
        cnt3++;
    } else if(arr.toString()[i] === "4") {
        cnt4++;
    } else if(arr.toString()[i] === "5") {
        cnt5++;
    } else if(arr.toString()[i] === "6") {
        cnt6++;
    } else if(arr.toString()[i] === "7") {
        cnt7++;
    } else if(arr.toString()[i] === "8") {
        cnt8++;
    } else if(arr.toString()[i] === "9") {
        cnt9++;
    }
}

console.log(`${cnt0}\n${cnt1}\n${cnt2}\n${cnt3}\n${cnt4}\n${cnt5}\n${cnt6}\n${cnt7}\n${cnt8}\n${cnt9}`)
