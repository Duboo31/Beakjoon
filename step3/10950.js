const [n, ...arr] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

for(let i=0; i<+n; i++) {
    console.log(Number(arr[i].substr(0, 1)) + Number(arr[i].substr(1, 2)))
}
