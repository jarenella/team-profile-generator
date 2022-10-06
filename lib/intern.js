const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Intern";
        this.school = school;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return this.role
    }
    getSchool() {
        return this.school
    }
}

module.exports = Intern;