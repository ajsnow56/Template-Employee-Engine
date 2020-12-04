const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./questions");
const { writeFile } = require("fs/promises");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./htmlRenderer");
// const Employee = require("./lib/Employee.js");
const employees = [];
// We make collectInputs a async function so we can use await
const collectInputs = async () => {
  const { again, ...answers } = await inquirer.prompt(questions);
  // this is the employee indentifier PromiseRejectionEvent. these If statements read our answers to see which employee we chose and collects them to push to our employees array each step is repeated for the 3 employee types
  if (answers.employeeType === "Manager") {
    let emp = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employees.push(emp);
  }
  if (answers.employeeType === "Engineer") {
    let emp = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    employees.push(emp);
  }
  if (answers.employeeType === "Intern") {
    let emp = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    employees.push(emp);
  }
// This return statement reads our again confirm so we can add more employees or not
  return again ? collectInputs() : answers;
};
// we await collectInputs here to wait for our prompts to be pushed so we can write the html file
const init = async () => {
  await collectInputs();
// we set our render(employees) function to a variable to use for the correct writefile syntax
  let template = render(employees);
  fs.writeFile(outputPath, template, (err) =>
  // this logs our error if we have one or logs success
    err ? console.log(err) : console.log("Success!")
  );
};
// finally we call for our init function here
init();
