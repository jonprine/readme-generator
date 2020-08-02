// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.project}

## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

## Description
${data.description}

## Table of Contents
* [Installation](#installation:)
* [Usage](#usage:)
* [Credits](#credits:)
* [Questions](#questions:)


## Installation
${data.installation}

## Usage
${data.stack}

## Additional Credits
${data.credit}

## Questions
Developed by: [${data.name}](https://github.com/${data.name})<br />
Should you have any further questions you can contant me here: ${data.email}
`;
}

module.exports = generateMarkdown;
