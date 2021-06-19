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
    } 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(readmeData => {
            console.log(readmeData);
            return generateMarkdown(readmeData);
        })
        .then(generateMarkdownResponse => {
            console.log(generateMarkdownResponse);
        });
    // send answers to generateMarkdown
    // conditionally generate page 
    // receive page object back
    // write to file 
    // copy file? to new folder? 
    // catch an error if chaining promisess
};

// Function call to initialize app
init();
