const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give installation instructions.'
    },
    {   type: 'input',
        name: 'usage',
        message: 'What does user need to know about using the project'

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
