function factorial(facto) {
    let x = 2;
    let fact = 1;
    
    while (x <= facto) {
        if (x <=1) {
            break;
        }
        fact = fact * x;
        x++;

    }
    console.log(fact);
}

factorial(6);