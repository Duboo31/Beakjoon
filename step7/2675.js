let [n, ...arr] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

arr = arr.map(el => el.split(' '));

let answer = '';

for(let i=0; i<+n; i++) {
    let newWord = '';

    for(let j=0; j<arr[i][1].length; j++) {
        newWord += arr[i][1][j].repeat(arr[i][0]);
    }
    answer += newWord + '\n';
}

console.log(answer);