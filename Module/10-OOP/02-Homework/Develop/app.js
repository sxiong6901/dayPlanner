const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquire = require("inquirer");
const fs = require("fs");

var teamList = [];
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter manager name:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter manager's email:",
    },
    {
        type: "input",
        name: "officeNum",
        message: "Enter office number:",
    },
    {
        type: "list",
        name: "hasTeam",
        message: "Do you have any team members?",
        choices: ["Yes", "No"]
    }
]

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter employee name:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter their email:",
    },
    {
        type: "list",
        name: "role",
        message: "What is their role?",
        choices: ["engineer", "intern"]
    },
    {
        when: input => {
            return input.role == "engineer"
        },
        type: "input",
        name: "github",
        message: "Engineer, enter your github username:",
    },
    {
        when: input => {
            return input.role == "intern"
        },
        type: "input",
        name: "school",
        message: "Intern, enter your school name:",
    },
    {
        type: "list",
        name: "addAnother",
        message: "Add another team member?",
        choices: ["Yes", "No"]
    }
]

function buildTeamList() {
    inquire.prompt(employeeQuestions).then(employeeInfo => {
        if (employeeInfo.role == "engineer") {
            var newMember = new Engineer(employeeInfo.name, teamList.length + 1, employeeInfo.email, employeeInfo.github);
        } else {
            var newMember = new Intern(employeeInfo.name, teamList.length + 1, employeeInfo.email, employeeInfo.school);
        }
        teamList.push(newMember);
        if (employeeInfo.addAnother === "Yes") {
            console.log(" ");
            buildTeamList();
        } else {
            buildHtmlPage();
        }
    })
}

function buildHtmlPage() {
    let newFile = fs.readFileSync("./templates/main.html")
    fs.writeFileSync("./output/teamPage.html", newFile, function (err) {
        if (err) throw err;
    })

    console.log("Page generated!");

    for (member of teamList) {
        if (member.getRole() == "Manager") {
            buildHtmlCard("manager", member.getName(), member.getId(), member.getEmail(), "Office: " + member.getOfficeNumber());
        } else if (member.getRole() == "Engineer") {
            buildHtmlCard("engineer", member.getName(), member.getId(), member.getEmail(), "Github: " + member.getGithub());
        } else if (member.getRole() == "Intern") {
            buildHtmlCard("intern", member.getName(), member.getId(), member.getEmail(), "School: " + member.getSchool());
        }
    }
    fs.appendFileSync("./output/teamPage.html", "</div></main></body></html>", function (err) {
        if (err) throw err;
    });
    console.log("Page tags closed! Operation completed.")

}

function buildHtmlCard(memberType, name, id, email, propertyValue) {
    let data = fs.readFileSync(`./templates/${memberType}.html`, 'utf8')
    data = data.replace("nameHere", name);
    data = data.replace("idHere", `ID: ${id}`);
    data = data.replace("emailHere", `Email: <a href="mailto:${email}">${email}</a>`);
    data = data.replace("propertyHere", propertyValue);
    fs.appendFileSync("./output/teamPage.html", data, err => { if (err) throw err; })
    console.log("Card appended");
}

function init() {
    inquire.prompt(managerQuestions).then(managerInfo => {
        let teamManager = new Manager(managerInfo.name, 1, managerInfo.email, managerInfo.officeNum);
        teamList.push(teamManager);
        console.log(" ");
        if (managerInfo.hasTeam === "Yes") {
            buildTeamList();    
        } else {
            buildHtmlPage();
        }
    })
}

init();