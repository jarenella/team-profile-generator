//importing dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require("./lib/employee.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const GenerateHTML = require("./lib/generatehtml");

//arrays that all new created instances of classes will be pushed on to
const engineers = [];
const interns = [];
module.exports = engineers;

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
        console.log("add user selected") //test console log (can be removed later)
        addTeamManager();
    }
    if (answer === 'No, end application') {
        // end app
        console.log("App ended. Goodbye. Run 'node index' to start again")
    }
})


//function to run if there is not manager (must be done before adding teammates)
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
        console.log(manager); //testing console log (can be removed later)
        addEmployees();
    })
}


function addEmployees() {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "What type of employee would you like to add?",
            choices: ["Engineer", "Intern", "No more employees to add, generate my document"]
        }
    ])
    .then(val => {
        if (val.employeeType === "Engineer") {
            addNewEngineer();
        }
        else if (val.employeeType === "Intern") {
            addNewIntern();
        }
        else {
            //generates the HTML document

            console.log(interns); //test console log
        }
    })
}


//function to make a new engineer which is run if the user selects to add one
function addNewEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter engineer name: ",
        },
        {
            type: "input",
            name: "ID",
            message: "Enter engineer's ID: ",
        },
        {
            type: "input",
            name: "email",
            message: "Enter engineer's email: ",
        },
        {
            type: "input",
            name: "gitHub",
            message: "Enter engineer's GitHub username: "
        }
    ])
    .then(val => {
        const engineerName = val.name;
        const engineerID = val.ID;
        const engineerEmail = val.email;
        const engineerGitHub = val.gitHub;
        const engineer = new Engineer(engineerName, engineerID, engineerEmail, engineerGitHub);
        //console.log(engineer); //test console log
        engineers.push(engineer); //adds this new engineer to the array of all engineers
        console.log(engineers); //test console log
        addEmployees(); //after an engineer is added, the user is asked again if they'd like to add any more new employees
    })
}


//function to make a new intern which is run if the user selects to add one
function addNewIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter intern name: ",
        },
        {
            type: "input",
            name: "ID",
            message: "Enter intern's ID: ",
        },
        {
            type: "input",
            name: "email",
            message: "Enter engineer's email: ",
        },
        {
            type: "input",
            name: "school",
            message: "Enter interns's school: "
        }
    ])
    .then(val => {
        const internName = val.name;
        const internID = val.ID;
        const internEmail = val.email;
        const internSchool = val.school;
        const intern = new Intern(internName, internID, internEmail, internSchool);
        console.log(intern); //test console log
        interns.push(intern); //adds this new intern to the array of all interns
        addEmployees(); //after an engineer is added, the user is asked again if they'd like to add any more new employees
    })
}




//console.log(Manager.barry); console logs manager with name of barry