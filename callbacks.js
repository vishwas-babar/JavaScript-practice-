const numArr = [23, -23 , 32, 2, -2, 1, 4, -6, 0, -87];

function removeNeg(numArr, callback) {
    let posNum = []; 
    numArr.forEach(element => {
        if (callback(element)) {
            posNum.push(element);
        }
    });

    return posNum;
}

console.log(removeNeg(numArr, (x) => x>=0));

