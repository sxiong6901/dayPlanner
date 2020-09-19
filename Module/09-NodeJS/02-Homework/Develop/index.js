const inquirer = require("inquirer");
const axios = require("axios");
const fs = require('fs');
const path = require('path');
async function main(){
    console.log(`starting`);
    const userResponse = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub user name?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your Project Title?",
            name: "projectTitle",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Please enter Github username (Note: You do not have to add '@'.");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "Provide detail description",
            name: "projectDescription",
            validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("Enter A Detail Description");
                }
                return true;
            }
        },
        {
            type: "input",
            message: "Enter Table of Contents",
            name: "tableOfContent"
        },
        {
            type: "input",
            message: "Provide a step-by-step description of how to get the development environment running.",
            name: "installationProcess"
        },
        {
            type: "input",
            message: "Provide instructions for use.",
            name: "instruction"
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
            name: "contributorsGitUserName"
        },
        {
            type: "input",
            message: "Provide examples on how to run tests.",
            name: "tests"
        }
        ]);
        console.log(`starting`);
        console.log(userResponse);
        const gitUsername = userResponse.username;
        const projectTittle = userResponse.projectTittle;
        const projectDescription = userResponse.projectDescription;
        const installationProcess = userResponse.installationProcess;
        const instruction = userResponse.instruction;
        const licenseName = userResponse.licenseName;
        const licenseUrl = userResponse.licenseUrl;
        const contributorUserNames = userResponse.contributorsGitUserName;
        const tests = userResponse.tests;
        const tableOfContent = userResponse.tableOfContent
            // fetching data from git
            // user
        const gitResponse = await axios.get(`https://api.github.com/users/${gitUsername}`);
        const gitData = gitResponse.data;
        const gitName = gitData.login;
        const gitEmail = gitData.email;
        const gitUrl = gitData.html_url;
        const gitProfileImage = gitData.avatar_url;

        //Table of Content
        const TableOfContent = tableOfContent.split(",");
        console.log(tableOfContent);
            // contributor
        const contributorUserNamesArray = contributorUserNames.split(",");
        console.log(contributorUserNamesArray);
        // const  = listOfContributorsUserNames.
        // contributorsGitUserName
        var resultContributor;
        for (i=0; i<contributorUserNamesArray.length; i++){
            var contributorsGitUserName = contributorUserNamesArray[i]
            const gitResponse2 = await axios.get(`https://api.github.com/users/${contributorsGitUserName}`);
            var gitContribuProfileImage = gitResponse2.data.avatar_url;
            var gitContribuUrl = gitResponse2.data.html_url;
            var gitContribuEmail = gitResponse2.data.email;
            var resultContributor = resultContributor + (`
            \n <img src="${gitContribuProfileImage}" alt="drawing" width="150" display="inline"/> ${contributorsGitUserName}  GitHubLink: ${gitContribuUrl}`);
        }
        var result = (
`## ${projectTittle} 
${projectDescription}

${TableOfContent}
\n* Title (#Title)
\n* Description (#Description)
\n* Table of Contents (#tableOfContent)
\n* Installation (#Installation)
\n* Usage (#Usage)
\n* License (#License)
\n* Contributing (#Contributing)
\n* Tests (#Tests)
\n* Questions (#Questions)


## Installation

${installationProcess}

## Instructions
${instruction}
${tests}
\`\`\`

## License 
This project is licensed under the ${licenseName} - ${licenseUrl}

## Contributors
${resultContributor}

## Tests
${tests}

## Questions 
\n![ProfileImage](${gitProfileImage})
\n**${gitName}**
\nEmail: ${gitEmail}
\nGitHub: ${gitUrl}
`)

var writeResult = fs.writeFileSync(path.join(__dirname, '../GoodReadMeGenerator', 'readMe.md'), result )
console.log("file generated....")
    }
main();