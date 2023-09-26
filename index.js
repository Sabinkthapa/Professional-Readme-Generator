const inquirer = require('inquirer');
const fs = require('fs');

function generateReadmeContent(answers) {
return `
# ${answers.ProjectName}

## Description
${answers.Description}

## Features
${answers.Features}

## Installation
${answers.Installation}

## Links
${answers.Links}

## Credits
${answers.credits}

## License
${answers.License}
`
}

const questions = [
    {
        type:'input',
        name:'ProjectName',
        message: 'What is the name of the project?',
    },
    {
        type:'input',
        name:'Description',
        message: 'provide the brief description of your project?',
    },
    {
        type:'input',
        name:'Features',
        message: 'Includes brief features of your project?',
    },
    {
        type:'input',
        name:'Installation',
        message: 'Installation like package and dependencies installation:',
    },
    {
        type:'input',
        name:'Links',
        message: 'Your links to your project',
    },
    {
        type:'input',
        name:'Credits',
        message: 'provide the credits for your project',
    },
    {
        type:'input',
        name:'License',
        message: 'Details on Copyright',
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
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadmeContent(answers);
        writeToFile('README.md', readmeContent);
    });
}


init();
