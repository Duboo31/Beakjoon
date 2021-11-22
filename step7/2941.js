let str = require('fs').readFileSync('../example.txt').toString().trim().split('');
const len = str.length;
let cnt = 0;

for(let i=0; i<len; i++) {
    if(str[i] === 'c' && str[i + 1] === '=') {
        cnt++;
        i++;
    } else if(str[i] === 'c' && str[i + 1] === '-') {
        cnt++;
        i++;
    } else if(str[i] === 'd' && str[i + 1] === 'z' && str[i + 2] === '=') {
        cnt++;
        i = i + 2;
    } else if(str[i] === 'd' && str[i + 1] === '-') {
        cnt++;
        i++;
    } else if(str[i] === 'l' && str[i + 1] === 'j') {
        cnt++;
        i++;
    } else if(str[i] === 'n' && str[i + 1] === 'j') {
        cnt++;
        i++;
    } else if(str[i] === 's' && str[i + 1] === '=') {
        cnt++;
        i++;
    } else if(str[i] === 'z' && str[i + 1] === '=') {
        cnt++;
        i++;
    } else {
        cnt++
    }
}

console.log(cnt);

// č	c=
// ć	c-
// dž	dz=
// đ	d-
// lj	lj
// nj	nj
// š	s=
// ž	z=