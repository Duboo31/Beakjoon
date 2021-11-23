let [n, ...arr] = require('fs').readFileSync('../example.txt').toString().trim().split('\n');

for(let i=0; i<+n; i++) {
    let HWN = arr[i].split(' ').map(Number);
    
    let floor = HWN[2] % HWN[0] === 0 ? HWN[0] : HWN[2] % HWN[0]; 
    let roomNum = Math.ceil(HWN[2] / HWN[0]) < 10 ? '0' + Math.ceil(HWN[2] / HWN[0]) : Math.ceil(HWN[2] / HWN[0]);
    console.log(`${floor}${roomNum}`);
}
