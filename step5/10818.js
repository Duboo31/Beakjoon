let [n, ...arr] = require('fs').readFileSync('../example.txt').toString().trim().split(/\s+/);

arr = arr.map(Number).sort((a, b) => a - b);

console.log(arr[0], arr[arr.length - 1]);