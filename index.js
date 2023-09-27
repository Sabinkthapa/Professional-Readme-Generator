const inquirer = require('inquirer'); //imported the inquirer module in a nodejs application
const fs = require('fs'); //imported the file system module in a nodejs application
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');

//series of questions for users to submit
const questions = [
    {
        type:'input',
        name:'ProjectName',
        message: 'What is the name of the project?',
    },
    {
        type:'input',
        name:'Description',
        message: 'what is thes brief description of your project?',
    },
    {
        type:'input',
        name:'Installation',
        message: 'What is the Installation procedure for the project?',
    },
    {
        type:'input',
        name:'Usage',
        message: 'What is the usage information for the project?',
    },

    {
        type:'input',
        name:'Contributor',
        message: 'Who is the contributor of this project',
    },

    {
        type:'input',
        name:'GithubName',
        message: 'What is your github-profile name?',
    },
    {
        type:'input',
        name:'EmailAddress',
        message: 'What is your email address?',
    },

    {
        type:'list',
        name:'License',
        message: 'please choose a license for your project?',
        choices: ['Apache', 'Boost', 'BSD 3-Clause', 'BSD 2-Clause']
    },
];

// function writetofile use to write date to the file using fs.writefile method which takes two parameters
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file written successfully!');
        }
    });
}
// uses inquirer library to prompt user the questions and write the content to file readme.md 
function init() {
    inquirer.prompt(questions).then((data) => {
        const readmeContent = generateMarkdown(data);
        writeToFile('README.md', readmeContent);
    });
}

init();
