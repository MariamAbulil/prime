function prime(n) {
    let c = 0; // Initialize c outside the loop

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            c++;
        }
    }

    if (c === 2) {
        console.log('it is prime number');
    } else {
        console.log('it is not prime number');
    }
}

prime(0);