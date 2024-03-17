//                     ========> simple Calculator <=========


import inquirer from "inquirer";
const answer = await inquirer.prompt([
  {
    message: "Enter  first Number :",
    type: "number",
    name: "firstNumber",
  },
  {
    message: "Enter second Number :",
    type: "number",
    name: "secondNumber",
  },
  {
    message: "select one of the operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "subtraction", "Multiplication", "Division"],
  },
]);
// conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
    console.log( answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "Division"){
    console.log( answer.firstNumber / answer.secondNumber );
} else {
    console.log(" Invalid operation")
}
