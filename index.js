const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');




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
        message: 'Choose a license for your project',
        choices: ['Apache', 'Boost', 'BSD 3-Clause', 'BSD 2-Clause']
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file written successfully!');
        }
    });
}


function init() {
    inquirer.prompt(questions).then((data) => {
        const readmeContent = generateMarkdown(data);
        writeToFile('README.md', readmeContent);
    });
}

init();
