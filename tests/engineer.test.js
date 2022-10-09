const Engineer = require("../lib/engineer.js");

const engineer1 = new Engineer("DrEngineer", "ID457", "DrEng@Email.com", "GitDrEng");

test("Properly generate a new engineer class instance", () => {
    expect(engineer1.name).toEqual("DrEngineer");
    expect(engineer1.id).toEqual("ID457");
    expect(engineer1.email).toEqual("DrEng@Email.com");
    expect(engineer1.gitHub).toEqual("GitDrEng");
    expect(engineer1.role).toEqual("Engineer");
})