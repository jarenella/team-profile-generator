const Intern = require("../lib/intern.js");

const intern1 = new Intern("Mr. Intern", "ID63578", "DaIntern@Email.com", "Intern University");

test("Generate a new instance of the intern class properly", () => {
    expect(intern1.name).toEqual("Mr. Intern");
    expect(intern1.id).toEqual("ID63578");
    expect(intern1.email).toEqual("DaIntern@Email.com");
    expect(intern1.school).toEqual("Intern University");
    expect(intern1.role).toEqual("Intern");
})