// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What is your motivation for the project?'
        },
        {
            type: 'input',
            name: 'purpose',
            message: 'Why did you build this project?'
        },
        {
            type: 'input',
            name: 'solve',
            message: 'What problem does this project solve?'
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions for usage."
        },
        {
            type: 'input',
            name: 'your-name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators.'
        },
        {
            type: 'list',
            name: 'liscense',
            message: 'Choose a liscense for your project',
            choices: ['none', 'ISC', 'MIT']
        },
        {
            type: 'input',
            name: 'features',
            message: 'Add features of your project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Add test insctructions.'
        },
        {
            type: 'input',
            name: 'GitHub-username',
            message: 'Enter your GitHub username.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email'
        }

];

function getLicenseBadge(license) {
    switch (license) {
        case 'ISC':
            return 'https://img.shields.io/badge/license-ISC-blue';
        case 'MIT':
            return 'https://img.shields.io/badge/license-MIT-blue';
        case 'none':
            return '';
        default:
            return '';
    }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const badgeUrl = getLicenseBadge(data.license);
    const badgeMarkdown = badgeUrl ? `![License](${badgeUrl})` : '';
    const content = 
 `#<${data.title}>

 ${badgeMarkdown}

## Description
${data.motivation}

${data.purpose}

${data.solve}

${data.learn}

## Table of Contents
-[Installation](#installation)
-[Usage](#usage)
-[License](#license)
-[Features](#features)
-[Contributing](#contributing)
-[Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Features
${data.features}

## Contributing
### Author: ${data['your-name']}
### Other Contributors: ${data.credits}

##Questions
[${data['GitHub-username']}](https://github.com/${data['GitHub-username']})
For additional questions please contact ${data['your-name']} at ${data.email}
`;

fs.writeFile(fileName, content, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('README.md file created succesfully');
    }
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
