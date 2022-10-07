const fs = require('fs');
const Employee = require("./employee")
const Engineer = require("./engineer.js");
const Intern = require("./intern.js");
const Manager = require("./manager.js");

const engineers = require("../index");

function GenerateHTML() {
    
}


engineers.forEach(element => {
    return `
<div class="engingeer-card card m-3" style="width: 18rem;">
    <div class="card-header">
        <p class="name">Name</p>
        <p class="role">Role: 👓</p>
    </div>
    <div class="card-body">
        <p class="card-text">ID:</p>
        <p class="card-text">Email:</p>
        <p class="card-text">GitHub:</p>
    </div>
</div>`
})