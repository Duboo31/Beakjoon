const d = (n) => {
    let newN = n;
    
    for(let i=0; i<String(n).length; i++) {
        newN += Number(String(n)[i]);
    }
    return newN;
}

let selfNumArr = [];

for(let i=0; i<=10000; i++) {
    selfNumArr[i] = true;
}

for(let i=0; i<=10000; i++) {
    selfNumArr[d(i)] = false;
}


for(let i=0; i<=10000; i++) {
    if(selfNumArr[i]) {
        console.log(i);
    }
}