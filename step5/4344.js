let [n, ...arr] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

n = +n;
arr = arr.map(el => el.split(' ').map(Number));

const getAverage = (arr) => {
    let n = arr[0];
    return Math.floor(arr.slice(1, arr.length).reduce((acc, cur) => acc + cur) / n)
}

for(let i=0; i<+n; i++) {
    let avrage =  getAverage(arr[i]);
    let cnt = 0;
    for(let j=1; j<arr[i].length; j++) {
        if(arr[i][j] > avrage) {
            cnt++;
        }
    }
    console.log(`${( (cnt / arr[i][0] ) * 100).toFixed(3)}%`);
}