let [n, ...arr] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');


for(let i=0; i<+n; i++) {
    let cnt = 0;
    let sum = 0;
    
    for(let j=0; j<arr[i].length; j++) {
        if(arr[i][j] === "O") {
            cnt++;
            sum += cnt;
        } else {
            cnt = 0;
        }
    }
    console.log(sum)
}
