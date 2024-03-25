#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        type: "number",
        name: "No1",
        message: "Write your number one",
    },
    {
        type: "number",
        name: "No2",
        message: "Write your number two",
    },
    {
        type: "list",
        name: "operator",
        message: "Select Your Operators",
        choices: ["Addition", "Multiplication", "Subtraction", "Division"]
    },
]);
const { No1, No2, operator } = answer;
if (No1 && No2 && operator) {
    let result = 0;
    if (operator === "Addition") {
        result = No1 + No2;
    }
    else if (operator === "Subtraction") {
        result = No1 - No2;
    }
    else if (operator === "Multiplication") {
        result = No1 * No2;
    }
    else if (operator === "Division") {
        result = No1 / No2;
    }
    console.log(`Your result is ${result}`);
}
