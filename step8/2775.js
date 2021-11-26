let [n, ...arr] = require('fs').readFileSync('../example.txt').toString().trim().split('\n').map(Number);

for(let i=1; i<=n; i++) {
    const floor = arr.shift();
    const roomNum = arr.shift();

    const apart = Array.from(Array(floor + 1), () => new Array(roomNum + 1).fill(0));

    for(let i=1; i<=roomNum; i++) {
        apart[0][i] = i;
    }
    for(let i=1; i<=floor; i++) {
        for(let j=1; j<=roomNum; j++) {
            apart[i][j] = apart[i - 1][j] + apart[i][j - 1];
        }
    }
    console.log(apart[floor][roomNum]);
}

