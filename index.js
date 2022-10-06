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
    const answer = val.menu;
    if (answer === 'Yes, add user') {
        //ask other questions
        console.log("add user selected")
        addTeamManager();
    }
    if (answer === 'No, end application') {
        // end app
        console.log("end app selected")
    }
})


function addTeamManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Before adding other members, you must add a manger. Enter manger name: "
        },
        {
            type: "input",
            name: "ID",
            message: "Please enter manager's employee ID: "
        },
        {
            type: "input",
            name: "email",
            message: "Manager's email adress: "
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Manager's office number: "
        }
    ])
    .then(val => {
        const managerName = val.name;
        const managerID = val.ID;
        const managerEmail = val.email;
        const managerOfficeNumber = val.officeNumber;
        const manager = new Manager(managerName, managerID, managerEmail, managerOfficeNumber);
        console.log(manager);
    })
}




