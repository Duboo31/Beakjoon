const fs = require("fs");
// const inputDate = fs.readFileSync("/dev/stdin").toString().split(" ");
const inputDate = fs.readFileSync("example.txt").toString().split(" ");

const a = parseInt(inputDate[0]);
const b = parseInt(inputDate[1]);

console.log(a / b);