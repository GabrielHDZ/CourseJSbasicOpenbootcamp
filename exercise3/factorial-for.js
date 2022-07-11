
function factorial(valor) {
    let iter=1;
    for (let x = 2; x <= valor; x++){
        iter = iter * x;
    } 
    return iter;
}

function facts(n) {
    
}
console.log(`factorial ${factorial(6)}`);