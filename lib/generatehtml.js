const fs = require('fs');
const Employee = require("./employee")
const Engineer = require("./engineer.js");
const Intern = require("./intern.js");
const Manager = require("./manager.js");


function generateHTML(employees) {
    //variable array to add each iteration of text to
    const htmlText = []
    //loops through the array fed into the function and creates HTML for each person in it
    for (i=0; i < employees.length; i++) {
        const currentText = `<div class="engingeer-card card m-3" style="width: 18rem;">
        <div class="card-header">
            <p class="name">${employees[i].name}</p>
            <p class="role">Role: 👓</p>
        </div>
        <div class="card-body">
            <p class="card-text">ID: ${employees[i].id}</p>
            <p class="card-text">Email: ${employees[i].email}</p>
            <p class="card-text">GitHub: ${employees[i].gitHub}</p>
        </div>
    </div>`;
    //push the current iterations generated text onto the array
    htmlText.push(currentText);
    }
    //returns the array listing all of the generated text for each employee, but first makes it a string
    return htmlText.toString();
}


module.exports = generateHTML;


