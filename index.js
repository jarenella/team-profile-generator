const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");

inquirer.prompt([
    {
        type: "list",
        name: "menu",
        message: "Would you like to add a user?",
        choices: ['Yes, add user', 'No, end application']
    }
])
.then(val => {
    if (val == 'Yes, add user') {
        //ask other questions
    }
    if (val == 'No, end application') {
        // end app
    }
})






