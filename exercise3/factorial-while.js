function factorial(factorial) {
    let x = 2;
    let fact = 1;
    while (x <= factorial) {
        fact = fact * x;
        x++;
    }
    console.log(fact);
}

factorial(6);