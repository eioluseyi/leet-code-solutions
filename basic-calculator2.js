/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
//     BODM|SA ()of/*-+
    let solution;
    
    let spling = s.split("");
    
    var numVals = [];
    
    var numtemp = '';
    
        
    let numDivide = (a, b, index)=>{
        numVals[index - 1] = Math.floor(parseInt(a)/parseInt(b));
        numVals.splice(index, 2);
        console.log(numVals);
    }    
    let numMult = (a, b, index)=>{
        numVals[index - 1] = Math.floor(parseInt(a)*parseInt(b));
        numVals.splice(index, 2);
        console.log(numVals);
    }    
    let numSub = (a, b, index)=>{
        numVals[index - 1] = Math.floor(parseInt(a)-parseInt(b));
        numVals.splice(index, 2);
        console.log(numVals);
    }
    let numAdd = (a, b, index)=>{
        numVals[index - 1] = Math.floor(parseInt(a)+parseInt(b));
        numVals.splice(index, 2);
        console.log(numVals);
    }    
    
    for(let x = 0; x < spling.length; x++) {
        if (spling[x] === ' ') {
//             
        } else {
            if (isNaN(spling[x])) {
                switch (spling[x]) {
                    case '/':
                        numVals.push(numtemp);
                        numtemp = '';
                        numVals.push('/');
                        break;
                    case '*':
                        numVals.push(numtemp);
                        numtemp = '';
                        numVals.push('*');
                        break;
                    case '-':
                        numVals.push(numtemp);
                        numtemp = '';
                        numVals.push('-');
                        break;
                    case '+':
                        numVals.push(numtemp);
                        numtemp = '';
                        numVals.push('+');
                        break;
                    default:
                        break;
                }
            } else {
                numtemp = numtemp + spling[x];
            }
        }
    }
    numVals.push(numtemp);
    
//     Check for higher level operators and solve the unit expression    
//         Check for "/"
    while (numVals.length > 1) {
        for(let x = 0; x < numVals.length; x++) {
            if (numVals[x] === '*') {
                numMult(numVals[x-1], numVals[x+1], x);
                x = 0;
            } else if (numVals[x] === '/') {
                numDivide(numVals[x-1], numVals[x+1], x);
                x = 0;
            }
        }
        for(let x = 0; x < numVals.length; x++) {
            if (numVals[x] === '-') {
                numSub(numVals[x-1], numVals[x+1], x);
                x = 0;
            } else if (numVals[x] === '+') {
                numAdd(numVals[x-1], numVals[x+1], x);
                x = 0;
            }
        }
    }
        
        // console.log(numVals);
    solution = numVals[0];
    return solution;
};
