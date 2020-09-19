  
// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal modules
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
    
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter Github username (Note: You do not have to add '@'.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "What is your Project Title?",
            name: "title",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter A Project Title.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "Provide detail description",
            name: "desc",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Enter A Detail Description");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "Provide a step-by-step description of how to get the development environment running.",
            name: "install"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "usage"
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Unlicense'],
            name: "licenseName"
        },
        {
            type: "input",
            message: "provide License url ",
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
        }
        ]);

        function init() {
            inquirer.prompt(questions).then(answers => {
              console.log(answers);
              axios
                .get("https://api.github.com/users/" + answers.username)
                .then(response => {
                  console.log(response);
                  var imageURL = response.data.avatar_url;
                  answers.image = imageURL;
                  console.log(imageURL);
                  fs.writeFile("README.md", generateMarkdown(answers), function(err) {
                    if (err) {
                      throw err;
                    }
                  });
                });
            });
          }
          
          init();