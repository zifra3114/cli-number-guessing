#! /usr/bin/env node
import inquirer from "inquirer";
// computer generate a random number
// user input for guessing number
// compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-5:",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulation ! You guess right number.");
}
else {
    console.log("You guess wrong number");
}
