function fizzBuzz(a, b) {

    if ((a.length + b.length) % 3 === 0) {
        console.log("Fizz");
    }
    if ((a.length + b.length) % 5 === 0) {
        console.log("Buzz");

    }
    if ((a.length + b.length) % 3 === 0 && (a.length + b.length) % 5 === 0) {
        console.log("fizzBuzz");

    }
}

fizzBuzz("roland", "sankara12");