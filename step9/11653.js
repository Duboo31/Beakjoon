let num = require('fs').readFileSync('../example.txt').toString();

let dividNum = 2;

while(num !== 1) {

  if(num % dividNum === 0) {
    console.log(dividNum);
    num /= dividNum;
  } else {
    dividNum++;
  }
}

