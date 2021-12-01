let [n, ...arr] = require('fs').readFileSync('../example.txt').toString().split('\n');

arr = arr.map(el => el.split(' ').map(Number).reduce((acc, cur) => (cur - acc)));

let cnt = 0;

for(let i=0; i<+n; i++) {
    while(true) {
        if(arr[i] <= Math.pow(cnt, 2) + 1) {
            break;
        } else {
            cnt += 1;
        }
    }
    if(arr[i] <= Math.pow(cnt, 2)) {
        console.log(cnt * 2 - 1);
    } else {
        console.log(cnt * 2);
    }
}