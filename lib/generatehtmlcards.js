const fs = require('fs');
const Employee = require("./employee")
const Engineer = require("./engineer.js");
const Intern = require("./intern.js");
const Manager = require("./manager.js");


function generateHTMLcards(employees) {
    //variable array to add each iteration of text to
    const htmlText = []
    //loops through the array fed into the function and creates HTML for each person in it
    for (i=0; i < employees.length; i++) {
        //based on the type of employee inserted (engineer or intern), we set these variables for what should be printed into the HTML template
        let cardClass = "";
        let option4 = "";  //option 4 is for either "school" (intern), "github" (engineer), or "office number" (manager)
        let roleIcon = "";
        if (employees[i].role === "Engineer") {
            cardClass = "engineer-card";
            option4 = `GitHub: ${employees[i].gitHub}`
            roleIcon = "Engineer 👓"
        }
        else if (employees[i].role === "Intern") {
            cardClass = "intern-card"
            option4 = `School: ${employees[i].school}`
            roleIcon = "Intern 🎓"
        }
        else if (employees[i].role === "Manager") {
            cardClass = "manager-card"
            option4 = `Office Number: ${employees[i].officeNumber}`
            roleIcon = "Manager ☕"
        }
        const currentText = `<div class="${cardClass} card m-3" style="width: 18rem;">
        <div class="card-header">
            <p class="name">${employees[i].name}</p>
            <p class="role">Role: ${roleIcon}</p>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${employees[i].id}</p>
            <p class="card-text">Email: <a href="mailto: ${employees[i].email}">${employees[i].email}</a></p>
            <p class="card-text">${option4}</p>
        </div>
    </div>`;
    //push the current iterations generated text onto the array
    htmlText.push(currentText);
    }
    //returns the array listing all of the generated text for each employee, but first makes it a string
    return htmlText.join('\n');
}


module.exports = generateHTMLcards;


