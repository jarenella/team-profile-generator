const Manager = require("../lib/manager.js");

const manager1 = new Manager("Manny McManager", "ID12352", "MannyTheFella@Email.com", 45);

test("Check to see if a new instance of the manager class is rendered properly", () => {
    expect(manager1.name).toEqual("Manny McManager");
    expect(manager1.id).toEqual("ID12352");
    expect(manager1.email).toEqual("MannyTheFella@Email.com");
    expect(manager1.officeNumber).toEqual(45);
    expect(manager1.role).toEqual("Manager");
})