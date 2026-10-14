const prompt = require("prompt-sync")();

let secret = Math.floor(Math.random() * 100) + 1;
let essai = 0;
let nombre = 0;

while (nombre !== secret) {
    nombre = Number(prompt("Choose a number between 1 and 100: "));
    essai++;

    if (nombre < secret) {
        console.log("The number is bigger");
    } else if (nombre > secret) {
        console.log("The number is smaller");
    } else {
        console.log("The number is correct");
        console.log("Number of attempts:", essai);
    }
}