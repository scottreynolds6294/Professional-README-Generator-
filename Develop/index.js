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
            name: 'license',
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


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
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
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize app
init();
