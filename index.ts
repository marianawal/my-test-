import inquirer from "inquirer"

const answer = await inquirer.prompt([
  { message: "enter firstnumber", type: "number", name: "firstnumber" },
  { message: "enter secondnumber", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

// conditional statements
if (answer.operator === "addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operators === "subtraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if (answer.operators === "multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
} else if (answer.operators === "division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select valid operator");
}

