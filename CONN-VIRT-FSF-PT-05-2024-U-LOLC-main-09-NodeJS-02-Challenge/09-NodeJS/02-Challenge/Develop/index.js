// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
inquirer
    .prompt([
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
        }
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = 
 `# ${data.title}

## Description
${data.motivation}

### Purpose
${data.purpose}

### Problem Solved
${data.solve}

### What I Learned
${data.learn}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
This project is licensed under the ${data.license} license.

## Features
${data.features}

## Author
${data['your-name']}`;

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
        createAndWriteREADME('README.md', answers);
    });
}

// Function call to initialize app
init();
