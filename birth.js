function yearOfBirth() {
    let readline = require('readline-sync');
    let birthDate = readline.question("What is your year of birth?: ");

    let currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate;

    if (age < 18) {
        console.log("Minor");
    } else if (age >= 18 && age < 36) {
        console.log("Youth")
    } else { console.log("Elder"); }
}

yearOfBirth();