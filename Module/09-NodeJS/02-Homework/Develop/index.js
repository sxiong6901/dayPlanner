const inquirer = require("inquirer");
const util = require("util");
const fs = require('fs');
const api = require('./utils/api.js')
const writeReadme = util.promisify(fs.writeFile);
async function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub user name?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your Project Title?"
        },
        {
            type: "input",
            message: "Provide detail description",
            name: "desc"
        },
        {
            type: "input",
            message: "Provide a step-by-step description of how to get the development environment running.",
            name: "install",
            default: "User is prompt to answer questions. once the questionnaire is completed, a readme file will be generated"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "usage",
            default: "The application itself can be invoked with node index.js."
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Unlicense'],
            name: "licenseName",
        },
        {
            type: "input",
            message: "Provide License url. ",
            name: "licenseUrl"
        },
        {
            type: "input",
            message: "Please enter the github user names of all contributors if applicable (Note: Separate name with commas and no spaces.)",
            name: "contributors"
        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "test"
        },
    ]);
    }
function generateMd(answer) {
    return `
  # Title : ${answer.title}
  ## Description:
  ${answer.desc}
  ## Table of Contents
  * [Title](#Title)
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#license)
  * [Contributors](#Contributors)
  * [Tests](#Test)
  * [Questions](#Questions)
  
  ## Installation
  ${answer.install}

  ## Usage
  ${answer.usage}

  ## License
  ${answer.licenseName} - URL ${answer.licenseUrl}
  
  ## Contributors
  https://github.com/+ ${answer.contributors}
  
  ## Test
  ${answer.test}
  
  ## Questions
  If you have any questions, contact ${answer.username} on GitHub.`
  }
// fs.writeFile('README.md', generateMarkdown, function (err) {
//     if (err) throw err;
//     console.log('File is created successfully.');
//   });
promptUser()
.then(function(answer) {
    const md = generateMd(answer);
    return writeReadme("README.md", md);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });