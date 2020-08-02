const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:'
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a short description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please list installation instructions for your project:'
    },
    {   type: 'checkbox',
        name: 'stack',
        message: 'What languages did you use for the project?',
        choices: ['HTML', ' CSS', ' JavaScript', ' Node.js']

    },
    {
        type: 'input',
        name: 'credit',
        message: 'List any collaborators you had on your project. If no collaborators enter "none":'
    }


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
    inquirer
  .prompt(questions)
  .then(answers => {
      console.log(answers);
      const newMarkdown = generateMarkdown(answers);
      console.log(newMarkdown);
      writeToFile('readme.md', newMarkdown);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

}

// function call to initialize program
init();
