let [n, ...arr] = require('fs').readFileSync('../example.txt').toString().split('\n');

arr = arr.map(el => el.split(' ').map(Number).reduce((acc, cur) => (cur - acc)));