const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = "Engineer";
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
    getGitHub() {
        return this.gitHub
    }
}

// how to make a new engineer vvv
// const engie = new Engineer("namesie", 4, "email@thingy", "gittyhubbusername");

module.exports = Engineer;