// function to generate markdown for README
function generateMarkdown(data) {
  return `## Title
${data.project}

## Description
${data.description}

## Table of Contents
* [Installation](#installation:)
* [Usage](#usage:)
* [Credits](#credits:)

## Installation
${data.installation}

## Usage
${data.stack}

## Credits
${data.credit}
`;
}

module.exports = generateMarkdown;
