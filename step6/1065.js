let n = require('fs').readFileSync('../example.txt').toString();

let cnt = 0;


for(let i=1; i<=+n; i++) {
    if(i < 100) {
        cnt++;
    } else {
        i = String(i);
        let a = Number(i[0]) - Number(i[1]);
        let b = Number(i[1]) - Number(i[2]);

        if(a === b) {
            cnt++;
        }
    }
}

console.log(cnt)
