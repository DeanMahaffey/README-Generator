// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatorMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Username',
        //validate
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'Title',
        //validate
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
        //validate
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Please give a description of your project.',
        name: 'Description', 
        //validate
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: 'What necessary dependencies must be installed to run this app?',
        name: 'Installation',
        //validate
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: 'What is this app used for?',
        name: 'Usage',
        //validate
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        //list of license
        type: 'list',
        message: 'What license was used for this README?',
        name: 'License',
        choices:['The MIT License', 'The GPL License', 'Apache License', 'Open'],
        //validate
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: 'Please add any contributors',
        name: 'Contributor',
        //validate
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    },
    {
        type: 'input',
        message: 'What instructions are to be followed to use this app?',
        name: 'Instructions',
        //validate
        validate: (value)=>{ if(value){return true} else {return 'I need a value to continue'}},
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./utils/'+fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log ('Successfully wrote: ' + fileName);
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('GeneratedREADME.md', generatorMarkdown(data));
    })
}

// Function call to initialize app
init();
