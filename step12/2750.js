let [n, ...arr] = require("fs")
  .readFileSync("../example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

arr = arr.sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}
