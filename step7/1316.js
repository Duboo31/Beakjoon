const [n, ...arr] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

let cnt = 0;

for(let i=0; i<+n; i++) {
    let check = [];
    let isGroudWord = true;

    for(let j=0; j<arr[i].length; j++) {
        if(!check.includes(arr[i][j])) {
            check.push(arr[i][j]);
        } else {
            if(check.indexOf(arr[i][j]) !== check.length - 1) {
                isGroudWord = false;
                break;
            }
        }
    }

    if(isGroudWord) {
        cnt++;
    }
}

console.log(cnt)