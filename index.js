const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your Github username:(Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your Github username.');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:(Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address.');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project?(Required)',
        validate: projectInput => {
          if (projectInput) {
            return true;
          } else {
            console.log('Please enter the title of your project.');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a short description of your project:(Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please give a short description of your project.');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please list installation instructions for your project:(Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please give instructions for installation of your project.');
            return false;
          }
        }
    },
    {   type: 'checkbox',
        name: 'stack',
        message: 'What languages did you use for the project?',
        choices: [' HTML', ' CSS', ' JavaScript', ' JQuery', ' Bootstrap', ' Node.js']

    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of lisense should your project have?',
        choices: ['None', 'MIT', 'Mozilla', 'ISC', 'GNU', 'Eclipse', 'IBM', 'Open Database', 'Public Domain', 'Other'],
        default: 'None'
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
