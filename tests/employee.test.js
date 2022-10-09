const Employee = require("../lib/employee");

//creates a new employee variable
const employee1 = new Employee("NameMcnameson", "ID415679", "NameMc@Email.com");

//tests whether the names, id, etc. are properly defined
test("Properly create new employee class", () => {
    expect(employee1.name).toEqual("NameMcnameson")
    expect(employee1.id).toEqual("ID415679")
    expect(employee1.email).toEqual("NameMc@Email.com")
    expect(employee1.role).toEqual("Employee")
})