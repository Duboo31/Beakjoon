const fs = require("fs");
const inputDate = fs.readFileSync("/dev/stdin").toString().split(" ").map(val => +val);

const [a, b] = inputDate;
console.log(a + b);