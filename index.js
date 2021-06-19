// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {
    renderLicenseBadge, 
    renderLicenseLink, 
    renderLicenseSection, 
    generateMarkdown
    } = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
// NEED: Project title, and sections titled: description, table of contents, installation,
// usage, license, contributing, tests, and questions 
const questions = [
    { // Title
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else { 
                console.log('You must provide a project name.');
                return false;
            }
        }
    }, // Sections:
    { // Description
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else { 
                console.log('You must enter a description for your project.');
                return false;
            }
        }
    },
    { // Installation 
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
        validate: installInput => {
            if(installInput) {
                return true;
            } else { 
                console.log('You must enter installation instructions.');
                return false;
            }
        }
    },
    { // Usage
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use:',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else { 
                console.log('You must enter usage instructions.');
                return false;
            }
        }
    },
    { // Contributing
        type: 'input',
        name: 'contributing',
        message: 'Please list your collaborators, or if none enter your own name.',
        validate: collabInput => {
            if(collabInput) {
                return true;
            } else { 
                console.log('You must enter at least one contributor.');
                return false;
            }
        }
    },
    { // Tests
        type: 'input',
        name: 'tests',
        message: 'Please explain test instructions: ',
        validate: testInput => {
            if(testInput) {
                return true;
            } else { 
                console.log('You must enter some test instructions.');
                return false;
            }
        }
    },
    { // Questions - GitHub Username -> generate link to github profile
        type: 'input',
        name: 'usernameQuestion',
        message: 'Please enter your GitHub username: ',
        validate: usernameInput => {
            if(usernameInput) {
                return true;
            } else { 
                console.log('You must enter your username.');
                return false;
            }
        }
    },
    { // Questions - email address -> add instructions on how to reach 
        type: 'input',
        name: 'emailQuestion',
        message: 'Please enter your email: ',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else { 
                console.log('You must enter your email.');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/readme.md', data, err => {
            // if unsuccessful, reject Promise and send error to Promise's .catch() method
            if(err) {
                reject(err);
                return;
            }
            // if successful, resolve Promise and send data to .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(readmeData => {
            return generateMarkdown(readmeData);
        })
        .then(generateMarkdownResponse => {
            console.log(generateMarkdownResponse);
            let fileName = "./dist/readme.md";
            return writeToFile(fileName,generateMarkdownResponse)
        })
        .then(writeToFileResponse => {
            console.log(writeToFileResponse.message);
        })
        .catch(err => {
            console.log(err);
        });
};

// Function call to initialize app
init();
